package org.shaolin.bmdp.adminconsole;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.shaolin.bmdp.runtime.spi.IAppServiceManager;
import org.shaolin.vogerp.commonmodel.IUserService;

public class UserAccessFilter implements Filter {

	private static final String loginName = "org.shaolin.bmdp.adminconsole.diagram.LoginAuthentication";
	
	private static final String mainPageName = "org.shaolin.bmdp.adminconsole.diagram.WelcomeMainPage";
	
	private String loginURL = "/jsp/index.jsp";
	
	private String mainPageURL = "/jsp/secureRedirect.jsp";
	
	private IAppServiceManager appContext = null;
	
	private FilterConfig filterConfig = null;
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		this.loginURL = filterConfig.getInitParameter("loginURL");
		this.mainPageURL = filterConfig.getInitParameter("mainPageURL");
		this.filterConfig = filterConfig;
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		if (appContext == null) {
			appContext = (IAppServiceManager) filterConfig.getServletContext().getAttribute(
					IAppServiceManager.class.getCanonicalName());
		}
		IUserService userService = appContext.getService(IUserService.class);
		String queryString = ((HttpServletRequest)request).getQueryString();
		if (queryString != null) {
			if (userService.checkUserOnline(((HttpServletRequest)request).getSession())) {
				 if(queryString.indexOf(loginName) != -1) {
					 ((HttpServletResponse)response).sendRedirect(request.getServletContext().getContextPath() + mainPageURL);
					 return;
				 }
			} else {
				if (queryString.indexOf(mainPageName) != -1) {
					((HttpServletResponse)response).sendRedirect(request.getServletContext().getContextPath() + loginURL);
					return;
				}
			}
			chain.doFilter(request, response);
		} else {
			if (userService.checkUserOnline(((HttpServletRequest)request).getSession())) {
				chain.doFilter(request, response);
			} else {
				((HttpServletResponse)response).sendRedirect(request.getServletContext().getContextPath() + loginURL);
			}
		}
	}

	@Override
	public void destroy() {
		
	}

}
