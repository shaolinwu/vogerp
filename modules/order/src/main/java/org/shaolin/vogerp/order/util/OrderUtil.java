package org.shaolin.vogerp.order.util;

import java.util.Date;

import org.shaolin.bmdp.utils.DateParser;

public class OrderUtil {

	public static String genSaleOrderSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "SOSN-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getSeconds(), 2)
				+ "-" + parse.getMilliSeconds();
	}
	
	public static String genPurchaseOrderSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "PCOSN-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getSeconds(), 2)
				+ "-" + parse.getMilliSeconds();
	}

}
