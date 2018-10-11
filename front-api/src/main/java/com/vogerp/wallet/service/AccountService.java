package com.vogerp.wallet.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.transaction.TransactionException;

import com.vogerp.wallet.domain.AccountDO;
import com.vogerp.wallet.domain.ReqwithdrawDO;
import com.vogerp.wallet.domain.TransactionDO;
import com.vogerp.wallet.domain.TokenmgmtDO.TokenType;

/**
 * 钱包账号
 * 
 * @date 2018-08-27 13:12:30
 */
public interface AccountService {
	
	AccountDO get(Long id);
	
	AccountDO getByUserId(Long id, int tokenId);
	
	public List<AccountDO> getAllByUserId(Long userId);
	
	AccountDO getByAccId(String accid);
	
	AccountDO createPersonalAccount(Long userId);
	
	List<AccountDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(AccountDO account);
	
	/**
	 * 代币回收到平台账户
	 * 
	 * @param platAccountId
	 * @param tokenType
	 * @param userId
	 * @param amount
	 * @param remark
	 * @param busiJson
	 * @param businessType
	 * @return
	 * @throws TransactionException
	 */
	public boolean consume(long platAccountId, TokenType tokenType, long userId, double amount, String remark, String busiJson, int businessType) throws TransactionException;
	
	/**
	 * 代币奖励充币
	 * @param tx
	 * @param toAccount
	 * @return
	 * @throws TransactionException
	 */
	public boolean reward(long platAccountId, TokenType tokenType, long userId, double amount, String remark, String busiJson, int businessType) throws TransactionException;
	
	/**
	 * HIGT转帐
	 * @param tx
	 * @param fromAccount
	 * @param toAccount
	 * @return
	 */
	public boolean transfer(TransactionDO tx, AccountDO fromAccount, AccountDO toAccount) throws TransactionException;
	
	/**
	 * HIGT提币
	 * @param fromAccount
	 * @param amount
	 * @return
	 */
	public boolean withdraw(AccountDO fromAccount, ReqwithdrawDO reqwithdraw);
}
