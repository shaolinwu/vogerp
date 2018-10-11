package com.vogerp.user.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.vogerp.common.utils.MD5Utils;
import com.vogerp.common.utils.Query;
import com.vogerp.common.utils.R;
import com.vogerp.common.utils.StringUtil2;
import com.vogerp.user.domain.UserDO;
import com.vogerp.user.service.UserService;

import io.swagger.annotations.ApiOperation;

@RequestMapping("/sys/user")
@Controller
public class UserController {
	@Autowired
	UserService userService;

	// 微信表情
	static final Pattern emoji = Pattern.compile("[\ud83c\udc00-\ud83c\udfff]|[\ud83d\udc00-\ud83d\udfff]|[\u2600-\u27ff]",Pattern.UNICODE_CASE | Pattern . CASE_INSENSITIVE ) ;
	
	@ApiOperation("当前用户信息")
	@PostMapping("/userinfo")
	@ResponseBody
	public R userInfo(long userId, String authCode) {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("userId", user.getUserId());
		result.put("mobile", user.getMobile());
		result.put("invitedCode", user.getMyInvitedCode());
		result.put("nickname", user.getNickname());
		result.put("openId", user.getWechatOpenId());
		result.put("headImgUrl", user.getHeadImgUrl());
		result.put("sex", (user.getSex() != null && user.getSex() == 1) ? "男" : "女");
		result.put("kycState", user.getKycStatus());
		result.put("authCode", user.getAuthCode()); 
		return R.ok(result);
	}
	
	public R getUserId(String mobile, String authCode) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("mobile", mobile);
		Query query = new Query(params);
		List<UserDO> sysUserList = userService.list(query);
		if (sysUserList != null && sysUserList.size() > 0) {
			return R.ok(sysUserList.get(0).getUserId() + "", sysUserList.get(0).getUserId() + "");
		}
		return R.error();
	}

	@ResponseBody
	@PostMapping("/uploadImg")
	public R uploadImg(@RequestParam("avatar_file") MultipartFile file, String avatar_data, long userId, String authCode, HttpServletRequest request) {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		Map<String, Object> result = new HashMap<>();
		try {
			result = userService.updatePersonalImg(file, avatar_data, userId);
		} catch (Exception e) {
			return R.error("更新图像失败！", "Updated photo failed.");
		}
		if(result!=null && result.size()>0){
			return R.ok(result);
		}else {
			return R.error("更新图像失败！", "Updated photo failed.");
		}
	}
	
	@ApiOperation("当前用户的邀请人数")
	@PostMapping("/myinvitedcounter")
	@ResponseBody
	public R myInvitedCounter(long userId, String authCode) {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		if (user.getMyInvitedCode() == null || user.getMyInvitedCode().length() == 0) {
			Map<String, Object> result = new HashMap<String, Object>();
			result.put("invitedCode", "");
			result.put("count", "0");
			return R.ok(result);
		}
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("invitedCode", user.getMyInvitedCode());
		result.put("count", userService.count(result));
		return R.ok(result);
	}
	
	@ApiOperation("当前用户的邀请码")
	@GetMapping("/myinvitedcode")
	@ResponseBody
	public R myInvitedCode(long userId, String authCode) {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("invitedCode", user.getMyInvitedCode());
		return R.ok(result);
	}
	
	@ApiOperation("用户修改密码")
	@PostMapping("/changepassword")
	@ResponseBody
	public R changePassword(long userId, String authCode, String oldPwd, String newPwd) {
		if (oldPwd == null || oldPwd.trim().length() ==0) {
			return R.error("旧密码为能为空", "The old password can't be empty.");
		}
		if (newPwd == null || newPwd.trim().length() ==0) {
			return R.error("新密码不能为空", "The new password can't be empty.");
		}
		if (newPwd.equals(oldPwd)) {
			return R.error("新密码与旧密码不能相同", "The new password can't be the same.");
		}
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		
		// check the user registered type.
		String password = MD5Utils.encrypt(user.getMobile(), oldPwd);
		if (user.getEmail() != null && user.getEmail().trim().length() > 0) {
			password = MD5Utils.encrypt(user.getEmail(), oldPwd);
		} 
		if (!user.getPassword().equals(password)) {
			return R.error("更新用户密码失败，原密码不正确", "Sorry, your old password is incorrect.");
		}
		
		// set the new password.
		password = MD5Utils.encrypt(user.getMobile(), newPwd);
		if (user.getEmail() != null && user.getEmail().trim().length() > 0) {
			password = MD5Utils.encrypt(user.getEmail(), newPwd);
		} 
		user.setPassword(password);
		if (userService.updatePassword(user) > 0) {
			return R.ok();
		} else {
			return R.error("更新用户密码失败", "Sorry, your password updates failed.");
		}
	}
	
	@ApiOperation("更新用户昵称")
	@PostMapping("/updateNickname")
	@ResponseBody
	public R updateNickname(long userId, String authCode, String newName) {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		if (newName == null || newName.trim().length() == 0) {
			return R.error("昵称不能为空", "Nickname is incorrect.");
		}
		Matcher emojiMatcher = emoji.matcher(newName);
	    if (emojiMatcher.find()){
	    		newName = emojiMatcher.replaceAll("");
	    }
	    newName = StringUtil2.specialStringFilter(newName);
		newName = StringUtil2.escapeJSONTags(StringUtil2.escapeHtmlTags(StringUtil2.escape(newName)));
		if (newName.length() > 20) {
			return R.error("昵称太长，不能超过20个字符", "Nickname is too long.");
		}
 		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		user.setNickname(newName);
		try {
			if (userService.updatePersonal(user) > 0) {
				return R.ok();
			}
		} catch (Exception e) {
			return R.error("更新失败", "Nickname updated failed.");
		}
		return R.error("更新失败", "Nickname updated failed.");
	}
	
	@ApiOperation("生成个人推广图片")
	@PostMapping("/createPosterImg")
	@ResponseBody
	public R createPosterImg(long userId, String authCode) {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		if (userService.createPosterImg(user.getMyInvitedCode(), user.getUserId())) {
			return R.ok();
		}
		return R.error();
	}
	
	public static void main(String[] args) {
		System.out.println(StringUtil2.escapeJSONTags(StringUtil2.escapeHtmlTags(StringUtil2.escape("哈哈哈😄"))));
		System.out.println(StringUtil2.escapeJSONTags(StringUtil2.escapeHtmlTags(StringUtil2.escape("\\xF0\\x9F\\x98\\x84"))));
		
	}
}
