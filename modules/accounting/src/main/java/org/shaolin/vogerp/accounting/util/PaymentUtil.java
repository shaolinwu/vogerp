package org.shaolin.vogerp.accounting.util;

import java.security.MessageDigest;

public class PaymentUtil {

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
