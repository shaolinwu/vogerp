<%@ page contentType="text/html;charset=UTF-8" %>
<%
	Object payJson = session.getAttribute("__payJson");
	if (payJson != null) {
	    session.removeAttribute("__payJson");
%>
<HTML>
<HEAD>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" href="favicon.ico">

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="x-ua-compatible" content="ie=7">
<meta name="viewport" id="WebViewport" content="width=device-width,initial-scale=1.0,minimum-scale=0.5,maximum-scale=1.0,user-scalable=1">
<meta name="apple-mobile-web-app-title" content="UIMaster">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="format-detection" content="telephone=no">

<script type="text/javascript" src="https://jspay.beecloud.cn/1/pay/jsbutton/returnscripts?appId=1ab7992b-26b6-4f1c-b007-02f6c325444c"></script>
</HEAD>
<body>

<script type="text/javascript">
    var json = <%=((String)payJson)%>;
	BC.click(json);
</script>

</body>
</HTML>
<%
	} else {
	   out.println("Process is interrupted. Please DO NOT refresh again!");
	}
%>