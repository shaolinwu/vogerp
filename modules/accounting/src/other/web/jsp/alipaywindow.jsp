<%@ page contentType="text/html;charset=UTF-8" %>
<%
	Object htmlform = session.getAttribute("__htmlform");
	if (htmlform != null) {
	    session.removeAttribute("__htmlform");
%>
<HTML>
	<body>
	
	<%=((String)htmlform)%>
	
	</body>
</HTML>
<%
	} else {
	   out.println("Process is interrupted. Please DO NOT refresh again!");
	}
%>