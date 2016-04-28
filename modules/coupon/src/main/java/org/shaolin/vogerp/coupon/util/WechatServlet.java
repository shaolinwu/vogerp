package org.shaolin.vogerp.coupon.util;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class WechatServlet extends HttpServlet {
	public static final long serialVersionUID = -1L;

	public void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		process(request, response);
	}

	private void process(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String signature = request.getParameter("signature");
		String timestamp = request.getParameter("timestamp");
		String nonce = request.getParameter("nonce");
		String echostr = request.getParameter("echostr");

		System.out.println(request.getParameterMap());
		System.out.println(request.getReader().readLine());
		
		String body = "";
		BufferedReader br = null;
		try {
			br = request.getReader();
			String str = null;
			while((str = br.readLine()) != null) {
				body += str;
			}
			System.out.println(body);
			
		} catch (IOException e) {
			e.printStackTrace();
			throw e;
		} finally {
			if (null != br) {
				try {
					br.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		
		if (null != body && !"".equals(body)) {
			String openId = "";
			String developWeixin = "";
			String eventKey = "";
			if (body.indexOf("<FromUserName>") >= 0) {
				openId = body.substring(
						body.indexOf("<FromUserName><![CDATA[")
								+ "<FromUserName><![CDATA[".length(),
						body.indexOf("]]></FromUserName>"));
				request.getSession().setAttribute(WechatUtil.OPEN_ID,
						openId);
			}
			if (body.indexOf("<ToUserName>") >= 0) {
				developWeixin = body.substring(
						body.indexOf("<ToUserName><![CDATA[")
								+ "<ToUserName><![CDATA[".length(),
						body.indexOf("]]></ToUserName>"));
				request.getSession().setAttribute(
						WechatUtil.DEVELOP_WEIXIN, developWeixin);
			}
			if (body.indexOf("<EventKey>") >= 0) {
				eventKey = body.substring(
						body.indexOf("<EventKey><![CDATA[")
								+ "<EventKey><![CDATA[".length(),
						body.indexOf("]]></EventKey>"));
				request.getSession().setAttribute(
						WechatUtil.EVENT_KEY, eventKey);

			}
			System.out.println(WechatUtil.OPEN_ID+ "=" + request.getSession().getAttribute(WechatUtil.OPEN_ID));
			System.out.println(WechatUtil.DEVELOP_WEIXIN+ "=" + request.getSession().getAttribute(
							WechatUtil.DEVELOP_WEIXIN));
			System.out.println(WechatUtil.EVENT_KEY + "=" + request.getSession().getAttribute(WechatUtil.EVENT_KEY));
			
			if (WechatUtil.LOTTERY_KEY.equals(eventKey)) {
				//request.getRequestDispatcher(WechatUtil.LOTTERY_LINK).forward(request, response);
				System.out.println("send redirect to url[" + "http://www.mr-prize.com/uimaster/jsp/main.html" + "]");
//				response.sendRedirect(WechatUtil.LOTTERY_LINK);
				response.sendRedirect("http://www.mr-prize.com/uimaster/jsp/main.html");
//				response.getWriter().print("Your openId is " + openId);
			} else {
				if (WechatUtil.verifyToken(signature, timestamp, nonce)) {
					response.getWriter().print(echostr);
				}
			}
		} else {
			System.out.println("\n\n=============oauth===========\n\n");
			String orgId = request.getParameter("orgId");
			System.out.println("orgId=" + orgId);
			String appId = "wx8f4239ff75ca1770";
			String redirectUri = "http%3A%2F%2Fwww.mr-prize.com%2Fuimaster%2Fwebflow.do%3F_timestamp%3D1%26_chunkname%3Dorg.shaolin.bmdp.coupon.diagram.Lottery%26_nodename%3DStart%26orgid%3D" + orgId;
			System.out.println("redirectUri=" + redirectUri);
			String scope = "snsapi_base";
			String state = "123";
			String url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appId + "&redirect_uri=" + redirectUri + "&response_type=code&scope=" + scope + "&state=" + state + "#wechat_redirect";
			response.sendRedirect(url);
		}

	}
}
