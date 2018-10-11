package com.vogerp.user.event;

import com.vogerp.event.domain.EventDO;
import com.vogerp.event.service.IEvent;

/**
 * 用户注册成功事件
 * 将这个类copy到后端，实现业务逻辑
 * @author shaolinwu
 *
 */
public class UserRegisteredEvent implements IEvent {

	private static final long serialVersionUID = 1L;
	
	private long userId;
	
	//required by default
	public UserRegisteredEvent() {}
	
	public UserRegisteredEvent(long userId) {
		this.userId = userId;
	}
	
	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	/**
	 * 对应的业务处理类
	 * @return
	 */
	public String defineHandler() {
		return UserRegisteredHandler.class.getName();
	}

	/**
	 * 失败重试
	 */
	@Override
	public boolean allowRetry() {
		return	true;
	}

	@Override
	public void setEventDO(EventDO eventDO) {
		
	}

	@Override
	public EventDO getEventDO() {
		return null;
	}
	
}
