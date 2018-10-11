package com.vogerp.event.service;

import java.io.Serializable;

import com.vogerp.event.domain.EventDO;

public interface IEvent extends Serializable {

	public long getUserId();
	
	/**
	 * 对应的业务处理类
	 * @return
	 */
	public String defineHandler();
	
	/**
	 * 失败重试
	 * @return
	 */
	public boolean allowRetry();
	
	/**
	 * bind EventDO temporary after unmarshalling
	 * @param eventDO
	 */
	public void setEventDO(EventDO eventDO);
	
	public EventDO getEventDO();
}
