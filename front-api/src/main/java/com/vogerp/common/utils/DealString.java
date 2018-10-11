package com.vogerp.common.utils;

import java.lang.reflect.*;

public class DealString {

	public static void formatObjectString(Object o, Class<?> c) {
		// 获取类中的所有定义字段
		try {
			Method[] mtds = c.getMethods();
			for (int i = 0; i < mtds.length; i++) {
//				System.out.println(mtds[i].getName());
				if (mtds[i].getName().startsWith("get") && !"".equals(mtds[i].invoke(o)) && mtds[i].invoke(o)!=null && mtds[i].getReturnType() == String.class) {
//					if ("getWebsite".equals( mtds[i].getName())) {
//						System.out.println("????????"+mtds[i].invoke(o).toString());
//					}
					String methodValue =  mtds[i].invoke(o).toString();
					String formatString = ContentDeal.replaceString(methodValue);
//					System.out.println(methodValue + "---" + formatString);
					Method m = c.getMethod(mtds[i].getName().replace("get", "set"), String.class);
					m.invoke(o, formatString);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
