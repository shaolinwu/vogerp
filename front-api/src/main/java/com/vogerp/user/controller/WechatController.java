package com.vogerp.user.controller;

import java.security.DigestException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.vogerp.common.utils.HttpSender;
import com.vogerp.common.utils.R;
import com.vogerp.user.domain.UserAuthDTO;
import com.vogerp.user.domain.UserDO;
import com.vogerp.user.service.UserService;
import com.vogerp.wallet.domain.WechatStep2DTO;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value = "微信网页授权")
@RequestMapping("/sys/user/wechat")
@Controller
public class WechatController {
	
	private static final Logger logger = LoggerFactory.getLogger(WechatController.class);
	
	private static final String appId = "wxd6765a81187228ab";
	private static final  String appSecret = "6fe65d50348b18f05e4a2e5827f628f5";
	
	//全局缓存对象  有效时间 2小时  微信JS接口的临时票据
    private String jsapi_ticket = "";

    //用它来获取  jsapi_ticket ，它的有效期也是2小时，开发者必须在自己的服务全局缓存access_token ， 它的值是通过接口获得的.
    //access_token是公众号的全局唯一票据，公众号调用各接口时都需使用access_token
    //access_token的有效时间可能会在未来有调整，所以中控服务器不仅需要内部定时主动刷新，还需要提供被动刷新access_token的接口，这样便于业务服务器在API调用获知access_token已超时的情况下，可以触发access_token的刷新流程
    private String access_token = "";

    //全局缓存对象  有效时间 2小时  微信JS接口的临时票据
    private long cachedTime = System.currentTimeMillis();
    
    private static final String WechatBoundURL = "http://testdapp.hashincubator.com";
	
	@Autowired
	UserService userService;
	
	@ApiOperation("微信授权域名")
	@GetMapping("/MP_verify_gBqgutSuDhJ8rkR2.txt")
	@ResponseBody
	public String mperfify() {
		return "gBqgutSuDhJ8rkR2";
	}
	
	@ApiOperation("当前用户是否绑定微信")
	@GetMapping("/hasBinding")
	@ResponseBody
	public R hasBinding(long userId, String authCode) {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO userDO = userService.get(userId, authCode);
		if (userDO == null) {
			return R.failedWithAuthCode();
		}
		if (userDO.getWechatOpenId() != null && userDO.getWechatOpenId().length() > 0) {
			return R.ok().put("hasBinding", "true");
		}
		return R.ok().put("hasBinding", "false");
	}
	
	//https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842
	@ApiOperation("第一步：用户同意授权，获取code")
	@RequestMapping(value = "/step1", method = RequestMethod.POST)
	@ResponseBody
	public R step1(@RequestBody UserAuthDTO param) {
		long userId = param.getUserId(); 
		String authCode = param.getAuthCode();
		//scope为snsapi_userinfo
		//参考链接(请在微信客户端中打开此链接体验):
		String redirectURI = WechatBoundURL + "?userId=" + userId + "&authCode=" + authCode;
		String url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appId + "&redirect_uri="
				+ redirectURI + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("url", url);
		logger.info("微信第一步获取code URL：" + url);
		return R.ok(result);
	}
	
