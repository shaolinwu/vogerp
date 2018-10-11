package com.vogerp.event.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.vogerp.event.domain.EventDO;

/**
 * 异步事件表
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2018-09-10 16:18:12
 */
@Mapper
public interface EventDao {

	EventDO get(Long id);
	
	List<EventDO> list(Map<String,Object> map);
	
	int count(Map<String,Object> map);
	
	int save(EventDO event);
	
	int update(EventDO event);
	
	int remove(Long id);
	
	int batchRemove(Long[] ids);
}
