package org.shaolin.vogerp.accounting.util;

import java.security.MessageDigest;

public class PaymentUtil {
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
			//获得MD5摘要算法的 MessageDigest 对象
			MessageDigest mdTemp = MessageDigest.getInstance("MD5");
			//使用指定的字节更新摘要
			mdTemp.update(buffer);
			//获得密文
			byte[] md = mdTemp.digest();
			//把密文转换成十六进制的字符串形式
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

}
