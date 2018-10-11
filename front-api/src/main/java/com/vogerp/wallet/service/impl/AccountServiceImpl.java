package com.vogerp.wallet.service.impl;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.vogerp.event.service.EventService;
import com.vogerp.user.exception.TransactionException;
import com.vogerp.wallet.dao.AccountDao;
import com.vogerp.wallet.domain.AccountDO;
import com.vogerp.wallet.domain.PlatformAccountDO;
import com.vogerp.wallet.domain.ReqwithdrawDO;
import com.vogerp.wallet.domain.TransactionDO;
import com.vogerp.wallet.domain.TokenmgmtDO.TokenType;
import com.vogerp.wallet.event.ConsumeHIGTEvent;
import com.vogerp.wallet.service.AccountService;
import com.vogerp.wallet.service.TransactionService;

/**
 * 用户钱包账户服务
 * @author shaolinwu
 *
 */
@Service
public class AccountServiceImpl implements AccountService {
	private static final Logger logger = LoggerFactory.getLogger(AccountService.class);
	
	@Autowired
	private AccountDao accountDao;
	
	@Autowired
	private TransactionService txService;
	
	@Autowired
	private EventService eventService;
	
	@Autowired
	private PlatformAccountService platAccService;
	
	@Override
	public AccountDO get(Long id){
		return accountDao.get(id);
	}
	
	@Override
	public AccountDO getByUserId(Long id, int tokenId){
		return accountDao.getByUserId(id, tokenId);
	}
	
	@Override
	public List<AccountDO> getAllByUserId(Long userId){
		return accountDao.getAllByUserId(userId);
	}
	
	@Override
	public AccountDO getByAccId(String accid) {
		return accountDao.getByAccId(accid);
	}
	
	public synchronized static String genAccountId() {
		return "ACC:" + System.nanoTime();
	}
	
	@Override
	public AccountDO createPersonalAccount(Long userId) {
		AccountDO account = new AccountDO();
		account.setUserId(userId);
		account.setType(AccountDO.AccountType.PERSONAL.getCode());
		account.setTokenId(4L);//HGIT
		account.setState(1);
		account.setAccount(genAccountId());
		account.setCreatedate(new Date());
		account.setVersion(0L);
		account.setBalance(BigDecimal.ZERO);
		//TODO: assign eth account
		//poolService.assign(account);
		
		this.save(account);
		return account;
	}
	
	private static boolean hasEnoughBalance(AccountDO account, double amount) {
		return (account.getBalance().doubleValue() >= 0.00 && account.getBalance().doubleValue() >= amount
				&& account.getBalance().subtract(new BigDecimal(amount)).doubleValue() >= 0.00);
	}
	
