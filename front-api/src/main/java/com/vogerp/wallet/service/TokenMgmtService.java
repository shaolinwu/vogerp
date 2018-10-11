package com.vogerp.wallet.service;

import java.util.List;
import java.util.Map;

import com.vogerp.wallet.domain.TokenmgmtDO;

/**
 * 币种管理
 * 
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2018-08-27 12:16:38
 */
public interface TokenMgmtService {
	
	TokenmgmtDO get(Long id);
	
	List<TokenmgmtDO> list(Map<String, Object> map);
	
	List<TokenmgmtDO> getAllTokens();
	
	int count(Map<String, Object> map);
	
}
