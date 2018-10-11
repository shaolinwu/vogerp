package com.vogerp.wallet.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;



/**
 * 钱包交易成功记录
 * 
 * @date 2018-08-27 13:21:38
 */
public class SimpleTransactionDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Long id;
	//币种类型
	private int tokentype;
	//转账个数
	private String amount;
	//交易备注
	private String remark;
	//ops type
	private int bussinessType;
	//
	private Date createdate;
	
	public enum OpsType {
		REWARD(1);
		
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
	 * 设置：币种类型
	 */
	public void setTokentype(int tokentype) {
		this.tokentype = tokentype;
	}
	/**
	 * 获取：币种类型
	 */
	public int getTokentype() {
		return tokentype;
	}
	/**
	 * 设置：转账个数
	 */
	public void setAmount(String amount) {
		this.amount = amount;
	}
	/**
	 * 获取：转账个数
	 */
	public String getAmount() {
		return amount;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public int getBussinessType() {
		return bussinessType;
	}
	public void setBussinessType(int bussinessType) {
		this.bussinessType = bussinessType;
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
