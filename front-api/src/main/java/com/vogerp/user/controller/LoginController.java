package com.vogerp.user.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vogerp.common.annotation.Log;
import com.vogerp.common.domain.SMSMessageDO;
import com.vogerp.common.filter.IPCongestionFilter;
import com.vogerp.common.service.FileService;
import com.vogerp.common.service.IShortMsgService;
import com.vogerp.common.utils.MD5Utils;
import com.vogerp.common.utils.Query;
import com.vogerp.common.utils.R;
import com.vogerp.event.service.EventService;
import com.vogerp.user.domain.UserDO;
import com.vogerp.user.event.UserRegisteredEvent;
import com.vogerp.user.service.UserService;
import com.vogerp.wallet.service.AccountService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value = "用户登录接口组")
@Controller
public class LoginController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	FileService fileService;
	@Autowired
	UserService userService;
	@Autowired
	IShortMsgService smsService;
	@Autowired
	private AccountService accountService;
	@Autowired
	private EventService eventService;
	
	@Log("手机号登录")
	@PostMapping("/login")
	@ResponseBody
	public R login(String mobile, String password) {
		if (mobile == null || mobile.trim().length() ==0) {
			return R.error("手机码不能为空", "Mobile number can't be empty.");
		}
		if (password == null || password.trim().length() ==0) {
			return R.error("密码不能为空", "The password can't be emtpy.");
		}
		password = MD5Utils.encrypt(mobile, password);
		//UsernamePasswordToken token = new UsernamePasswordToken(username, password);
		Map<String, Object> condition = new HashMap<String, Object>();
		condition.put("mobile", mobile);
		condition.put("password", password);
		List<UserDO> result0 = userService.list(condition);
		if (result0 == null || result0.size() == 0) {
			return R.error("用户不存在或密码不正确！", "Login failed due to either user does not exist or password is incorrect.");
		}
		UserDO user = result0.get(0);
		user.setAuthCode(Math.random() + "");//used for remembering me feature.
		user.setLastLoginTime(new Date());
		userService.updatePersonal(user);
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("userId", user.getUserId());
		result.put("mobile", user.getMobile());
		result.put("invitedCode", user.getMyInvitedCode());
		result.put("nickname", user.getNickname());
		result.put("openId", user.getWechatOpenId());
		result.put("headImgUrl", user.getHeadImgUrl());
		result.put("kycState", user.getKycStatus());
		result.put("authCode", user.getAuthCode()); 
		return R.ok(result);
	}
	
	@Log("邮件登录")
	@PostMapping("/loginwithemail")
	@ResponseBody
	public R loginWithEmail(String email, String password) {
		if (email == null || email.trim().length() ==0) {
			return R.error("Email不能为空", "Email can't be empty.");
		}
		if (password == null || password.trim().length() ==0) {
			return R.error("密码不能为空", "The password can't be emtpy.");
		}
		password = MD5Utils.encrypt(email, password);
		//UsernamePasswordToken token = new UsernamePasswordToken(username, password);
		Map<String, Object> condition = new HashMap<String, Object>();
		condition.put("email", email);
		condition.put("password", password);
		List<UserDO> result0 = userService.list(condition);
		if (result0 == null || result0.size() == 0) {
			return R.error("用户不存在或密码不正确！", "Login failed due to either user does not exist or password is incorrect.");
		}
		UserDO user = result0.get(0);
		user.setAuthCode(Math.random() + "");//used for remembering me feature.
		user.setLastLoginTime(new Date());
		userService.updatePersonal(user);
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("userId", user.getUserId());
		result.put("email", user.getEmail());
		result.put("invitedCode", user.getMyInvitedCode());
		result.put("nickname", user.getNickname());
		result.put("openId", user.getWechatOpenId());
		result.put("headImgUrl", user.getHeadImgUrl());
		result.put("kycState", user.getKycStatus());
		result.put("authCode", user.getAuthCode()); 
		return R.ok(result);
	}
	
	@Log("获取注册手机码")
	@PostMapping("/register/getsmscode")
	@ResponseBody
	public R sendSMSCode(String mobile,String invitedCode ) {
		if (mobile == null || mobile.trim().length() ==0) {
			return R.error("手机码不能为空", "Mobile number can't be empty.");
		}
		Map<String, Object> condition = new HashMap<String, Object>();
		condition.put("mobile", mobile);
		if (userService.count(condition) > 0) {
			return R.error(mobile+"用户已注册！", mobile +" has already registered.");
		}
		SMSMessageDO msg = smsService.getMessage(mobile, "1");
		if (msg != null && (System.currentTimeMillis() - msg.getCreateDate().getTime()) < 60 * 1000) {
			return R.error("手机注册已发送！请1分钟后再申请。", "SMS code has sent already. Please try again after 1 minute.");
		}
		if (smsService.sendRegistrySMSCode(mobile, generateSMSCode())) {
			return R.ok();
		} 
		return R.error();
	}
	
	@Log("获取注册邮件码")
	@PostMapping("/register/getemailcode")
	@ResponseBody
	public R sendEmailCode(String email) {
		if (email == null || email.trim().length() ==0) {
			return R.error("邮件不能为空", "Email can't be empty.");
		}
		Map<String, Object> condition = new HashMap<String, Object>();
		condition.put("email", email);
		if (userService.count(condition) > 0) {
			return R.error(email+"邮件已注册！", email +" has already registered.");
		}
		if (smsService.sendRegistryEmailCode(email, generateSMSCode())) {
			return R.ok();
		} 
		return R.error();
	}
	
	@Log("注册第一步，确认手机验证码")
	@PostMapping("/preregister")
	@ResponseBody
	public R	 preregisterWithSmsCode(String mobile, String smsCode) {
		if (mobile == null || mobile.trim().length() == 0) {
			return R.error("手机号不能为空！", "Mobile number can't be empty");
		}
		SMSMessageDO msg = smsService.getMessage(mobile, "1");
		if (msg == null || msg.getCode() == null) {
			return R.error("手机注册码不存在，请重新注册", "SMS verification code does not exit. Please try again.");
		}
		if (!msg.getCode().equals(smsCode)) {
			return R.error("手机验证码不正确，请重新获取", "SMS verification code is incorrect.");
		}
		return R.ok();
	}
	
	@Log("注册第一步，确认邮箱验证码")
	@PostMapping("/preregisterwithemail")
	@ResponseBody
	public R	 preregisterWithEmailCode(String email, String smsCode) {
		if (email == null || email.trim().length() == 0) {
			return R.error("Email不能为空！", "Email can't be empty");
		}
		SMSMessageDO msg = smsService.getMessage(email, "1");
		if (msg == null || msg.getCode() == null) {
			return R.error("Email注册码不存在，请重新注册", "Email verification code does not exit. Please try again.");
		}
		if (!msg.getCode().equals(smsCode)) {
			return R.error("Email验证码不正确，请重新获取", "Email verification code is incorrect.");
		}
		return R.ok();
	}
	
	@Log("手机号注册")
	@PostMapping("/register")
	@ResponseBody
	@Transactional
	public R register(HttpServletRequest request, String mobile, String password, String invitedCode, String smsCode) {
		String remoteIP = IPCongestionFilter.getIpAddress(request);
		if (remoteIP == null) {
			return R.error("不支持ip为空的http请求","remote ip is null");
		}
		
		if (mobile == null || mobile.trim().length() == 0) {
			return R.error("手机号不能为空！", "Mobile number can't be empty.");
		}
		if (password == null || password.length() == 0) {
			return R.error("密码不能为空！", "The password can't be empty");
		}
		if (invitedCode != null && "undefined".equals(invitedCode)) {
			return R.error("邀请码不能为: undefined", "The invited code can't be undefined");
		}
		SMSMessageDO msg = smsService.getMessage(mobile, "1");
		if (msg == null || msg.getCode() == null) {
			return R.error("手机验证码不存在，请重新注册", "SMS code does not exit. Please try again.");
		}
		if (!msg.getCode().equals(smsCode)) {
			return R.error("手机验证码不正确，请重新获取", "SMS code is incorrect.");
		}
		Map<String, Object> condition = new HashMap<String, Object>();
		condition.put("mobile", mobile);
		if (userService.count(condition) > 0) {
			return R.error(mobile+"用户已注册！", mobile + " has registered already.");
		}
		
		UserDO newUser = new UserDO();
		newUser.setMobile(mobile);
		newUser.setUsername(mobile);
		newUser.setNickname("HID:"+generateSMSCode());
		newUser.setPassword(MD5Utils.encrypt(mobile, password));
		newUser.setInvitedCode(invitedCode);
		newUser.setStatus(1);
		newUser.setKycStatus(0);
		newUser.setGmtCreate(new Date());
		newUser.setRegIp(IPCongestionFilter.getIpAddress2(request));
		try {
			userService.registerPersonal(newUser);
			
			//update my invited code
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("mobile", mobile);
			params.put("password", newUser.getPassword());
			Query query = new Query(params);
			List<UserDO> sysUserList = userService.list(query);
			UserDO updatedUser = sysUserList.get(0);
			updatedUser.setMyInvitedCode(generateInvitedCode(updatedUser.getUserId()));
			userService.updatePersonal(updatedUser);
			userService.createPosterImg(updatedUser.getMyInvitedCode(), updatedUser.getUserId());
			newUser.setMyInvitedCode(updatedUser.getMyInvitedCode());
			
			accountService.createPersonalAccount(updatedUser.getUserId());
			
			eventService.publish(new UserRegisteredEvent(updatedUser.getUserId()));
		} catch (Exception ex) {
			logger.warn(ex.getMessage(), ex);
			return R.error("注册失败", "Sorry! registration failed, please try again.");
		}
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("mobile", mobile);
		result.put("nickname", newUser.getNickname());
		result.put("invitedCode", newUser.getMyInvitedCode());
		return R.ok(result);
	}
	
	@Log("邮件注册")
	@PostMapping("/registerwithemail")
	@ResponseBody
	@Transactional
	public R registerWithEmail(HttpServletRequest request, String email, String password, String invitedCode, String smsCode) {
		String remoteIP = IPCongestionFilter.getIpAddress(request);
		if (remoteIP == null) {
			return R.error("不支持ip为空的http请求","remote ip is null");
		}
		
		if (email == null || email.trim().length() == 0) {
			return R.error("Email不能为空！", "Email can't be empty.");
		}
		if (password == null || password.length() == 0) {
			return R.error("密码不能为空！", "The password can't be empty");
		}
		if (invitedCode != null && "undefined".equals(invitedCode)) {
			return R.error("邀请码不能为: undefined", "The invited code can't be undefined");
		}
		SMSMessageDO msg = smsService.getMessage(email, "1");
		if (msg == null || msg.getCode() == null) {
			return R.error("Email验证码不存在，请重新注册", "Email verification code does not exit. Please try again.");
		}
		if (!msg.getCode().equals(smsCode)) {
			return R.error("Email验证码不正确，请重新获取", "Email verification code is incorrect.");
		}
		
		Map<String, Object> condition = new HashMap<String, Object>();
		condition.put("email", email);
		if (userService.count(condition) > 0) {
			return R.error(email+"用户已注册！", email + " has registered already.");
		}
		
		UserDO newUser = new UserDO();
		newUser.setEmail(email);
		newUser.setUsername(email);
		newUser.setNickname("HID:"+generateSMSCode());
		newUser.setPassword(MD5Utils.encrypt(email, password));
		newUser.setInvitedCode(invitedCode);
		newUser.setStatus(1);
		newUser.setKycStatus(0);
		newUser.setGmtCreate(new Date());
		try {
			userService.registerPersonal(newUser);
			
			//update my invited code
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("email", email);
			params.put("password", newUser.getPassword());
			Query query = new Query(params);
			List<UserDO> sysUserList = userService.list(query);
			UserDO updatedUser = sysUserList.get(0);
			updatedUser.setMyInvitedCode(generateInvitedCode(updatedUser.getUserId()));
			userService.updatePersonal(updatedUser);
			newUser.setMyInvitedCode(updatedUser.getMyInvitedCode());
			
			accountService.createPersonalAccount(updatedUser.getUserId());
			
			eventService.publish(new UserRegisteredEvent(updatedUser.getUserId()));
		} catch (Exception ex) {
			logger.warn(ex.getMessage(), ex);
			return R.error("注册失败", "Sorry! registration failed, please try again.");
		}
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("mobile", email);
		result.put("nickname", newUser.getNickname());
		result.put("invitedCode", newUser.getMyInvitedCode());
		return R.ok(result);
	}
	
	@Log("获取忘记密码手机注册码")
	@PostMapping("/forgetpassword/getsmscode")
	@ResponseBody
	public R sendSMSCode2(HttpServletRequest request, String mobile) {
		if (mobile == null || mobile.trim().length() ==0) {
			return R.error("手机号不能为空", "Mobile number can't be empty.");
		}
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("mobile", mobile);
		Query query = new Query(params);
		List<UserDO> sysUserList = userService.list(query);
		if (sysUserList == null || sysUserList.size() == 0) {
			return R.error(mobile+"用户不存在", mobile+" does not exist.");
		}
		SMSMessageDO msg = smsService.getMessage(mobile, "2");
		if (msg != null && (System.currentTimeMillis() - msg.getCreateDate().getTime()) < 60 * 1000) {
			return R.error("手机验证已发送！请1分钟后再申请。", "SMS code has sent already. Please try again after 1 minute.");
		}
		if (smsService.sendFindCNPassword(mobile, generateSMSCode())) {
			return R.ok();
		} 
		return R.error();
	}
	
	@ApiOperation("用户忘记密码")
	@PostMapping("/forgetpassword")
	@ResponseBody
	public R forgetPassword(String mobile, String newPwd, String smsCode) {
		if (mobile == null || mobile.trim().length() ==0) {
			return R.error("手机号为能为空", "Mobile number can't be empty.");
		}
		if (newPwd == null || newPwd.trim().length() ==0) {
			return R.error("新密码不能为空", "The new password can't be empty.");
		}
		if (smsCode == null || smsCode.trim().length() ==0) {
			return R.error("手机验证码不能为空", "The sms code can't be empty.");
		}
		SMSMessageDO msg = smsService.getMessage(mobile, "2");
		if (msg == null || msg.getCode() == null) {
			return R.error("手机验证码不存在，请重新注册", "SMS code does not exit. Please try again.");
		}
		if (!msg.getCode().equals(smsCode)) {
			return R.error("手机验证码不正确，请重新获取", "SMS code is incorrect.");
		}
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("mobile", mobile);
		Query query = new Query(params);
		List<UserDO> sysUserList = userService.list(query);
		if (sysUserList != null && sysUserList.size() > 0) {
			UserDO userDO = sysUserList.get(0);
			String password = MD5Utils.encrypt(userDO.getMobile(), newPwd);
			if (userDO.getPassword().equals(password)) {
				return R.error("更新用户密码失败，原密码与新密码一样", "Sorry, your password updates failed. your old password is the same as this new passowrd.");
			}
			userDO.setPassword(password);
			if (userService.updatePassword(userDO) > 0) {
				return R.ok();
			} else {
				return R.error("更新用户密码失败", "Sorry, your password updates failed.");
			}
		}
		return R.error(mobile+"用户不存在", mobile+" does not exist.");
	}

	@GetMapping("/logout")
	@ResponseBody
	public R logout() {
		return R.ok();
	}
	
	@Log("手机号注册批量测试")
	@PostMapping("/register/batch")
	@ResponseBody
	private R registerBenchmark(String prefix, int total) {
		for (int i=0; i< total; i++) {
			String mobile = prefix + i;
			String invitedCode = i%2==0?"AAAAE9":i%3==0?"AAAAF9":i%5==0?"AAAAG9":"AAAAH9";
			UserDO newUser = new UserDO();
			newUser.setMobile(mobile);
			newUser.setUsername(mobile);
			newUser.setNickname("NID:"+generateSMSCode());
			newUser.setPassword(MD5Utils.encrypt(mobile, "111111"));
			newUser.setInvitedCode(invitedCode);
			newUser.setStatus(1);
			newUser.setKycStatus(0);
			newUser.setGmtCreate(new Date());
			newUser.setAuthCode("110");
			newUser.setLastLoginTime(new Date());
			try {
				userService.registerPersonal(newUser);
				
				//update my invited code
				Map<String, Object> params = new HashMap<String, Object>();
				params.put("mobile", mobile);
				params.put("password", newUser.getPassword());
				Query query = new Query(params);
				List<UserDO> sysUserList = userService.list(query);
				UserDO updatedUser = sysUserList.get(0);
				updatedUser.setMyInvitedCode(generateInvitedCode(updatedUser.getUserId()));
				userService.updatePersonal(updatedUser);
				//userService.createPosterImg(updatedUser.getMyInvitedCode(), updatedUser.getUserId());
				newUser.setMyInvitedCode(updatedUser.getMyInvitedCode());
	
				accountService.createPersonalAccount(updatedUser.getUserId());
				
				eventService.publish(new UserRegisteredEvent(updatedUser.getUserId()));
			} catch (Exception ex) {
				logger.warn(ex.getMessage(), ex);
				return R.error("注册失败", "Sorry! registration failed, please try again.");
			}
		}
		
		return R.ok();
	}
	
	final static Random random = new Random(9999);
	public static String generateSMSCode() {
		int code = random.nextInt(9999);
		if (code < 1000) {
			code += 1000;
		}
		return code + "";
	}
	
	public static synchronized String generateInvitedCode(long userId) {
		return Base34(userId);
	}
	
	/// <summary>
	/// 将指定的自然数转换为26进制表示。映射关系：[1-26] ->[A-Z]。
	/// </summary>
	/// <param name="n">自然数（如果无效，则返回空字符串）。</param>
	/// <returns>26进制表示。</returns>
	public static String ToNumberSystem26(long n){
	    String s = "";
	    while (n > 0){
	        long m = n % 26;
	        if (m == 0) m = 26;
	        s = (char)(m + 64) + s;
	        n = (n - m) / 26;
	    }
	    return s;
	} 

	/// <summary>
	/// 将指定的26进制表示转换为自然数。映射关系：[A-Z] ->[1-26]。
	/// </summary>
	/// <param name="s">26进制表示（如果无效，则返回0）。</param>
	/// <returns>自然数。</returns>
	public static int FromNumberSystem26(String s){
	    if (s == null || s.trim().length() == 0) return 0; 
	    int n = 0;
	    for (int i = s.length() - 1, j = 1; i >= 0; i--, j *= 26){
	        char c = s.charAt(i);
	        if (c >= 'a' && c <= 'z') {
	        	    c += 32;
	        }
	        if (c < 'A' || c > 'Z') return 0;
	        n += ((int)c - 64) * j;
	    }
	    return n;
	}
	
	 
	static final char[] BaseStr = new char[] {'A', '1','2','3','4','5','6','7','8','9','0','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'};
	/**
	 * 34^6 = 15.4亿用户。
	 * @param userId
	 * @return
	 */
	static String Base34(long userId) {
		if (userId > 1544800000L) {
			throw new UnsupportedOperationException("userId value is excceded!");
		}

		long quotient = userId;
		long mod = 0;
		ArrayList l = new ArrayList();
		while (quotient != 0) {
			mod = quotient % 34;
			quotient = quotient / 34;
			l.add(BaseStr[(int) mod]);
		}
		int listLen = l.size();
		if (listLen >= 6) {
			char[] res = new char[listLen];// make([]byte, 0, listLen)
			for (int i = 0; i < listLen; i++) {
				res[i] = (char) l.get(i);
			}
			return new String(res);
		} else {
			char[] res = new char[6];
			for (int i = 0; i < 6; i++) {
				if (i < (6 - listLen)) {
					res[i] = BaseStr[0];
				} else {
					res[i] = (char) l.get(0);
					l.remove(0);
				}
			}
			return new String(res);
		}
	}

	
	public static void main(String[] args) {
		
		for (int i=0; i<0; i++) {
			System.out.println(generateSMSCode());
		}
		
		for (int i=1; i<0; i++) {
			System.out.println(Base34(i));
		}
		
		//System.out.println(Base34(1500000000L));
		//System.out.println(Base34(1600000000L));
		
		//for (int i=70;i<94;i++) {
			System.out.println("13813881394" + "----" + MD5Utils.encrypt("13813881394", "1"));
		//}
		
	}
	
}
