package org.shaolin.vogerp.commonmodel.internal;

import java.security.NoSuchAlgorithmException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.shaolin.bmdp.i18n.Localizer;
import org.shaolin.bmdp.i18n.ResourceUtil;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.uimaster.page.MobilitySupport;
import org.shaolin.uimaster.page.WebConfig;
import org.shaolin.uimaster.page.flow.WebflowConstants;
import org.shaolin.uimaster.page.security.UserContext;
import org.shaolin.vogerp.commonmodel.ICaptcherService;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.be.ICaptcha;
import org.shaolin.vogerp.commonmodel.be.IPersonalAccount;
import org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl;
import org.shaolin.vogerp.commonmodel.dao.CommonModel;
import org.shaolin.vogerp.commonmodel.util.CEOperationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UserServiceImpl implements IServiceProvider, IUserService {

	private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
	private static Localizer LOCALIZER = new Localizer("org_shaolin_vogerp_commonmodel_i18n");
	
	void init() {
	}
	
	public PasswordCheckResult checkPasswordPattern(String password) {
		return PasswordVerifier.checkPasswordPolicy(password);
	}
	
	@Override
	public String preLogin(HttpServletRequest request) {
		ICaptcherService service = IServerServiceManager.INSTANCE.getService(ICaptcherService.class);
		ICaptcha captcha = service.getItem(service.generateOne());
		
		HttpSession session = request.getSession(true);
		session.setAttribute(WebflowConstants.USER_TOKEN, captcha.getAnswer());
		return captcha.getQuestion();
	}
	
	@Override
	public boolean checkVerifiAnswer(String answer, HttpServletRequest request) {
		HttpSession session = request.getSession(true);
		Object value = session.getAttribute(WebflowConstants.USER_TOKEN);
		if (value == null) {
			return false;
		}
		return value.toString().equalsIgnoreCase(answer);
	}
	
	@Override
	public String login(IPersonalAccount user, HttpServletRequest request) {
		List<IPersonalAccount> result = CommonModel.INSTANCE.authenticateUserInfo((PersonalAccountImpl)user, null, 0, -1);
		if (result.size() == 1) {
			IPersonalAccount matchedUser = result.get(0);
			
			// bmiasia.ebos.security.manager.UserAccountManager
			long now = System.currentTimeMillis();
			Date lastLoginTime = matchedUser.getLastLogin();
			if (lastLoginTime == null) {
				matchedUser.setLastLogin(new Date());
			}
			if (matchedUser.getIsLocked() && (now - lastLoginTime.getTime() > 60000000)) { // 1 minute.
				matchedUser.setIsLocked(false);
				CommonModel.INSTANCE.update(matchedUser);
			} else {
				if(matchedUser.getIsLocked()){
		        	return USER_LOGIN_PASSWORDRULES_ACCOUNTLOCKED;
		        }
				
				if (matchedUser.getAttempt() > 5)
				{
					matchedUser.setIsLocked(true);
					matchedUser.setAttempt( matchedUser.getAttempt() + 1);
					CommonModel.INSTANCE.update(matchedUser);
					return USER_LOGIN_PASSWORDRULES_ACCOUNTLOCKED;
				}
			}
			try {
				if (!PasswordVerifier.getPasswordHash(user.getPassword()).equals(matchedUser.getPassword())) {
					matchedUser.setAttempt( matchedUser.getAttempt() + 1);
					CommonModel.INSTANCE.update(matchedUser);
					return USER_LOGIN_PASSWORDRULES_PASSWORDINCORRECT;
				}
			} catch (NoSuchAlgorithmException e) {
				return USER_LOGIN_PASSWORDRULES_PASSWORDINCORRECT;
			}
			
			matchedUser.setLastLogin(new Date());
			matchedUser.setAttempt(0);
			matchedUser.setIsLocked(false);
			
			HttpSession session = request.getSession(true);
			session.removeAttribute(WebflowConstants.USER_TOKEN);
			session.setAttribute(WebflowConstants.USER_SESSION_KEY, matchedUser);
			session.setAttribute(WebflowConstants.USER_LOCALE_KEY, matchedUser.getLocale());
			session.setAttribute(WebflowConstants.USER_ROLE_KEY, CEOperationUtil.toCElist(matchedUser.getInfo().getType()));
			if (matchedUser.getInfo().getOrganization() != null) {
				session.setAttribute(ORG_TYPE, matchedUser.getInfo().getOrganization().getType());
			}
			Object currentUserContext = session.getAttribute(WebflowConstants.USER_SESSION_KEY);
			String userLocale = WebConfig.getUserLocale(request);
			List userRoles = (List)session.getAttribute(WebflowConstants.USER_ROLE_KEY);
			String userAgent = request.getHeader("user-agent");
			boolean isMobile = MobilitySupport.isMobileRequest(userAgent);
			//add user-context thread bind
            UserContext.registerCurrentUserContext(session, currentUserContext, userLocale, userRoles, isMobile);
			
			boolean hasCookie = false;
			Cookie[] cookies = request.getCookies();
			if (cookies != null) {
				for (int i = 0, n = cookies.length; i < n; i++) {
					Cookie cookie = cookies[i];
					if (cookie.getName().equals(WebflowConstants.USER_LOCALE_KEY)) {
						cookie.setValue(matchedUser.getLocale());
						hasCookie = true;
						break;
					}
				}
			}
			
			if (!hasCookie) {
				Cookie cookie1 = new Cookie(WebflowConstants.USER_LOCALE_KEY, matchedUser.getLocale());
				//response.addCookie(cookie1);
			}
			return ""; // login successful!
		} else {
			return USER_LOGIN_PASSWORDRULES_PASSWORDINCORRECT;
		}
	}
	
	@Override
	public String getUserOrganizationType() {
		return (String)UserContext.getUserData(IUserService.ORG_TYPE);
	}
	
	@Override
	public boolean checkUserOnline(HttpSession session) {
		return session.getAttribute(WebflowConstants.USER_SESSION_KEY) != null;
	}
	
	@Override
	public void logout(HttpSession session) {
		session.removeAttribute(WebflowConstants.USER_SESSION_KEY);
		session.removeAttribute(WebflowConstants.USER_LOCALE_KEY);
		session.removeAttribute(WebflowConstants.USER_ROLE_KEY);
		session.removeAttribute(IUserService.ORG_TYPE);
		UserContext.unregister();
	}
	
	public String getErrorInfo(String errorCode) {
		return ResourceUtil.getResource(LOCALIZER.getName(), errorCode);
	}

	@Override
	public Class<?> getServiceInterface() {
		return IUserService.class;
	}

	@Override
	public void changePassword(IPersonalAccount user, String newPassword) {
		if (newPassword == null || newPassword.length() <= 6) {
			throw new IllegalArgumentException("The new password is illegal pattern!");
		}
		
		if (user.getPassword() != null) {
			try {
				user.setPassword(PasswordVerifier.getPasswordHash(newPassword));
				CommonModel.INSTANCE.update(user);
			} catch (NoSuchAlgorithmException e) {
				logger.warn("hash password error!", e);
			}
		}
	}

}
