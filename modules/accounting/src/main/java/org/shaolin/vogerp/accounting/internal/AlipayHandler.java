package org.shaolin.vogerp.accounting.internal;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
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
import org.shaolin.uimaster.page.ajax.json.JSONException;
import org.shaolin.uimaster.page.ajax.json.JSONObject;
import org.shaolin.vogerp.accounting.IPaymentService;
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

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.domain.AlipayTradeAppPayModel;
import com.alipay.api.internal.util.AlipaySignature;
import com.alipay.api.request.AlipayTradeAppPayRequest;
import com.alipay.api.request.AlipayTradeQueryRequest;
import com.alipay.api.request.AlipayTradeWapPayRequest;
import com.alipay.api.response.AlipayTradeAppPayResponse;
import com.alipay.api.response.AlipayTradeQueryResponse;

/**
 * We are able to debug this callback handler through Admin console by enabling 'enableDebugger'.
 * @author wushaol
 *
 */
public class AlipayHandler extends HttpServlet implements PaymentHandler {

	private String charset = "UTF-8";
	private static final String SUCCESS = "success";
	private static final String FAIL = "failure";
	private static final Logger logger = LoggerFactory.getLogger(AlipayHandler.class);
	
	public static boolean enableDebugger = false;
	
	public String APP_ID = "";
	public String APP_PRIVATE_KEY = "";
	public String ALIPAY_PUBLIC_KEY = "";
	private static final String KEY_TYPE = "RSA2";
	private static final String ALIPAY_COMM_GATEWAY = "https://openapi.alipay.com/gateway.do";
	
	private static final String ALIPAY_NotifyUrl = "https://www.vogerp.com/uimaster/AlipayWebHook.do";
	
	private AlipayClient alipayClient;
	
	public AlipayHandler() {
		APP_ID = Registry.getInstance().getValue("/System/payment/alipay/app_id");
		APP_PRIVATE_KEY = Registry.getInstance().getValue("/System/payment/alipay/app_privatekey");
		ALIPAY_PUBLIC_KEY = Registry.getInstance().getValue("/System/payment/alipay/alipay_public_key");
		alipayClient = new DefaultAlipayClient(ALIPAY_COMM_GATEWAY, 
				APP_ID, APP_PRIVATE_KEY, "json", "UTF-8", ALIPAY_PUBLIC_KEY, KEY_TYPE);
	}
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		process(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		process(request, response);
	}
	
	protected void process(HttpServletRequest request, HttpServletResponse response) throws IOException
    {
		if (request.getProtocol().compareTo("HTTP/1.0") == 0) {
			response.setHeader("Pragma", "no-cache");
		} else if (request.getProtocol().compareTo("HTTP/1.1") == 0) {
			response.setHeader("Cache-Control", "no-cache");
		}
		response.setDateHeader("Expires", 0);
		response.setCharacterEncoding(charset);
		request.setCharacterEncoding(charset);
	
		response.getWriter().write(execute(request, response));
    }
	