	//如果用户同意授权，页面将跳转至 redirect_uri/?code=CODE&state=STATE。
	//就是这个方法
	@ApiOperation("第二步：通过code换取网页授权access_token")
	@RequestMapping(value = "/step2", method = RequestMethod.POST)
	@ResponseBody
	//code说明 ： code作为换取access_token的票据，每次用户授权带上的code将不一样，code只能使用一次，5分钟未被使用自动过期。
	//两种情况：一种：已注册用户，需要传入userId + authCode. 二种：微信用户未注册。
	public R step2(@RequestBody WechatStep2DTO param) {
		long userId = param.getUserId();
		String authCode = param.getAuthCode();
		String code = param.getCode();
		String state = param.getState();
		if (code == null) {
			return R.error("微信code不成为空", "");
		}
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO userDO = userService.get(userId, authCode);
		if (userDO == null) {
			return R.failedWithAuthCode();
		}
		if (code.equals("10003") || code.equals("10004") || code.equals("10005") || code.equals("10006")
				|| code.equals("10009") || code.equals("10010") || code.equals("10011") || code.equals("10012") 
				|| code.equals("10013") || code.equals("10015") || code.equals("10016")) {
			return R.error("微信第一步获取code失败！error code: " + code, "");
		}
		logger.info("微信第一步获取code成功：" + code);
		
		//获取code后，请求以下链接获取access_token：  
		String url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + appId + "&secret=" + appSecret
				+ "&code=" + code + "&grant_type=authorization_code";
		try {
			HttpSender sender = new HttpSender();
			String result = sender.doGetSSL(url, "utf-8");
			Gson json = new Gson();
			HashMap map = json.fromJson(result, HashMap.class);
			if (map.containsKey("errcode") && ((int)Double.parseDouble(map.get("errcode").toString())) > 0) {
				logger.warn("微信第二步失败：通过code换取网页授权access_token" + map.toString());
				return R.error("微信第二步失败：通过code换取网页授权access_token", "");
			}
			/**
			 * 正确时返回的JSON数据包如下： { "access_token":"ACCESS_TOKEN", "expires_in":7200,
			 * "refresh_token":"REFRESH_TOKEN", "openid":"OPENID", "scope":"SCOPE" }
			 */
			logger.info("微信第二步获取code换取网页授权access_token成功：" + map);
			String access_token = map.get("access_token").toString();
			String openid = map.get("openid").toString();

			// "第三步：拉取用户信息(需scope为 snsapi_userinfo)
			String url2 = "https://api.weixin.qq.com/sns/userinfo?access_token=" + access_token 
					+ "&openid=" + openid + "&lang=zh_CN";
			HttpSender sender1 = new HttpSender();
			result = sender1.doGetSSL(url2, "utf-8");
			Gson json1 = new Gson();
			HashMap map1 = json1.fromJson(result, HashMap.class);
			if (map1.containsKey("errcode") && ((int)Double.parseDouble(map1.get("errcode").toString())) > 0) {
				logger.warn("微信第三步失败：拉取用户信息(需scope为 snsapi_userinfo)" + map1.toString());
				return R.error("微信第三步失败：拉取用户信息(需scope为 snsapi_userinfo)", "");
			}
			/**
			 * { "openid":" OPENID", " nickname": NICKNAME, "sex":"1",
			 * 值为1时是男性，值为2时是女性，值为0时是未知 "province":"PROVINCE" "city":"CITY",
			 * "country":"COUNTRY", "headimgurl":
			 * "http://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46",
			 * "privilege":[ "PRIVILEGE1" "PRIVILEGE2" ], "unionid":
			 * "o6_bmasdasdsad6_2sgVt7hMZOPfL" }
			 */
			logger.info("微信第三步用户获取成功：" + map1);
			String nickname = map1.get("nickname").toString();
			String sexStr = map1.get("sex").toString();
			if (sexStr == null || sexStr.trim().length() == 0) {
				sexStr = "0";
			} else if (sexStr.equals("1.0") || sexStr.equals("1")) {
				sexStr = "1";
			} else if (sexStr.equals("2.0") || sexStr.equals("2")) {
				sexStr = "2";
			} else {
				sexStr = "0";
			}
			long sex = Integer.parseInt(sexStr);
			String headimgurl = map1.get("headimgurl").toString();
			UserDO user = userService.get(userId, authCode);
			if (user != null) {
				user.setNickname(nickname);
				user.setSex(sex);
				user.setHeadImgUrl(headimgurl);
				user.setWechatOpenId(openid);
				if (map1.containsKey("unionid")) {
					// 只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段。 unionid
					user.setWechatUnionId(map1.get("unionid").toString());
				}
				userService.updatePersonal(user);
			} 
			return R.ok().put("data", map1);
		} catch (Exception e) {
			logger.warn("微信第二三步调用失败" + e.getMessage(), e);
			return R.error("微信第二三步调用失败", "");
		} 
	}
	
