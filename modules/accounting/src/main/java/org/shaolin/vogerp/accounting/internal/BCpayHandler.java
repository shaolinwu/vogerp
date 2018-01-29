package org.shaolin.vogerp.accounting.internal;

import java.io.BufferedReader;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.shaolin.bmdp.json.JSONException;
import org.shaolin.bmdp.json.JSONObject;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.EventProcessor;
import org.shaolin.bmdp.runtime.spi.FlowEvent;
import org.shaolin.bmdp.utils.StringUtil;
import org.shaolin.bmdp.workflow.be.NotificationImpl;
import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
import org.shaolin.bmdp.workflow.internal.BuiltInAttributeConstant;
import org.shaolin.uimaster.page.ajax.handlers.IAjaxCommand;
import org.shaolin.vogerp.accounting.IPaymentService.TransactionType;
import org.shaolin.vogerp.accounting.PaymentException;
import org.shaolin.vogerp.accounting.PaymentHandler;
import org.shaolin.vogerp.accounting.be.ICustomerAccount;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.be.IPayOrderRequest;
import org.shaolin.vogerp.accounting.be.PayOrderImpl;
import org.shaolin.vogerp.accounting.be.PayOrderTransactionLogImpl;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.accounting.ce.SettlementMethodType;
import org.shaolin.vogerp.accounting.dao.AccountingModel;
import org.shaolin.vogerp.accounting.util.PaymentUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import cn.beecloud.BCEumeration;
import cn.beecloud.BCPay;
import cn.beecloud.BeeCloud;
import cn.beecloud.bean.BCRefund;
import cn.beecloud.bean.TransferParameter;

/**
 * BE WebHook data handler.
 * Check from this example.
 * https://github.com/beecloud/beecloud-java/blob/master/demo/WebRoot/webhook_receiver_example/webhook_receiver.jsp
 * 
 * We are able to debug this callback handler through Admin console by enabling 'enableDebugger'.
 * @author wushaol
 *
 */
public class BCpayHandler implements IAjaxCommand, PaymentHandler {

	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	private static final Logger logger = LoggerFactory.getLogger(BCpayHandler.class);
	
	public static boolean enableDebugger = false;
	
	private final Map<String, String> paymentKeyInfo;
	
	/**
	 * BeeCloud live register
	 */
	public BCpayHandler() {
		paymentKeyInfo = new HashMap<String, String>(
				Registry.getInstance().getNodeItems("/System/payment/beecloud/common"));
		String appId = paymentKeyInfo.get("app_id");
		String appSecret = paymentKeyInfo.get("app_secret");
		String masterSecret = paymentKeyInfo.get("master_secret");
		//live model
		BeeCloud.registerApp(appId, null, appSecret, masterSecret);
	}
	
	public String prepay(final IPayOrder order) throws PaymentException {
		if (order.getStatus() == PayOrderStatusType.NOTPAYED) {
			try {
				order.setCustomerAPaymentMethod(SettlementMethodType.ALIPAY);
				AccountingModel.INSTANCE.update(order);
				
				Map<String, String> attributes = new HashMap<String, String>(
						Registry.getInstance().getNodeItems("/System/payment/beecloud/buttonPay"));
				attributes.putAll(paymentKeyInfo);
				attributes.put("out_trade_no", order.getSerialNumber());
				//title must be less then 16 Chinese words.
				attributes.put("title", PaymentUtil.getPaymentTitle(order));
				attributes.put("amount", ((int)order.getAmount()) + "");//it's fen unit.
				String sign = PaymentUtil.beeCloudSign(attributes.get("app_id"),
						attributes.get("title"), 
						attributes.get("amount"), 
						attributes.get("out_trade_no"), 
						attributes.get("app_secret"));
				attributes.put("sign", sign);
				attributes.put("return_url", order.getPayReturnUrl());
				JSONObject json = new JSONObject(attributes); 
				return json.toString();
			} catch (Exception e) {
				throw new PaymentException("Pay error: " + e.getMessage(), e);
			}
		}
		throw new PaymentException("Order is not in unpay state!");
	}
	
	public String transfer(IPayOrderRequest request0) throws PaymentException {
		return "-1";
	}
	
	public String refund(final IPayOrder order) throws PaymentException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		String billNo = order.getSerialNumber();
		String refundNo = sdf.format(new Date()) + System.currentTimeMillis();
	
