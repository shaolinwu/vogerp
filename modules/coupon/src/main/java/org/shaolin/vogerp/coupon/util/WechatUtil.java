package org.shaolin.vogerp.coupon.util;

import java.util.Arrays;
import java.util.Date;
import java.util.UUID;
import java.util.Map;
import java.util.HashMap;
import java.util.Formatter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;

import org.shaolin.bmdp.json.JSONException;
import org.shaolin.bmdp.json.JSONObject;

public class WechatUtil {

	private static final String TOKEN = "abcdefg";
	
	public static final String OPEN_ID = "openId";

	public static final String DEVELOP_WEIXIN = "develop_weixin";	
	
	public static final String EVENT_KEY = "EventKey";
	
	public static final String LOTTERY_KEY = "01";
	
	public static final String LOTTERY_LINK = "http://www.mr-prize.com/uimaster/webflow.do?_timestamp=1&_chunkname=org.shaolin.bmdp.coupon.diagram.Lottery&_nodename=Start&orgid=15";
	
	public static final Map<String, String> wechatKeyMap = new HashMap<String, String>();
	
	public static String accessToken = null;
	
	public static Date accessTokenExpireTime = null;
	
	public static String jsapiTicket = null;
	
	public static Date jsapiTicketExpireTime = null;
	
	static {
		wechatKeyMap.put("01", "http://www.mr-prize.com/uimaster/webflow.do?_timestamp=1&_chunkname=org.shaolin.bmdp.coupon.diagram.Lottery&_nodename=Start&orgid=15");
	}
	
	
	public static void main(String[] args) throws Exception {
		//String url = "http://localhost:8080/uimaster/webflow.do?_timestamp=1&_chunkname=org.shaolin.bmdp.coupon.diagram.Lottery&_nodename=ChoiceDiscountProduct&_needCheckSessionTimeOut=true";
		String url = "http://www.mr-prize.com/uimaster/webflow.do?_timestamp=1&_chunkname=org.shaolin.bmdp.coupon.diagram.Lottery&_nodename=ChoiceDiscountProduct&_needCheckSessionTimeOut=true";
		System.out.println(generateSign(15L, url));
	}
	
	public static String generateSign(Long orgId, String url) throws Exception {
		String appId = "wx8f4239ff75ca1770";
		String appSecret = "43980f0ded91775f6e505c97657e7789";
		String charset = "UTF-8";
		
		Date current = new Date();
		if (null == jsapiTicket || "".equals(jsapiTicket) 
				|| (jsapiTicketExpireTime != null && jsapiTicketExpireTime.compareTo(current) < 0)) {
			if (null == accessToken || "".equals(accessToken) 
					|| (null != accessTokenExpireTime && accessTokenExpireTime.compareTo(new Date()) < 0)) {
				accessToken = getAccess_token(appId, appSecret, charset);
				accessTokenExpireTime = CouponUtil.addTime(new Date(), 7200 * 1000);
			}
			System.out.println("access_token " + accessToken);
			
			jsapiTicket = getJsapiTicket(accessToken, charset);
		}
		System.out.println("jsapiTicket " + jsapiTicket);

		StringBuilder result = new StringBuilder();
		Map<String, String> ret = sign(jsapiTicket, url);
		for (Map.Entry entry : ret.entrySet()) {
			result.append(entry.getKey()).append("=").append(entry.getValue()).append(",");
			System.out.println(entry.getKey() + ", " + entry.getValue());
		}
		if (result.length() > 0) {
			return result.substring(0, result.length() - 1).toString();
		}
		return result.toString();
	};

	public static String getStringFromJson(JSONObject json, String key) throws JSONException {
		if (json.has(key)) {
			return json.getString(key);
		}
		return null;
	}
	
	public static String getAccess_token(String appId, String appSecret, String charset) throws JSONException, IOException {
		String url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="
				+ appId + "&secret=" + appSecret;
		String message = HttpsUtil.get(url, charset);
		JSONObject tokenJson = new JSONObject(message);
		return getStringFromJson(tokenJson, "access_token");
	}
	
	public static String getJsapiTicket(String accessToken, String charset) throws JSONException, IOException {
		String url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=" + accessToken + "&type=jsapi";
		String message = HttpsUtil.get(url, charset);
		JSONObject ticketJson = new JSONObject(message);
		return getStringFromJson(ticketJson, "ticket");
	}
	
	public static String getOpenIdByOauth(String code) throws JSONException, IOException {
		String appId = "wx8f4239ff75ca1770";
		String appSecret = "43980f0ded91775f6e505c97657e7789";
		String charset = "UTF-8";
		String url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + appId + "&secret=" + appSecret + "&code=" + code + "&grant_type=authorization_code";
		String message = HttpsUtil.get(url, charset);
		JSONObject accessTokenJson = new JSONObject(message);
		return getStringFromJson(accessTokenJson, "openid");
	}
	
	public static Map<String, String> sign(String jsapi_ticket, String url) {
		Map<String, String> ret = new HashMap<String, String>();
		String nonce_str = create_nonce_str();
		String timestamp = create_timestamp();
		String string1;
		String signature = "";

		string1 = "jsapi_ticket=" + jsapi_ticket + "&noncestr=" + nonce_str
				+ "&timestamp=" + timestamp + "&url=" + url;
		System.out.println(string1);

		try {
			MessageDigest crypt = MessageDigest.getInstance("SHA-1");
			crypt.reset();
			crypt.update(string1.getBytes("UTF-8"));
			signature = byteToHex(crypt.digest());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}

		ret.put("url", url);
		ret.put("jsapi_ticket", jsapi_ticket);
		ret.put("nonceStr", nonce_str);
		ret.put("timestamp", timestamp);
		ret.put("signature", signature);

		return ret;
	}

	private static String byteToHex(final byte[] hash) {
		Formatter formatter = new Formatter();
		for (byte b : hash) {
			formatter.format("%02x", b);
		}
		String result = formatter.toString();
		formatter.close();
		return result;
	}

	private static String create_nonce_str() {
		return UUID.randomUUID().toString();
	}

	private static String create_timestamp() {
		return Long.toString(System.currentTimeMillis() / 1000);
	}

	public static boolean verifyToken(String signature, String timestamp,
			String nonce) {
		String[] str = { TOKEN, timestamp, nonce };
        Arrays.sort(str); 
        String bigStr = str[0] + str[1] + str[2];
        String digest = SHA1(bigStr);
        
        if (signature.equals(digest)) {
        	return true;
        }
        return false;
	}
	
	public static String SHA1(String decript) {
		try {
			MessageDigest digest = java.security.MessageDigest
					.getInstance("SHA-1");
			digest.update(decript.getBytes());
			byte messageDigest[] = digest.digest();
			// Create Hex String
			StringBuffer hexString = new StringBuffer();
			for (int i = 0; i < messageDigest.length; i++) {
				String shaHex = Integer.toHexString(messageDigest[i] & 0xFF);
				if (shaHex.length() < 2) {
					hexString.append(0);
				}
				hexString.append(shaHex);
			}
			return hexString.toString();

		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return "";
	}
}