	//https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
	@ApiOperation("微信js-sdk授权")
	@GetMapping("/jsloadpage")
	@ResponseBody
	public R jsLoadPage(HttpServletRequest request, String sharedLink)
    {
		try {
			if  ((System.currentTimeMillis() - cachedTime) > 5000 * 1000) {
				//正常有效期为7200秒，我们缩短到5000秒
				access_token = null;
				jsapi_ticket = null;
				cachedTime = System.currentTimeMillis();
			}
			
	        // access_token = "nC_O_2yUvP0CEcstb2wfTpP-zEOfJEyggcEWvrwAO1sO8H1TRpgjCJBmOPqCepcUOz64r0SKI8UTSSgY5Y8tmicCMZ3MKaATYVwppHXOiwmWOTImxDkIUMx1GEoO3MkaGDZfAEAURN";
	        if (access_token == null || access_token.trim().length() == 0)
	        {   //获取access_token
				String url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + appId
						+ "&secret=" + appSecret;
				HttpSender sender1 = new HttpSender();
				String result = sender1.doGetSSL(url, "utf-8");
				logger.debug("获取access_token: " + result);
				Gson json1 = new Gson();
				HashMap map1 = json1.fromJson(result, HashMap.class);
				if (map1.containsKey("errcode") && ((int)Double.parseDouble(map1.get("errcode").toString())) > 0) {
					return R.error("微信调用失败，原因："+result, "");
				}
				access_token = map1.get("access_token").toString();
	            //{ "access_token":"RlUQfwT7ALMEhpd7d-lwwdVl1L-shnlpR0f52dZdGTgETMXDik6kSlbsn0YywWDyt2DhcUo7bprg6lpfuCrdF3tDFlUrpj8Gt17jnuTxNBmW0HzTa7HWxYqLzX7AayvVPFSgAIADTG","expires_in":7200}
	        }
	
	        // jsapi_ticket = "kgt8ON7yVITDhtdwci0qeRexnVHaoFgZBri5CQ_FeuE26sRqPoRdqWba5z2zCcjWdvw70MKC3YJAvK9ieHSo7w";
	        //用第一步拿到的access_token 采用http GET方式请求获得jsapi_ticket
	        if (jsapi_ticket == null || jsapi_ticket.trim().length() == 0)
	        {
				String url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=" + access_token
						+ "&type=jsapi";
				HttpSender sender1 = new HttpSender();
				String result = sender1.doGetSSL(url, "utf-8");
				logger.debug("获取jsapi_ticket: " + result);
				Gson json1 = new Gson();
				HashMap map1 = json1.fromJson(result, HashMap.class);
				if (map1.containsKey("errcode") && ((int)Double.parseDouble(map1.get("errcode").toString())) > 0) {
					return R.error("微信调用失败，原因："+result, "");
				}
				jsapi_ticket = map1.get("ticket").toString();
	            //{
	            //    "errcode": 0,
	            //    "errmsg": "ok",
	            //    "ticket": "kgt8ON7yVITDhtdwci0qeRexnVHaoFgZBri5CQ_FeuHhRjNuvsKJ2ewt9V8iAZa2aorvGWgaPOgJkmRG442DZg",
	            //    "expires_in": 7200
	            //}
	        }
	
	        //傻逼微信还需要传入时间撮来完成它的机密算法 
	        String timestamp = create_timestamp();
	
	        //傻逼微信还需要传入当前页面的url来完成它的加密算法
	        String path = request.getRequestURI();
	        if (path == null) {
	        		path = "";
	        }
	        if (path.indexOf("#") != -1) {
	        		//如果是html的静态页面在前端通过ajax将url传到后台签名，前端需要用js获取当前页面除去'#'hash部分的链接
		        	path = path.substring(0, path.indexOf("#"));
	        }
	        String queryString = request.getQueryString();
	        if (queryString == null) {
	        		queryString = "";
	        }
	        if (queryString.length() > 0) {
	        		queryString = "?" + queryString;
	        }
	        String curUrl = sharedLink ;//先固定一个默认URL + path + queryString;
	        // curUrl = request.getRequestURL().toString(); //"http://dapp.hashincubator.com";
	        
	        //尼玛，还需要一个随机串，来给它完成加密验证
	        String noncestr = create_nonce_str();
	
	        //上面那么多垃圾东西，那么多次访问httpget,那么多次缓存，就是为了这个垃圾签名.
	        String signature = "";
	
	        //string param = "jsapi_ticket=sM4AOVdWfPE4DxkXGEs8VMCPGGVi4C3VM0P37wVUCFvkVAy_90u5h9nbSlYy3-Sl-HhTdfl2fzFy1AOcHKP7qg&noncestr=Wm3WZYTPz0wzccnW×tamp=1414587457&url=http://mp.weixin.qq.com?params=value";
	        String param = "jsapi_ticket=" + jsapi_ticket + "&noncestr=" + noncestr + "&timestamp=" + timestamp + "&url=" + curUrl;
	        logger.info("js load param: " + param);
	        //通过SHA1加密算法获得签名
	        signature = SHA1(param);
	        logger.info("signature: " + signature);
	        Map<String, Object> result = new HashMap<String, Object>();
			result.put("appId", appId);
			result.put("nonceStr", noncestr);
			result.put("timestamp", timestamp);
			result.put("signature", signature);
			return R.ok(result);
			
		} catch (Exception e) {
			logger.warn("微信调用失败" + e.getMessage(), e);
			return R.error("微信调用失败", "");
		} 
    }

