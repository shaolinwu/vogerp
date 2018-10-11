package com.vogerp.wallet.event;

import com.vogerp.event.service.AbstractEvent;

/**
 * 用户台转出到用户账号通知事件。
 * @author shaolinwu
 *
 */
public class PlatformTransferredToUserEvent extends AbstractEvent {

	private static final long serialVersionUID = 1L;
	
	private long platformAccId;
	private long txId;
	
	//required by default
	public PlatformTransferredToUserEvent() {}
	
	public PlatformTransferredToUserEvent(long platformAccId, long userId, long txId) {
		this.platformAccId = platformAccId;
		this.userId = userId;
		this.txId = txId;
	}
	
	public long getPlatformAccId() {
		return platformAccId;
	}

	public void setPlatformAccId(long platformAccId) {
		this.platformAccId = platformAccId;
	}

	public long getTxId() {
		return txId;
	}

	public void setTxId(long txId) {
		this.txId = txId;
	}

	/**
	 * 对应的业务处理类
	 * @return
	 */
	public String defineHandler() {
		return PlatformTransferredToUserHandler.class.getName();
	}

	/**
	 * 失败重试
	 */
	@Override
	public boolean allowRetry() {
		return	true;
	}

}
