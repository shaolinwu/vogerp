package org.shaolin.vogerp.accounting.internal;

import java.io.BufferedReader;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.EventProcessor;
import org.shaolin.bmdp.runtime.spi.FlowEvent;
import org.shaolin.bmdp.utils.HttpSender;
import org.shaolin.bmdp.utils.StringUtil;
import org.shaolin.bmdp.workflow.be.NotificationImpl;
import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
import org.shaolin.bmdp.workflow.internal.BuiltInAttributeConstant;
import org.shaolin.uimaster.page.ajax.handlers.IAjaxCommand;
import org.shaolin.uimaster.page.ajax.json.JSONException;
import org.shaolin.uimaster.page.ajax.json.JSONObject;
import org.shaolin.vogerp.accounting.IPaymentService.TransactionType;
import org.shaolin.vogerp.accounting.PaymentException;
import org.shaolin.vogerp.accounting.PaymentHandler;
import org.shaolin.vogerp.accounting.be.ICustomerAccount;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.be.PayOrderImpl;
import org.shaolin.vogerp.accounting.be.PayOrderTransactionLogImpl;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.accounting.ce.SettlementMethodType;
import org.shaolin.vogerp.accounting.dao.AccountingModel;
import org.shaolin.vogerp.accounting.util.PaymentUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * We are able to debug this callback handler through Admin console by enabling 'enableDebugger'.
 * @author wushaol
 *
 */
public class WepayHandler implements IAjaxCommand, PaymentHandler {

	private static final String UNIFIEDPAY_URL = "https://api.mch.weixin.qq.com/pay/unifiedorder";
	private static final String SUCCESS = "SUCCESS";
	private static final String FAIL = "FAIL";
	private static final Logger logger = LoggerFactory.getLogger(WepayHandler.class);
	
	public static boolean enableDebugger = false;
	
	private final String APP_ID;
	
	private final String MCH_ID;
	
	private final String MCH_APISECURE_KEY;
	
	private final HttpSender sender;
	
	public WepayHandler() {
		APP_ID = Registry.getInstance().getValue("/System/payment/wepay/app_id");
		MCH_ID = Registry.getInstance().getValue("/System/payment/wepay/mch_id");
		MCH_APISECURE_KEY = Registry.getInstance().getValue("/System/payment/wepay/mch_apisecurekey");
		
		sender = new HttpSender();
	}
	
	/**
	 * for test purpose
	 * 
	 * @param appId
	 * @param mchId
	 * @param apiKey
	 */
	public WepayHandler(String appId, String mchId, String apiKey) {
		this.APP_ID = appId;
		this.MCH_ID = mchId;
		this.MCH_APISECURE_KEY = apiKey;
		sender = new HttpSender();
	}
	
	/**
	 * we invoke weixin unified api for prepayment.
	 * https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1
	 * 
	 * @param payOrder
	 * @return
	 * @throws Exception
	 */
	public String prepay(IPayOrder payOrder) throws PaymentException {
		try {
			HashMap<String, Object> values = new HashMap<String, Object>();
			values.put("appid", APP_ID);
			values.put("body", StringUtil.truncateString(payOrder.getDescription(), 120));
			values.put("mch_id", MCH_ID);
			values.put("nonce_str", StringUtil.genRandomAlphaBits(32));
			values.put("out_trade_no", payOrder.getSerialNumber());
			values.put("spbill_create_ip", UserContext.getUserContext().getRequestIP());
			values.put("total_fee", payOrder.getAmount() + ""); //fen
			values.put("trade_type", UserContext.isAppClient() ?"APP" :"NATIVE");
			values.put("notify_url", "https://www.vogerp.com/uimaster/ajaxservice?serviceName=WepayWebHook");
			// optional.
	//		JSONObject detail = new JSONObject();
	//		detail.put("cost_price", payOrder.getAmount());
	//		detail.put("goods_name", StringUtil.truncateString(payOrder.getDescription(), 100));
	//		detail.put("quantity", 1);
	//		json.put("detail", detail);
			
			// https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=4_3
			// all parameters must be keeping in order.
			StringBuffer keyValues = new StringBuffer();
			keyValues.append("appid=").append(APP_ID);
			keyValues.append("&body=").append(values.get("body"));
			keyValues.append("&mch_id=").append(values.get("mch_id"));
			keyValues.append("&nonce_str=").append(values.get("nonce_str"));
			keyValues.append("&notify_url=").append(values.get("notify_url"));
			keyValues.append("&out_trade_no=").append(values.get("out_trade_no"));
			keyValues.append("&spbill_create_ip=").append(values.get("spbill_create_ip"));
			keyValues.append("&total_fee=").append(values.get("total_fee"));
			keyValues.append("&trade_type=").append(values.get("trade_type"));
		    //key setting path ：pay.weixin.qq.com-->API security-->password	
			keyValues.append("&key=").append(MCH_APISECURE_KEY);
			
			values.put("sign", PaymentUtil.string2MD5(keyValues.toString()).toUpperCase());
			String result = sender.doPostSSL(UNIFIEDPAY_URL, StringUtil.convertMapToXML(values, "xml"), "UTF-8", "text/xml");
			//xml format
			Map resultMap = StringUtil.xml2map(result);
			// invoke result
			if (SUCCESS.equalsIgnoreCase(resultMap.get("return_code").toString())) {
				// business result
				PayOrderTransactionLogImpl translog = new PayOrderTransactionLogImpl();
		        translog.setLog(resultMap.toString());
		        translog.setPaymentMethod(SettlementMethodType.WEIXI);
		        
				if (SUCCESS.equalsIgnoreCase(resultMap.get("result_code").toString())) {
					translog.setIsCorrect(true);
					translog.setCreateDate(new Date());
					AccountingModel.INSTANCE.create(translog, true);
					resultMap.get("prepay_id");
					return resultMap.get("code_url").toString(); // for end user payment url which will be generated as 2 dimension code picture!
				} else {
					translog.setIsCorrect(false);
					translog.setCreateDate(new Date());	
					AccountingModel.INSTANCE.create(translog, true);
	
					throw new PaymentException("Wepay prepay operation failed: " + resultMap.toString() 
					+ ", payment order: " + payOrder.getSerialNumber());
				}
			} else {
				throw new PaymentException("Wepay prepay order fail to sign: " + resultMap.toString() 
											+ ", payment order: " + payOrder.getSerialNumber());
			}
		} catch (Exception e) {
			if (e instanceof PaymentException) {
				throw (PaymentException)e;
			}
			throw new PaymentException("Weixi prepay error occurred!", e);
		}
	}
	
	public String transfer(final IPayOrder order, ICustomerAccount customerAccount) throws PaymentException {
		//TODO:
		throw new UnsupportedOperationException();
	}
	
	public String refund(final IPayOrder order) throws PaymentException {
		//TODO:
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
		    if (translog.getIsCorrect() || WepayHandler.enableDebugger) { //for secure check.
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
		    		if (UserContext.getUserRoles() == null) {
		    			//add payment callback role.
		    			UserContext.addUserRule(CEUtil.toCEValue("Admin,10"));
		    		}
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