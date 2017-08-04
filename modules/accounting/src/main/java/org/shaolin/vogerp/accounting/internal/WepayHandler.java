package org.shaolin.vogerp.accounting.internal;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.security.KeyStore;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.net.ssl.SSLContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.http.HttpEntity;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContexts;
import org.apache.http.util.EntityUtils;
import org.shaolin.bmdp.i18n.LocaleContext;
import org.shaolin.bmdp.json.JSONException;
import org.shaolin.bmdp.json.JSONObject;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.EventProcessor;
import org.shaolin.bmdp.runtime.spi.FlowEvent;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.bmdp.utils.HttpSender;
import org.shaolin.bmdp.utils.StringUtil;
import org.shaolin.bmdp.workflow.be.NotificationImpl;
import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
import org.shaolin.bmdp.workflow.internal.BuiltInAttributeConstant;
import org.shaolin.uimaster.page.AjaxContextHelper;
import org.shaolin.uimaster.page.WebConfig;
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

/**
 * We are able to debug this callback handler through Admin console by enabling 'enableDebugger'.
 * @author wushaol
 *
 */
public class WepayHandler extends HttpServlet implements PaymentHandler {

	private String charset = "UTF-8";
	
	private static final String WEPAY_WEB_HOOK = "https://www.vogerp.com/uimaster/WepayHandler";//no parameter as required!
	private static final String UNIFIEDPAY_URL = "https://api.mch.weixin.qq.com/pay/unifiedorder";
	private static final String UNIFIEDQUERY_URL = "https://api.mch.weixin.qq.com/pay/orderquery";
	private static final String REFUND_URL = "https://api.mch.weixin.qq.com/secapi/pay/refund";
	private static final Logger logger = LoggerFactory.getLogger(WepayHandler.class);
	
	public static boolean enableDebugger = false;
	
	private final String APP_ID;
	
	private final String MCH_ID;
	
	private final String MCH_APISECURE_KEY;
	
	private final HttpSender sender;
	
	private SSLConnectionSocketFactory sslsf;
	
