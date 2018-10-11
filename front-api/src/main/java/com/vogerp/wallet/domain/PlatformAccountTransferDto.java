package com.vogerp.wallet.domain;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 * 平台钱包账号
 * 
 */
public class PlatformAccountTransferDto implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long accountid;
	private Long accountVersion;
	
	private Long toAccountId;
	private Long toAccountVersion;
	//币种类型
	private long tokenId;
	
	//转账成功余额
	private BigDecimal frombalance;
	private BigDecimal tobalance;
	
	private long lockedVersion;
	private long toLockedVersion;
	
	public PlatformAccountTransferDto() {}

	public Long getAccountid() {
		return accountid;
	}

	public void setAccountid(Long accountid) {
		this.accountid = accountid;
	}

	public Long getAccountVersion() {
		return accountVersion;
	}

	public void setAccountVersion(Long accountVersion) {
		this.accountVersion = accountVersion;
	}

	public Long getToAccountId() {
		return toAccountId;
	}

	public void setToAccountId(Long toAccountId) {
		this.toAccountId = toAccountId;
	}

	public Long getToAccountVersion() {
		return toAccountVersion;
	}

	public void setToAccountVersion(Long toAccountVersion) {
		this.toAccountVersion = toAccountVersion;
	}

	public long getTokenId() {
		return tokenId;
	}

	public void setTokenId(long tokenId) {
		this.tokenId = tokenId;
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

	public long getLockedVersion() {
		return lockedVersion;
	}

	public void setLockedVersion(long lockedVersion) {
		this.lockedVersion = lockedVersion;
	}

	public long getToLockedVersion() {
		return toLockedVersion;
	}

	public void setToLockedVersion(long toLockedVersion) {
		this.toLockedVersion = toLockedVersion;
	}
	
}
