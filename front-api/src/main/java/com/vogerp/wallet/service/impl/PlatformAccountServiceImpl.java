package com.vogerp.wallet.service.impl;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.vogerp.ILifeCycleService;
import com.vogerp.event.service.EventService;
import com.vogerp.user.exception.TransactionException;
import com.vogerp.wallet.dao.AccountDao;
import com.vogerp.wallet.dao.PlatformAccountDao;
import com.vogerp.wallet.dao.PlatformTransactionDao;
import com.vogerp.wallet.domain.AccountDO;
import com.vogerp.wallet.domain.PlatformAccountDO;
import com.vogerp.wallet.domain.PlatformTransactionDO;
import com.vogerp.wallet.domain.TokenmgmtDO.TokenType;
import com.vogerp.wallet.event.PlatformTransferredToUserEvent;

@Service
public class PlatformAccountServiceImpl implements PlatformAccountService, ILifeCycleService {
	
	private static final Logger logger = LoggerFactory.getLogger(PlatformAccountService.class);
	
	@Autowired
	private AccountDao accountDao;
	@Autowired
	private PlatformAccountDao platAccountDao;
	@Autowired
	private PlatformTransactionDao platTxService;
	@Autowired
	private EventService eventService;
	
	// it will be loaded after launching.
	public static long HIGT_MAIN_ACCOUNT_ID = 0;
	
	@Override
	public List<PlatformAccountDO> list(Map<String, Object> map){
		return platAccountDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return platAccountDao.count(map);
	}
	
