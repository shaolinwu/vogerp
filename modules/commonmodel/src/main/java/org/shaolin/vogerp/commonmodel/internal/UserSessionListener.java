package org.shaolin.vogerp.commonmodel.internal;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.shaolin.bmdp.runtime.internal.AppServiceManagerImpl;
import org.shaolin.bmdp.runtime.spi.IAppServiceManager;
import org.shaolin.uimaster.page.flow.WebflowConstants;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UserSessionListener implements HttpSessionListener {
	private static final Logger logger = LoggerFactory
			.getLogger(UserSessionListener.class);

	public void sessionCreated(HttpSessionEvent se) {
		if (logger.isDebugEnabled()) {
			logger.debug("Session {} created.", se.getSession().getId());
		}
	}

	public void sessionDestroyed(HttpSessionEvent se) {
		if (logger.isDebugEnabled()) {
			logger.debug("Session destroyed.", se.getSession().getId());
		}
		HttpSession session = se.getSession();
		if (session.getAttribute(WebflowConstants.USER_SESSION_KEY) != null) {
			ServletContext servlet = se.getSession().getServletContext();
			AppServiceManagerImpl appService = (AppServiceManagerImpl)
					servlet.getAttribute(IAppServiceManager.class.getCanonicalName());
			IUserService userService = appService.getService(IUserService.class);
			userService.logout(session);
		}
	}

}
