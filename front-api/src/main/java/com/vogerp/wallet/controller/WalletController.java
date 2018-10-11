package com.vogerp.wallet.controller;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vogerp.common.utils.Query;
import com.vogerp.common.utils.R;
import com.vogerp.user.domain.UserDO;
import com.vogerp.user.exception.TransactionException;
import com.vogerp.user.service.UserService;
import com.vogerp.wallet.domain.AccountDO;
import com.vogerp.wallet.domain.ReqwithdrawDO;
import com.vogerp.wallet.domain.SimpleTransactionDO;
import com.vogerp.wallet.domain.TokenmgmtDO;
import com.vogerp.wallet.domain.TransactionDO;
import com.vogerp.wallet.domain.TokenmgmtDO.TokenType;
import com.vogerp.wallet.service.AccountService;
import com.vogerp.wallet.service.ReqwithdrawService;
import com.vogerp.wallet.service.TokenMgmtService;
import com.vogerp.wallet.service.TransactionService;
import com.vogerp.wallet.service.impl.PlatformAccountServiceImpl;

import io.swagger.annotations.ApiOperation;

/**
 * 个人用户钱包账号
 * 
 * @date 2018-08-27 13:12:30
 */
 
@Controller
@RequestMapping("/wallet/account")
public class WalletController {
	private static final Logger logger = LoggerFactory.getLogger(WalletController.class);
	@Autowired
	UserService userService;
	@Autowired
	private AccountService accountService;
	@Autowired
	private ReqwithdrawService requestDrawService;
	@Autowired
	private TransactionService txService;
	@Autowired
	private TokenMgmtService tokenService;
	
	@ApiOperation("获得用户钱包信息.")
	@ResponseBody
	@PostMapping("/info")
	public R info(long userId, String authCode){
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		
		List<TokenmgmtDO> tokens = new ArrayList<TokenmgmtDO>(tokenService.getAllTokens());
		
		List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
		List<AccountDO> accountList = accountService.getAllByUserId(userId);
		for (AccountDO account: accountList) {
			Map<String, Object> item = new HashMap<String, Object>();
			item.put("accountId", account.getId());
			item.put("tokenId", account.getTokenId());
			item.put("tokenSymbol", account.getTokenSymbol());
			item.put("tokenIcon", account.getTokenIcon());
			item.put("enableCharge", account.isEnablecharge());
			item.put("enableWithdraw", account.isEnablewithdraw());
			
			boolean isDisplay = true;
			for (int i=0;i<tokens.size();i++) {
				TokenmgmtDO t = tokens.get(i);
				if (t.getId() == account.getTokenId()) {
					if (t.getDisplay() != null && !t.getDisplay().booleanValue()) {
						isDisplay = false;
					}
					tokens.remove(i);
					break;
				}
			}
			if (!isDisplay) {
				continue;
			}
			DecimalFormat df1 = new DecimalFormat("###,##0.00");
			df1.setRoundingMode(RoundingMode.HALF_UP); 
			String balance = df1.format(account.getBalance());
			item.put("balance", balance);
			result.add(item);
		}
		for (TokenmgmtDO t : tokens) {
			if (t.getDisplay() != null && !t.getDisplay().booleanValue()) {
				continue;
			}
			Map<String, Object> item = new HashMap<String, Object>();
			item.put("accountId", -1);
			item.put("tokenId", t.getId());
			item.put("tokenSymbol", t.getName());
			item.put("tokenIcon", t.getIcon());
			item.put("enableCharge", t.getEnablecharge());
			item.put("enableWithdraw", t.getEnablewithdraw());
			item.put("balance", "0.00");
			result.add(item);
		}
		
		return R.ok().put("data", result);
	}
	
//	@ApiOperation("用户提币申请")
//	@ResponseBody
//	@PostMapping("/requestwithdraw/higt")
//	@Transactional
	public R requestHIGTWithdraw(long userId, String authCode, String toAddress, double amount, String verifyCode){
		if (toAddress == null || toAddress.trim().length() == 0) {
			return R.error("转帐地此不能为空", "the destination account mut not be empty");
		}
		if (amount <= 0) {
			return R.error("数量为能小于0", "token amount must be greater than 0");
		}
		if (verifyCode == null || verifyCode.trim().length() == 0) {
			//TODO: return R.error("手机验证码不能为空");
		}
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		AccountDO account = accountService.getByUserId(user.getUserId(), TokenType.HIGT.getCode());
		if (!hasEnoughBalance(account, amount)) {
			return R.error("余额不足", "your balance is not enough.");
		}
		ReqwithdrawDO reqwithdraw = new ReqwithdrawDO();
		reqwithdraw.setAccountid(account.getId());
		reqwithdraw.setTokentype(TokenmgmtDO.HIGT);
		reqwithdraw.setToaddress(toAddress);
		reqwithdraw.setAmount(new BigDecimal(amount));
		reqwithdraw.setState(1);
		reqwithdraw.setCreatedate(new Date());
		
		accountService.withdraw(account, reqwithdraw);
		requestDrawService.save(reqwithdraw);//version updated by calling account.
		return R.ok();
	}
	
//	@ApiOperation("用户转帐HIGT")
//	@ResponseBody
//	@PostMapping("/transfer/higt")
//	@Transactional
	public R transferHIGT(long userId, String authCode, String toAccountId, double amount, String verifyCode) throws TransactionException {
		if (toAccountId == null || toAccountId.trim().length() == 0) {
			return R.error("转账帐户不能为空", "the destination account mut not be empty");
		}
		if (amount <= 0) {
			return R.error("转帐数量为能小于0", "token amount must be greater than 0");
		}
		if (verifyCode == null || verifyCode.trim().length() == 0) {
			//TODO: return R.error("手机验证码不能为空");
		}
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		AccountDO toAccount = accountService.getByAccId(toAccountId);
		if (toAccount == null) {
			return R.error("转账帐户不存在", "the destination account does not exist.");
		}
		AccountDO account = accountService.getByUserId(user.getUserId(), TokenType.HIGT.getCode());
		if (!hasEnoughBalance(account, amount)) {
			return R.error("余额不足", "");
		}
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("accountid", account.getId());
		params.put("accountVersion", account.getVersion());
		params.put("toAccountId", toAccountId);
		params.put("toAccountVersion", toAccount.getVersion());
		Query query = new Query(params);
		int total = txService.count(query);
		if (total > 0) {
			return R.error("重复交易，请重新刷新数据", "");
		}
		TransactionDO tx = new TransactionDO();
		tx.setAccountid(account.getId());
		tx.setAccountVersion(account.getVersion());
		tx.setToAccountId(toAccount.getId());
		tx.setToAccountVersion(toAccount.getVersion());
		tx.setAmount(new BigDecimal(amount));
		tx.setIsusertx(1);
		tx.setState(1);
		tx.setTokentype(TokenmgmtDO.HIGT);
		//tx.setOpstype(1);
		tx.setCreatedate(new Date());
		if (txService.save(tx) > 0) {
			if (accountService.transfer(tx, account, toAccount)) {
				return R.ok();
			}
			throw new TransactionException("transfer HIGT failed");
		}
		return R.error();
	}
	
