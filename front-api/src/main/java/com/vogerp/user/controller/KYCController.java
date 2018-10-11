package com.vogerp.user.controller;

import java.util.HashMap;
import java.util.Map;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.vogerp.common.annotation.Log;
import com.vogerp.common.config.BootdoConfig;
import com.vogerp.common.service.FileService;
import com.vogerp.common.utils.FileUtil;
import com.vogerp.common.utils.R;
import com.vogerp.user.domain.UserDO;
import com.vogerp.user.service.UserService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value = "KYC认证API")
@Controller
public class KYCController {
	private static final Logger logger = LoggerFactory.getLogger(KYCController.class);
	@Autowired
	FileService fileService;
	@Autowired
	UserService userService;
	@Autowired
	private BootdoConfig bootdoConfig;

	@Log("KYC认证申请: 用户实名 + 身份证号")
	@ApiOperation("KYC认证申请")
	@PostMapping("/kyc/request")
	@ResponseBody
	public R kycRequest(long userId, String authCode, String username, String idnumber) {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		if (idnumber == null || idnumber.trim().length() == 0) {
			return R.error("身份证号不能为空！", "Identity card number can't be empty.");
		}
		if (username == null || username.trim().length() == 0) {
			return R.error("用户不能为空！", "User name can't be empty.");
		}
		UserDO userDO = userService.get(userId, authCode);
		if (userDO == null) {
			return R.failedWithAuthCode();
		}
		// 1:实名验证申请
		if (userDO.getKycStatus() == 2) {
			return R.ok(userDO.toKYCMessage(), userDO.toKYCEnMessage());
		}
		if (userDO.getIdCard() == null || userDO.getIdCard().trim().length() == 0) {
			return R.error("身份证附件不能为空！", "The photo of identity card can't be empty.");
		}
		if (userDO.getIdCardBackside() == null || userDO.getIdCardBackside().trim().length() == 0) {
			return R.error("身份证反面附件不能为空！", "The back photo of identity card can't be empty.");
		}
		if (userDO.getIdCardWithHuman() == null || userDO.getIdCardWithHuman().trim().length() == 0) {
			return R.error("身份证和本人附件不能为空！", "The user with the identity card can't be empty.");
		}

		userDO.setName(username);
		userDO.setIdNumber(idnumber);
		userDO.setKycStatus(1);
		if (userService.updatePersonal(userDO) > 0) {
			return R.ok();
		}
		return R.error();
	}

	@ApiOperation("当前用户KYC认证状态")
	@PostMapping("/kyc/state")
	@ResponseBody
	public R kycState(long userId, String authCode) {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("state", user.getKycStatus());
		result.put("message", user.toKYCMessage());
		result.put("en_message", user.toKYCEnMessage());
		result.put("allmessage", user.toKYCAllMessage());
		result.put("allenmessage", user.toKYCAllMessage());
		return R.ok(result);
	}

	@ApiOperation("KYC上传身份证正面")
	@PostMapping("/kyc/uploadidcard")
	@ResponseBody
	public R kycUploadIDCard(@RequestParam("file") MultipartFile file, long userId, String authCode, HttpServletRequest request) {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO userDO = userService.get(userId, authCode);
		if (userDO == null) {
			return R.failedWithAuthCode();
		}
		if (userDO.getKycStatus() == 2) {
			return R.error(userDO.toKYCMessage(), userDO.toKYCEnMessage());
		}
		String fileName = ((int)(Math.random() * 10000)) + file.getOriginalFilename();
		String path = bootdoConfig.getUploadPath() + "/kyc/" + userDO.getUserId() + "/";
		try {
			FileUtil.uploadFile(file.getBytes(), path, fileName);
		} catch (Exception e) {
			e.printStackTrace();
			return R.error();
		}

		userDO.setIdCard("/files/kyc/" + userDO.getUserId() + "/" + fileName);
		if (userService.updatePersonal(userDO) > 0) {
			return R.ok();
		}
		return R.error();
	}

	@ApiOperation("KYC上传身份证反面")
	@PostMapping("/kyc/uploadidcardbackside")
	@ResponseBody
	public R kycUploadIDCardBackside(@RequestParam("file") MultipartFile file, long userId, String authCode, HttpServletRequest request) {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO userDO = userService.get(userId, authCode);
		if (userDO == null) {
			return R.failedWithAuthCode();
		}
		if (userDO.getKycStatus() == 2) {
			return R.error(userDO.toKYCMessage(), userDO.toKYCEnMessage());
		}
		String fileName = ((int)(Math.random() * 10000)) + file.getOriginalFilename();
		String path = bootdoConfig.getUploadPath() + "/kyc/" + userDO.getUserId() + "/";
		try {
			FileUtil.uploadFile(file.getBytes(), path, fileName);
		} catch (Exception e) {
			e.printStackTrace();
			return R.error();
		}

		userDO.setIdCardBackside("/files/kyc/" + userDO.getUserId() + "/" + fileName);
		if (userService.updatePersonal(userDO) > 0) {
			return R.ok();
		}
		return R.error();
	}

	@ApiOperation("KYC上传身份证与本人")
	@PostMapping("/kyc/uploadidcardwithhuman")
	@ResponseBody
	public R kycUploadIDCardWithHuman(@RequestParam("file") MultipartFile file, long userId, String authCode, HttpServletRequest request) {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO userDO = userService.get(userId, authCode);
		if (userDO == null) {
			return R.failedWithAuthCode();
		}
		if (userDO.getKycStatus() == 2) {
			return R.error(userDO.toKYCMessage(), userDO.toKYCEnMessage());
		}
		String fileName = ((int)(Math.random() * 10000)) + file.getOriginalFilename();
		String path = bootdoConfig.getUploadPath() + "/kyc/" + userDO.getUserId() + "/";
		try {
			FileUtil.uploadFile(file.getBytes(), path, fileName);
		} catch (Exception e) {
			e.printStackTrace();
			return R.error();
		}

		userDO.setIdCardWithHuman("/files/kyc/" + userDO.getUserId() + "/" + fileName);
		if (userService.updatePersonal(userDO) > 0) {
			return R.ok();
		}
		return R.error();
	}

}
