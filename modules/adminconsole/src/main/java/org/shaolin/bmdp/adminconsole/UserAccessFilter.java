package org.shaolin.bmdp.adminconsole;

import java.io.IOException;
import java.util.List;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.security.IPermissionService;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.IAppServiceManager;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.uimaster.page.flow.WebFlowServlet.AttributesAccessor;
import org.shaolin.uimaster.page.flow.WebflowConstants;
import org.shaolin.vogerp.commonmodel.IModuleService;
import org.shaolin.vogerp.commonmodel.IUserService;

/**
 * --webflow.do filter
 *
 * @author wushaol
 *
 */
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
		AttributesAccessor attrAccessor = new AttributesAccessor((HttpServletRequest)request);
		IUserService userService = appContext.getService(IUserService.class);
		String queryString = ((HttpServletRequest)request).getQueryString();
		if (queryString != null) {
			if (userService.checkUserOnline(((HttpServletRequest)request).getSession())
					|| checkAccessPermission(attrAccessor, ((HttpServletRequest)request))) {
				 if(queryString.indexOf(loginName) != -1) {
					 ((HttpServletResponse)response).sendRedirect(request.getServletContext().getContextPath() + mainPageURL);
					 return;
				 }
			} else {
				if(queryString.indexOf(loginName) == -1) {
					((HttpServletResponse)response).sendRedirect(request.getServletContext().getContextPath() + loginURL);
					return;
				}
			}
			chain.doFilter(request, response);
		} else {
			if (userService.checkUserOnline(((HttpServletRequest)request).getSession())
					|| checkAccessPermission(attrAccessor, ((HttpServletRequest)request))) {
				((HttpServletResponse)response).sendRedirect(request.getServletContext().getContextPath() + mainPageURL);
				return;
			} 
			chain.doFilter(request, response);
		}
	}

	private boolean checkAccessPermission(AttributesAccessor attrAccessor, HttpServletRequest request) 
    {
    	String orgCode = (String)UserContext.getUserData(UserContext.CURRENT_USER_ORGNAME);
        if (orgCode == null) {
        	orgCode = IServerServiceManager.INSTANCE.getMasterNodeName();
        }
        AppContext.register(IServerServiceManager.INSTANCE.getApplication(orgCode));
        
        IModuleService moduleService = AppContext.get().getService(IModuleService.class);
        IPermissionService permiService = AppContext.get().getService(IPermissionService.class);
        
    	List<IConstantEntity> roleIds = (List<IConstantEntity>)request.getSession().getAttribute(WebflowConstants.USER_ROLE_KEY);
    	int decision = permiService.checkModule(moduleService.getModuleId(orgCode, attrAccessor.chunkName, attrAccessor.nodeName), roleIds);
    	return IPermissionService.ACCEPTABLE == decision;
    }
	
	@Override
	public void destroy() {
		
	}

}
