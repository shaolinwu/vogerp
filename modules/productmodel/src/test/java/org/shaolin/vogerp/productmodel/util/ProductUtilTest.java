package org.shaolin.vogerp.productmodel.util;

import java.util.List;

import org.junit.Test;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.internal.AppServiceManagerImpl;
import org.shaolin.vogerp.productmodel.be.IImprotProductItem;
import org.shaolin.vogerp.productmodel.internal.PSearcher;

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
		
		AppContext.register(new AppServiceManagerImpl("test", this.getClass().getClassLoader()));
		
//		InstallCert.main(new String[]{"shop71466087.taobao.com"});
		
//		System.setProperty("http.proxyHost", "web-proxy.cup.hp.com");
//		System.setProperty("http.proxyPort", "8080");
		//System.setProperty("javax.net.ssl.trustStore", "C:\\uimaster\\apps\\vogerp\\modules\\productmodel\\src\\test\\resources\\taobao.jks");
		
		List<IImprotProductItem> result = PSearcher.getInstance().execute("https://hongyudaopian.taobao.com/search.htm?spm=a1z10.1-c.w5002-11600989054.1.FiHlmf&search=y");
		for (IImprotProductItem item: result) {
			System.out.println(item.toString());
		}
		System.out.println("\n\n\n");
		result = PSearcher.getInstance().execute("https://plandoohb.tmall.com/search.htm?spm=a220m.1000858.1000725.17.uhpOjG&rn=fa84254cb8c885e0d5eb2bd87ed3c09b&keyword=%D0%D4%B8%D0%C0%D9%CB%BF&user_number_id=1751089811");
		for (IImprotProductItem item: result) {
			System.out.println(item.toString());
		}
		System.out.println("\n\n\n");
		result = PSearcher.getInstance().execute("http://cn.made-in-china.com/showroom/dgfuyao-product-list-1.html");
		for (IImprotProductItem item: result) {
			System.out.println(item.toString());
		}
	}

}
