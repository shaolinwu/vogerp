package com.vogerp.wallet.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;



/**
 * 钱包提币申请
 * 
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2018-08-27 13:31:53
 */
public class ReqwithdrawDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Long id;
	//提币账户
	private Long accountid;
	//提币账户版本
	private Long accountVersion;
	//币种
	private Integer tokentype;
	//来源地址
	private String fromaddress;
	//目标地址
	private String toaddress;
	//数量
	private BigDecimal amount;
	//手续费
	private BigDecimal fee;
	//成功的后对应的交易记录
	private Long transid;
	//状态：1,申请中，2.申请通过，3.申请失败
	private Integer state;
	private String description; //申请失败原因
	//
	private Date createdate;

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
	 * 设置：提币账户
	 */
	public void setAccountid(Long accountid) {
		this.accountid = accountid;
	}
	/**
	 * 获取：提币账户
	 */
	public Long getAccountid() {
		return accountid;
	}
	public Long getAccountVersion() {
		return accountVersion;
	}
	public void setAccountVersion(Long accountVersion) {
		this.accountVersion = accountVersion;
	}
	/**
	 * 设置：币种
	 */
	public void setTokentype(Integer tokentype) {
		this.tokentype = tokentype;
	}
	/**
	 * 获取：币种
	 */
	public Integer getTokentype() {
		return tokentype;
	}
	/**
	 * 设置：来源地址
	 */
	public void setFromaddress(String fromaddress) {
		this.fromaddress = fromaddress;
	}
	/**
	 * 获取：来源地址
	 */
	public String getFromaddress() {
		return fromaddress;
	}
	/**
	 * 设置：目标地址
	 */
	public void setToaddress(String toaddress) {
		this.toaddress = toaddress;
	}
	/**
	 * 获取：目标地址
	 */
	public String getToaddress() {
		return toaddress;
	}
	/**
	 * 设置：数量
	 */
	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}
	/**
	 * 获取：数量
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
	 * 设置：成功的后对应的交易记录
	 */
	public void setTransid(Long transid) {
		this.transid = transid;
	}
	/**
	 * 获取：成功的后对应的交易记录
	 */
	public Long getTransid() {
		return transid;
	}
	/**
	 * 设置：状态：1,申请中，2.申请通过，3.申请失败
	 */
	public void setState(Integer state) {
		this.state = state;
	}
	/**
	 * 获取：状态：1,申请中，2.申请通过，3.申请失败
	 */
	public Integer getState() {
		return state;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
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
