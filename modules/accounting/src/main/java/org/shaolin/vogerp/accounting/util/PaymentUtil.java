package org.shaolin.vogerp.accounting.util;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.apache.commons.codec.digest.DigestUtils;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.bmdp.utils.StringUtil;
import org.shaolin.vogerp.accounting.IAccountingService;
import org.shaolin.vogerp.accounting.IPaymentService;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.be.IPayOrderRequest;
import org.shaolin.vogerp.accounting.be.PayOrderImpl;
import org.shaolin.vogerp.accounting.ce.CoinOrScoreReasonType;
import org.shaolin.vogerp.accounting.ce.PayBusinessType;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.accounting.dao.AccountingModel;

import cn.beecloud.BCCache;

public class PaymentUtil {
	
	public synchronized static String genAccountNumber() {
		DateParser parse = new DateParser(new Date());
		return "ACCN-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getMilliSeconds(), 5)
				+ "-" + (int)(Math.random() * 10000);
	}
	
	public synchronized static String genSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "ACCV-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getMilliSeconds(), 5)
				+ "-" + (int)(Math.random() * 10000);
	}
	
	public synchronized static String genTestSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "TEST-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getMilliSeconds(), 5)
				+ "-" + (int)(Math.random() * 10000);
	}
	
	public synchronized static String genWithdrawSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return parse.getCNDateString() 
				+ "" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getMilliSeconds(), 5)
				+ "" + (int)(Math.random() * 10000);
	}
	
	public static String getPaymentTitle(final IPayOrder order) {
		String title = "(" + order.getPayBusinessType().getDescription() + ")" 
						+ order.getDescription()!=null?order.getDescription():"";
		//title must be less then 16 Chinese words.
		return StringUtil.escapeAsEmtpy(StringUtil.getAbbreviatoryString(title, 15));
	}
	
	/**
	 * Required 10 numbers as transfer number.
	 * 
	 * @return
	 */
	public synchronized static String genWeiXiTransferNumber() {
		return System.currentTimeMillis() + "";
	}
	
	/**
	 * Weixi does not support '-' symbol in the serial number.
	 * 
	 * @return
	 */
	public synchronized static String genPayOrderSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "PayO" + parse.format(parse.getYear(), 4) + parse.format(parse.getMonth(), 2) + parse.format(parse.getDays(), 2) 
				+ parse.format(parse.getHours(), 2) + parse.format(parse.getMilliSeconds(), 5) + (int)(Math.random() * 10000);
	}
	
	/**
	 * Weixi does not support '-' symbol in the serial number.
	 * 
	 * @return
	 */
	public synchronized static String genOutTradeNumber() {
		DateParser parse = new DateParser(new Date());
		return "OTN" + parse.format(parse.getYear(), 4) + parse.format(parse.getMonth(), 2) + parse.format(parse.getDays(), 2) 
				+ parse.format(parse.getHours(), 2) + parse.format(parse.getMilliSeconds(), 5) + (int)(Math.random() * 10000);
	}

	public synchronized static String genRefundSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "RFD" + parse.format(parse.getYear(), 4) + parse.format(parse.getMonth(), 2) + parse.format(parse.getDays(), 2)
				+ parse.format(parse.getHours(), 2) + parse.format(parse.getMilliSeconds(), 5) + (int)(Math.random() * 10000);
	}
	
	/**
	 * BeeCloud MD5
	 *
	 * @param appId
	 * @param title
	 * @param amount
	 * @param out_trade_no
	 * @param appSecret
	 * @return
	 */
	public static String beeCloudSign(String appId, String title, String amount, String out_trade_no, String appSecret) {
		return getBeeCloudDigest(appId + title + amount + out_trade_no + appSecret);
	}

	/**
	 * BeeCloud MD5
	 * @param s
	 * @return
     */
	public static String getBeeCloudDigest(String s) {
		char hexDigits[] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};
		try {
			byte[] buffer = s.getBytes("UTF-8");
			MessageDigest mdTemp = MessageDigest.getInstance("MD5");
			mdTemp.update(buffer);
			byte[] md = mdTemp.digest();
			int j = md.length;
			char str[] = new char[j * 2];
			int k = 0;
			for (int i = 0; i < j; i++) {
				byte byte0 = md[i];
				str[k++] = hexDigits[byte0 >>> 4 & 0xf];
				str[k++] = hexDigits[byte0 & 0xf];
			}
			return new String(str);
		} catch (Exception e) {
			return null;
		}
	}

	/**
	 * BeeCould
	 * 
	 * @param sign
	 * @param text
	 * @param key
	 * @param input_charset
	 * @return
	 */
    /**
	 * @param appId
	 * @param title
	 * @param amount
	 * @param out_trade_no
	 * @param appSecret
	 * @return
	 */
	public static String sign(String appId, String title, String amount, String out_trade_no, String appSecret) {
		return string2MD5(appId + title + amount + out_trade_no + appSecret);
	}

	public static String string2MD5(String inStr) {
		MessageDigest md5 = null;
		try {
			md5 = MessageDigest.getInstance("MD5");
		} catch (Exception e) {
			e.printStackTrace();
			return "";
		}
		char[] charArray = inStr.toCharArray();
		byte[] byteArray = new byte[charArray.length];

		for (int i = 0; i < charArray.length; i++)
			byteArray[i] = (byte) charArray[i];
		byte[] md5Bytes = md5.digest(byteArray);
		StringBuffer hexValue = new StringBuffer();
		for (int i = 0; i < md5Bytes.length; i++) {
			int val = ((int) md5Bytes[i]) & 0xff;
			if (val < 16)
				hexValue.append("0");
			hexValue.append(Integer.toHexString(val));
		}
		return hexValue.toString();

	}

    
	public static boolean verify(String sign, String text, String key, String input_charset) {
		text = text + key;
		String mysign = DigestUtils.md5Hex(getContentBytes(text, input_charset));
		long timeDifference = System.currentTimeMillis() - Long.valueOf(key);
		return (mysign.equals(sign) && timeDifference <= 300000);
	}

	public static byte[] getContentBytes(String content, String charset) {
		if (charset == null || "".equals(charset)) {
			return content.getBytes();
		}
		try {
			return content.getBytes(charset);
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException("MD5 signature is wrong! charset: " + charset);
		}
	}
	
	public static boolean verifySign(String sign, String timestamp) {
		return verify(sign, BCCache.getAppID() + BCCache.getAppSecret(), timestamp, "UTF-8");
	}
	
	/**
	 * @param payOrder
	 * @param formId
	 * @return
	 */
	public static String getPayOperations(IPayOrder payOrder, String formId) {
		StringBuffer sb = new StringBuffer();
		if (payOrder.getStatus() == PayOrderStatusType.NOTPAYED) {
			// DO NOT perform any payment action here! let's do that by business flow!
			if (payOrder.getPayBusinessType() == PayBusinessType.MEMBERBUSI) {
	            sb.append("<button type='pay' class='uimaster_button ui-btn-inline' onclick='javascript:defaultname.");
	            sb.append(formId).append("pay(this, event);'>\u652F\u4ED8</button>");
			}
//            sb.append("<button type='cancel' class='uimaster_button ui-btn-inline onclick='javascript:defaultname.");
//            sb.append(formId).append("cancelPayment(this, event);'>\u53D6\u6D88</button>");
		} else if (payOrder.getStatus() == PayOrderStatusType.PAYED && 
				(payOrder.getPayBusinessType() == PayBusinessType.EQUIPMENTLOANBUSI 
				|| payOrder.getPayBusinessType() == PayBusinessType.EQUIPMENTRENTBUSI
				|| payOrder.getPayBusinessType() == PayBusinessType.GOLDENPORDERBUSI
				|| payOrder.getPayBusinessType() == PayBusinessType.GOLDENSORDERBUSI
				|| payOrder.getPayBusinessType() == PayBusinessType.MACHININGBUSI)) {
//			sb.append("<button type='agreedpaytoend' class='uimaster_button ui-btn-inline' onclick='javascript:defaultname.");
//            sb.append(formId).append("ensurePayment(this, event);'>\u786E\u8BA4\u4ED8\u6B3E</button>");
			IPaymentService paymentService = AppContext.get().getService(IPaymentService.class);
			if (paymentService.isRequestedForRefund(payOrder)) {
				sb.append(PayOrderStatusType.REFUNDING.getDisplayName());
			} else {
				sb.append("<button type='refund' class='uimaster_button ui-btn-inline' onclick='javascript:defaultname.");
	            sb.append(formId).append("askForRefund(this, event);'>\u7533\u8BF7\u9000\u6B3E</button>");
			}
		} else if (payOrder.getStatus() == PayOrderStatusType.REFUND) {
			//no actions
		} else if (payOrder.getStatus() == PayOrderStatusType.AGREEDPAYTOEND) {
			//no actions
		} else if (payOrder.getStatus() == PayOrderStatusType.CANCELLED) {
			//no actions
		} 
		return sb.toString();
	}
	
	public static String getReceivedPayOperations(IPayOrder payOrder, String formId) {
		StringBuffer sb = new StringBuffer();
		if (payOrder.getStatus() == PayOrderStatusType.AGREEDPAYTOEND) {
//            sb.append("<button type='pay' class='uimaster_button ui-btn-inline' onclick='javascript:defaultname.");
//            sb.append(formId).append("withdrawPayOrder(this, event);'>\u63D0\u73B0</button>");
		} 
		return sb.toString();
	}
	
	public static List<IPayOrder> getRequestedPayOrderList(IPayOrderRequest request) {
		if (request.getPayOrderIds() == null || request.getPayOrderIds().trim().isEmpty()) {
			return Collections.emptyList();
		}
		List<String> orders  = StringUtil.split(request.getPayOrderIds(), ",");
		List<IPayOrder> payOrders = new ArrayList<IPayOrder>();
		for (String id : orders) {
			PayOrderImpl payorder = AccountingModel.INSTANCE.get(Long.parseLong(id), PayOrderImpl.class);
			payOrders.add(payorder);
		}
		return payOrders;
	}

	public static String getRequestedPayOrderHTML(IPayOrderRequest request) {
		List<IPayOrder> orders = getRequestedPayOrderList(request);
		StringBuilder sb = new StringBuilder();
		sb.append("<div>");
		double tatol = 0;
		for (IPayOrder order : orders) {
			tatol += order.getAmount();
			sb.append("<div>");
			sb.append("\u8BA2\u5355\u53F7").append(order.getSerialNumber());
			sb.append(", \u989D\u5EA6").append(order.getAmount()/100);
			sb.append(order.getWithdrawn()?"<span style='color:red;'>(\u5DF2\u63D0\u73B0)</span>":"");
			sb.append(", \u63CF\u8FF0: ").append(order.getDescription());
			sb.append("</div>");
		}
		sb.append("<div>Tatol Amount: ").append(tatol/100).append("</div>");
		sb.append("</div>");
		return sb.toString();
	}
	
	public static boolean addCoin(long userId, CoinOrScoreReasonType reason) {
		IAccountingService accountingService = AppContext.get().getService(IAccountingService.class);
		return accountingService.addCoin(userId, reason);
	}
	
	public static boolean addScore(long userId, CoinOrScoreReasonType reason) {
		IAccountingService accountingService = AppContext.get().getService(IAccountingService.class);
		return accountingService.addScore(userId, reason);
	}
}
