package com.vogerp.common.config;

import org.springframework.stereotype.Component;

@Component
public class BootdoConfig {
	//上传路径
	private String uploadPath;

	public String getUploadPath() {
		return uploadPath;
	}

	public void setUploadPath(String uploadPath) {
		this.uploadPath = uploadPath;
	}
}
