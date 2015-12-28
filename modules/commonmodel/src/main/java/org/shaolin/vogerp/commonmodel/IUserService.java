package org.shaolin.vogerp.commonmodel;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.shaolin.vogerp.commonmodel.be.IPersonalAccount;
import org.shaolin.vogerp.commonmodel.internal.PasswordCheckResult;

public interface IUserService {

	public static final String USER_LOGIN_PASSWORDRULES_ACCOUNTLOCKED = "user.login.passwordrules.accountlocked";

	public static final String USER_LOGIN_PASSWORDRULES_PASSWORDINCORRECT = "user.login.passwordrules.passwordincorrect";
	
	public static final String USER_LOGIN_PASSWORDRULES_VERICODEINCORRECT = "user.login.passwordrules.verifycodeincorrect";
	
	public PasswordCheckResult checkPasswordPattern(String password);
	
	public String preLogin(HttpServletRequest request);
	
	public boolean checkVerifiAnswer(String answer, HttpServletRequest request);
	
	/**
	 * User login
	 * 
	 * @param user
	 * @param request
	 * @return
	 * 	      if the result is empty, that means the login user is valid.
	 *        otherwise, an error code indicated the error type.
	 * 
	 */
	public String login(IPersonalAccount user, HttpServletRequest request);
	
	public boolean checkUserOnline(HttpSession session);
	
	public void logout(HttpSession session);

	public String getErrorInfo(String errorCode);
	
	void changePassword(IPersonalAccount user, String newPassword);
}