	public WepayHandler() {
		// \u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u5728\u3010\u5F00\u53D1-->\u57FA\u672C\u914D\u7F6E\u3011\u4E2D\u67E5\u770B
		APP_ID = Registry.getInstance().getValue("/System/payment/wepay/app_id");
		// \u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u5728\u3010\u5FAE\u4FE1\u652F\u4ED8-->\u5546\u6237\u4FE1\u606F\u3011\u4E2D\u67E5\u770B
		MCH_ID = Registry.getInstance().getValue("/System/payment/wepay/mch_id");
		// \u767B\u5F55\u5FAE\u4FE1\u652F\u4ED8\u5546\u6237\u5E73\u53F0\uFF0C\u5728\u3010\u8D26\u6237\u8BBE\u7F6E-->API\u5B89\u5168\u3011\u4E2D\u8BBE\u7F6E
		MCH_APISECURE_KEY = Registry.getInstance().getValue("/System/payment/wepay/mch_apisecurekey");
		
		// HttpClient need to load keyStore
		try {
			KeyStore keyStore  = KeyStore.getInstance("PKCS12");
			InputStream inputStream = Thread.currentThread().getContextClassLoader().getResourceAsStream("cert/wepay/apiclient_cert.p12");
			try {
				keyStore.load(inputStream, MCH_ID.toCharArray());
			} finally {
				inputStream.close();
			}
			SSLContext sslcontext = SSLContexts.custom().loadKeyMaterial(keyStore, MCH_ID.toCharArray()).build();
			sslsf = new SSLConnectionSocketFactory(sslcontext, SSLConnectionSocketFactory.getDefaultHostnameVerifier());
		} catch (Exception e) {
			logger.error("Error to load Wepay certificates: " + e.getMessage(), e);
		}
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
	
		AppContext.register(IServerServiceManager.INSTANCE);

		HttpSession session = request.getSession();
		UserContext currentUserContext = new UserContext();
		currentUserContext.setOrgCode(Registry.getInstance().getValue("/System/webConstant/defaultOrgCode"));
		currentUserContext.setUserRequestIP(request.getRemoteAddr());
		String userLocale = WebConfig.getUserLocale(request);
		List<IConstantEntity> userRoles = new ArrayList<IConstantEntity>();
		userRoles.add(CEUtil.toCEValue("Admin,10"));
		//add user-context thread bind
        UserContext.register(session, currentUserContext, userLocale, userRoles, false);
		LocaleContext.createLocaleContext(userLocale);
		try {
			response.getWriter().write(execute(request, response));
		} finally {
			AjaxContextHelper.removeAjaxContext();
			UserContext.unregister();
			LocaleContext.clearLocaleContext();
		}
    }
	
	
	/**
	 * we invoke weixin unified api for prepayment.
	 * https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1
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
			payOrder.setCustomerAPaymentMethod(SettlementMethodType.WEIXI);
			payOrder.setOutTradeNo(PaymentUtil.genOutTradeNumber());
			AccountingModel.INSTANCE.update(payOrder);
			
			HashMap<String, Object> values = new HashMap<String, Object>();
			values.put("appid", APP_ID);
			values.put("body", StringUtil.truncateString(payOrder.getDescription(), 20));
			values.put("mch_id", MCH_ID);
			values.put("nonce_str", StringUtil.genRandomAlphaBits(32));
			values.put("out_trade_no", payOrder.getOutTradeNo());//must be unique requested every time!
			values.put("spbill_create_ip", UserContext.getUserContext().getRequestIP());
			values.put("total_fee", ((int)payOrder.getAmount()) + ""); //fen
			values.put("trade_type", UserContext.isAppClient() ?"APP" :"NATIVE");
			values.put("notify_url", WEPAY_WEB_HOOK);
			if (logger.isDebugEnabled()) {
				logger.debug("Trade_Device: " + (UserContext.isAppClient() ?"APP" :"NATIVE") + ", out_trade_no: " + values.get("out_trade_no"));
			}
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
			// take this link for verification. https://pay.weixin.qq.com/wiki/tools/signverify/
			values.put("sign", encodeMD5(keyValues.toString(), "UTF-8").toUpperCase());
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
					if (UserContext.isMobileRequest() && UserContext.isAppClient()) {
						//resultMap.get("prepay_id")
						return (new JSONObject(resultMap)).toString();
					}
					return resultMap.get("code_url").toString(); // for end user payment url which will be generated as 2 dimension code picture!
				} else {
					translog.setIsCorrect(false);
					translog.setCreateDate(new Date());	
					AccountingModel.INSTANCE.create(translog, true);
	
					logger.warn("Wepay prepay operation failed: " + resultMap.toString() 
					+ ", payment order: " + payOrder.getSerialNumber());
				}
			} else {
				logger.warn("Wepay prepay order fail to sign: " + resultMap.toString() 
											+ ", payment order: " + payOrder.getSerialNumber());
			}
		} catch (Throwable e) {
			logger.warn("Wepay prepay order failed: " + e.getMessage(), e);
		}
		return "";
	}
	
	public String transfer(final IPayOrder order, ICustomerAccount customerAccount) throws PaymentException {
		//TODO:
		throw new UnsupportedOperationException();
	}

	/**
	 * https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_4
	 *
	 * @param order
	 * @return
	 * @throws PaymentException
	 */
	public String refund(final IPayOrder order) throws PaymentException {
		order.setOutTradeNo(order.getOutTradeNo());
		order.setAmount(order.getAmount());
		try {
			HashMap<String, Object> values = new HashMap<String, Object>();
			values.put("appid", APP_ID);
			values.put("mch_id", MCH_ID);
			values.put("nonce_str", StringUtil.genRandomAlphaBits(32));
			values.put("out_trade_no", order.getOutTradeNo());
			values.put("out_refund_no", PaymentUtil.genRefundSerialNumber()); //
			values.put("total_fee", ((int)order.getAmount()) + ""); //fen
			values.put("refund_fee", ((int)order.getAmount()) + "");
			values.put("op_user_id", MCH_ID); //operator user id

			StringBuffer keyValues = new StringBuffer();
			keyValues.append("appid=").append(APP_ID);
			keyValues.append("&mch_id=").append(values.get("mch_id"));
			keyValues.append("&nonce_str=").append(values.get("nonce_str"));
			keyValues.append("&op_user_id=").append(values.get("op_user_id"));
			keyValues.append("&out_refund_no=").append(values.get("out_refund_no"));
			keyValues.append("&out_trade_no=").append(values.get("out_trade_no"));
			keyValues.append("&refund_fee=").append(values.get("refund_fee"));
			keyValues.append("&total_fee=").append(values.get("total_fee"));
			//key setting path ：pay.weixin.qq.com-->API security-->password
			keyValues.append("&key=").append(MCH_APISECURE_KEY);
			values.put("sign", encodeMD5(keyValues.toString(), "UTF-8").toUpperCase());

			CloseableHttpResponse response = null;
			String result = null;
			try {
				CloseableHttpClient httpClient = HttpClients.custom().setSSLSocketFactory(sslsf).build();

				HttpPost httpPost = new HttpPost(REFUND_URL);
				StringEntity entity = new StringEntity(StringUtil.convertMapToXML(values, "xml"), "utf-8");
				entity.setContentEncoding("utf-8");
				entity.setContentType("text/xml");
				httpPost.setEntity(entity);
				response = httpClient.execute(httpPost);

				int statusCode = response.getStatusLine().getStatusCode();
				HttpEntity httpEntity = response.getEntity();
				if (statusCode == HttpStatus.SC_OK && null != httpEntity) {
					result = EntityUtils.toString(httpEntity, "utf-8");
				}
			} finally {
				if (response != null) {
					EntityUtils.consume(response.getEntity());
				}
			}

//			String result = sender.doPostSSL(REFUND_URL, StringUtil.convertMapToXML(values, "xml"), "UTF-8", "text/xml");
			//xml format
			Map resultMap = StringUtil.xml2map(result);
			// invoke result
			if (SUCCESS.equalsIgnoreCase(resultMap.get("return_code").toString())) {
				// TODO successful post process
				order.setStatus(PayOrderStatusType.REFUND);
                AccountingModel.INSTANCE.update(order, true);
                IPaymentService payService = AppContext.get().getService(IPaymentService.class);
    			payService.notifyPayRefund(order);
				return SUCCESS;
			} else {
				// TODO failed post process
				throw new PaymentException("Wepay prepay order fail to sign: " + resultMap.toString()
						+ ", payment order: " + order.getSerialNumber());
			}
		} catch (Exception e) {
			if (e instanceof PaymentException) {
				throw (PaymentException)e;
			}
			throw new PaymentException("Weixi refund error occurred!", e);
		}
	}
	
