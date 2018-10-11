package com.vogerp.wallet.service.impl;

import java.util.List;
import java.util.Map;

import com.vogerp.user.exception.TransactionException;
import com.vogerp.wallet.domain.PlatformAccountDO;

/**
 * 平台钱包账号
 * 
 * @date 2018-08-27 13:12:30
 */
public interface PlatformAccountService {
	
	PlatformAccountDO get(Long id);
	
	List<PlatformAccountDO> list(Map<String, Object> map);
	
	List<PlatformAccountDO> listByTokenId(long tokenId);
	
	List<PlatformAccountDO> listByTokenIdAndType(long tokenId, int type);
	
	PlatformAccountDO getAccount(long accountId, int tokenId);
	
	int count(Map<String, Object> map);
	
	/**
	 * 平台账号转出给用户（如：奖励发放）
	 * 分为两个阶段转账：1，平台账号转出；2，用户账号转入
	 * 
	 * @param platformAccId
	 * @param userId
	 * @param amount
	 * @param remark
	 * @return
	 * @throws TransactionException
	 */
	public boolean transfer(long platformAccId, int tokenId, long userId, double amount, int businessType, String remark, String json) throws TransactionException;
	
}
