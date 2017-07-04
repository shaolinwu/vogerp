package org.shaolin.vogerp.bbs.util;

import java.io.IOException;
import java.util.Calendar;
import java.util.HashMap;

import org.shaolin.bmdp.utils.FileUtil;
import org.shaolin.bmdp.utils.StringUtil;
import org.shaolin.uimaster.page.WebConfig;
import org.shaolin.uimaster.page.ajax.RefForm;
import org.shaolin.vogerp.bbs.be.ITopic;

public class BBSUtil {

	public synchronized static String genResourceId() {
		return "bbs" + System.nanoTime();
	}
	
	public synchronized static void genHtmlResourceId(ITopic topic) {
		if (topic.getHtmlLink() == null || topic.getHtmlLink().length() == 0) { 
			topic.setHtmlLink("/bbs/topics/" + Calendar.getInstance().get(Calendar.YEAR) + "-" 
					+  Calendar.getInstance().get(Calendar.MONTH) + "/" + StringUtil.genRandomStr() + ".html");
		}
	}
	
	public static void generateStaticTopic(ITopic topic) throws IOException {
		//IStaticPageService pageService = AppContext.get().getService(IStaticPageService.class);
		//pageService.generateFormHTML("org.shaolin.vogerp.bbs.form.TopicViewer.form", path);
		HashMap<String, Object> input = new HashMap<String, Object>();
        input.put("beObject", topic);
        input.put("editable", new Boolean(false));
        
        RefForm form = new RefForm("topic", "org.shaolin.vogerp.bbs.form.TopicViewer", input);
        StringBuilder sb = new StringBuilder();
        
        sb.append("<!DOCTYPE html><html><head><title>");
        sb.append(topic.getName());
        sb.append("</title>\n");
        sb.append("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
        sb.append("<meta http-equiv=\"x-ua-compatible\" content=\"ie=7\" />\n");
        sb.append("<meta name=\"viewport\" id=\"WebViewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=0.5,maximum-scale=1.0,user-scalable=1\" />\n");
        sb.append("<meta name=\"apple-mobile-web-app-title\" content=\"UIMaster\">\n");
        sb.append("<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n");
        sb.append("<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">\n");
        sb.append("<meta name=\"format-detection\" content=\"telephone=no\">\n");
        sb.append("<script type=\"text/javascript\">\n");
        sb.append("var USER_CONSTRAINT_IMG=\"/images/uimaster_constraint.gif\";\n");
        sb.append("var USER_CONSTRAINT_LEFT=false;\n");
        sb.append("var CURRENCY_GROUP_SEPARATOR=\",\";\n");
        sb.append("var CURRENCY_MONETARY_SEPARATOR=\".\";\n");
        sb.append("var CURTIME=");
        sb.append(String.valueOf(System.currentTimeMillis()));
        sb.append(";\nvar TZOFFSET=");
        sb.append(String.valueOf(Calendar.getInstance().getTimeZone().getOffset(System.currentTimeMillis())));
        sb.append(";\nvar WEB_CONTEXTPATH=\"/uimaster\";\n");
        sb.append("var RESOURCE_CONTEXTPATH=\"https://www.vogerp-res.com:8082/uimaster\";\n");
        sb.append("var FRAMEWRAP=\"/uimaster\";\n");
        sb.append("var IS_SERVLETMODE=true;\n");
        sb.append("var IS_MOBILEVIEW=true;\n");
        sb.append("var MOBILE_APP_TYPE=\"andriod\";\n");
        sb.append("var AJAX_SERVICE_URL=\"https://www.vogerp.com/uimaster/ajaxservice?\";\n");
        sb.append("</script>\n");
        
        String root = WebConfig.getResourceContextRoot();
        sb.append("<link rel=\"stylesheet\" href=\"").append(root).append("/css/jquery-dataTable.css\" type=\"text/css\">\n");
        sb.append("<link rel=\"stylesheet\" href=\"").append(root).append("/css/jquery-ui.css\" type=\"text/css\">\n");
        sb.append("<link rel=\"stylesheet\" href=\"").append(root).append("/css/jquery-mobile.css\" type=\"text/css\">\n");
        sb.append("<link rel=\"stylesheet\" href=\"").append(root).append("/css/iumaster-mob.css\" type=\"text/css\">\n");
        sb.append("<script type=\"text/javascript\" src=\"").append(root).append("/js/jquery.js\"></script>\n");
        sb.append("<script type=\"text/javascript\" src=\"").append(root).append("/js/jquery-ui.js\"></script>\n");
        sb.append("<script type=\"text/javascript\" src=\"").append(root).append("/js/jquery-mobile.js\"></script>\n");
        sb.append("<script type=\"text/javascript\" src=\"").append(root).append("/js/jquery-form.js\"></script>\n");
        sb.append("<script type=\"text/javascript\" src=\"").append(root).append("/js/jquery-dataTable.js\"></script>\n");
        sb.append("<script type=\"text/javascript\" src=\"").append(root).append("/js/uimaster.js\"></script>\n");
        sb.append("<script type=\"text/javascript\" src=\"").append(root).append("/js/uimaster-widget.js\"></script>\n");
        sb.append("<script type=\"text/javascript\" src=\"").append(root).append("/js/org/shaolin/vogerp/bbs/form/TopicViewer.js\"></script>\n");
        sb.append("</head>\n");
        sb.append("<body data-role=\"page\">\n");
        sb.append("<input type=\"hidden\" name=\"__resourcebundle\" value=\"Common||AJAX_EXCEPTION_REQUEST_WAIT\" msg=\"\u8BF7\u6C42\u5904\u7406\u4E2D\uFF0C\u8BF7\u7A0D\u5019...\">\n");
        sb.append("<input type=\"hidden\" name=\"__resourcebundle\" value=\"Common||VERIFY_FAIL\" msg=\"\u6821\u9A8C\u4E0D\u901A\u8FC7.\">\n");
        sb.append("<input type=\"hidden\" name=\"__resourcebundle\" value=\"Common||ALLOW_BLANK\" msg=\"\u4E0D\u5141\u8BB8\u4E3A\u7A7A.\">\n");
        sb.append("<input type=\"hidden\" name=\"__resourcebundle\" value=\"Common||REGULAR_EXPRESSION\" msg=\"\u8F93\u5165\u503C\u4E0D\u7B26\u5408\u89C4\u5B9A\u7684\u683C\u5F0F.\">\n");
        sb.append("<input type=\"hidden\" name=\"__resourcebundle\" value=\"Common||MINIMUM_LENGTH\" msg=\"\u8F93\u5165\u503C\u7684\u957F\u5EA6\u4E0D\u7B26\u5408\u8981\u6C42.\">\n");
        sb.append("<input type=\"hidden\" name=\"__resourcebundle\" value=\"Common||MUST_CHECK\" msg=\"\u5FC5\u987B\u52FE\u9009\u4E2D\u5176\u4E2D\u67D0\u9879.\">\n");
        sb.append("<input type=\"hidden\" name=\"__resourcebundle\" value=\"Common||SELECT_VALUE\" msg=\"\u5FC5\u987B\u9009\u62E9\u5176\u4E2D\u67D0\u9879.\">\n");
        sb.append("<form action=\"#\" method=\"post\" name=\"everything\"");
        sb.append(" onsubmit=\"return false;\" _framePrefix=\"bbsManager\">\n");
        sb.append(form.generateHTML());
        sb.append("\n");
        sb.append("</form>\n");
        sb.append("<script type=\"text/javascript\">\n");
        sb.append("var defaultname = new Object();\n");
        sb.append("defaultname.initPageJs = function(){};\n");
        sb.append("$(document).ready(function(){\n");
        sb.append("getElementList(); defaultname.topicForm = new Object();\n");
        sb.append(form.generateJS());
        sb.append("postInit();\n");
        sb.append("});\n</script>\n</body>\n</html>");
        
	    FileUtil.write(WebConfig.getRealPath(topic.getHtmlLink()), sb.toString());
	}
	
}

