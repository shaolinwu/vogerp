package org.shaolin.vogerp.commonmodel.internal;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.shaolin.bmdp.i18n.Localizer;
import org.shaolin.bmdp.i18n.ResourceUtil;
import org.shaolin.bmdp.json.JSONException;
import org.shaolin.bmdp.json.JSONObject;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.cache.CacheManager;
import org.shaolin.bmdp.runtime.cache.ICache;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.security.UserContext.OnlineUserChecker;
import org.shaolin.bmdp.runtime.spi.IAppServiceManager.Env;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.bmdp.utils.DateUtil;
import org.shaolin.bmdp.utils.HttpSender;
import org.shaolin.bmdp.utils.HttpUserUtil;
import org.shaolin.uimaster.page.MobilitySupport;
import org.shaolin.uimaster.page.WebConfig;
import org.shaolin.uimaster.page.flow.WebflowConstants;
import org.shaolin.vogerp.accounting.IAccountingService;
import org.shaolin.vogerp.accounting.internal.AccountingServiceImpl;
import org.shaolin.vogerp.commonmodel.ICaptcherService;
import org.shaolin.vogerp.commonmodel.IModuleService;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.be.AddressInfoImpl;
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
import org.shaolin.vogerp.commonmodel.ce.OrgType;
import org.shaolin.vogerp.commonmodel.ce.OrgVerifyStatusType;
import org.shaolin.vogerp.commonmodel.dao.CommonModel;
import org.shaolin.vogerp.commonmodel.dao.CustCommonModel;
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
	
	public UserServiceImpl() {
		UserContext.setOnlineUserChecker(this);
		userSecondaryCache = CacheManager.getInstance().getCache(CACHE_NAME, 100, false, Long.class, 
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
	public synchronized boolean register(final IRegisterInfo registerInfo, HttpServletRequest request) {
		if (registerInfo.getPhoneNumber() == null
				|| registerInfo.getPhoneNumber().trim().length() == 0
				|| registerInfo.getPhoneNumber().equals("null")) {
			return false;
		}
		if (registerInfo.getUserType() == null || registerInfo.getUserType() == OrgType.NOT_SPECIFIED) {
			logger.debug("Does not specify the user type! " + registerInfo.getPhoneNumber());
			return false;
		}
		PersonalAccountImpl account = new PersonalAccountImpl();
		account.setUserName(registerInfo.getPhoneNumber());
		List<IPersonalAccount> result = CommonModel.INSTANCE.searchUserAccount(account, null, 0, 1);
		if (result.size() > 0) {
			return false;
		}
		CommonModel.INSTANCE.create(registerInfo);
		
		// create organization
		OrganizationImpl org = new OrganizationImpl();
		org.setName(registerInfo.getOrgName());
		org.setDescription(registerInfo.getOrgName());
		org.setOrgCode(genOrgCode());
		org.setParentId(1);
		org.setOrgType(registerInfo.getUserType());
		if (registerInfo.getOrgType() != null && registerInfo.getOrgType().length() > 0) {
			org.setType(registerInfo.getOrgType());
		} else {
			org.setType("org.shaolin.vogerp.productmodel.ce.ProductType,1");//MachineryManufacturing
		}
		CommonModel.INSTANCE.create(org);
		registerInfo.setOrgId(org.getId());
		
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
		
		if (registerInfo.getUserType() == OrgType.COMPANY) {
			registerInfo.getAddress().setName(registerInfo.getOrgName());
			registerInfo.getAddress().setMobile(registerInfo.getPhoneNumber());
			Set<IAddressInfo> addresses = new HashSet<IAddressInfo>();
			addresses.add(registerInfo.getAddress());
			userInfo.setAddresses(addresses);
		}
		// userInfo.setp registerInfo.getPhoneNumber() 
		// registerInfo.getAddress();
		CommonModel.INSTANCE.create(userInfo);
		registerInfo.setUserId(userInfo.getId());
		
		// create account.
		PersonalAccountImpl newAccount = new PersonalAccountImpl();
		newAccount.setPersonalId(userInfo.getId());
		newAccount.setUserName(registerInfo.getPhoneNumber());
		newAccount.setPassword(registerInfo.getPassword().toUpperCase());
		newAccount.setLoginIP(HttpUserUtil.getIP(request));
		newAccount.setLatitude(registerInfo.getLatitude());
		newAccount.setLongitude(registerInfo.getLongitude());
		newAccount.setLocale("zh_CN");
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
		
		if (IServerServiceManager.INSTANCE.getRunningEnv() == Env.Production) {
			// assign modules
			IModuleService moduleService = AppContext.get().getService(IModuleService.class);
			moduleService.newAppModules(IModuleService.DEFAULT_USER_MODULES, org.getId(), org.getOrgCode());
		}
		for (UserActionListener listener: listeners) {
			listener.registered(userInfo);
		}
		
		// manually commit the transaction.
		HibernateUtil.releaseSession(true);
		// the rollback operation is performed outside.
		
		// rebuild transaction again.
		HibernateUtil.getSession();
		
		// send notification.
		return true;
	}

	private void setLocationInfo(PersonalAccountImpl newAccount) {
		try {//could be slow.
			String result = WebConfig.getUserCityInfo(newAccount.getLoginIP());
			logger.info("Search for city location from ip: " + newAccount.getLoginIP() + ", result: " + result);
			if(result != null && result.trim().length() > 0) {
				newAccount.setLocationInfo(result);
			}
			double[] coordinations = WebConfig.getUserLocation(newAccount.getLoginIP());
			logger.info("Search for geo-location from ip: " + newAccount.getLoginIP() + ", result: " + Arrays.toString(coordinations));
			if (coordinations != null && coordinations.length == 2) {
				newAccount.setLongitude(coordinations[0]);
				newAccount.setLatitude(coordinations[1]);
			}
		} catch (Exception e) {
			logger.warn("Failed to access user Location info: " + e.getMessage());
		}
	}
	
	public PasswordCheckResult checkPasswordPattern(String password) {
		return PasswordVerifier.checkPasswordPolicy(password);
	}
	
	@Override
	public String preLogin(HttpServletRequest request) {
		ICaptcherService service = IServerServiceManager.INSTANCE.getService(ICaptcherService.class);
		ICaptcha captcha = service.getItem(service.generateOne());
		
		HttpSession session = request.getSession();
		session.setAttribute(WebflowConstants.USER_TOKEN, captcha.getAnswer());
		return captcha.getQuestion();
	}
	
	@Override
	public boolean checkVerifiAnswer(String answer, HttpServletRequest request) {
		HttpSession session = request.getSession();
		//allows the first try has no verified code. its quite useful for App login and first tolerated login.
		if (session.getAttribute("has_first_token") == null) {
			session.setAttribute("has_first_token", "");
			return true;
		}
		Object value = session.getAttribute(WebflowConstants.USER_TOKEN);
		if (value == null) {
			return false;
		}
		return value.toString().equalsIgnoreCase(answer);
	}
	
	/**
	 * Login Requirements: 
	 * 1. the password must be encryted in the client before sending.
	 * 2. MD5 supported and time expiration supported for auto login.
	 */
	@Override
	public String login(final IPersonalAccount user, final HttpServletRequest request) {
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
					return USER_LOGIN_PASSWORDRULES_ACCOUNTLOCKED;
				}
			}
			if (!user.getPassword().equals(matchedUser.getPassword().toUpperCase())) {
				matchedUser.setAttempt(matchedUser.getAttempt() + 1);
				CommonModel.INSTANCE.update(matchedUser);
				return USER_LOGIN_PASSWORDRULES_PASSWORDINCORRECT;
			}
			// auto login check!
			String userIP = HttpUserUtil.getIP(request);
			String autosumcheck = request.getParameter("autosumcheck");
			if (autosumcheck != null && autosumcheck.length() > 0 
					&& matchedUser.getAutoLoginSumCheck() != null && matchedUser.getAutoLoginSumCheck().length() > 0) {
				Date expiredDate = new Date(); 
				DateUtil.increaseDays(expiredDate, 7);// auto login must be cancelled after 7 days.
				if (!(matchedUser.getAutoLoginSumCheck().equals(autosumcheck) && matchedUser.getLoginIP().equals(userIP))) {
					return USER_LOGIN_PASSWORDRULES_EXPIRED;
				} else if ((System.currentTimeMillis() - matchedUser.getLastLogin().getTime()) > expiredDate.getTime()) {
					return USER_LOGIN_PASSWORDRULES_EXPIRED;
				}
			} 
			// the auto sumcheck will be generated and updated by server side.
			matchedUser.setAutoLoginSumCheck(Math.random() + "");
			matchedUser.setLastLogin(new Date());
			matchedUser.setAttempt(0);
			matchedUser.setIsLocked(false);
			matchedUser.setLoginedCount(matchedUser.getLoginedCount() + 1);
			if (user.getLatitude() > 0d) {
				matchedUser.setLatitude(user.getLatitude());
				matchedUser.setLongitude(user.getLongitude());
			}
			if ((matchedUser.getLocationInfo() == null || matchedUser.getLocationInfo().trim().length() == 0)
					 || matchedUser.getLoginIP() == null || !matchedUser.getLoginIP().equals(userIP)) {
				matchedUser.setLoginIP(userIP);
				this.setLocationInfo((PersonalAccountImpl)matchedUser);
			}
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
			
			UserContext userContext = new UserContext();
			userContext.setUserId(userInfo.getId());
			userContext.setUserAccount(matchedUser.getUserName());
			userContext.setUserName(userInfo.getFirstName());
			userContext.setUserLocale(matchedUser.getLocale());
			userContext.setUserRequestIP(request.getRemoteAddr());
			userContext.setAutoLoginSumCheck(matchedUser.getAutoLoginSumCheck());
			if (matchedUser.getLocationInfo() != null) {
				userContext.setUserLocation(matchedUser.getLocationInfo());
				userContext.setCity(matchedUser.getLocationInfo());
			}
			userContext.setLatitude(matchedUser.getLatitude());
			userContext.setLongitude(matchedUser.getLongitude());
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
			List<IConstantEntity> userRoles = CEOperationUtil.toCElist(userInfo.getType());
			session.setAttribute(WebflowConstants.USER_ROLE_KEY, userRoles);
			session.setAttribute(WebflowConstants.USER_SESSION_KEY, userContext);
			session.setAttribute(WebflowConstants.USER_LOCALE_KEY, matchedUser.getLocale());
			
			String userLocale = WebConfig.getUserLocale(request);
			String userAgent = request.getHeader("user-agent");
			boolean isMobile = MobilitySupport.isMobileRequest(userAgent);
			//add user-context thread bind
            UserContext.register(session, userContext, userLocale, userRoles, isMobile);
            UserContext.addUserData(WebflowConstants.USER_ROLE_KEY, userRoles);
            if (IServerServiceManager.INSTANCE.getRunningEnv() == Env.Production) {
	            AccountingServiceImpl accountingService = (AccountingServiceImpl)AppContext.get().getService(IAccountingService.class);
	            accountingService.registerLoginUserAccountInfo(userContext);
            }
            for (UserActionListener listener: listeners) {
	    			listener.loggedIn(matchedUser, userInfo);
	    		}
            registerOnlineUser(userContext);
            
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
	public void logout(HttpSession session) {
		Object userContext = session.getAttribute(WebflowConstants.USER_SESSION_KEY);
		if (userContext != null) {
			long userId = ((UserContext)userContext).getUserId();
			try {
				if (websocketServer != null && websocketServer.length() > 0) {
					if (websocketServer.startsWith("https")) {
						sender.doGetSSL(websocketServer + "/uimaster/onlineinfo?type=logout&userId=" + userId, "UTF-8");
					} else {
						sender.get(websocketServer + "/uimaster/onlineinfo?type=logout&userId=" + userId);
					}
				}
			} catch (Throwable e) {
				logger.warn("Error to access online user count!", e);
			}
		}
		session.removeAttribute(WebflowConstants.USER_SESSION_KEY);
		session.removeAttribute(WebflowConstants.USER_LOCALE_KEY);
		session.removeAttribute(WebflowConstants.USER_ROLE_KEY);
		
		for (UserActionListener listener: listeners) {
			listener.loggedOut();
		}
		UserContext.unregister();
	}

	public boolean isEnterpriseUser(long userId) {
		IPersonalInfo personInfo = getPersonalInfo(userId);
		if (personInfo != null && personInfo.getOrganization() != null) {
			return personInfo.getOrganization().getOrgType() == OrgType.COMPANY;
		}
		return false;
	}
	
	public boolean isIndividualUser(long userId) {
		IPersonalInfo personInfo = getPersonalInfo(userId);
		if (personInfo != null && personInfo.getOrganization() != null) {
			return personInfo.getOrganization().getOrgType() == OrgType.INDIVIDUAL;
		}
		return true; //by default
	}
	
	private HttpSender sender = new HttpSender();
	private String websocketServer = WebConfig.getWebSocketServer();
	
	private void registerOnlineUser(final UserContext userContext) {
		if (websocketServer == null || websocketServer.length() == 0) {
			logger.info("Websocker server is not configured!");
			return;
		}
		try {
			String param = "&partyId=" + userContext.getUserId() + "&latitude=" + userContext.getLatitude() + "&longitude=" + userContext.getLongitude();
			if (websocketServer.startsWith("https")) {
				sender.doGetSSL(websocketServer + "/uimaster/onlineinfo?type=register" + param, "UTF-8");
			} else {
				sender.get(websocketServer + "/uimaster/onlineinfo?type=register" + param);
			}
		} catch (Exception e) {
			logger.warn("Fail to register online user info!", e);
		}
	}
	
	/**
	 * all online user ids stored in node.js for distribution.
	 */
	@Override
	public boolean isOnline(long userId) {
		try {
			if (websocketServer == null || websocketServer.length() == 0) {
				logger.info("Websocker server is not configured!");
				return false;
			}
			if (websocketServer.startsWith("https")) {
				return "true".equals(sender.doGetSSL(websocketServer + "/uimaster/onlineinfo?type=checkUserOnline&userId=" + userId, "UTF-8"));
			} else {
				return "true".equals(sender.get(websocketServer + "/uimaster/onlineinfo?type=checkUserOnline&userId=" + userId));
			}
		} catch (Exception e) {
			logger.warn("Error to access online user info!", e);
			return false;
		}
	}
	
	public int getOnlineUsers() {
		if (websocketServer == null || websocketServer.length() == 0) {
			logger.info("Websocker server is not configured!");
			return 0;
		}
		try {
			if (websocketServer.startsWith("https")) {
				return Integer.parseInt(sender.doGetSSL(websocketServer + "/uimaster/onlineinfo?type=userCount", "UTF-8"));
			} else {
				return Integer.parseInt(sender.get(websocketServer + "/uimaster/onlineinfo?type=userCount"));
			}
		} catch (Exception e) {
			logger.warn("Error to access online user count!", e);
		}
		return 0;
	}
	
	private static final String USER_LOCATION_SQL = "SELECT LOCATIONINFO from comm_personalaccount a where a.PERSONALID=?";
	
	public String getUserLocation(long userId) {
		if (userId < 1) {
			return "";
		}
		
		Session session = HibernateUtil.getSession();
		final List<String> rows = session.createSQLQuery(USER_LOCATION_SQL).setLong(0, userId).list();
		if (rows != null && rows.size() > 0) {
			return rows.get(0);
		}
		return "";
	}
	
	@Override
	public String getUserOrganizationType() {
		return UserContext.getUserContext().getOrgType();
	}
	
	@Override
	public long getUserId() {
		return UserContext.getUserContext().getUserId();
	}
	
	@Override
	public JSONObject getOnlineUserAsJSON() {
		try {
			JSONObject json = new JSONObject();
			json.put("orgId", UserContext.getUserContext().getOrgId());
			json.put("orgName", UserContext.getUserContext().getOrgName());
			json.put("userId", UserContext.getUserContext().getUserId());
			json.put("userName", UserContext.getUserContext().getUserName());
			json.put("city", UserContext.getUserContext().getCity());
			json.put("locale", UserContext.getUserContext().getLocale());
			json.put("sumCheck", UserContext.getUserContext().getAutoLoginSumCheck());
			
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
	public List<IPersonalInfo> getPersonalInfos(Set<Long> userIds) {
		if (userIds == null || userIds.size() == 0) {
			return Collections.emptyList();
		}
		Session session = HibernateUtil.getReadOnlySession();
		try {
			Criteria criteria = session.createCriteria(org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl.class, "pinfo");
			Object[] values = new Object[userIds.size()];
			userIds.toArray(values);
			criteria.add(Restrictions.in("pinfo.id", values));
			return criteria.list();
		} finally {
			HibernateUtil.releaseSession(session, true);
		}
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
			user.setPassword(newPassword.toUpperCase());
			CommonModel.INSTANCE.update(user);
		}
	}

	public boolean hasAddressConfigured(long userId) {
		Set<IAddressInfo> addressInfo = getPersonalInfo(userId).getAddresses();
		return (addressInfo != null && addressInfo.size() > 0);
	}
	
	public void addAddressInfo(String json) throws JSONException {
		if (json == null || json.trim().length() == 0) {
			logger.warn("Address info cannot be empty");
			return;
		}
		JSONObject jsonObject = new JSONObject(json);
		long userId = jsonObject.getLong("userId");
		if (userId <= 0) {
			logger.warn("the user id of Address info cannot be 0!");
			return;
		}
		AddressInfoImpl info = new AddressInfoImpl();
		info.setDescription(jsonObject.getString("desc"));
		info.setCountry(jsonObject.getString("country"));
		info.setCity(jsonObject.getString("city"));
		info.setDistrict(jsonObject.getString("district"));
		info.setStreet(jsonObject.getString("street"));
		info.setMobile(jsonObject.getString("mobile"));
		info.setTelephone(jsonObject.getString("mobile"));
		info.setName(jsonObject.getString("name"));
        CustCommonModel.INSTANCE.updateAddresse(userId, info);
        
        //TODO: update account location.
        IPersonalAccount account = getPersonalAccount(userId);
        account.setLocationInfo(jsonObject.getString("city"));
        CommonModel.INSTANCE.update(account);
	}
}
