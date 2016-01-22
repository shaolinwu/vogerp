package org.shaolin.vogerp.ecommercial.util;

import java.util.Date;

import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.vogerp.ecommercial.dao.OrderModel;

public class OrderUtil {
	
	public static String genSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "GOSN-" + parse.getCNDateString() + "-"
				+ parse.format(parse.getHours(), 2) + ""
				+ parse.format(parse.getSeconds(), 2);
	}
	
}
