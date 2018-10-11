package com.vogerp.wallet.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;



/**
 * 钱包交易成功记录
 * 
 * @date 2018-08-27 13:21:38
 */
public class PlatformTransactionDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Long id;
	//账号
	private Long accountid;
	private Long accountVersion;
	//HIGT内部加转账
	private Long toAccountId;
	private Long toAccountVersion;
	//币种类型
	private long tokentype;
	//转出地址
	private String fromaddress;
	//转入地址
	private String toaddress;
	//区块链交易号（可选）
	private String txid;
	//转账个数
	private BigDecimal amount;
	//转账成功余额
	private BigDecimal frombalance;
	private BigDecimal tobalance;
	//手续费
	private BigDecimal fee;
	//表示是否为用户间转账，0表示运营账户转账
	private Integer isusertx;
	//1,成功，2失败
	private Integer state;
	//交易动作类型：所有交易类型
	private Integer opstype;
	//交易备注
	private String remark;
	//业务对象
	private String json;
	//
	private Date createdate;

	public enum OpsType {
		REWARD(1), VOTE(2);
		
		private int value;
		private OpsType(int value) {
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
	public void setAccountid(Long accountid) {
		this.accountid = accountid;
	}
	/**
	 * 获取：
	 */
	public Long getAccountid() {
		return accountid;
	}
	public Long getToAccountId() {
		return toAccountId;
	}
	public void setToAccountId(Long toAccountId) {
		this.toAccountId = toAccountId;
	}
	public Long getAccountVersion() {
		return accountVersion;
	}
	public void setAccountVersion(Long accountVersion) {
		this.accountVersion = accountVersion;
	}
	public Long getToAccountVersion() {
		return toAccountVersion;
	}
	public void setToAccountVersion(Long toAccountVersion) {
		this.toAccountVersion = toAccountVersion;
	}
	public BigDecimal getFrombalance() {
		return frombalance;
	}
	public void setFrombalance(BigDecimal frombalance) {
		this.frombalance = frombalance;
	}
	public BigDecimal getTobalance() {
		return tobalance;
	}
	public void setTobalance(BigDecimal tobalance) {
		this.tobalance = tobalance;
	}
	/**
	 * 设置：币种类型
	 */
	public void setTokentype(long tokentype) {
		this.tokentype = tokentype;
	}
	/**
	 * 获取：币种类型
	 */
	public long getTokentype() {
		return tokentype;
	}
	/**
	 * 设置：转出地址
	 */
	public void setFromaddress(String fromaddress) {
		this.fromaddress = fromaddress;
	}
	/**
	 * 获取：转出地址
	 */
	public String getFromaddress() {
		return fromaddress;
	}
	/**
	 * 设置：转入地址
	 */
	public void setToaddress(String toaddress) {
		this.toaddress = toaddress;
	}
	/**
	 * 获取：转入地址
	 */
	public String getToaddress() {
		return toaddress;
	}
	/**
	 * 设置：区块链交易号（可选）
	 */
	public void setTxid(String txid) {
		this.txid = txid;
	}
	/**
	 * 获取：区块链交易号（可选）
	 */
	public String getTxid() {
		return txid;
	}
	/**
	 * 设置：转账个数
	 */
	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}
	/**
	 * 获取：转账个数
	 */
	public BigDecimal getAmount() {
		return amount;
	}
	/**
	 * 设置：手续费
	 */
	public void setFee(BigDecimal fee) {
		this.fee = fee;
	}
	/**
	 * 获取：手续费
	 */
	public BigDecimal getFee() {
		return fee;
	}
	/**
	 * 设置：表示是否为用户间转账，0表示运营账户转账
	 */
	public void setIsusertx(Integer isusertx) {
		this.isusertx = isusertx;
	}
	/**
	 * 获取：表示是否为用户间转账，0表示运营账户转账
	 */
	public Integer getIsusertx() {
		return isusertx;
	}
	/**
	 * 设置：1,正常，2禁止
	 */
	public void setState(Integer state) {
		this.state = state;
	}
	/**
	 * 获取：1,正常，2禁止
	 */
	public Integer getState() {
		return state;
	}
	/**
	 * 设置：交易动作类型：所有交易类型
	 */
	public void setOpstype(Integer opstype) {
		this.opstype = opstype;
	}
	/**
	 * 获取：交易动作类型：所有交易类型
	 */
	public Integer getOpstype() {
		return opstype;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getJson() {
		return json;
	}
	public void setJson(String json) {
		this.json = json;
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
