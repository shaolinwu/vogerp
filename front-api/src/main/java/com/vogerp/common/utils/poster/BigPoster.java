package com.vogerp.common.utils.poster;

public class BigPoster implements Poster {
	
	@Override
	public Integer getX() {
		return 397;
	}

	@Override
	public Integer getY() {
		return 1169;
	}

	@Override
	public Integer getFontX() {
		return 570;
	}

	@Override
	public Integer getFontY() {
		return 1717;
	}

	@Override
	public Integer getQRCodeSize() {
		return 335;
	}

	@Override
	public String getQRCodeFolder() {
		return "/QRcode/";
	}

	@Override
	public String getQRCodeLastFileName() {
		return "_big.jpg";
	}

	@Override
	public String getSourceFileLastPath() {
		return "/poster/bigpost.jpg";
	}

	@Override
	public String getSaveFileLastPath() {
		return "/poster/";
	}

	@Override
	public String getPosterLastFileName() {
		return "_big.jpg";
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
