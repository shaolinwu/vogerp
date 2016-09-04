package org.shaolin.vogerp.productmodel.internal;

import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.X509TrustManager;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.shaolin.bmdp.utils.StringUtil;
import org.shaolin.vogerp.productmodel.be.IImprotProductItem;
import org.shaolin.vogerp.productmodel.be.ImprotProductItemImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PSearcher {

	private static final Logger logger = LoggerFactory.getLogger(PSearcher.class);

	private static PSearcher INSTANCE = new PSearcher();
	
	private static final String UserAgent = "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2";
	
	private List<Handler> handlers = new ArrayList<Handler>();
	
//	private WebClient wc = new WebClient();
	
	public static PSearcher getInstance() {
		return INSTANCE;
	}
	
	private PSearcher() {
//		wc.getOptions().setUseInsecureSSL(true);
//        wc.getOptions().setJavaScriptEnabled(true);
//        wc.getOptions().setCssEnabled(false);
//        wc.getOptions().setThrowExceptionOnScriptError(false); 
//        wc.getOptions().setTimeout(10000);
		
		handlers.add(new ToBHandler());
		handlers.add(new TMHandler());
		handlers.add(new CnMHandler());
	}
	
	
	private static void ignoreSSLSocketCheck() throws KeyManagementException, NoSuchAlgorithmException {
        HttpsURLConnection.setDefaultHostnameVerifier(new HostnameVerifier() {
            public boolean verify(String hostname, SSLSession session) {
                return true;
            }
        });
 
        SSLContext context = SSLContext.getInstance("TLS");
        context.init(null, new X509TrustManager[]{new X509TrustManager() {
            public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
            }
 
            public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
            }
 
            public X509Certificate[] getAcceptedIssuers() {
                return new X509Certificate[0];
            }
        }}, new SecureRandom());
        HttpsURLConnection.setDefaultSSLSocketFactory(context.getSocketFactory());
    }
	
	public List<IImprotProductItem> execute(String url) {
//        HtmlPage page = wc.getPage(url);  
        //String pageXml = page.asXml();
		//parse(pageXml, baseUrl);
		for (Handler h: handlers) {
			if (h.isAcceptable(url)) {
				try {
					return h.execute(url, url.substring(0, url.indexOf(".com") + 4));
				} catch (Exception e) {
					logger.warn("Failed to parse this link: " + url, e);
					break;
				}
			}
		}
		
		return Collections.emptyList();
	}
	
	public interface Handler {
		public boolean isAcceptable (String url);
		public List<IImprotProductItem> execute(String url, String baseUrl) throws Exception;
	}
	
	public static class ToBHandler implements Handler {

		@Override
		public boolean isAcceptable (String url) {
			return url.indexOf("taobao.com") != -1;
		}
		
		@Override
		public List<IImprotProductItem> execute(String url, String baseUrl) throws Exception {
			Document doc = Jsoup.connect(url).header("User-Agent", UserAgent).get();
			//System.out.println(doc.toString());
			Elements link = doc.select("#J_ShopAsynSearchURL");
			Iterator<Element> i = link.iterator();
			if (!i.hasNext()) {
				return Collections.emptyList();
			}
			Element searchLink = i.next();
			doc = Jsoup.connect(baseUrl+searchLink.attr("value")).header("User-Agent", UserAgent).get();
			String productResult = StringUtil.unescapeHtmlTags(doc.toString());
			doc = Jsoup.parse(productResult.replace("\\\"", ""));
			Elements result = doc.select(".shop-hesper-bd");
			i = result.iterator();
			if (!i.hasNext()) {
				return Collections.emptyList();
			}
			ArrayList<IImprotProductItem> resultJsonItems = new ArrayList<IImprotProductItem>();
			Element root = i.next();
			i = root.select(".item").iterator();
			while (i.hasNext()) {
				Element e = i.next();
				//class="photo"
				String phref = e.child(0).child(0).attr("href");
				String pname = e.child(0).child(0).child(0).attr("alt");
				String psrc = e.child(0).child(0).child(0).attr("src");
				ImprotProductItemImpl jitem = new ImprotProductItemImpl();
				jitem.setName(pname);
				jitem.setImageLink("https:" + psrc);
				jitem.setDetailLink("https:" + phref);
				resultJsonItems.add(jitem);
			}
			return resultJsonItems;
		}
		
	}
	
	public static class TMHandler implements Handler {

		@Override
		public boolean isAcceptable (String url) {
			return url.indexOf("tmall.com") != -1;
		}
		
		@Override
		public List<IImprotProductItem> execute(String url, String baseUrl) throws Exception {
			Document doc = Jsoup.connect(url).header("User-Agent", UserAgent).get();
			//System.out.println(doc.toString());
			Elements link = doc.select("#J_ShopAsynSearchURL");
			Iterator<Element> i = link.iterator();
			if (!i.hasNext()) {
				return Collections.emptyList();
			}
			Element searchLink = i.next();
			doc = Jsoup.connect(baseUrl+searchLink.attr("value")).header("User-Agent", UserAgent).get();
			String productResult = StringUtil.unescapeHtmlTags(doc.toString());
			doc = Jsoup.parse(productResult.replace("\\\"", ""));
			Elements result = doc.select(".J_TItems");
			i = result.iterator();
			if (!i.hasNext()) {
				return Collections.emptyList();
			}
			ArrayList<IImprotProductItem> resultJsonItems = new ArrayList<IImprotProductItem>();
			Element root = i.next();
			i = root.select(".item").iterator();
			while (i.hasNext()) {
				Element e = i.next();
				//class="photo"
				String phref = e.child(0).child(0).attr("href");
				String pname = e.child(0).child(0).child(0).attr("alt");
				String psrc = e.child(0).child(0).child(0).attr("src");
				if (psrc == null || psrc.length() == 0) {
					psrc = e.child(0).child(0).toString();
					psrc = psrc.substring(psrc.indexOf("data-ks-lazyload=") + "data-ks-lazyload=".length());
					psrc = psrc.substring(0, psrc.indexOf(" src="));
				}
				ImprotProductItemImpl jitem = new ImprotProductItemImpl();
				jitem.setName(pname);
				jitem.setImageLink("https:" + psrc);
				jitem.setDetailLink("https:" + phref);
				resultJsonItems.add(jitem);
			}
			return resultJsonItems;
		}
		
	}
	
	public static class CnMHandler implements Handler {

		@Override
		public boolean isAcceptable (String url) {
			return url.indexOf("made-in-china.com") != -1;
		}
		
		@Override
		public List<IImprotProductItem> execute(String url, String baseUrl) throws Exception {
			Document doc = Jsoup.connect(url).header("User-Agent", UserAgent).get();
			//System.out.println(doc.toString());
			Elements link = doc.select(".prod-lst");
			Iterator<Element> i = link.iterator();
			if (!i.hasNext()) {
				return Collections.emptyList();
			}
			ArrayList<IImprotProductItem> resultJsonItems = new ArrayList<IImprotProductItem>();
			Element searchLink = i.next();
			i = searchLink.select(".photo160").iterator();
			while (i.hasNext()) {
				Element e = i.next();
				//class="photo"
				String phref = e.child(1).attr("href");
				String pname = e.child(1).child(0).attr("alt");
				String psrc =  e.child(1).child(0).attr("src");
				ImprotProductItemImpl jitem = new ImprotProductItemImpl();
				jitem.setName(pname);
				jitem.setImageLink(psrc);
				jitem.setDetailLink(phref);
				resultJsonItems.add(jitem);
			}
			return resultJsonItems;
		}
		
	}
}
