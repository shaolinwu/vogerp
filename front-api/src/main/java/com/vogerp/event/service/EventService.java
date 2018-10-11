package com.vogerp.event.service;

/**
 * 异步事件表
 * 
 * @date 2018-09-10 16:18:12
 */
public interface EventService {
	
	int publish(IEvent event);
}