	/**
	 * 
	 * @param payOrder
	 * @return
	 * @throws Exception
	 */
	public String prepay(final IPayOrder payOrder) throws PaymentException {
		if (payOrder.getStatus() != PayOrderStatusType.NOTPAYED) {
			return "";
		}
		try {
			payOrder.setCustomerAPaymentMethod(SettlementMethodType.ALIPAY);
			AccountingModel.INSTANCE.update(payOrder);
			
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
			    alipayRequest.setNotifyUrl(ALIPAY_NotifyUrl);
//    		    alipayRequest.setReturnUrl("http://domain.com/CallBack/return_url.jsp");
				JSONObject json = new JSONObject();
				json.put("out_trade_no", payOrder.getSerialNumber());
				json.put("timeout_express", "500m");
				json.put("product_code", "QUICK_WAP_PAY");
				json.put("total_amount", payOrder.getAmount() / 100); //yuan with double.
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
	
	/**
	 * https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.WUo6cW&treeId=203&articleId=105285&docType=1
	 * alipay.trade.refund
	 */
	public String refund(final IPayOrder order) throws PaymentException {
		//TODO:
		throw new UnsupportedOperationException();
	}
	
	/**
	 * https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.WUo6cW&treeId=203&articleId=105285&docType=1
	 * alipay.trade.query
	 * @param order
	 * @return
	 * @throws PaymentException
	 */
	public String query(final IPayOrder order) throws PaymentException {
		if (order.getStatus() == PayOrderStatusType.PAYED) {
			// already notified.
			return SUCCESS;
		}
		try {
			AlipayTradeQueryRequest request = new AlipayTradeQueryRequest();
			request.setBizContent("{\"out_trade_no\":\""+order.getSerialNumber()+"\"}");
			AlipayTradeQueryResponse response = alipayClient.execute(request);
			if(response.isSuccess()) { 
				JSONObject jsonObj = new JSONObject(response.getBody());
				
				String transactionId = jsonObj.getString("out_trade_no");
				jsonObj.put("transaction_fee", jsonObj.getDouble("total_amount"));
				jsonObj.put("trade_success", true);
				jsonObj.put("transaction_id", transactionId);
				jsonObj.put("message_detail", "");
				jsonObj.put("transaction_type", TransactionType.PAY.toString());
				
				PayOrderTransactionLogImpl translog = new PayOrderTransactionLogImpl();
		        translog.setPaymentMethod(SettlementMethodType.WEIXI);
		        translog.setLog(jsonObj.toString());
		        translog.setCreateDate(new Date());
		    	if ("TRADE_SUCCESS".equalsIgnoreCase(jsonObj.getString("trade_state"))) {
		    		jsonObj.put("trade_success", true);
		    		translog.setIsCorrect(true);
		    		updatePayOrder(translog, transactionId, jsonObj);
		    		AccountingModel.INSTANCE.create(translog, true);
		    		return SUCCESS;
		    	}
			}
	    	return FAIL;
		} catch (AlipayApiException e) {
			throw new PaymentException("Alipay query error occurred!", e);
		} catch (JSONException e) {
			throw new PaymentException("Alipay query error occurred!", e);
		} catch (Exception e) {
			if (e instanceof PaymentException) {
				throw (PaymentException)e;
			}
			throw new PaymentException("Alipay query error occurred!", e);
		}
	}
	
	private String execute(HttpServletRequest request, HttpServletResponse response) {
		PayOrderTransactionLogImpl translog = null;
		try {
	        request.setCharacterEncoding("utf-8");
	        
			Map<String, String> params = new HashMap<String, String>();
			Map requestParams = request.getParameterMap();
			for (Iterator iter = requestParams.keySet().iterator(); iter.hasNext();) {
				String name = (String) iter.next();
				String[] values = (String[]) requestParams.get(name);
				String valueStr = "";
				for (int i = 0; i < values.length; i++) {
					valueStr = (i == values.length - 1) ? valueStr + values[i] : valueStr + values[i] + ",";
				}
				// only in case of if wrong codec happening.
				// valueStr = new String(valueStr.getBytes("ISO-8859-1"), "gbk");
				params.put(name, valueStr);
			}   
	        
			translog = new PayOrderTransactionLogImpl();
	        translog.setPaymentMethod(SettlementMethodType.ALIPAY);
	        translog.setLog(params.toString());
	        translog.setCreateDate(new Date());
			if (AlipaySignature.rsaCheckV2(params, ALIPAY_PUBLIC_KEY, "UTF-8", KEY_TYPE) || AlipayHandler.enableDebugger) {
//				params.get("out_trade_no");
//				params.get("trade_no");
//				params.get("trade_status");
				
				if (params.get("trade_status").equals("TRADE_SUCCESS")) {
					translog.setIsCorrect(true);
					AccountingModel.INSTANCE.create(translog, true);
					
					String transactionId = params.get("out_trade_no");
					JSONObject jsonObj = new JSONObject(requestParams);
					jsonObj.put("transaction_fee", jsonObj.get("total_amount"));
					jsonObj.put("trade_success", true);
					jsonObj.put("transaction_id", transactionId);
					jsonObj.put("message_detail", "");
					jsonObj.put("transaction_type", TransactionType.PAY.toString());
					
					if (logger.isInfoEnabled()) {
						logger.info("Received a callback payment: " + transactionId);
					}
					return updatePayOrder(translog, transactionId, jsonObj);
				} else {
					translog.setIsCorrect(false);
				}
			} else {
				translog.setIsCorrect(false);
			}
		} catch (Exception e) {
			logger.warn("Error occurred while calling back from Alipay: " + e.getMessage(), e);
		} finally {
			if (translog != null) {
				AccountingModel.INSTANCE.create(translog, true);
			}
		}
		return FAIL;
	}

	private String updatePayOrder(PayOrderTransactionLogImpl translog, String transactionId, JSONObject jsonObj)
			throws Exception {
		PayOrderImpl payOrder = new PayOrderImpl();
		payOrder.setSerialNumber(transactionId);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(payOrder, null, 0, 1);
		if (result != null && result.size() > 0) {
			payOrder = (PayOrderImpl)result.get(0);
			if (payOrder.getStatus() == PayOrderStatusType.PAYED) {
				// already notified.
				return SUCCESS;
			}
			double momey = jsonObj.getDouble("transaction_fee");//this is yuan unit.
			if (Double.valueOf(payOrder.getAmount()/100) != momey) {
				translog.setIsCorrect(false);
				logger.warn("Payment order("+payOrder.getSerialNumber()+") amount does not the same! PayOrder amount: " + payOrder.getAmount() + ", Callback amount: " + momey);
				return FAIL;
			}
			updatePayState(jsonObj, payOrder);
			// handle call back update.
			IPaymentService payService = AppContext.get().getService(IPaymentService.class);
			payService.notifyPaySuccess(payOrder);
			
			if (UserContext.getUserRoles() == null) {
				//add payment callback role.
				UserContext.addUserRule(CEUtil.toCEValue("Admin,10"));
			}
			FlowEvent e = new FlowEvent("PayFlowConsumer");
			e.setAttribute("payOrder", payOrder);
			e.setAttribute("jsonObj", jsonObj);
			e.setAttribute(BuiltInAttributeConstant.KEY_AdhocNodeName, "PrepayCallBack");
			EventProcessor processor = (EventProcessor)AppContext.get().getService(
					Class.forName("org.shaolin.bmdp.workflow.internal.WorkFlowEventProcessor"));
			processor.process(e);
		} else {
			logger.warn("Payment order does not exist! id: " + transactionId);
			// send notification to admin!
			ICoordinatorService coorService = AppContext.get().getService(ICoordinatorService.class);
			NotificationImpl message = new NotificationImpl();
			message.setSubject("\u652F\u4ED8\u5F02\u5E38\u5355\u901A\u77E5\uFF01");
			message.setDescription("\u652F\u4ED8\u8BA2\u5355\u4E0D\u5B58\u5728. id: " + transactionId);
			message.setCreateDate(new Date());
			coorService.addNotificationToAdmin(message, false);
		}
		//we have to send a success string back to Alipay as required. 
		return SUCCESS;
	}
	
	public boolean needUserSession() {
		return false;
	}

	private void updatePayState(final JSONObject jsonObj, final IPayOrder payOrder) throws PaymentException {
		TransactionType transType;
		String transactionId;
		try {
			transType = TransactionType.valueOf(jsonObj.getString("transaction_type").toUpperCase());
			transactionId = jsonObj.getString("transaction_id");
		} catch (JSONException e) {
			throw new PaymentException("Error to get transaction_type! payment order: " + payOrder.getSerialNumber());
		}
		if (transType == TransactionType.PAY && payOrder.getStatus() == PayOrderStatusType.NOTPAYED) {
			payOrder.setStatus(PayOrderStatusType.PAYED);
			payOrder.setThirdGenSerialNumber(transactionId);
			AccountingModel.INSTANCE.update(payOrder, true);
		} else if (transType == TransactionType.REFUND && payOrder.getStatus() == PayOrderStatusType.PAYED) {
			payOrder.setStatus(PayOrderStatusType.REFUND);
			payOrder.setThirdGenSerialNumber2(transactionId);
			AccountingModel.INSTANCE.update(payOrder, true);
		} else if (transType == TransactionType.TRANSFER && payOrder.getStatus() == PayOrderStatusType.PAYED) {
			payOrder.setStatus(PayOrderStatusType.AGREEDPAYTOEND);
			payOrder.setThirdGenSerialNumber2(transactionId);
			AccountingModel.INSTANCE.update(payOrder, true);
		} else {
			logger.warn("Unsupported state of payment order: " + payOrder.getSerialNumber() 
				+ "(" + payOrder.getStatus().getDisplayName() 
				+ "), transactionId: " + transactionId
				+ ",transType: " + transType);
		}
	}
}