	/**
	 * https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_2
	 */
	public String query(final IPayOrder payOrder) throws PaymentException {
		if (payOrder.getStatus() == PayOrderStatusType.PAYED) {
			// already notified.
			return SUCCESS;
		}
		try {
			HashMap<String, Object> values = new HashMap<String, Object>();
			values.put("appid", APP_ID);
			values.put("mch_id", MCH_ID);
			values.put("out_trade_no", payOrder.getOutTradeNo());
			values.put("nonce_str", StringUtil.genRandomAlphaBits(32));
			
			StringBuffer keyValues = new StringBuffer();
			keyValues.append("appid=").append(APP_ID);
			keyValues.append("&mch_id=").append(values.get("mch_id"));
			keyValues.append("&nonce_str=").append(values.get("nonce_str"));
			keyValues.append("&out_trade_no=").append(values.get("out_trade_no"));
		    //key setting path ：pay.weixin.qq.com-->API security-->password	
			keyValues.append("&key=").append(MCH_APISECURE_KEY);
			// take this link for verification. https://pay.weixin.qq.com/wiki/tools/signverify/
			values.put("sign", encodeMD5(keyValues.toString(), "UTF-8").toUpperCase());
			String result = sender.doPostSSL(UNIFIEDQUERY_URL, StringUtil.convertMapToXML(values, "xml"), "UTF-8", "text/xml");
			//xml format
			Map resultMap = StringUtil.xml2map(result);
			if (SUCCESS.equalsIgnoreCase(resultMap.get("return_code").toString()) 
				&& SUCCESS.equalsIgnoreCase(resultMap.get("result_code").toString()) ) {
				JSONObject jsonObj = new JSONObject(resultMap);
				if (!jsonObj.has("trade_state") || !SUCCESS.equalsIgnoreCase(jsonObj.getString("trade_state"))) {
					//TODO:
//					SUCCESS
//					REFUND
//					NOTPAY
//					CLOSED
//					REVOKED—cancelled
//					USERPAYING
//					PAYERROR
					// not payed!
					return FAIL;
				}
				String out_trade_no = jsonObj.getString("out_trade_no");
	    		jsonObj.put("transaction_fee", jsonObj.getInt("total_fee"));
				jsonObj.put("transaction_id", out_trade_no);
				jsonObj.put("transaction_type", TransactionType.PAY.toString());
				jsonObj.put("message_detail", "");
				if (logger.isInfoEnabled()) {
					logger.info("Received a callback payment: " + out_trade_no);
				}
				PayOrderTransactionLogImpl translog = new PayOrderTransactionLogImpl();
		        translog.setPaymentMethod(SettlementMethodType.WEIXI);
		        translog.setLog(jsonObj.toString());
		        translog.setCreateDate(new Date());
		    	if (SUCCESS.equalsIgnoreCase(resultMap.get("trade_state").toString())) {
		    		jsonObj.put("trade_success", true);
		    		translog.setIsCorrect(true);
		    		updatePayOrder(translog, jsonObj, out_trade_no);
		    	} else {
		    		translog.setIsCorrect(false);
		    	}
		    	AccountingModel.INSTANCE.create(translog, true);
				
				return resultMap.get("trade_state").toString();
			}
			return FAIL;
		} catch (Exception e) {
			if (e instanceof PaymentException) {
				throw (PaymentException)e;
			}
			throw new PaymentException("Weixi query error occurred!", e);
		}
	}
	
