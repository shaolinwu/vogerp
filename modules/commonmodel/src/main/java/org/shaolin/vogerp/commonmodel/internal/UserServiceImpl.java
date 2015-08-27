package org.shaolin.vogerp.commonmodel.internal;

import java.security.NoSuchAlgorithmException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.shaolin.bmdp.i18n.Localizer;
import org.shaolin.bmdp.i18n.ResourceUtil;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.uimaster.page.flow.WebflowConstants;
import org.shaolin.vogerp.commonmodel.IUserService;
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
		        	return "user.login.passwordrules.accountlocked";
		        }
				
				if (matchedUser.getAttempt() > 5)
				{
					matchedUser.setIsLocked(true);
					matchedUser.setAttempt( matchedUser.getAttempt() + 1);
					CommonModel.INSTANCE.update(matchedUser);
					return "user.login.passwordrules.accountlocked";
				}
			}
			try {
				if (!PasswordVerifier.getPasswordHash(user.getPassword()).equals(matchedUser.getPassword())) {
					matchedUser.setAttempt( matchedUser.getAttempt() + 1);
					CommonModel.INSTANCE.update(matchedUser);
					return "user.login.passwordrules.passwordincorrect";
				}
			} catch (NoSuchAlgorithmException e) {
				return "user.login.passwordrules.algoerror";
			}
			
			matchedUser.setLastLogin(new Date());
			matchedUser.setAttempt(0);
			matchedUser.setIsLocked(false);
			
			request.getSession(true).setAttribute(WebflowConstants.USER_SESSION_KEY, matchedUser);
			request.getSession(true).setAttribute(WebflowConstants.USER_LOCALE_KEY, matchedUser.getLocale());
			request.getSession(true).setAttribute(WebflowConstants.USER_ROLE_KEY, CEOperationUtil.toCElist(matchedUser.getInfo().getType()));
			return ""; // login successful!
		} else {
			return "user.login.passwordrules.userdoesnotexist";
		}
	}
	
	@Override
	public boolean checkUserOnline(HttpSession session) {
		return session.getAttribute(WebflowConstants.USER_SESSION_KEY) != null;
	}
	
	@Override
	public void logout(HttpSession session) {
		session.removeAttribute(WebflowConstants.USER_SESSION_KEY);
		session.removeAttribute(WebflowConstants.USER_LOCALE_KEY);
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
