package com.vogerp.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value = "微信网页授权")
@Controller
public class WechatAuthenController {
	
	@ApiOperation("微信授权域名")
	@GetMapping("/MP_verify_gBqgutSuDhJ8rkR2.txt")
	@ResponseBody
	public String mperfify() {
		return "gBqgutSuDhJ8rkR2";
	}

}
