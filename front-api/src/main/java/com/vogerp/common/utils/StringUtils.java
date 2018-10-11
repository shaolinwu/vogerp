package com.vogerp.common.utils;

import java.math.BigDecimal;
import java.text.NumberFormat;

/**
 * @author bootdo
 */
public class StringUtils extends org.apache.commons.lang3.StringUtils{
	
	public static String formatMoneyTowPoints(BigDecimal money) {
		if (money == null) {
			return "0.00";
		}
		NumberFormat numberFormat1 = NumberFormat.getNumberInstance();
		String total = numberFormat1.format(money);
		if (total.contains(".")) {
			String xs = total.substring(total.indexOf("."), total.length());
			if (xs.length() == 2) {
				total = total + "0";
			}
		} else {
			total = total + ".00";
		}
		return total;
	}
	
	public static String formatMoneyNoPoints(BigDecimal money) {
		if (money == null) {
			return "0";
		}
		NumberFormat numberFormat1 = NumberFormat.getNumberInstance();
		String total = numberFormat1.format(money);
		if (total.contains(".")) {
			total=total.substring(0,total.indexOf("."));
		}
		return total;
	}
	
	
	public static String dealNickName(String s) {
		String nickname = "";
		if ("".equals(s) || s == null) {
			return nickname;
		}
		int length = 0;
		boolean hasNext = false;
		for (int i = 0; i < s.length(); i++) {
			char ch = s.charAt(i);
			if (length < 16) {
				nickname += String.valueOf(ch);
			}
			int ascii = Character.codePointAt(s, i);
			if (ascii >= 0 && ascii <= 255) {
				length++;
			} else {
				length += 2;
			}
			if (length > 16) {
				hasNext = true;
				break;
			}
		}
		if (hasNext&&nickname.length()!=s.length()) {
			nickname = nickname +"...";
		}
		return nickname;
	}
	
}