	@Override
	public List<PlatformAccountDO> listByTokenId(long tokenId) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("tokenId", tokenId);
		return platAccountDao.list(map);
	}
	
	@Override
	public List<PlatformAccountDO> listByTokenIdAndType(long tokenId, int type) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("tokenId", tokenId);
		map.put("type", type);
		return platAccountDao.list(map);
	}
	
	@Override
	public PlatformAccountDO getAccount(long accountId, int tokenId) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("parentId", accountId);
		map.put("tokenId", tokenId);
		List<PlatformAccountDO> accounts = platAccountDao.list(map);
		if (accounts == null || accounts.size() == 0) {
			return null;
		}
		return accounts.get(0);
	}
	
	@Override
	public PlatformAccountDO get(Long id){
		return platAccountDao.get(id);
	}
	
	@Override
	@Transactional
	public boolean transfer(long platformAccId, int tokenId, long userId, double amount, int businessType, String remark, String json) throws TransactionException {
		if (amount < 0) {
			return false;
		}
		PlatformAccountDO fromAccount = this.getAccount(platformAccId, tokenId);
		if (fromAccount == null) {
			logger.warn("Unable to find this platform account: " + platformAccId);
			throw new TransactionException("Unable to find this platform account! parent id: " + platformAccId + " token id: " + tokenId);
		}
		if (!hasEnoughBalance(fromAccount, amount)) {
			throw new TransactionException("The platform account does not have enough balance! parent id: " + platformAccId + " token id: " + tokenId);
		}
		AccountDO toAccount = accountDao.getByUserId(userId, fromAccount.getTokenId().intValue());
		if (toAccount == null) {
			AccountDO newAccount = new AccountDO();
			newAccount.setTokenId(fromAccount.getTokenId());
			newAccount.setUserId(userId);
			newAccount.setBalance(BigDecimal.ZERO);
			newAccount.setVersion(0L);
			newAccount.setState(1);
			newAccount.setType(1);
			newAccount.setCreatedate(new Date());
			accountDao.save(newAccount);
		}
		toAccount = accountDao.getByUserId(userId, fromAccount.getTokenId().intValue());
		if (toAccount == null) {
			logger.warn("Unable to find this user account by token id: " + fromAccount.getTokenId());
			return false;
		}
		PlatformTransactionDO tx = new PlatformTransactionDO();
		tx.setAccountid(fromAccount.getId());
		tx.setAccountVersion(fromAccount.getVersion());
		tx.setToAccountId(toAccount.getId());//personal account
		tx.setToAccountVersion(toAccount.getVersion());//personal account
		tx.setAmount(new BigDecimal(amount));
		tx.setIsusertx(1);//platform to user
		tx.setState(1);
		tx.setFee(new BigDecimal(0));
		tx.setTokentype(fromAccount.getTokenId());
		tx.setOpstype(businessType);
		tx.setRemark(remark);
		tx.setJson(json);
		tx.setCreatedate(new Date());
		int i = 0;
		while (!this.decrease(tx.getAmount(), fromAccount)) {
			logger.info("consume account version conflicted. try " + i + "---tx amount: " + amount 
						+ "--account: " + fromAccount.getId() + "--version: " + fromAccount.getVersion());
			if (++i >= 10) {//最大尝试10次。
				throw new TransactionException("consume account version conflicted. try " + i + "---tx amount: " + amount 
						+ "--account: " + fromAccount.getId() + "--version: " + fromAccount.getVersion());
			}
			if (i > 5) {
				try {// in rush hour.
					Thread.sleep(100);
				} catch (InterruptedException e) {
				}
			}
			fromAccount = this.getAccount(platformAccId, tokenId);
			if (!hasEnoughBalance(fromAccount, amount)) {
				return false;
			}
			tx.setAccountVersion(fromAccount.getVersion());
			
			toAccount = accountDao.getByUserId(userId, toAccount.getTokenId().intValue());
			tx.setToAccountVersion(toAccount.getVersion());
		}
		tx.setFrombalance(fromAccount.getBalance());
		tx.setTobalance(new BigDecimal(0));
		if (platTxService.save(tx) > 0) {
			// 通知用户账号，平台账号转出完成，
			eventService.publish(new PlatformTransferredToUserEvent(platformAccId, userId, tx.getId()));
			return true;
		}
		throw new TransactionException("transaction flow insert failed.");
	}
	
	private boolean hasEnoughBalance(PlatformAccountDO account, double amount) {
		return (account.getBalance().doubleValue() >= 0.00 && account.getBalance().doubleValue() >= amount
				&& account.getBalance().subtract(new BigDecimal(amount)).doubleValue() >= 0.00);
	}
	
	protected boolean decrease(BigDecimal amount, PlatformAccountDO fromAccount) throws TransactionException {
		fromAccount.setBalance(fromAccount.getBalance().subtract(amount));
		fromAccount.setLockedVersion(fromAccount.getVersion());
		fromAccount.setVersion(fromAccount.getVersion() + 1);
		return (platAccountDao.personalTransfer(fromAccount) > 0);
	}
	
	protected boolean charge(BigDecimal amount, PlatformAccountDO toAccount) throws TransactionException {
		toAccount.setBalance(toAccount.getBalance().add(amount));
		toAccount.setLockedVersion(toAccount.getVersion());
		toAccount.setVersion(toAccount.getVersion() + 1);
		return (platAccountDao.personalTransfer(toAccount) > 0);
	}

	@Override
	public int getRunLevel() {
		return 0;
	}

	@Override
	public boolean isReady() {
		return true;
	}

	@Override
	public boolean isStop() {
		return true;
	}

	@Override
	public void init() {
		
	}

	@Override
	public void start() {
		logger.info("-------HIG Wallet Account initializing-----");
		List<PlatformAccountDO> alltokens = list(Collections.emptyMap());
		for (PlatformAccountDO account : alltokens) {
			if (account.getId() == 1 && account.getParentId() == 0 && account.getType() == 1) {
				logger.info("Detected HIGT Main Account : " + account.getId());
				HIGT_MAIN_ACCOUNT_ID = account.getId();
				break;
			} 
		}
		if (HIGT_MAIN_ACCOUNT_ID == 0) {
			throw new RuntimeException("Unable to find HIGT Main Account!");
		}
		for (PlatformAccountDO account : alltokens) {
			if (account.getParentId() == HIGT_MAIN_ACCOUNT_ID && account.getTokenId() == TokenType.HIGT.getCode()) {
				logger.info("Detected HIGT Reward Account : " + account.getId());
				//HIGT_REWARD_ACCOUNT_ID = account.getId();
				break;
			}
		}
		logger.info("-------HIG Wallet Account initialization is successfully!------");
	}

	@Override
	public void stop() {
		logger.info("-------Stopped HIG Wallet Account-----");
	}

	@Override
	public void distroy() {
		
	}
	
}
