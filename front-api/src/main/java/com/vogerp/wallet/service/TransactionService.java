package com.vogerp.wallet.service;

import java.util.List;
import java.util.Map;

import com.vogerp.wallet.domain.TransactionDO;

/**
 * 钱包交易成功记录
 * 
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2018-08-27 13:21:38
 */
public interface TransactionService {
	
	TransactionDO get(Long id);
	
	List<TransactionDO> list(Map<String, Object> map);
	
	List<TransactionDO> list2Flow(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int count2Flow(Map<String, Object> map);
	
	int save(TransactionDO tx);
}
