package com.vogerp.wallet.domain;

import java.io.Serializable;
import java.util.Date;



/**
 * 币种管理
 * 
 * @date 2018-08-27 12:16:38
 */
public class TokenmgmtDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Long id;
	//
	private String name;
	private String desc;
	private String icon;
	//1. 以太坊，2. BTC，3. EOS, 1.HIGT+ERC20地址, 
	private Integer type;
	//ERC20代币地址
	private String ercaddress;
	//是否启用：1,允许，0,禁止
	private Boolean enable;
	//是否显示: true=显示，false=不显示
	private Boolean display;
	//是否允许提现：1,允许，0,禁止
	private Boolean enablewithdraw;
	//是否允许允值：1,允许，0,禁止
	private Boolean enablecharge;
	//
	private Date createdate;

	public enum TokenType {
		ETH(1),BTC(2),EOC(3),HIGT(4),BUGX(5),AKTE(6);
		
		private int value;
		private TokenType(int value) {
			this.value = value;
		}
		
		public int getCode() {
			return value;
		}
	}
	
	/**
	 * 设置：
	 */
	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 获取：
	 */
	public Long getId() {
		return id;
	}
	/**
	 * 设置：
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * 获取：
	 */
	public String getName() {
		return name;
	}
	/**
	 * 设置：1. 以太坊，2. BTC，3. EOS, 4. HIGT, 
	 */
	public void setType(Integer type) {
		this.type = type;
	}
	/**
	 * 获取：1. 以太坊，2. BTC，3. EOS, 4. HIGT, 
	 */
	public Integer getType() {
		return type;
	}
	
	public String getTypeStr() {
		if (type == 1) {
            return "ETH";
         } else if (type == 2) {
            return "BTC";
         } else if (type == 3) {
            return "EOS";
         } else if (type == 4) {
            return "HIGT";
         }
		return type + "";
	}
	
	public static final int ETH = 1;
	public static final int BTC = 2;
	public static final int EOS = 3;
	public static final int HIGT = 4;
	
	
	public static String getTypeString(int type) {
		TokenmgmtDO token = new TokenmgmtDO();
		token.setType(type);
		return token.getTypeStr();
	}
	
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	/**
	 * 设置：ERC20代币地址
	 */
	public void setErcaddress(String ercaddress) {
		this.ercaddress = ercaddress;
	}
	/**
	 * 获取：ERC20代币地址
	 */
	public String getErcaddress() {
		return ercaddress;
	}
	public Boolean getDisplay() {
		return display;
	}
	public void setDisplay(Boolean display) {
		this.display = display;
	}
	public Boolean getEnable() {
		return enable;
	}
	public void setEnable(Boolean enable) {
		this.enable = enable;
	}
	/**
	 * 设置：是否允许提现：1,允许，0,禁止
	 */
	public void setEnablewithdraw(Boolean enablewithdraw) {
		this.enablewithdraw = enablewithdraw;
	}
	/**
	 * 获取：是否允许提现：1,允许，0,禁止
	 */
	public Boolean getEnablewithdraw() {
		return enablewithdraw;
	}
	/**
	 * 设置：是否允许允值：1,允许，0,禁止
	 */
	public void setEnablecharge(Boolean enablecharge) {
		this.enablecharge = enablecharge;
	}
	/**
	 * 获取：是否允许允值：1,允许，0,禁止
	 */
	public Boolean getEnablecharge() {
		return enablecharge;
	}
	/**
	 * 设置：
	 */
	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}
	/**
	 * 获取：
	 */
	public Date getCreatedate() {
		return createdate;
	}
}
