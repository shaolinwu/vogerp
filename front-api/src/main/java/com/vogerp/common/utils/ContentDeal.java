package com.vogerp.common.utils;

public class ContentDeal {

	
	public static String replaceString(String content) {
		if (!"".equals(content)||content!=null) {
			content = content.replace("&nbsp;", "");
		}
		return content;
	}
	
//	public static void main(String[] args) {
//		String flag = replaceString("&nbaaasp;&nbsp;AAAA&nbsp;&nbsp;");
//		
//		System.out.println(flag);
//	}
	
}
