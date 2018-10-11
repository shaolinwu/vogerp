package com.vogerp.wallet.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.vogerp.wallet.domain.PlatformTransactionDO;

/**
 * 平台交易成功记录
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2018-08-27 13:21:38
 */
@Mapper
public interface PlatformTransactionDao {

	PlatformTransactionDO get(Long id);
	
	List<PlatformTransactionDO> list(Map<String,Object> map);
	
	int count(Map<String,Object> map);
	
	int save(PlatformTransactionDO transaction);
	
}