	@GetMapping("/testjsloadpage")
	@ResponseBody
	public String testJSLoadPage(HttpServletRequest request, String sharedLink) {
		R r = jsLoadPage(request, sharedLink);
		if (r.get("code").toString().equals("500")) {
			return r.toString();
		}
		StringBuilder sb = new StringBuilder();
		sb.append("<HTML>");
		sb.append("<HEAD>");
		sb.append("<script type=\"text/javascript\" src=\"http://res2.wx.qq.com/open/js/jweixin-1.4.0.js \"></script>");
		sb.append("<script type=\"text/javascript\">\n");
		
		sb.append("wx.config({debug: true, appId: '").append(r.get("appId"));
		sb.append("', timestamp: ").append(r.get("timestamp"));
		sb.append(", nonceStr: '").append(r.get("nonceStr"));
		sb.append("', signature: '").append(r.get("signature"));
		sb.append("', jsApiList: ['checkJsApi', 'openLocation', 'getLocation', 'onMenuShareTimeline', 'onMenuShareAppMessage']});\n");
		
		sb.append("wx.ready(function(){alert('I am ready!')});\n");
		sb.append("wx.error(function(){alert('I am not ready!')});\n");
		
		sb.append("</script></HEAD>");
		sb.append("<BODY>");
		sb.append("</BODY>");
		sb.append("</HTML>");
		return sb.toString();
	}
	
	private static String create_nonce_str() {
		return UUID.randomUUID().toString();
	}

	private static String create_timestamp() {
		return Long.toString(System.currentTimeMillis() / 1000);
	}

	public static String SHA1(String decrypt) throws DigestException {
		try {
			MessageDigest digest = MessageDigest.getInstance("SHA-1");
			digest.update(decrypt.getBytes());
			byte messageDigest[] = digest.digest();
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
			throw new DigestException("签名错误！");
		}
	}

	public static void main(String[] args) {
		String str = "{ \"access_token\":\"ACCESS_TOKEN\",\n" + 
				"				\"expires_in\":7200,\n" + 
				"				\"refresh_token\":\"REFRESH_TOKEN\",\n" + 
				"				\"openid\":\"OPENID\",\n" + 
				"				\"scope\":\"SCOPE\" }";
		Gson json = new Gson();
		HashMap map = json.fromJson(str, HashMap.class);
		//System.out.println(map.toString());
		
		String sha1Str0= "jsapi_ticket=HoagFKDcsGMVCIY2vOjf9h07gsTz6GyNx40XYZAIy3I6jd1ZFP2ekS2pjIElGzYdn3Iu3MWT0Gi7YTVVq7xFIw&noncestr=hashincubator305&timestamp=1539082575862&url=http://dapp.hashincubator.com/sys/user/wechat/testjsloadpage";
		String sha1Str = "jsapi_ticket=HoagFKDcsGMVCIY2vOjf9h07gsTz6GyNx40XYZAIy3I6jd1ZFP2ekS2pjIElGzYdn3Iu3MWT0Gi7YTVVq7xFIw&noncestr=hashincubator305&timestamp=1539082575&url=http://dapp.hashincubator.com/sys/user/wechat/testjsloadpage";
		try {
			System.out.println(SHA1(sha1Str));
		} catch (DigestException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
}
