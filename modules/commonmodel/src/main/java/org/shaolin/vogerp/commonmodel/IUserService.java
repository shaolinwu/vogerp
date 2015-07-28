package org.shaolin.vogerp.commonmodel;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.shaolin.vogerp.commonmodel.be.IPersonalAccount;
import org.shaolin.vogerp.commonmodel.internal.PasswordCheckResult;

public interface IUserService {

	public PasswordCheckResult checkPasswordPattern(String password);
	
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
