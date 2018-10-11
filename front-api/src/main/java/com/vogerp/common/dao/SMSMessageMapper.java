package com.vogerp.common.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.vogerp.common.domain.SMSMessageDO;

/**
 * @date 2017-10-03 15:45:42
 */
@Mapper
public interface SMSMessageMapper {

	SMSMessageDO get(Long id);
	
	List<SMSMessageDO> list(Map<String,Object> map);
	
	int count(Map<String,Object> map);
	
	int save(SMSMessageDO file);
	
}
