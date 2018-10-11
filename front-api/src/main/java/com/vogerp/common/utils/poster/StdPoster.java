package com.vogerp.common.utils.poster;

public class StdPoster implements Poster {
	
	@Override
	public Integer getX() {
		return 66;
	}

	@Override
	public Integer getY() {
		return 635;
	}

	@Override
	public Integer getFontX() {
		return 383;
	}

	@Override
	public Integer getFontY() {
		return 750;
	}

	@Override
	public Integer getQRCodeSize() {
		return 260;
	}

	@Override
	public String getQRCodeFolder() {
		return "/QRcode/";
	}

	@Override
	public String getQRCodeLastFileName() {
		return ".jpg";
	}

	@Override
	public String getSourceFileLastPath() {
		return "/poster/post.png";
	}

	@Override
	public String getSaveFileLastPath() {
		return "/poster/";
	}

	@Override
	public String getPosterLastFileName() {
		return ".png";
	}

	@Override
	public Integer getFontSize() {
		return 48;
	}

	private String regUrl;

	public String getRegUrl() {
		return regUrl;
	}

	public void setRegUrl(String regUrl) {
		this.regUrl = regUrl;
	}

}