	@ApiOperation("用户所有收入与支出流水")
	@ResponseBody
	@PostMapping("/incomingflow/higt")
	@Transactional
	public R flow(long userId, String authCode, long accountId, int offset, int limit) throws TransactionException {
		if (accountId < 1) {
			return R.ok().put("data", new ArrayList<String>());
		}
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		AccountDO toAccount = accountService.get(accountId);
		if (toAccount == null) {
			return R.error("帐户不存在", "the destination account does not exist.");
		}
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("accountid", toAccount.getId());
		params.put("toAccountId", toAccount.getId());
		params.put("offset", offset);
		params.put("limit", limit);
		Query query = new Query(params);
		List<TransactionDO> result = txService.list2Flow(query);
		R r = R.ok();
		if (result != null && result.size() > 0) {
			List<SimpleTransactionDO> simpletxlist = new ArrayList<SimpleTransactionDO>();
			for (TransactionDO tx: result) {
				SimpleTransactionDO simpleItem = new SimpleTransactionDO();
				simpleItem.setId(tx.getId());
				simpleItem.setTokentype(tx.getTokentype());
				DecimalFormat df1 = new DecimalFormat("###,##0.00");
				df1.setRoundingMode(RoundingMode.HALF_UP); 
				if (tx.getAccountid().longValue() == toAccount.getId().longValue()) {
					simpleItem.setAmount("-" + df1.format(tx.getAmount()));
				} else {
					simpleItem.setAmount("+" + df1.format(tx.getAmount()));
				}
				simpleItem.setBussinessType(tx.getOpstype());
				simpleItem.setRemark(tx.getRemark());
				simpleItem.setCreatedate(tx.getCreatedate());
				simpletxlist.add(simpleItem);
			}
			r.put("totalcount", txService.count2Flow(query));
			r.put("data", simpletxlist);
		} else {
			r = R.ok().put("data", new ArrayList<String>());
		}
		return r;
	}
	
