package org.shaolin.vogerp.commonmodel.internal;

import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.shaolin.bmdp.i18n.Localizer;
import org.shaolin.bmdp.i18n.ResourceUtil;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.cache.CacheManager;
import org.shaolin.bmdp.runtime.cache.ICache;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.security.UserContext.OnlineUserChecker;
import org.shaolin.bmdp.runtime.spi.IConstantService;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.bmdp.utils.DateUtil;
import org.shaolin.bmdp.utils.HttpUserUtil;
import org.shaolin.uimaster.page.MobilitySupport;
import org.shaolin.uimaster.page.WebConfig;
import org.shaolin.uimaster.page.ajax.json.JSONObject;
import org.shaolin.uimaster.page.flow.WebflowConstants;
import org.shaolin.vogerp.commonmodel.ICaptcherService;
import org.shaolin.vogerp.commonmodel.IModuleService;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.be.AssignedMemberImpl;
import org.shaolin.vogerp.commonmodel.be.IAddressInfo;
import org.shaolin.vogerp.commonmodel.be.ICaptcha;
import org.shaolin.vogerp.commonmodel.be.IPersonalAccount;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
import org.shaolin.vogerp.commonmodel.be.IRegisterInfo;
import org.shaolin.vogerp.commonmodel.be.OrganizationImpl;
import org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl;
import org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl;
import org.shaolin.vogerp.commonmodel.ce.AMemberType;
import org.shaolin.vogerp.commonmodel.ce.EmployeeLevel;
import org.shaolin.vogerp.commonmodel.ce.OrgVerifyStatusType;
import org.shaolin.vogerp.commonmodel.dao.CommonModel;
import org.shaolin.vogerp.commonmodel.util.CEOperationUtil;
import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UserServiceImpl implements IServiceProvider, IUserService, OnlineUserChecker {

	private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
	private static Localizer LOCALIZER = new Localizer("org_shaolin_vogerp_commonmodel_i18n");
	
	private List<UserActionListener> listeners = new ArrayList<UserActionListener>();
	
	private static final String CACHE_NAME = "__app_users_secondarycache";
	
	// for boosting the user login speed and getting hot user details.
    private final ICache<Long, PersonalInfoImpl> userSecondaryCache;
	
	private static List<Long> onlineUserIds = new ArrayList<Long>();
	
	public UserServiceImpl() {
		UserContext.setOnlineUserChecker(this);
		userSecondaryCache = CacheManager.getInstance().getCache(CACHE_NAME, 300, false, Long.class, 
				PersonalInfoImpl.class);
	}
	
	public void addListener(UserActionListener listener) {
		this.listeners.add(listener);
	}

	public static synchronized String genOrgCode() {
		DateParser parse = new DateParser(new Date());
		return "ORGCode-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getSeconds(), 2) 
				+ "-" + (((int)(Math.random() * 1000)) + 1);
	}
	
	public void updateUserCache(IPersonalInfo user) {
		if (userSecondaryCache.containsKey(user.getId())) {
			userSecondaryCache.put(user.getId(), (PersonalInfoImpl)user);
        } else {
        	userSecondaryCache.put(user.getId(), (PersonalInfoImpl)user);
        }
	}
	
	public boolean checkNewAccount(String userAccount) {
		PersonalAccountImpl account = new PersonalAccountImpl();
		account.setUserName(userAccount);
		try {
			List<IPersonalAccount> result = CommonModel.INSTANCE.searchUserAccount(account, null, 0, 1);
			if (result.size() > 0) {
				return false;
			}
			return true;
		} catch (Exception e) {
			logger.warn(e.getMessage(), e);
			return false;
		}
	}
	
	/**
	 * this method must be synchronized!
	 * 
	 * @param registerInfo
	 */
	public synchronized boolean register(IRegisterInfo registerInfo, HttpServletRequest request) {
		if (registerInfo.getPhoneNumber() == null ||
				registerInfo.getPhoneNumber().trim().length() == 0) {
			return false;
		}
		PersonalAccountImpl account = new PersonalAccountImpl();
		account.setUserName(registerInfo.getPhoneNumber());
		List<IPersonalAccount> result = CommonModel.INSTANCE.searchUserAccount(account, null, 0, 1);
		if (result.size() > 0) {
			return false;
		}
		// save registered info.
		CommonModel.INSTANCE.create(registerInfo);
		
		// create organization
		OrganizationImpl org = new OrganizationImpl();
		org.setName(registerInfo.getOrgName());
		org.setDescription(registerInfo.getOrgName());
		org.setOrgCode(genOrgCode());
		org.setParentId(1);
		org.setType("org.shaolin.vogerp.productmodel.ce.ProductType,1");//TODO:
		CommonModel.INSTANCE.create(org);
		
		// create user info.
		PersonalInfoImpl userInfo = new PersonalInfoImpl();
		userInfo.setOrgCode(org.getOrgCode());
		userInfo.setOrgId(org.getId());
		if (registerInfo.getName() != null) {
			userInfo.setFirstName(registerInfo.getName());
		} else {
			userInfo.setFirstName(registerInfo.getOrgName());
		}
		userInfo.setLastName("");
		userInfo.setType("GenericOrganizationType.Director,0");
		userInfo.setBirthday(new Date());
		userInfo.setEmpLevel(EmployeeLevel.SENIOR);
		userInfo.setEmpId("000001");
		// userInfo.setp registerInfo.getPhoneNumber() 
		// registerInfo.getAddress();
		CommonModel.INSTANCE.create(userInfo);
		
		// create account.
		PersonalAccountImpl newAccount = new PersonalAccountImpl();
		newAccount.setPersonalId(userInfo.getId());
		newAccount.setUserName(registerInfo.getPhoneNumber());
		try {
			newAccount.setPassword(PasswordVerifier.getPasswordHash(registerInfo.getPassword()));
		} catch (NoSuchAlgorithmException e) {
			return false;
		}
		newAccount.setLoginIP(HttpUserUtil.getIP(request));
		this.setLocationInfo(newAccount);
		CommonModel.INSTANCE.create(newAccount);
		
		AssignedMemberImpl assignedMember = new AssignedMemberImpl();
		assignedMember.setOrgId(org.getId());
		assignedMember.setType(AMemberType.GENERAL);
		assignedMember.setDescription("Defualt");
		Date assingedDate = new Date();
		DateUtil.increaseMonths(assingedDate, Registry.getInstance().getValue("/System/Vogerp/UserMemberRule/DefaultMonth", 1));//TODO: must be configurable online.
		assignedMember.setEndtime(assingedDate);
		assignedMember.setStarttime(new Date());
		CommonModel.INSTANCE.create(assignedMember);
		
		// assign modules
		IModuleService moduleService = AppContext.get().getService(IModuleService.class);
		moduleService.newAppModules(IModuleService.DEFAULT_USER_MODULES, org.getId(), org.getOrgCode());
		
		for (UserActionListener listener: listeners) {
			listener.registered(userInfo);
		}
		
		// manually commit the transaction.
		HibernateUtil.releaseSession(HibernateUtil.getSession(), true);
		// the rollback operation is performed outside.
		
		// rebuild transaction again.
		HibernateUtil.getSession();
		
		// send notification.
		return true;
	}

	private void setLocationInfo(PersonalAccountImpl newAccount) {
		try {//could be slow.
			String jsonStr = HttpUserUtil.getRealLocationInfo(newAccount.getLoginIP(), "UTF-8");
			JSONObject json = new JSONObject(jsonStr);
			String regionId = json.getJSONObject("data").getString("region_id");
			String cityId = json.getJSONObject("data").getString("city_id");
			if (regionId != null && regionId.trim().length() > 0) {
				IConstantService cs = IServerServiceManager.INSTANCE.getConstantService();
				String entityName = cs.getChildren("CityList", Integer.parseInt(regionId)).getEntityName();
				newAccount.setLocationInfo(entityName +","+cityId);
			}
		} catch (Exception e) {
		}
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
		HttpSession session = request.getSession();
		Object value = session.getAttribute(WebflowConstants.USER_TOKEN);
		if (value == null) {
			return false;
		}
		//allows the first try has no verified code. its quite useful for App login and tolerated.
		if (session.getAttribute("has_first_token") == null) {
			session.setAttribute("has_first_token", "");
			return true;
		}
		return value.toString().equalsIgnoreCase(answer);
	}
	
	@Override
	public String login(IPersonalAccount user, HttpServletRequest request) {
		if (user.getUserName() == null || user.getUserName().trim().length() == 0) {
			return USER_LOGIN_PASSWORDRULES_PASSWORDINCORRECT;
		}
		if (user.getPassword() == null || user.getPassword().trim().length() == 0) {
			return USER_LOGIN_PASSWORDRULES_PASSWORDINCORRECT;
		}
		user.setEnabled(true);
		List<IPersonalAccount> result = CommonModel.INSTANCE.authenticateUserInfo((PersonalAccountImpl)user, null, 0, -1);
		if (result.size() == 1) {
			IPersonalAccount matchedUser = result.get(0);
			
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
				
				if (matchedUser.getAttempt() >= 5)
				{
					matchedUser.setIsLocked(true);
					matchedUser.setAttempt( matchedUser.getAttempt() + 1);
					CommonModel.INSTANCE.update(matchedUser);
					onlineUserIds.remove(matchedUser.getInfo().getId());
					return USER_LOGIN_PASSWORDRULES_ACCOUNTLOCKED;
				}
			}
			try {
				if (!PasswordVerifier.getPasswordHash(user.getPassword()).equals(matchedUser.getPassword())) {
					matchedUser.setAttempt( matchedUser.getAttempt() + 1);
					CommonModel.INSTANCE.update(matchedUser);
					onlineUserIds.remove(matchedUser.getInfo().getId());
					return USER_LOGIN_PASSWORDRULES_PASSWORDINCORRECT;
				}
			} catch (NoSuchAlgorithmException e) {
				return USER_LOGIN_PASSWORDRULES_PASSWORDINCORRECT;
			}
			
			String userIP = HttpUserUtil.getIP(request);
			if (matchedUser.getLoginIP() == null ||
					!matchedUser.getLoginIP().equals(userIP)) {
				matchedUser.setLoginIP(userIP);
				this.setLocationInfo((PersonalAccountImpl)matchedUser);
			}
			matchedUser.setLastLogin(new Date());
			matchedUser.setAttempt(0);
			matchedUser.setIsLocked(false);
			matchedUser.setLoginedCount(matchedUser.getLoginedCount());
			CommonModel.INSTANCE.update(matchedUser);
			
			HttpSession session = request.getSession(true);
			session.removeAttribute(WebflowConstants.USER_TOKEN);
			session.removeAttribute("has_first_token");
			
			PersonalInfoImpl userInfo = matchedUser.getInfo();
			Long userId = userInfo.getId();
			if (userSecondaryCache.containsKey(userId)) {
				userInfo = userSecondaryCache.get(userId);
	        } else {
	        	userSecondaryCache.put(userId, userInfo);
	        }
			
			if (!onlineUserIds.contains(userInfo.getId())) {
				onlineUserIds.add(userInfo.getId());
			}
			UserContext userContext = new UserContext();
			userContext.setUserId(userInfo.getId());
			userContext.setUserAccount(matchedUser.getUserName());
			userContext.setUserName(userInfo.getFirstName() + userInfo.getLastName());
			userContext.setUserLocale(matchedUser.getLocale());
			userContext.setUserLocation(matchedUser.getLocationInfo());
			if (matchedUser.getLocationInfo() != null) {
				userContext.setCity(matchedUser.getLocationInfo());
			}
			userContext.setUserRoles(CEOperationUtil.toCElist(userInfo.getType()));
			if (matchedUser.getLastLogin() != null) {
				DateParser parse = new DateParser(matchedUser.getLastLogin());
				userContext.setLastLoginDate(parse.getCNDateString() 
						+ "-" + parse.format(parse.getHours(), 2) 
						+ ":" + parse.format(parse.getSeconds(), 2) );
			}
			OrganizationImpl organization = userInfo.getOrganization();
			userContext.setOrgId(organization.getId());
			userContext.setOrgCode(organization.getOrgCode());
			userContext.setOrgType(organization.getType());
			userContext.setOrgName(organization.getName());
			userContext.setIsAdmin("uimaster".equals(organization.getOrgCode()) || "runner".equals(organization.getOrgCode()));
			userContext.setVerified(organization.getVeriState() == OrgVerifyStatusType.VERIFIED);
			session.setAttribute(WebflowConstants.USER_SESSION_KEY, userContext);
			session.setAttribute(WebflowConstants.USER_LOCALE_KEY, matchedUser.getLocale());
			session.setAttribute(WebflowConstants.USER_ROLE_KEY, CEOperationUtil.toCElist(userInfo.getType()));
			
			String userLocale = WebConfig.getUserLocale(request);
			List userRoles = (List)session.getAttribute(WebflowConstants.USER_ROLE_KEY);
			String userAgent = request.getHeader("user-agent");
			boolean isMobile = MobilitySupport.isMobileRequest(userAgent);
			//add user-context thread bind
            UserContext.register(session, userContext, userLocale, userRoles, isMobile);
            for (UserActionListener listener: listeners) {
    			listener.loggedIn(matchedUser, userInfo);
    		}
            
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
	public boolean isOnline(long userId) {
		return onlineUserIds.contains(userId);
	}
	
	public int getOnlineUsers() {
		return onlineUserIds.size();
	}
	
	public String getUserLocation(long userId) {
		if (userId < 1) {
			return "China";
		}
		PersonalAccountImpl account = new PersonalAccountImpl();
		account.setPersonalId(userId);
		List<IPersonalAccount> result = CommonModel.INSTANCE.searchUserAccount(account, null, 0, 1);
		if (result != null && result.size() > 0) {
			return result.get(0).getLocationInfo();
		}
		return "China";
	}
	
	@Override
	public String getUserOrganizationType() {
		return ((UserContext)UserContext.getUserData(WebflowConstants.USER_SESSION_KEY)).getOrgType();
	}
	
	@Override
	public long getUserId() {
		return ((UserContext)UserContext.getUserData(WebflowConstants.USER_SESSION_KEY)).getUserId();
	}
	
	@Override
	public JSONObject getOnlineUserAsJSON() {
		try {
			JSONObject json = new JSONObject();
			json.put("orgName", UserContext.getUserContext().getOrgName());
			json.put("userName", UserContext.getUserContext().getUserName());
			return json;
		} catch (Exception e) {
			return new JSONObject();
		}
	}
	
	@Override
	public boolean checkUserOnline(HttpSession session) {
		if (session.getAttribute(WebflowConstants.USER_SESSION_KEY) == null) {
			return false;
		}
		UserContext context = (UserContext)session.getAttribute(WebflowConstants.USER_SESSION_KEY);
		return  context.getUserId() > 0;
	}
	
	@Override
	public void logout(HttpSession session) {
		Object userContext = session.getAttribute(WebflowConstants.USER_SESSION_KEY);
		if (userContext != null) {
			onlineUserIds.remove(((UserContext)userContext).getUserId());
		}
		session.removeAttribute(WebflowConstants.USER_SESSION_KEY);
		session.removeAttribute(WebflowConstants.USER_LOCALE_KEY);
		session.removeAttribute(WebflowConstants.USER_ROLE_KEY);
		UserContext.unregister();
	}
	
	@Override
	public String getErrorInfo(String errorCode) {
		return ResourceUtil.getResource("zh_CN", LOCALIZER.getName(), errorCode);
	}

	@Override
	public IPersonalAccount getPersonalAccount(long userId) {
		PersonalInfoImpl userInfo = new PersonalInfoImpl();
		userInfo.setId(userId);
		PersonalAccountImpl account = new PersonalAccountImpl();
		account.setInfo(userInfo);
		List<IPersonalAccount> result = CommonModel.INSTANCE.searchUserAccount(account, null, 0, 1);
		return result.get(0);
	}
	
	@Override
	public IPersonalInfo getPersonalInfo(long userId) {
		if (userSecondaryCache.containsKey(userId)) {
			return userSecondaryCache.get(userId);
		}
		return CommonModel.INSTANCE.get(userId, PersonalInfoImpl.class);
	}
	
	@Override
	public String getUserName(long userId) {
		return CustomerInfoUtil.getCustomerEnterpriseBasicInfo(getPersonalInfo(userId));
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

	public boolean hasAddressConfigured(long userId) {
		List<IAddressInfo> addressInfo = getPersonalInfo(userId).getAddresses();
		return (addressInfo != null && addressInfo.size() > 0);
	}
}
