package com.vogerp.event.service;

import com.vogerp.event.domain.EventDO;

public abstract class AbstractEvent implements IEvent {

	private static final long serialVersionUID = 1L;

	protected long userId;
	
	protected EventDO eventDO;
	
	@Override
	public long getUserId() {
		return userId;
	}
	
	public void setUserId(long userId) {
		this.userId = userId;
	}

	@Override
	public boolean allowRetry() {
		return true;
	}

	@Override
	public void setEventDO(EventDO eventDO) {
		this.eventDO = eventDO;
	}

	@Override
	public EventDO getEventDO() {
		return this.eventDO;
	}

}
