package com.vogerp.common.utils;

import java.util.HashMap;
import java.util.Map;

public class R extends HashMap<String, Object> {
	private static final long serialVersionUID = 1L;

	public R() {
		put("code", 0);
		put("msg", "操作成功");
		put("en_msg", "Success");
	}

	public static R error() {
		return error(1, "操作失败！", "Operation failed!");
	}
	
	public static R failed(String msg, String enMsg) {
		return error(2, msg, enMsg);
	}
	
	public static R failed(String msg) {
		return error(2, msg);
	}
	
	public static R failed() {
		return error(2, "无效", "Failed");
	}
	
	public static R failedWithAuthCode() {
		return error(-1, "API授权失败，请重新登录", "API authenticated code is expired, please login again!");
	}
	
	public static R error(String msg, String enMsg) {
		return error(500, msg, enMsg);
	}

	public static R error(int code, String msg, String enMsg) {
		R r = new R();
		r.put("code", code);
		r.put("msg", msg);
		r.put("en_msg", enMsg);
		return r;
	}
	
	public static R error(int code, String msg) {
		R r = new R();
		r.put("code", code);
		r.put("msg", msg);
		return r;
	}

	public static R ok(String msg, String enMsg) {
		R r = new R();
		r.put("msg", msg);
		r.put("en_msg", enMsg);
		return r;
	}

	public static R ok(Map<String, Object> map) {
		R r = new R();
		r.putAll(map);
		return r;
	}

	public static R ok() {
		return new R();
	}

	@Override
	public R put(String key, Object value) {
		super.put(key, value);
		return this;
	}
}
