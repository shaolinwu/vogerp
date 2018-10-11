package com.vogerp.common.utils.poster;

public interface Poster {

	public Integer getX();
	public Integer getY();
	public Integer getFontX();
	public Integer getFontY();
	
	
	public Integer getQRCodeSize();
	public String getQRCodeFolder();
	public String getQRCodeLastFileName();
	
	
	public String getSourceFileLastPath();
//	public String getWaterFileLastPath();
	public String getSaveFileLastPath();
	public String getPosterLastFileName();
	
	public Integer getFontSize();
	
	public String getRegUrl();

	public void setRegUrl(String regUrl);
}
