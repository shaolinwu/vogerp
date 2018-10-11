package com.vogerp.wallet.event;

import com.vogerp.event.service.AbstractEvent;

/**
 * 用户投票后回收HIGH事件
 * 将这个类copy到后端，实现业务逻辑
 * @author shaolinwu
 *
 */
public class ConsumeHIGTEvent extends AbstractEvent {

	private static final long serialVersionUID = 1L;
	
	private long txId;
	
	//required by default
	public ConsumeHIGTEvent(long userId, long txId) {
		this.userId = userId;
		this.txId = txId;
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
		return ConsumeHIGTHandler.class.getName();
	}

	/**
	 * 失败重试
	 */
	@Override
	public boolean allowRetry() {
		return	true;
	}

}
