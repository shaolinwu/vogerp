package org.shaolin.vogerp.accounting.internal;

import java.io.BufferedReader;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.EventProcessor;
import org.shaolin.bmdp.runtime.spi.FlowEvent;
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

import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.domain.AlipayTradeAppPayModel;
import com.alipay.api.request.AlipayTradeAppPayRequest;
import com.alipay.api.request.AlipayTradeWapPayRequest;
import com.alipay.api.response.AlipayTradeAppPayResponse;

/**
 * We are able to debug this callback handler through Admin console by enabling 'enableDebugger'.
 * @author wushaol
 *
 */
public class AlipayHandler implements IAjaxCommand, PaymentHandler {

	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	private static final Logger logger = LoggerFactory.getLogger(AlipayHandler.class);
	
	public static boolean enableDebugger = false;
	
	public String APP_ID = "";
	public String APP_PRIVATE_KEY = "";
	public String ALIPAY_PUBLIC_KEY = "";
	private static final String KEY_TYPE = "RSA2";
	private static final String ALIPAY_COMM_GATEWAY = "https://openapi.alipay.com/gateway.do";
	
	private AlipayClient alipayClient;
	
	public AlipayHandler() {
		APP_ID = Registry.getInstance().getValue("/System/payment/alipay/app_id");
		APP_PRIVATE_KEY = Registry.getInstance().getValue("/System/payment/alipay/app_privatekey");
		ALIPAY_PUBLIC_KEY = Registry.getInstance().getValue("/System/payment/alipay/alipay_public_key");
		alipayClient = new DefaultAlipayClient(ALIPAY_COMM_GATEWAY, 
				APP_ID, APP_PRIVATE_KEY, "json", "UTF-8", ALIPAY_PUBLIC_KEY, KEY_TYPE);
	}
	
	/**
	 * 
	 * @param payOrder
	 * @return
	 * @throws Exception
	 */
	public String prepay(IPayOrder payOrder) throws PaymentException {
		try {
			if (UserContext.isMobileRequest() && UserContext.isAppClient()) {
				// https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.I6qVQ1&treeId=54&articleId=106370&docType=1
				AlipayTradeAppPayRequest request = new AlipayTradeAppPayRequest();
				AlipayTradeAppPayModel model = new AlipayTradeAppPayModel();
				model.setSubject(PaymentUtil.getPaymentTitle(payOrder));
				model.setBody(payOrder.getDescription());
				model.setOutTradeNo(payOrder.getSerialNumber());
				model.setTimeoutExpress("500m");
				model.setTotalAmount((payOrder.getAmount() / 100) + "");
				model.setProductCode("QUICK_MSECURITY_PAY");
				request.setBizModel(model);
	//			request.setNotifyUrl("");
				
				// this is app payment api.
		        AlipayTradeAppPayResponse response = alipayClient.sdkExecute(request);
		        return response.getBody(); //order information returning to client
			} else {
				// web payment: alipay.trade.wap.pay
				// https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.WUo6cW&treeId=203&articleId=105285&docType=1
				AlipayTradeWapPayRequest alipayRequest = new AlipayTradeWapPayRequest();
	//		    alipayRequest.setReturnUrl("http://domain.com/CallBack/return_url.jsp");
	//		    alipayRequest.setNotifyUrl("http://domain.com/CallBack/notify_url.jsp");
				JSONObject json = new JSONObject();
				json.put("out_trade_no", payOrder.getSerialNumber());
				json.put("timeout_express", "500m");
				json.put("product_code", "QUICK_WAP_PAY");
				json.put("total_amount", payOrder.getAmount() / 100); //yuan
				json.put("subject", PaymentUtil.getPaymentTitle(payOrder));
				json.put("body", payOrder.getDescription());
				alipayRequest.setBizContent(json.toString());
				String form = alipayClient.pageExecute(alipayRequest).getBody();
				
	//		    httpResponse.setContentType("text/html;charset=" + AlipayServiceEnvConstants.CHARSET);
	//	        httpResponse.getWriter().write(form);
	//		    httpResponse.getWriter().flush();
				return form;
	        }
		} catch (Exception e) {
			if (e instanceof PaymentException) {
				throw (PaymentException)e;
			}
			throw new PaymentException("Alipay prepay error occurred!", e);
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
	        translog.setPaymentMethod(SettlementMethodType.ALIPAY);
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
		    if (translog.getIsCorrect() || AlipayHandler.enableDebugger) { //for secure check.
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
