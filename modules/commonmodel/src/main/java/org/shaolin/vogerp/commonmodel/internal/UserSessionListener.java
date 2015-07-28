package org.shaolin.vogerp.commonmodel.internal;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.shaolin.bmdp.runtime.AppContext;
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
			IUserService userService = AppContext.get().getService(
					IUserService.class);
			userService.logout(session);
		}
	}

}
