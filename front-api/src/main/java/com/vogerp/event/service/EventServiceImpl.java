package com.vogerp.event.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.vogerp.event.dao.EventDao;
import com.vogerp.event.domain.EventDO;

@Service
public class EventServiceImpl implements EventService {
	@Autowired
	private EventDao eventDao;
	
	@Override
	public int publish(IEvent event) {
		EventDO eventdo = new EventDO();
		eventdo.setUserId(event.getUserId());
		eventdo.setCreatedate(new Date());
		eventdo.setEventtype(event.getClass().getName());
		eventdo.setExecount(0);
		eventdo.setRetry(event.allowRetry());
		eventdo.setState(EventDO.EventStatus.PENDING.getState());
		
		Gson gson = new Gson();
		eventdo.setMsg(gson.toJson(event, event.getClass()));
		return eventDao.save(eventdo);
	}
}
