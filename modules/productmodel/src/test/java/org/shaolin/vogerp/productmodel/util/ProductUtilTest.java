package org.shaolin.vogerp.productmodel.util;

import java.util.List;

import org.junit.Test;
import org.shaolin.bmdp.persistence.BEEntityDaoObject;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.internal.AppServiceManagerImpl;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.uimaster.page.WebConfig;
import org.shaolin.vogerp.productmodel.be.IImprotProductItem;
import org.shaolin.vogerp.productmodel.be.IProduct;
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
		UserContext.register(null, new UserContext(), "zh_CN", null, false);
		WebConfig.setResourcePath("C:\\uimaster\\apps\\vogerp\\modules\\productmodel\\src\\test\\resources");
		BEEntityDaoObject.testMode = true;
//		InstallCert.main(new String[]{"shop71466087.taobao.com"});
		
//		System.setProperty("http.proxyHost", "web-proxy.cup.hp.com");
//		System.setProperty("http.proxyPort", "8080");
		//System.setProperty("javax.net.ssl.trustStore", "C:\\uimaster\\apps\\vogerp\\modules\\productmodel\\src\\test\\resources\\taobao.jks");
		
//		List<IImprotProductItem> result = PSearcher.getInstance().execute("http://shop60280395.taobao.com/search.htm?spm=a1z10.1-c.0.0.ojf7QS&search=y");
//		for (IImprotProductItem item: result) {
//			System.out.println(item.toString());
//		}
//		List<IProduct> products = PSearcher.getInstance().downloadDetail(result);
		
//		System.out.println("\n\n\n");
//		List<IImprotProductItem> result = PSearcher.getInstance().execute("http://suofeinuo.tmall.com/category.htm?spm=a220o.1000855.w5001-14924478608.2.B7SlzA&search=y&scene=taobao_shop");
//		for (IImprotProductItem item: result) {
//			System.out.println(item.toString());
//		}
//		List<IProduct> products = PSearcher.getInstance().downloadDetail(result);
		
//		System.out.println("\n\n\n");
//		result = PSearcher.getInstance().execute("http://cn.made-in-china.com/showroom/dgfuyao-product-list-1.html");
//		for (IImprotProductItem item: result) {
//			System.out.println(item.toString());
//		}
		//products = PSearcher.getInstance().downloadDetail(result);
		
//		String singlePage = "https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-841787386.32.drWVli&id=522700434883";
		String singlePage = "https://item.taobao.com/item.htm?id=538444950577&ali_refid=a3_430584_1006:1123808633:N:led+%E7%81%AF%E6%B3%A1:9e15a9d9b39884aa18ac1c14a6349c03&ali_trackid=1_9e15a9d9b39884aa18ac1c14a6349c03&spm=a219r.lm5704.14.9.8qDyCR#detail";
//		String singlePage = "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-14924478684.99.TJtJrg&id=38818480670&rn=b2a44fa766c1b44ac9211801ec83d9e3&abbucket=2&skuId=54195407855";
		IProduct product = PSearcher.getInstance().downloadDetail(singlePage);
		System.out.println(product.toString());
		System.out.println(product.getPriceList());
		System.out.println(product.getPriceList().size());
		
	}

}