		BCRefund bcRefund = new BCRefund(billNo, refundNo, ((int)order.getAmount()));
		try {
			BCRefund refund = BCPay.startBCRefund(bcRefund);
			if (refund.getAliRefundUrl() != null) {//Alipay
				return refund.getAliRefundUrl();
			} else {
				//TODO refund result
				if (refund.isNeedApproval() != null && refund.isNeedApproval()) {//Pre refund
					System.out.println("Pre refund suuccessful!");
					System.out.println(refund.getObjectId());
				} else {//refund directly
					System.out.println("refund directly");
					System.out.println(refund.getObjectId());
				}
				return "";
			}
		} catch (Exception e) {
			throw new PaymentException("Refund error: " + e.getMessage(), e);
		}
	}
	
	public String queryForPayStatus(final IPayOrder order) throws PaymentException {
		Map<String, String> attributes = new HashMap<String, String>(
				Registry.getInstance().getNodeItems("/System/payment/beecloud/queryBills"));
		attributes.putAll(paymentKeyInfo);
		attributes.put("amount", ((int)order.getAmount()) + "");//it's fen unit.
		attributes.put("out_trade_no", order.getSerialNumber());
		attributes.put("title", PaymentUtil.getPaymentTitle(order));
		String sign = PaymentUtil.sign(attributes.get("app_id"), 
				attributes.get("title"), 
				attributes.get("amount"), 
				order.getSerialNumber(), 
				attributes.get("app_secret"));
		attributes.put("sign", sign);
		
		JSONObject optional = new JSONObject();
		try {
			optional.put("out_trade_no", order.getSerialNumber());
		} catch (JSONException e) {
			e.printStackTrace();
		}
		attributes.put("optional", optional.toString());
		JSONObject json = new JSONObject(attributes); 
		try {
			json.put("amount", ((int)order.getAmount()) + "");
		} catch (JSONException e) {
		}
		
		return json.toString();
	}
	
	public String query(final IPayOrder order) throws PaymentException {
		throw new UnsupportedOperationException();
	}
	
	/*
	 * Key	Type	Example
	 * sign	String	32 bits in lower case.
	 * timestamp	Long	1426817510111
	 * channel_type	String	�WX� or 'ALI� or 'UN� or 'KUAIQIAN� or 'JD� or 'BD� or 'YEE� or 'PAYPAL� or 'BC�
	 * sub_channel_type	String	'WX_APP� or 'WX_NATIVE� or 'WX_JSAPI� or 'WX_SCAN� or 'ALI_APP� or 'ALI_SCAN� or 
	 * 			                'ALI_WEB� or 'ALI_QRCODE� or 'ALI_OFFLINE_QRCODE� or 'ALI_WAP� or 'UN_APP� or 
	 *                          'UN_WEB� or 'PAYPAL_SANDBOX� or 'PAYPAL_LIVE� or 'JD_WAP� or 'JD_WEB� or 'YEE_WAP� or 
	 *                          'YEE_WEB� or 'YEE_NOBANKCARD� or 'KUAIQIAN_WAP� or 'KUAIQIAN_WEB� or 'BD_APP� or 
	 *                          'BD_WEB� or 'BD_WAP� or 'BC_TRANSFER� or 'ALI_TRANSFER�
	 * transaction_type	String	 'PAY� or 'REFUND� or 'TRANSFER'
	 * transaction_id	String	 '201506101035040000001�
	 * transaction_fee	Integer	  1 means 0.01 yuan
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
		    translog.setIsCorrect(PaymentUtil.verifySign(sign, timestamp));
		    if (translog.getIsCorrect() || BCpayHandler.enableDebugger) { //for secure check.
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
		    		//got adding this logic into workflow mission for tracing.
		    		if (transType == TransactionType.PAY) {
		    			if (payOrder.getStatus() == PayOrderStatusType.PAYED) {
		    				// already notified.
		    				return SUCCESS;
		    			}
		    			FlowEvent e = new FlowEvent("PayFlowConsumer");
		    			e.setAttribute("payOrder", payOrder);
		    			e.setAttribute("translog", translog);
		    			e.setAttribute("jsonObj", jsonObj);
		    			e.setAttribute(BuiltInAttributeConstant.KEY_AdhocNodeName, "PrepayCallBack");
		    			EventProcessor processor = (EventProcessor)AppContext.get().getService(
		    					Class.forName("org.shaolin.bmdp.workflow.internal.WorkFlowEventProcessor"));
		    			processor.process(e);
		    			
		    		} else if(transType == TransactionType.TRANSFER) {
		    			//TODO:
		    			FlowEvent e = new FlowEvent("TransferFlowConsumer");
		    			e.setAttribute("payOrder", payOrder);
		    			e.setAttribute("translog", translog);
		    			e.setAttribute("jsonObj", jsonObj);
		    			e.setAttribute(BuiltInAttributeConstant.KEY_AdhocNodeName, "TransferCallBack");
		    			
		    			EventProcessor processor = (EventProcessor)AppContext.get().getService(
		    					Class.forName("org.shaolin.bmdp.workflow.internal.WorkFlowEventProcessor"));
		    			processor.process(e);
		    			
		    		} else if(transType == TransactionType.REFUND) {
		    			//TODO:
		    			FlowEvent e = new FlowEvent("RefundFlowConsumer");
		    			e.setAttribute("payOrder", payOrder);
		    			e.setAttribute("translog", translog);
		    			e.setAttribute("jsonObj", jsonObj);
		    			e.setAttribute(BuiltInAttributeConstant.KEY_AdhocNodeName, "RefundCallBack");
		    			
		    			EventProcessor processor = (EventProcessor)AppContext.get().getService(
		    					Class.forName("org.shaolin.bmdp.workflow.internal.WorkFlowEventProcessor"));
		    			processor.process(e);
		    		}
		    	} else {
		    		logger.warn("Payment order does not exist! id: " + transactionId);
		    		// send notification to admin!
		    		ICoordinatorService coorService = AppContext.get().getService(ICoordinatorService.class);
		    		NotificationImpl message = new NotificationImpl();
		    		message.setSubject("\u652F\u4ED8\u5F02\u5E38\u5355\u901A\u77E5\uFF01");
		    		message.setDescription("\u652F\u4ED8\u8BA2\u5355\u4E0D\u5B58\u5728. id: " + transactionId + ",Details: " + orderDetail.toString());
		    		message.setCreateDate(new Date());
		    		coorService.addNotificationToAdmin(message, false);
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
