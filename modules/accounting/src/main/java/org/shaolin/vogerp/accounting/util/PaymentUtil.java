package org.shaolin.vogerp.accounting.util;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.util.Date;

import org.apache.commons.codec.digest.DigestUtils;
import org.shaolin.bmdp.utils.DateParser;

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
	 * must keeping the sequence.
	 * 
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

	public static String convertMD5(String inStr) {
		char[] a = inStr.toCharArray();
		for (int i = 0; i < a.length; i++) {
			a[i] = (char) (a[i] ^ 't');
		}
		String s = new String(a);
		return s;
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

	public static boolean verify(String sign, String text, String key, String input_charset) {
		text = text + key;
		String mysign = DigestUtils.md5Hex(getContentBytes(text, input_charset));
		long timeDifference = System.currentTimeMillis() - Long.valueOf(key);
		return (mysign.equals(sign) && timeDifference <= 300000);
	}

	public static boolean verifySign(String sign, String timestamp) {
		return verify(sign, BCCache.getAppID() + BCCache.getAppSecret(), timestamp, "UTF-8");
	}

}