	private String execute(HttpServletRequest request, HttpServletResponse response) {
		PayOrderTransactionLogImpl translog = null;
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
	        translog = new PayOrderTransactionLogImpl();
	        translog.setPaymentMethod(SettlementMethodType.WEIXI);
	        translog.setLog(jsonStr);
	        translog.setCreateDate(new Date());
	        
	        //it's a sortable map
	        StringBuffer keyValues = new StringBuffer();
	        Map resultMap = StringUtil.xml2map(jsonStr);
	        Set keys = resultMap.keySet();
	        for (Object key : keys) {
				keyValues.append(key).append("=").append(resultMap.get(key)).append("&");
	        }
	        keyValues.append("key=").append(MCH_APISECURE_KEY);
	        JSONObject jsonObj = new JSONObject(resultMap);
		    String sign = jsonObj.getString("sign");
		    if (sign.equals(encodeMD5(keyValues.toString(), "UTF-8").toUpperCase()) || WepayHandler.enableDebugger) { //for secure check.
		    	
		    	if (SUCCESS.equalsIgnoreCase(resultMap.get("return_code").toString())) {
		    		translog.setIsCorrect(true);
		    		
		    		String out_trade_no = jsonObj.getString("out_trade_no");
		    		jsonObj.put("transaction_fee", jsonObj.get("total_fee"));
					jsonObj.put("trade_success", true);
					jsonObj.put("transaction_id", out_trade_no);
					jsonObj.put("message_detail", "");
					jsonObj.put("transaction_type", TransactionType.PAY.toString());
					if (logger.isInfoEnabled()) {
						logger.info("Received a callback payment: " + out_trade_no);
					}
					
			    	return updatePayOrder(translog, jsonObj, out_trade_no);
				} else {
					translog.setIsCorrect(false);
				}
		    	//we have to send a success string back to Wepay as required. 
				return SUCCESS;
		    } else {
		    	translog.setIsCorrect(false);
		    }
		} catch (Throwable e) {
			logger.warn("Error occurred while calling back from BeeCloud: " + e.getMessage(), e);
		} finally {
			if (translog != null) {
				AccountingModel.INSTANCE.create(translog, true);
			}
		}
		return FAIL;
	}

	private String updatePayOrder(PayOrderTransactionLogImpl translog, JSONObject jsonObj, String out_trade_no)
			throws Exception {
		PayOrderImpl payOrder = new PayOrderImpl();
		payOrder.setOutTradeNo(out_trade_no);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(payOrder, null, 0, 1);
		if (result != null && result.size() > 0) {
			payOrder = (PayOrderImpl)result.get(0);
			if (payOrder.getStatus() == PayOrderStatusType.PAYED) {
				// already notified.
				return SUCCESS;
			}
			int momey = jsonObj.getInt("transaction_fee");//this is fun unit.
			if (Double.valueOf(payOrder.getAmount()).intValue() != momey) {
				translog.setIsCorrect(false);
				logger.warn("Payment order("+payOrder.getSerialNumber()+") amount does not the same! PayOrder amount: " + payOrder.getAmount() + ", Callback amount: " + momey);
				return FAIL;
			}
			updatePayState(jsonObj, payOrder);
			// handle call back update.
			IPaymentService payService = AppContext.get().getService(IPaymentService.class);
			payService.notifyPaySuccess(payOrder);

			FlowEvent e = new FlowEvent("PayFlowConsumer");
			e.setAttribute("payOrder", payOrder);
			e.setAttribute("jsonObj", jsonObj);
			e.setAttribute(BuiltInAttributeConstant.KEY_AdhocNodeName, "PrepayCallBack");
			EventProcessor processor = (EventProcessor)AppContext.get().getService(
					Class.forName("org.shaolin.bmdp.workflow.internal.WorkFlowEventProcessor"));
			processor.process(e);
			return SUCCESS;
			//got adding this logic into workflow mission for tracing.
		} else {
			logger.warn("Payment order does not exist! id: " + out_trade_no);
			// send notification to admin!
			ICoordinatorService coorService = AppContext.get().getService(ICoordinatorService.class);
			NotificationImpl message = new NotificationImpl();
			message.setSubject("\u652F\u4ED8\u5F02\u5E38\u5355\u901A\u77E5\uFF01");
			message.setDescription("\u652F\u4ED8\u8BA2\u5355\u4E0D\u5B58\u5728. id: " + out_trade_no);
			message.setCreateDate(new Date());
			coorService.addNotificationToAdmin(message, false);
			return FAIL;
		}
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
	
	/**
	 * Wepay signed with MD5 encoder.
	 * 
	 * @param origin
	 * @param charsetname
	 * @return
	 */
    private static String encodeMD5(String origin, String charsetname) {  
        String resultString = null;  
        try {  
            resultString = new String(origin);  
            MessageDigest md = MessageDigest.getInstance("MD5");  
            if (charsetname == null || "".equals(charsetname))  
                resultString = byteArrayToHexString(md.digest(resultString  
                        .getBytes()));  
            else  
                resultString = byteArrayToHexString(md.digest(resultString  
                        .getBytes(charsetname)));  
        } catch (Exception exception) {  
        }  
        return resultString;  
    }  
  
	private static final String hexDigits[] = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d",
			"e", "f" };
    
    private static String byteArrayToHexString(byte b[]) {  
        StringBuffer resultSb = new StringBuffer();  
        for (int i = 0; i < b.length; i++)  
            resultSb.append(byteToHexString(b[i]));  
  
        return resultSb.toString();  
    }  
  
    private static String byteToHexString(byte b) {  
        int n = b;  
        if (n < 0)  
            n += 256;  
        int d1 = n / 16;  
        int d2 = n % 16;  
        return hexDigits[d1] + hexDigits[d2];  
    }

}
