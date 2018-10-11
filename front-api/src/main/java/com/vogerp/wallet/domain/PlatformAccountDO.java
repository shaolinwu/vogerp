package com.vogerp.wallet.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;



/**
 * 平台钱包账号
 * 
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2018-08-27 13:12:30
 */
public class PlatformAccountDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Long id;
	//父账号id
	private Long parentId;
	//钱包帐号
	private String account;
	//Token type
	private Long tokenId;
	//Token余额
	private BigDecimal balance;
	//绑定ETH地址(可选)
	private String bindethaddress;
	//绑定地址密码
	private String bindethpwd;
	//1.运营账户，2.归集隔离账户
	private Integer type;
	//账号状态：1,激活，2.禁止
	private Integer state;
	//余额更新版本控制
	private Long version; //updated new version
	private Long lockedVersion; // locked current version
	//
	private Date createdate;
	private String desc;
	
	public enum AccountType {
		//主账号，奖励账号，活动账号
		MAIN(1),REWARD(2),ACTIVITIE(3);
		
		private int value;
		private AccountType(int value) {
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
	public Long getParentId() {
		return parentId;
	}
	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}
	/**
	 * 设置：钱包帐号
	 */
	public void setAccount(String account) {
		this.account = account;
	}
	/**
	 * 获取：钱包帐号
	 */
	public String getAccount() {
		return account;
	}
	public Long getTokenId() {
		return tokenId;
	}
	public void setTokenId(Long tokenId) {
		this.tokenId = tokenId;
	}
	/**
	 * 设置：Token余额
	 */
	public void setBalance(BigDecimal tbalance) {
		this.balance = tbalance;
	}
	/**
	 * 获取：HIGT余额
	 */
	public BigDecimal getBalance() {
		return balance;
	}
	/**
	 * 设置：绑定ETH地址
	 */
	public void setBindethaddress(String bindethaddress) {
		this.bindethaddress = bindethaddress;
	}
	/**
	 * 获取：绑定ETH地址
	 */
	public String getBindethaddress() {
		return bindethaddress;
	}
	/**
	 * 设置：绑定地址密码
	 */
	public void setBindethpwd(String bindethpwd) {
		this.bindethpwd = bindethpwd;
	}
	/**
	 * 获取：绑定地址密码
	 */
	public String getBindethpwd() {
		return bindethpwd;
	}
	/**
	 * 设置：1.个人用户，2.运营账户，3.归集隔离账户
	 */
	public void setType(Integer type) {
		this.type = type;
	}
	/**
	 * 获取：1.个人用户，2.运营账户，3.归集隔离账户
	 */
	public Integer getType() {
		return type;
	}
	/**
	 * 设置：账号状态：1,激活，2.禁止
	 */
	public void setState(Integer state) {
		this.state = state;
	}
	/**
	 * 获取：账号状态：1,激活，2.禁止
	 */
	public Integer getState() {
		return state;
	}
	/**
	 * 设置：余额更新版本控制
	 */
	public void setVersion(Long version) {
		this.version = version;
	}
	/**
	 * 获取：余额更新版本控制
	 */
	public Long getVersion() {
		return version;
	}
	public Long getLockedVersion() {
		return lockedVersion;
	}
	public void setLockedVersion(Long lockedVersion) {
		this.lockedVersion = lockedVersion;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
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
