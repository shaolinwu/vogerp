package com.vogerp.user.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.vogerp.user.domain.UserDO;

/**
 * 
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2017-10-03 09:45:11
 */
@Mapper
public interface UserDao {

	UserDO get(@Param("userId") Long userId, @Param("authCode") String authCode);
	
	List<UserDO> list(Map<String,Object> map);
	
	int count(Map<String,Object> map);
	
	int save(UserDO user);
	
	int update(UserDO user);
	
	int updatePassword(UserDO user);
	
	int remove(Long userId);
	
	int batchRemove(Long[] userIds);
	
	Long[] listAllDept();

}
