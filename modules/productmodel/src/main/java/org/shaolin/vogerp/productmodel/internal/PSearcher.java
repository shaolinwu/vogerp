package org.shaolin.vogerp.productmodel.internal;

import java.io.File;
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
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.utils.FileUtil;
import org.shaolin.bmdp.utils.ImageUtil;
import org.shaolin.bmdp.utils.StringUtil;
import org.shaolin.uimaster.page.WebConfig;
import org.shaolin.uimaster.page.ajax.json.JSONObject;
import org.shaolin.vogerp.productmodel.be.IImprotProductItem;
import org.shaolin.vogerp.productmodel.be.IProduct;
import org.shaolin.vogerp.productmodel.be.ImprotProductItemImpl;
import org.shaolin.vogerp.productmodel.be.ProductImpl;
import org.shaolin.vogerp.productmodel.util.ProductUtil;
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
	
	public List<IProduct> downloadDetail(List<IImprotProductItem> items) {
		ArrayList<IProduct> resultJsonItems = new ArrayList<IProduct>();
		for (IImprotProductItem item: items) {
			ProductImpl product = new ProductImpl();
			product.setOrgId(UserContext.getUserContext().getOrgId());
			product.setName(item.getName());
			product.setDescription(item.getName());
			product.setSerialNumber(ProductUtil.genSerialNumber());
			product.setType("OtherProductType,1");//TODO: how to determine it?
			String resId = ProductUtil.genResourceId();
			product.setHtmlDesc("/product/" + resId + "/desc.html");
			product.setPhotos("/product/" + resId + "/images");
			
			for (Handler h: handlers) {
				if (h.isAcceptable(item.getDetailLink())) {
					try {
						//item.getDetailLink(), item.getDetailLink().substring(0, item.getDetailLink().indexOf(".com") + 4
						//item.getImageLink(), item.getImageLink().substring(0, item.getImageLink().indexOf(".com") + 4)
						h.downloadDetail(item, product);
					} catch (Exception e) {
						logger.warn("Failed to parse this link: " + item.getDetailLink(), e);
					}
				}
			}
			resultJsonItems.add(product);
			// after downloading
			ProductUtil.genProductThumbnail(product);
		}
		return resultJsonItems;
	}
	
	private static Document getDocument(String url){
		if (url == null || url.trim().length() == 0) {
			return Document.createShell(url);
		}
		try {
			Document d = Jsoup.connect(url).header("User-Agent", UserAgent).get();
			return d;
		} catch (Exception e) {
			logger.warn("Failed to parse this link: " + url, e);
			return Document.createShell(url);
		}
	}
	
	public interface Handler {
		public boolean isAcceptable (String url);
		public List<IImprotProductItem> execute(String url, String baseUrl) throws Exception;
		public void downloadDetail(IImprotProductItem item, IProduct product) throws Exception;
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

		@Override
		public void downloadDetail(IImprotProductItem item, IProduct product)
				throws Exception {
			Document rootdoc = getDocument(item.getDetailLink());
			
			String detailLink = null;
			Elements result = rootdoc.select("script");
			Iterator<Element> ii = result.iterator();
			while (ii.hasNext()) {
				Element e = ii.next();
				if (e.html().indexOf("var g_config = {") != -1) {
					detailLink = e.html();
					detailLink = detailLink.substring(detailLink.indexOf("descUrl"));
					detailLink = detailLink.substring(0, detailLink.indexOf("counterApi"));
					detailLink = detailLink.substring(detailLink.indexOf("?") + 1);
					detailLink = detailLink.substring(0, detailLink.indexOf("' : '"));
					detailLink = detailLink.substring(2);
					break;
				}
			}
			if (detailLink != null) {
				Document detaildoc = getDocument("http:" + detailLink);
				String html = detaildoc.html().replace("var desc='", "").replace("';", "");
				StringBuffer sb = new StringBuffer();
				sb.append(html);
				FileUtil.write(WebConfig.getRealPath(product.getHtmlDesc().replace("desc.html", "")), "desc.html", sb.toString());
			}
			
			result = rootdoc.select("#J_StrPriceModBox");
			ii = result.iterator();
			if (ii.hasNext()) {
				try {
					String strPrice = ii.next().child(1).child(0).child(1).text();
					if (strPrice.indexOf("-") != -1) {
						strPrice = strPrice.substring(strPrice.indexOf("-") + 1).trim();
					}
					product.setEstimatedPrice(Double.valueOf(strPrice));
				} catch (Exception ee) {}
			}
			
			result = rootdoc.select(".tb-gallery");
			ii = result.iterator();
			if (ii.hasNext()) {
				Elements imgs = ii.next().select("img");
				int size = imgs.size();
				for (int j=0; j < size; j++) {
					try {
						String url ="";
						Element td = imgs.get(j);
						if (td.hasAttr("data-src")) {
							url = "https:" + td.attr("data-src").replace("50x50", "400x400");
						} else {
							url = "https:" + td.attr("src").replace("50x50", "400x400");
						}
						String fileName = url.substring(url.lastIndexOf('/') + 1);
						if (fileName.length() > 50) {
							fileName = (Math.random()*10000)+fileName.substring(fileName.length() - 20);
						}
						File saveFile = new File(WebConfig.getRealPath(product.getPhotos()));
						if (!saveFile.exists()) {saveFile.mkdirs();}
						ImageUtil.downloadImage(url, saveFile, fileName);
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			} 
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
				String psrc = e.child(0).child(0).toString();
				psrc = psrc.substring(psrc.indexOf("data-ks-lazyload=") + "data-ks-lazyload=".length());
				psrc = psrc.substring(1, psrc.indexOf(" src=") - 1);
				ImprotProductItemImpl jitem = new ImprotProductItemImpl();
				jitem.setName(pname);
				Iterator<Element> iprice= e.select(".cprice-area").iterator();
				try {
					jitem.setPrice(Double.parseDouble(iprice.next().child(1).html().trim()));
				} catch (Exception ex) {}
				jitem.setImageLink("https:" + psrc);
				jitem.setDetailLink("https:" + phref);
				resultJsonItems.add(jitem);
			}
			return resultJsonItems;
		}
		
		@Override
		public void downloadDetail(IImprotProductItem item, IProduct product)
				throws Exception {
			Document rootdoc = getDocument(item.getDetailLink());
			
			String detailLink = null;
			Elements result = rootdoc.select("script");
			Iterator<Element> ii = result.iterator();
			while (ii.hasNext()) {
				Element e = ii.next();
				if (e.html().indexOf("\"noSkipMode\":{") != -1) {
					detailLink = e.html();
					detailLink = detailLink.substring(detailLink.indexOf("\"httpsDescUrl\":") + "\"httpsDescUrl\":".length());
					detailLink = detailLink.substring(0, detailLink.indexOf("\"apiAddCart\""));
					detailLink = detailLink.substring(1);
					detailLink = detailLink.substring(0, detailLink.indexOf("\"},"));
					break;
				}
			}
			if (detailLink != null) {
				Document detaildoc = getDocument("https:" + detailLink);
				String html = detaildoc.html().replace("var desc='", "").replace("';", "");
				StringBuffer sb = new StringBuffer();
				
				Elements attrList = rootdoc.select("#J_AttrList");
				Iterator<Element> i = attrList.iterator();
				if (i.hasNext()) {
					sb.append(i.next().html());
				}
				sb.append(html);
				FileUtil.write(WebConfig.getRealPath(product.getHtmlDesc().replace("desc.html", "")), "desc.html", sb.toString());
			}
			
			product.setEstimatedPrice(item.getPrice());
			
			result = rootdoc.select(".tb-gallery");
			ii = result.iterator();
			if (ii.hasNext()) {
				Elements imgs = ii.next().select("img");
				int size = imgs.size();
				for (int j=0; j < size; j++) {
					try {
						String url ="";
						Element td = imgs.get(j);
						if (td.hasAttr("data-src")) {
							url = "https:" + td.attr("data-src").replace("60x60", "430x430");
						} else {
							url = "https:" + td.attr("src").replace("60x60", "430x430");
						}
						String fileName = url.substring(url.lastIndexOf('/') + 1);
						if (fileName.length() > 50) {
							fileName = (Math.random()*10000)+fileName.substring(fileName.length() - 20);
						}
						File saveFile = new File(WebConfig.getRealPath(product.getPhotos()));
						if (!saveFile.exists()) {saveFile.mkdirs();}
						ImageUtil.downloadImage(url, saveFile, fileName);
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			} 
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
		
		@Override
		public void downloadDetail(IImprotProductItem item, IProduct product)
				throws Exception {
			Document doc = getDocument(item.getDetailLink());
			
			Elements result = doc.select(".proDetail_box");
			Iterator<Element> ii = result.iterator();
			if (ii.hasNext()) {
				Element e = ii.next().child(1);
				StringBuffer sb = new StringBuffer();
				sb.append("<HTML>\n<HEAD>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
				sb.append("<link href=\"/uimaster/product/product.css\" rel=\"stylesheet\" type=\"text/css\">\n</HEAD>\n<BODY>\n");
				sb.append(e.html());
				sb.append("\n</BODY></HTML>");
				
				FileUtil.write(WebConfig.getRealPath(product.getHtmlDesc().replace("desc.html", "")), "desc.html", sb.toString());
			}
			
			result = doc.select(".prices");
			ii = result.iterator();
			if (ii.hasNext()) {
				try {
					String strPrice = ii.next().child(0).child(1).child(1).text();
					product.setEstimatedPrice(Double.valueOf(strPrice));
				} catch (Exception ee) {}
			}
			
			result = doc.select(".mImgs");
			ii = result.iterator();
			if (ii.hasNext()) {
				Element tr = ii.next().child(0).child(0).child(0);
				int size = tr.children().size();
				for (int j=0; j < size; j++) {
					try {
						Element td = tr.child(j);
						if (!td.hasAttr("rel")) {continue;}
						JSONObject tdItem = new JSONObject(td.attr("rel"));
						String url = tdItem.getString("largeimage");
						String fileName = url.substring(url.lastIndexOf('/') + 1);
						if (fileName.length() > 50) {
							fileName = fileName.substring(fileName.length() - 20);
						}
						File saveFile = new File(WebConfig.getRealPath(product.getPhotos()));
						if (!saveFile.exists()) {saveFile.mkdirs();}
						ImageUtil.downloadImage(url, saveFile, fileName);
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			} else {
				result = doc.select(".detailPhoto");
				ii = result.iterator();
				if (ii.hasNext()) {
					try {
						String url = ii.next().child(0).child(0).child(0).child(0).child(0).attr("data-url");
						String fileName = url.substring(url.lastIndexOf('/') + 1);
						if (fileName.length() > 50) {
							fileName = fileName.substring(fileName.length() - 20);
						}
						File saveFile = new File(WebConfig.getRealPath(product.getPhotos()));
						if (!saveFile.exists()) {saveFile.mkdirs();}
						ImageUtil.downloadImage(url, saveFile, fileName);
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
		}
	}
}
