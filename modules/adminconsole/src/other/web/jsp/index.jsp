<%@ page contentType="text/html;charset=UTF-8" %>
<%
	
%>
<html>
<head>
</head>

<body>
<form id="LoginForm" name="LoginForm" action="/uimaster/*.do" method="post">
<input name="_chunkname" type="hidden" value="org.shaolin.bmdp.adminconsole.diagram.LoginAuthentication">
<input name="_nodename" type="hidden" value="LoginPage">
</form>


<script>
	var formObj = document.getElementById("LoginForm");
	formObj.submit();
</script>

</body>
</html>