	@Transactional
	public boolean consume(long platAccountId, TokenType tokenType, long userId, double amount, String remark, String busiJson, int businessType) throws TransactionException {
		if (amount <= 0) {
			return false;
		}
		if (userId < 1) {
			return false;
		}
		AccountDO fromAccount = this.getByUserId(userId, tokenType.getCode());
		if (fromAccount == null) {
			AccountDO newAccount = new AccountDO();
			newAccount.setTokenId((long)tokenType.getCode());
			newAccount.setUserId(userId);
			newAccount.setBalance(BigDecimal.ZERO);
			newAccount.setVersion(0L);
			newAccount.setState(1);
			newAccount.setType(1);
			newAccount.setCreatedate(new Date());
			accountDao.save(newAccount);
		}
		fromAccount = this.getByUserId(userId, tokenType.getCode());
		if (fromAccount == null) {
			logger.warn(userId + "用户ID不支持这一币种" + tokenType);
			return false;
		}
		if (!hasEnoughBalance(fromAccount, amount)) {
			return false;
		}
		PlatformAccountDO platAccount = platAccService.getAccount(platAccountId, tokenType.getCode());
		if (platAccount == null) {
			throw new TransactionException("Unable to find this platform account! parent id: " + platAccountId + " token id: " + tokenType.getCode());
		}
		TransactionDO tx = new TransactionDO();
		tx.setAccountid(fromAccount.getId());
		tx.setAccountVersion(fromAccount.getVersion());
		tx.setToAccountId(platAccount.getId());//platform account
		tx.setToAccountVersion(platAccount.getVersion());//platform account
		tx.setAmount(new BigDecimal(amount));
		tx.setIsusertx(0);
		tx.setState(1);
		tx.setTokentype(tokenType.getCode()); 
		tx.setOpstype(businessType); // TransactionDO.OpsType.VOTE.getCode()
		tx.setRemark(remark);
		tx.setJson(busiJson);
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
			fromAccount = this.getByUserId(userId, tokenType.getCode());
			if (!hasEnoughBalance(fromAccount, amount)) {
				return false;
			}
			tx.setAccountVersion(fromAccount.getVersion());
		}
		tx.setFrombalance(fromAccount.getBalance());
		tx.setTobalance(BigDecimal.ZERO);
		if (txService.save(tx) > 0) {
			// 通过事件表写回平台账号，否则都往一个账号里转账会有很大冲突。同时也隔离开事务问题。
			eventService.publish(new ConsumeHIGTEvent(userId, tx.getId()));
			return true;
		}
		throw new TransactionException("transaction flow insert failed.");
	}
	
	protected boolean decrease(BigDecimal amount, AccountDO fromAccount) throws TransactionException {
		fromAccount.setBalance(fromAccount.getBalance().subtract(amount));
		fromAccount.setLockedVersion(fromAccount.getVersion());
		fromAccount.setVersion(fromAccount.getVersion() + 1);
		return (accountDao.personalTransfer(fromAccount) > 0);
	}
	
	@Transactional
	public boolean reward(long platAccountId, TokenType tokenType, long userId, double amount, String remark, String busiJson, int businessType) throws TransactionException {
		if (amount <= 0) {
			return false;
		}
		if (userId < 1) {
			return false;
		}
		return platAccService.transfer(platAccountId, tokenType.getCode(), userId, amount, businessType, remark, busiJson);
	}
	
	protected boolean charge(BigDecimal amount, AccountDO toAccount) throws TransactionException {
		toAccount.setBalance(toAccount.getBalance().add(amount));
		toAccount.setLockedVersion(toAccount.getVersion());
		toAccount.setVersion(toAccount.getVersion() + 1);
		return (accountDao.personalTransfer(toAccount) > 0);
	}
	
	@Override
	//@Transactional let's leave this to the caller.
	public boolean transfer(TransactionDO tx, AccountDO fromAccount, AccountDO toAccount) throws TransactionException {
		if (tx.getAmount().intValue() < 0) {
			return false;
		}
		if (tx.getAccountid() != fromAccount.getId()) {
			return false;
		}
		if (tx.getToAccountId() != toAccount.getId()) {
			return false;
		}
		
		fromAccount.setBalance(fromAccount.getBalance().subtract(tx.getAmount()));
		fromAccount.setLockedVersion(fromAccount.getVersion());
		fromAccount.setVersion(fromAccount.getVersion() + 1);
		
		toAccount.setBalance(toAccount.getBalance().add(tx.getAmount()));
		toAccount.setLockedVersion(toAccount.getVersion());
		toAccount.setVersion(toAccount.getVersion() + 1);
		
		if (accountDao.personalTransfer(fromAccount) > 0) {
			if (accountDao.personalTransfer(toAccount) > 0) {
				return true;
			} 
			//throw exception for reverting from.
			throw new TransactionException("transfer update failed");
		} else {
			return false;
		}
	}
	
	@Override
	public boolean withdraw(AccountDO fromAccount, ReqwithdrawDO reqwithdraw) {
		if (fromAccount.getBalance().doubleValue() < reqwithdraw.getAmount().doubleValue()) {
			return false;
		}
		reqwithdraw.setAccountVersion(fromAccount.getVersion());
		fromAccount.setBalance(fromAccount.getBalance().subtract(reqwithdraw.getAmount()));
		fromAccount.setLockedVersion(fromAccount.getVersion());
		fromAccount.setVersion(fromAccount.getVersion() + 1);
		if (accountDao.personalTransfer(fromAccount) == 0) {
			return false;
		} 
		return true;
	}
	
	@Override
	public List<AccountDO> list(Map<String, Object> map){
		return accountDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return accountDao.count(map);
	}
	
	@Override
	public int save(AccountDO account){
		return accountDao.save(account);
	}
	
	public static void main(String[] args) {
		AccountDO account = new AccountDO();
		account.setBalance(new BigDecimal(4));
		System.out.println(hasEnoughBalance(account, 5));
		System.out.println(hasEnoughBalance(account, 4));
		System.out.println(hasEnoughBalance(account, 3));
		System.out.println(hasEnoughBalance(account, 5));
		System.out.println(hasEnoughBalance(account, 6));
		System.out.println(hasEnoughBalance(account, 4));
		System.out.println(hasEnoughBalance(account, 3));
		
		
		DecimalFormat df1 = new DecimalFormat("###,##0.00");
		df1.setRoundingMode(RoundingMode.HALF_UP); 
		System.out.println(df1.format(0.00));
		System.out.println(df1.format(0.10));
		System.out.println(df1.format(0.11));
		System.out.println(df1.format(1.11));
		
		DecimalFormat df2 = new DecimalFormat("###,###.00");
		df2.setRoundingMode(RoundingMode.HALF_UP); 
		System.out.println(df1.format(0.00));
		System.out.println(df1.format(0.01));
		
	}
	
}