	@ApiOperation("HIGT收入流水")
	@ResponseBody
	@PostMapping("/incomingflow2/higt")
	@Transactional
	public R incomingflowHIGT(long userId, String authCode, long accountId, int offset, int limit) throws TransactionException {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		AccountDO toAccount = accountService.get(accountId);
		if (toAccount == null) {
			return R.error("转账帐户不存在", "the destination account does not exist.");
		}
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("toAccountId", toAccount.getId());
		params.put("tokentype", TokenmgmtDO.HIGT);
		params.put("offset", offset);
		params.put("limit", limit);
		Query query = new Query(params);
		List<TransactionDO> result = txService.list(query);
		R r = R.ok();
		if (result != null && result.size() > 0) {
			List<SimpleTransactionDO> simpletxlist = new ArrayList<SimpleTransactionDO>();
			for (TransactionDO tx: result) {
				SimpleTransactionDO simpleItem = new SimpleTransactionDO();
				simpleItem.setId(tx.getId());
				simpleItem.setTokentype(tx.getTokentype());
				simpleItem.setAmount("" + tx.getAmount());
				simpleItem.setRemark(tx.getRemark());
				simpleItem.setBussinessType(tx.getOpstype());
				simpleItem.setCreatedate(tx.getCreatedate());
				simpletxlist.add(simpleItem);
			}
			r.put("totalcount", txService.count(query));
			r.put("data", simpletxlist);
		} else {
			r = R.failed("没有数据", "No data has been found.");
		}
		return r;
	}
	
	@ApiOperation("HIGT支出流水")
	@ResponseBody
	@PostMapping("/outgoingflow/higt")
	@Transactional
	public R outgoingflowHIGT(long userId, String authCode, long accountId, int offset, int limit) throws TransactionException {
		if (userId < 1) {
			return R.error("UserId不正确", "User id is incorrect.");
		}
		UserDO user = userService.get(userId, authCode);
		if (user == null) {
			return R.failedWithAuthCode();
		}
		AccountDO toAccount = accountService.get(accountId);
		if (toAccount == null) {
			return R.error("转账帐户不存在", "the destination account does not exist.");
		}
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("accountid", toAccount.getId());
		params.put("tokentype", TokenmgmtDO.HIGT);
		params.put("offset", offset);
		params.put("limit", limit);
		Query query = new Query(params);
		List<TransactionDO> result = txService.list(query);
		R r = R.ok();
		if (result != null && result.size() > 0) {
			List<SimpleTransactionDO> simpletxlist = new ArrayList<SimpleTransactionDO>();
			for (TransactionDO tx: result) {
				SimpleTransactionDO simpleItem = new SimpleTransactionDO();
				simpleItem.setId(tx.getId());
				simpleItem.setAmount("" + tx.getAmount());
				simpleItem.setRemark(tx.getRemark());
				simpleItem.setBussinessType(tx.getOpstype());
				simpleItem.setCreatedate(tx.getCreatedate());
				simpletxlist.add(simpleItem);
			}
			r.put("totalcount", txService.count(query));
			r.put("data", simpletxlist);
		} else {
			r = R.failed("没有数据", "No data has been found.");
		}
		return r;
	}
	
//	@ApiOperation("用户奖励HIGT测试接口")
//	@ResponseBody
//	@PostMapping("/reward/higt")
	//TODO 测试完后，请删除这个方法。
	private R rewardHIGT(final long userId, String authCode, double amount, String remark) throws TransactionException {
		if (amount <= 0 || amount >= 100) {
			return R.error("转帐数量为能小于0", "");
		}
		if (userId < 1) {
			return R.error("UserId不正确", "");
		}
		ExecutorService exeService = Executors.newFixedThreadPool(8);
		for (int i=0; i<amount; i++) {
			exeService.submit(new Runnable() {
				@Override
				public void run() {
					try {
					if (!accountService.reward(PlatformAccountServiceImpl.HIGT_MAIN_ACCOUNT_ID, TokenmgmtDO.TokenType.HIGT, userId, amount, remark, "", TransactionDO.OpsType.REWARD.getCode())) {
						logger.warn("insertion failed");
					}
					} catch (Exception e) {
						logger.warn(e.getMessage(), e);
					}
				}
			});
		}
		return R.ok();
	}
	
//	@ApiOperation("用户投票HIGT测试接口")
//	@ResponseBody
//	@PostMapping("/vote/consume")
//	TODO 测试完后，请删除这个方法。
	private R consumeHIGT(final long userId, String authCode, double amount, String remark) throws TransactionException {
		if (amount <= 0 || amount >= 100) {
			return R.error("转帐数量为能小于0", "");
		}
		if (userId < 1) {
			return R.error("UserId不正确", "");
		}
		ExecutorService exeService = Executors.newFixedThreadPool(8);
		for (int i=0; i<amount; i++) {
			exeService.submit(new Runnable() {
				@Override
				public void run() {
					try	 {
					if (!accountService.consume(PlatformAccountServiceImpl.HIGT_MAIN_ACCOUNT_ID, TokenType.HIGT, userId, amount, remark, "", TransactionDO.OpsType.VOTE.getCode())) {
						logger.warn("insertion failed");
					}
					} catch (Exception e) {
						logger.warn(e.getMessage(), e);
					}
				}
			});
		}
		return R.ok();
	}
	
	private boolean hasEnoughBalance(AccountDO account, double amount) {
		return (account.getBalance().doubleValue() >= 0.00 && account.getBalance().doubleValue() >= amount
				&& account.getBalance().subtract(new BigDecimal(amount)).doubleValue() >= 0.00);
	}
}
