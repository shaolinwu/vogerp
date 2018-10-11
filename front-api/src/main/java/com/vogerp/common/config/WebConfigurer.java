package com.vogerp.common.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Component
class WebConfigurer extends WebMvcConfigurerAdapter {
	private static final Logger logger = LoggerFactory.getLogger(WebConfigurer.class);
	@Autowired
	BootdoConfig bootdoConfig;
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		String userDir = System.getProperty("user.dir");
		bootdoConfig.setUploadPath(userDir + "/uploaded_files/");
		registry.addResourceHandler("/files/**").addResourceLocations("file:///" + bootdoConfig.getUploadPath());
		logger.info("------UploadPath: "+bootdoConfig.getUploadPath());
	}
	
}