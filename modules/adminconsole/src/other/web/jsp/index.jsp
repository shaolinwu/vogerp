<%@ page contentType="text/html;charset=UTF-8" %>
<%
  String toPage = "LoginPage";
  if(request.getAttribute("partner") != null){ 
    toPage = "PartnerLoginPage";
  }
%>
<html>
<head>
</head>

<body>

<script>
	window.location.href="webflow.do?_chunkname=org.shaolin.bmdp.adminconsole.diagram.LoginAuthentication&_nodename=<%=toPage%>";
</script>

</body>
</html>
