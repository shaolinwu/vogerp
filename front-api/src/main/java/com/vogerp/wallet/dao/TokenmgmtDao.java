package com.vogerp.wallet.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.vogerp.wallet.domain.TokenmgmtDO;

/**
 * 币种管理
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2018-08-27 12:16:38
 */
@Mapper
public interface TokenmgmtDao {

	TokenmgmtDO get(Long id);
	
	List<TokenmgmtDO> list(Map<String,Object> map);
	
	int count(Map<String,Object> map);
}
