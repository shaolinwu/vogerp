package org.shaolin.vogerp.accounting.internal;

import java.io.BufferedReader;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.workflow.be.NotificationImpl;
import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
import org.shaolin.uimaster.page.ajax.handlers.IAjaxCommand;
import org.shaolin.uimaster.page.ajax.json.JSONException;
import org.shaolin.uimaster.page.ajax.json.JSONObject;
import org.shaolin.vogerp.accounting.IAccountingService.TransactionType;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.be.PayOrderImpl;
import org.shaolin.vogerp.accounting.be.PayOrderTransactionLogImpl;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.accounting.dao.AccountingModel;
import org.shaolin.vogerp.accounting.util.PaymentUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * BE WebHook data handler.
 * Check from this example.
 * https://github.com/beecloud/beecloud-java/blob/master/demo/WebRoot/webhook_receiver_example/webhook_receiver.jsp
 * 
 * @author wushaol
 *
 */
public class BCWebHookHandler implements IAjaxCommand {

	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	private static final Logger logger = LoggerFactory.getLogger(BCWebHookHandler.class);
	
	/*
	 * Key	Type	Example
	 * sign	String	32 bits in lower case.
	 * timestamp	Long	1426817510111
	 * channel_type	String	‘WX’ or 'ALI’ or 'UN’ or 'KUAIQIAN’ or 'JD’ or 'BD’ or 'YEE’ or 'PAYPAL’ or 'BC’
	 * sub_channel_type	String	'WX_APP’ or 'WX_NATIVE’ or 'WX_JSAPI’ or 'WX_SCAN’ or 'ALI_APP’ or 'ALI_SCAN’ or 
	 * 			                'ALI_WEB’ or 'ALI_QRCODE’ or 'ALI_OFFLINE_QRCODE’ or 'ALI_WAP’ or 'UN_APP’ or 
	 *                          'UN_WEB’ or 'PAYPAL_SANDBOX’ or 'PAYPAL_LIVE’ or 'JD_WAP’ or 'JD_WEB’ or 'YEE_WAP’ or 
	 *                          'YEE_WEB’ or 'YEE_NOBANKCARD’ or 'KUAIQIAN_WAP’ or 'KUAIQIAN_WEB’ or 'BD_APP’ or 
	 *                          'BD_WEB’ or 'BD_WAP’ or 'BC_TRANSFER’ or 'ALI_TRANSFER’
	 * transaction_type	String	 'PAY’ or 'REFUND’ or 'TRANSFER'
	 * transaction_id	String	 '201506101035040000001’
	 * transaction_fee	Integer	  unit is fen
	 * trade_success	Bool	  true
	 * message_detail	Map(JSON) {orderId:xxxx}
	 * optional	        Map(JSON) {"agent_id": "Alice"}
	 * 
	 * (non-Javadoc)
	 * @see org.shaolin.uimaster.page.ajax.handlers.IAjaxCommand#execute(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
	 */
	@Override
	public Object execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		try {
			StringBuffer json = new StringBuffer();
		    String line = null;
	        request.setCharacterEncoding("utf-8");
	        BufferedReader reader = request.getReader();
	        while ((line = reader.readLine()) != null) {
	            json.append(line);
	        }
	        String jsonStr = json.toString();
	        if (jsonStr.trim().length() == 0) {
	        	return FAIL;
	        }
	        PayOrderTransactionLogImpl translog = new PayOrderTransactionLogImpl();
	        translog.setLog(jsonStr);
	        translog.setIsCorrect(true);
	        translog.setCreateDate(new Date());
	        
	        JSONObject jsonObj = null;
	        try {
	        	jsonObj = new JSONObject(jsonStr);
	        } catch (JSONException e) {
	        	logger.info("Error json: " + jsonStr +", exception message: "+ e.getMessage());
	        	return FAIL;
	        }
		    String sign = jsonObj.getString("sign");
		    String timestamp = jsonObj.getString("timestamp");
		    if (PaymentUtil.verifySign(sign, timestamp)) { 
		    	AccountingModel.INSTANCE.create(translog, true);
		    	String transactionId = jsonObj.getString("transaction_id");
		    	TransactionType transType = TransactionType.valueOf(jsonObj.getString("transaction_type").toUpperCase()); 
				if (logger.isInfoEnabled()) {
					logger.info("Received a callback payment: " + transactionId + ", transType: " + transType.name());
				}
				JSONObject orderDetail = jsonObj.getJSONObject("message_detail");
		    	PayOrderImpl payOrder = new PayOrderImpl();
		    	payOrder.setSerialNumber(transactionId);
		    	List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(payOrder, null, 0, 1);
		    	if (result != null && result.size() > 0) {
		    		payOrder = (PayOrderImpl)result.get(0);
		    		if (transType == TransactionType.PAY) {
		    			if (payOrder.getStatus() == PayOrderStatusType.PAYED) {
			    			// already notified.
			    			return SUCCESS;
		    			}
		    			int momey = jsonObj.getInt("transaction_fee");
		    			if (Double.valueOf(payOrder.getAmount() * 100).intValue() != momey) {
		    				translog.setIsCorrect(false);
		    				AccountingModel.INSTANCE.update(translog, true);
		    				logger.warn("Payment order amount does not the same! PayOrder amount: " + payOrder.getAmount() + ", Callback amount: " + momey);
		    				return SUCCESS;
		    			}
		    			if (jsonObj.getBoolean("trade_success")) {
		    				AccountingServiceImpl.updatePayState(transactionId, transType, payOrder);
		    				AccountingModel.INSTANCE.update(payOrder, true);
		    			} else {
		    				//notify user that the trade is not successful.
		    				ICoordinatorService coorService = AppContext.get().getService(ICoordinatorService.class);
		    				NotificationImpl message = new NotificationImpl();
		    				message.setPartyId(payOrder.getUserId());
		    				//message.setOrgId(payOrder.getOrderId());
		    				message.setSubject("\u60A8\u6709\u652F\u4ED8\u64CD\u4F5C\u5F02\u5E38\u8BA2\u5355\uFF01");
		    				message.setDescription(orderDetail.toString());
		    				message.setCreateDate(new Date());
		    				coorService.addNotification(message, false);
		    			}
		    		} else if(transType == TransactionType.REFUND) {
		    			//TODO:
		    		} else if(transType == TransactionType.TRANSFER) {
		    			//TODO:
		    		}
		    	} else {
		    		logger.warn("Payment order does not exist! id: " + transactionId);
		    		// send notification to admin!
		    		ICoordinatorService coorService = AppContext.get().getService(ICoordinatorService.class);
		    		NotificationImpl message = new NotificationImpl();
		    		message.setPartyId(1L);
		    		message.setOrgId(1L);
		    		message.setSubject("\u652F\u4ED8\u5F02\u5E38\u5355\u901A\u77E5\uFF01");
		    		message.setDescription("\u652F\u4ED8\u8BA2\u5355\u4E0D\u5B58\u5728. id: " + transactionId + ",Details: " + orderDetail.toString());
		    		message.setCreateDate(new Date());
		    		coorService.addNotification(message, false);
		    	}
		    	//we have to send a success string back to Beecloud as required. 
				return SUCCESS;
		    } else {
		    	translog.setIsCorrect(false);
		    	AccountingModel.INSTANCE.create(translog, true);
		    }
		} catch (Exception e) {
			logger.warn("Error occurred while calling back from BeeCloud: " + e.getMessage(), e);
		}
		return FAIL;
	}
	
	public boolean needUserSession() {
		return false;
	}

}
