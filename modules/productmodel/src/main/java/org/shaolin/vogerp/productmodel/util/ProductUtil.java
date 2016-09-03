package org.shaolin.vogerp.productmodel.util;

import java.io.File;
import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.Collections;
import java.util.Date;
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
import org.shaolin.bmdp.i18n.LocaleContext;
import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.bmdp.utils.FileUtil;
import org.shaolin.bmdp.utils.ImageUtil;
import org.shaolin.uimaster.page.WebConfig;
import org.shaolin.uimaster.page.exception.FormatException;
import org.shaolin.uimaster.page.od.formats.FormatUtil;
import org.shaolin.vogerp.commonmodel.util.CEOperationUtil;
import org.shaolin.vogerp.productmodel.be.IAbstractProduct;
import org.shaolin.vogerp.productmodel.be.IProduct;
import org.shaolin.vogerp.productmodel.be.IProductCharacteristic;
import org.shaolin.vogerp.productmodel.be.IProductPrice;
import org.shaolin.vogerp.productmodel.be.IProductTemplate;
import org.shaolin.vogerp.productmodel.be.ProductTemplateImpl;
import org.shaolin.vogerp.productmodel.dao.ProductModel;
import org.slf4j.LoggerFactory;

public class ProductUtil {

	public synchronized static String genSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "PSN-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getSeconds(), 2);
	}

	public synchronized static String genProductCode() {
		return "PPC-" + System.currentTimeMillis();
	}
	
	public synchronized static String genResourceId() {
		return "p" + System.nanoTime();
	}
	
	public static String getProductSummary(IProduct product) {
		StringBuffer sb = new StringBuffer();
		sb.append(product.getName()).append("(").append(product.getSerialNumber()).append(")");
		return sb.toString();
	}
	
	public static void copyTemplate(IProductTemplate template, IProduct product) {
		product.setName(template.getName());
		product.setDescription(template.getDescription());
		product.setIcon(template.getIcon());
		if (product.getHtmlDesc() == null) {
			String resId = ProductUtil.genResourceId();
			product.setHtmlDesc("/product/" + resId + "/desc.html");
			product.setPhotos("/product/" + resId + "/images");
		}
		if (template.getHtmlDesc() != null) {
			try {
				FileUtil.copyFile(new File(WebConfig.getRealPath(template.getHtmlDesc())), 
						new File(WebConfig.getRealPath(product.getHtmlDesc())));
			} catch (IOException e) {
				LoggerFactory.getLogger(ProductUtil.class).warn("Error to copy template's html content", e);
			}
		}
		if (template.getPhotos() != null) {
			try {
				FileUtil.copyFolder(new File(WebConfig.getRealPath(template.getPhotos())), 
						new File(WebConfig.getRealPath(product.getPhotos())));
			} catch (IOException e) {
				LoggerFactory.getLogger(ProductUtil.class).warn("Error to copy template's images", e);
			}
		}
		product.setEstimatedPrice(template.getEstimatedPrice());
		product.setType(template.getType());
		product.setAttributes(template.getAttributes());
	}
	
	public static String getProductCharacter(IProductTemplate product) {
		List<IProductCharacteristic> character = ProductModel.INSTANCE.searchProductCharacteristic((ProductTemplateImpl)product, null, 0, 1);
		if (character.size() > 0) {
			return CEOperationUtil.toHTMLString(character.get(0).getCeValues());
		}
		return "";
	}
	
	public static String getPriceFormat(double price) {
		String v;
		try {
			v = FormatUtil.getCurrency(price, LocaleContext.getUserLocale(), false);
		} catch (FormatException e) {
			v = String.valueOf(price);
		}
		return v;
	}
	
	public static String getPricePackage(IProductPrice price) {
		StringBuffer sb = new StringBuffer();
		String packages = price.getPackages();
		if (packages != null && !packages.trim().isEmpty()) {
			sb.append(CEOperationUtil.toHTMLString(packages));
		}
		return sb.toString();
	}
	
	public static void genProductThumbnail(IAbstractProduct template) {
		if ((template.getIcon() == null || template.getIcon().trim().length() == 0) && template.getPhotos() != null) {
			File firstImage = null;
			File directory = new File(WebConfig.getResourcePath() + template.getPhotos());
			if (directory.isDirectory()) {
				File[] files = directory.listFiles();
				for (File f : files) {
					firstImage = f;
					break;
				}
			} else {
				firstImage = directory;
			}
			if (firstImage != null) {
				try {
					File destPath = new File(WebConfig.getResourcePath() + template.getPhotos() + "/thumbnail");
					destPath.mkdir();
					File dest = new File(destPath, firstImage.getName());
					ImageUtil.createThumbnail(firstImage, 100, dest);
					template.setIcon(dest.getAbsolutePath().replace(WebConfig.getResourcePath(), ""));
				} catch (IOException e) {
					LoggerFactory.getLogger(ProductUtil.class).info("Failed to create the thumbnail for product: " + e.getMessage(), e);
				}
			} 
        }
	}
	
	private static final String UserAgent = "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2";
	static {
		
//		try {
//			enableSSLSocket();
//		} catch (KeyManagementException e) {
//			e.printStackTrace();
//		} catch (NoSuchAlgorithmException e) {
//			e.printStackTrace();
//		}
	}
	public static List loadProduceFromURL(String url) throws Exception {
		Document doc = Jsoup.connect(url).header("User-Agent", UserAgent).get();
		Elements result = doc.select(".shop-hesper-bd");
		Iterator<Element> i = result.iterator();
		if (!i.hasNext()) {
			return Collections.emptyList();
		}
		Element root = i.next();
		root.select(".item");
		while (i.hasNext()) {
			Element e = i.next();
			String phref = e.child(0).child(0).attr("href");
			String pname = e.child(0).child(0).child(0).attr("alt");
			System.out.println("Name: " + pname + ", Link: " + phref);
		}
		return Collections.emptyList();
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
}
