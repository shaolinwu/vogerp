package com.vogerp.common.config;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.common.collect.Maps;
import com.vogerp.common.filter.IPCongestionFilter;
import com.vogerp.common.xss.XssFilter;

@Configuration
public class XssConfig{

	@Value("${server.ipcongestion.enable}")
    private boolean ipCongestionEnabled;
	
	/**
	 * xss过滤拦截器
	 */
	@Bean
	public FilterRegistrationBean xssFilterRegistrationBean() {
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new XssFilter());
		filterRegistrationBean.setOrder(1);
		filterRegistrationBean.setEnabled(true);
		filterRegistrationBean.addUrlPatterns("/*");
		Map<String, String> initParameters = Maps.newHashMap();
		initParameters.put("excludes", "/favicon.ico,/img/*,/js/*,/css/*");
		initParameters.put("isIncludeRichText", "true");
		filterRegistrationBean.setInitParameters(initParameters);
		return filterRegistrationBean;
	}
	
	/**
	 * IP访问限流控制
	 * @return
	 */
	@Bean
	public FilterRegistrationBean urlCongestionFilterRegistrationBean() {
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new IPCongestionFilter(ipCongestionEnabled));
		filterRegistrationBean.setOrder(1);
		filterRegistrationBean.setEnabled(true);
		filterRegistrationBean.addUrlPatterns("/*");
		Map<String, String> initParameters = Maps.newHashMap();
		initParameters.put("isIncludeRichText", "true");
		filterRegistrationBean.setInitParameters(initParameters);
		return filterRegistrationBean;
	}

}
