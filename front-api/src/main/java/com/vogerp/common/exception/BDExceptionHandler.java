package com.vogerp.common.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.vogerp.common.utils.R;

/**
 * 异常处理器
 * 
 */
@RestControllerAdvice
public class BDExceptionHandler {
	private Logger logger = LoggerFactory.getLogger(getClass());

	/**
	 * 自定义异常
	 */
	@ExceptionHandler(BDException.class)
	public R handleBDException(BDException e) {
		R r = new R();
		r.put("code", e.getCode());
		r.put("msg", e.getMessage());

		return r;
	}

	@ExceptionHandler(DuplicateKeyException.class)
	public R handleDuplicateKeyException(DuplicateKeyException e) {
		logger.error(e.getMessage(), e);
		return R.error("数据库中已存在该记录", "Record has already existed in database.");
	}

	@ExceptionHandler(org.springframework.web.servlet.NoHandlerFoundException.class)
	public R noHandlerFoundException(org.springframework.web.servlet.NoHandlerFoundException e) {
		logger.error(e.getMessage(), e);
		return R.error("没找到页面", "Page Not Found");
	}

	@ExceptionHandler(Exception.class)
	public R handleException(Exception e) {
		logger.error(e.getMessage(), e);
		return R.error("服务器错误，请联系管理员", "Server error.");
	}
}
