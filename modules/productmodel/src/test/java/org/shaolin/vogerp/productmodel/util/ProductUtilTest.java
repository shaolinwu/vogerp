package org.shaolin.vogerp.productmodel.util;

import static org.junit.Assert.*;

import org.junit.Test;

public class ProductUtilTest {

	/**
	 * http://stackoverflow.com/questions/30268309/how-to-log-in-to-an-https-website-with-jsoup
	 * http://stackoverflow.com/questions/7744075/how-to-connect-via-https-using-jsoup
	 * 1. keytool -import -v -file C:\\uimaster\\apps\\vogerp\\modules\\productmodel\\src\\test\\resources\\taobao.cer -keystore C:\\uimaster\\apps\\vogerp\\modules\\productmodel\\src\\test\\resources\\taobao.jks -storepass drowssap
	 * 
	 * 
	 * @throws Exception
	 */
	@Test
	public void test() throws Exception {
		
//		InstallCert.main(new String[]{"shop71466087.taobao.com"});
		
//		System.setProperty("http.proxyHost", "web-proxy.cup.hp.com");
//		System.setProperty("http.proxyPort", "8080");
		System.setProperty("javax.net.ssl.trustStore", "C:\\uimaster\\apps\\vogerp\\modules\\productmodel\\src\\test\\resources\\taobao.jks");
		
		ProductUtil.loadProduceFromURL("https://shop71466087.taobao.com/search.htm?spm=2013.1.w5002-6328487533.1.NnvOl1&search=y");
		
	}

}
