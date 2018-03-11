package org.shaolin.vogerp.accounting.internal;

import java.util.List;

import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.vogerp.accounting.IAccountingService;
import org.shaolin.vogerp.accounting.be.AccountVoucherImpl;
import org.shaolin.vogerp.accounting.be.CoinPolicyTemplateImpl;
import org.shaolin.vogerp.accounting.be.CustomerAccountImpl;
import org.shaolin.vogerp.accounting.be.CustomerCoinImpl;
import org.shaolin.vogerp.accounting.be.CustomerScoreImpl;
import org.shaolin.vogerp.accounting.be.DoubleEntryImpl;
import org.shaolin.vogerp.accounting.be.IAccountVoucher;
import org.shaolin.vogerp.accounting.be.ICoinPolicyTemplate;
import org.shaolin.vogerp.accounting.be.ICustomerAccount;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.be.PayOrderImpl;
import org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts;
import org.shaolin.vogerp.accounting.ce.CoinOrScoreReasonType;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.accounting.ce.SettlementMethodType;
import org.shaolin.vogerp.accounting.ce.VoucherType;
import org.shaolin.vogerp.accounting.dao.AccountingModel;
import org.shaolin.vogerp.accounting.util.PaymentUtil;

public class AccountingServiceImpl implements IAccountingService, IServiceProvider {

	public static void notifyRegistered(long userId, long recommandedUserId) {
		PaymentUtil.addCoin(userId, CoinOrScoreReasonType.REASON1);
		PaymentUtil.addScore(userId, CoinOrScoreReasonType.REASON1);
		if (recommandedUserId > 0) {
			PaymentUtil.addCoin(recommandedUserId, CoinOrScoreReasonType.REASON2);
			PaymentUtil.addScore(recommandedUserId, CoinOrScoreReasonType.REASON2);
		}
	}
	
	
	/**
	 * Do not expose this method into interface.
	 * 
	 * @param userContext
	 */
	public static void registerLoginUserAccountInfo(UserContext userContext) {
		CustomerAccountImpl condition = new CustomerAccountImpl();
		condition.setUserId(userContext.getUserId());
		
		List<ICustomerAccount> result = AccountingModel.INSTANCE.searchAccount(condition, null, 0, 1);
		if (result != null && result.size() > 0) {
			UserContext.addUserData("AccountInfo", result.get(0));
		} else {
			// it's fine without notification here.
//			NotificationImpl message = new NotificationImpl();
//            message.setPartyId(userContext.getUserId());
//            ///System/Vogerp/Notification/Payment/UserRegister
//            message.setSubject(Registry.getInstance().getValue("/System/Vogerp/Notification/Payment/UserRegister_SUB"));
//            message.setDescription(Registry.getInstance().getValue("/System/Vogerp/Notification/Payment/UserRegister_DESC"));
//            message.setCreateDate(new java.util.Date());
//            
//            ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
//            service.addNotification(message, true);
		}
	}
	
	public ICustomerAccount getCustomerAccount(long userId) {
		CustomerAccountImpl condition = new CustomerAccountImpl();
		condition.setUserId(userId);
		
		List<ICustomerAccount> result = AccountingModel.INSTANCE.searchAccount(condition, null, 0, 1);
		if (result != null && result.size() > 0) {
			return result.get(0);
		}
		throw new IllegalArgumentException("Unable to find this account by user id: " + userId);
	} 
	
	/**
	 * for all receiving money orders.
	 */
	public IAccountVoucher createIncomingVoucher(final String incomingCOAType, final double amount, final String comment) {
		AccountVoucherImpl item = new AccountVoucherImpl();
		item.setSeqNumber(PaymentUtil.genSerialNumber());
		item.setVoucherType(VoucherType.RECEIVER);
		item.setComment(comment);
		item.setOrgId(UserContext.getUserContext().getOrgId());
		item.setEntered(UserContext.getUserContext().getUserId());
		item.setSettlementMethod(SettlementMethodType.ALIPAY);
		DoubleEntryImpl entry = new DoubleEntryImpl();
		entry.setCreditAmount(Double.valueOf(amount * 100).intValue() / 100); //round up fen.
		entry.setGeneralLedger(ClassifyOfAccounts.PROFIT);
		entry.setSubLedger(incomingCOAType);
		AccountingModel.INSTANCE.create(item);
		return item;
	}

	/**
	 * for all pay orders
	 */
	public IAccountVoucher createOutgoingVoucher(final String outgoingCOAType, final double amount, final String comment) {
		AccountVoucherImpl item = new AccountVoucherImpl();
		item.setSeqNumber(PaymentUtil.genSerialNumber());
		item.setVoucherType(VoucherType.PAYMENT);
		item.setComment(comment);;
		item.setOrgId(UserContext.getUserContext().getOrgId());
		item.setEntered(UserContext.getUserContext().getUserId());
		item.setSettlementMethod(SettlementMethodType.ALIPAY);
		DoubleEntryImpl entry = new DoubleEntryImpl();
		entry.setDebitAmount(Double.valueOf(amount * 100).intValue() / 100); //round up fen.
		entry.setGeneralLedger(ClassifyOfAccounts.COST);
		entry.setSubLedger(outgoingCOAType);
		AccountingModel.INSTANCE.create(item);
		return item;
	}

	public double queryUserTotalAmount(long userId) {
		PayOrderImpl condition = new PayOrderImpl();
		condition.setUserId(userId);
		condition.setStatus(PayOrderStatusType.AGREEDPAYTOEND);
		condition.setWithdrawn(false);
		
		List<IPayOrder> orders = AccountingModel.INSTANCE.searchWithdrawnPaymentOrder(condition, null, 0, -1);
		double totalAmount = 0;
		for (IPayOrder order: orders) {
			totalAmount += (order.getAmount()/100);
		}
		
		condition.setWithdrawn(true);
		orders = AccountingModel.INSTANCE.searchWithdrawnPaymentOrder(condition, null, 0, -1);
		for (IPayOrder order: orders) {
			totalAmount += (order.getAmount()/100);
		}
		return totalAmount;
	}
	
	public double queryUserTotalAvailableAmount(long userId) {
		PayOrderImpl condition = new PayOrderImpl();
		condition.setUserId(userId);
		condition.setStatus(PayOrderStatusType.AGREEDPAYTOEND);
		condition.setWithdrawn(false);
		
		List<IPayOrder> orders = AccountingModel.INSTANCE.searchWithdrawnPaymentOrder(condition, null, 0, -1);
		double totalWithdrawnAmount = 0;
		for (IPayOrder order: orders) {
			totalWithdrawnAmount += (order.getAmount()/100);
		}
		return totalWithdrawnAmount;
	}
	
	public double queryUserTotalSpent(long userId) {
		PayOrderImpl condition = new PayOrderImpl();
		condition.setEndUserId(userId);
		condition.setStatus(PayOrderStatusType.PAYED);
		
		List<IPayOrder> orders = AccountingModel.INSTANCE.searchPaymentOrder(condition, null, 0, -1);
		double totalAmount = 0;
		for (IPayOrder order: orders) {
			totalAmount += (order.getAmount()/100);
		}
		return totalAmount;
	}
	
	public int queryUserTotalCoin(long userId) {
		CustomerCoinImpl condition = new CustomerCoinImpl();
        condition.setUserId(userId);
        condition.setSpent(false);
        condition.setFrezzen(false);
        List result = AccountingModel.INSTANCE.searchUserCoin(condition, null, 0, -1);
        int totalScores = 0;
        if (result.size() > 0) {
           for (int i=0; i<result.size(); i++) {
               totalScores += ((CustomerCoinImpl)result.get(i)).getCoin();
           }
        }
        return totalScores;
	}
	
	public int queryUserTotalScore(long userId) {
		CustomerScoreImpl condition = new CustomerScoreImpl();
        condition.setUserId(userId);
        condition.setSpent(false);
        condition.setFrezzen(false);
        List result = AccountingModel.INSTANCE.searchUserScore(condition, null, 0, -1);
        int totalScores = 0;
        if (result.size() > 0) {
           for (int i=0; i<result.size(); i++) {
               totalScores += ((CustomerScoreImpl)result.get(i)).getScore();
           }
        }
        return totalScores;
	}
	
	public boolean addScore(long userId, CoinOrScoreReasonType reason) {
		if (userId <= 0 || reason == CoinOrScoreReasonType.NOT_SPECIFIED) {
			return false;
		}
		CoinPolicyTemplateImpl condition1 = new CoinPolicyTemplateImpl();
		condition1.setReason(reason);
		List<ICoinPolicyTemplate> result = AccountingModel.INSTANCE.searchCoinPolicy(condition1, null, 0, 1);
		if (result == null || result.size() == 0 || result.get(0).getRewardScore() <= 0) {
			return false;
		}
		
		CustomerScoreImpl condition = new CustomerScoreImpl();
        condition.setUserId(userId);
        condition.setScore(result.get(0).getRewardScore());
        condition.setReason(reason);
        condition.setSpent(false);
        condition.setFrezzen(false);
        AccountingModel.INSTANCE.create(condition);
        return true;
	}
	
	public boolean addCoin(long userId, CoinOrScoreReasonType reason) {
		if (userId <= 0 || reason == CoinOrScoreReasonType.NOT_SPECIFIED) {
			return false;
		}
		CoinPolicyTemplateImpl condition1 = new CoinPolicyTemplateImpl();
		condition1.setReason(reason);
		List<ICoinPolicyTemplate> result = AccountingModel.INSTANCE.searchCoinPolicy(condition1, null, 0, 1);
		if (result == null || result.size() == 0 || result.get(0).getRewardCoin() <= 0) {
			return false;
		}
		
		CustomerCoinImpl condition = new CustomerCoinImpl();
        condition.setUserId(userId);
        condition.setCoin(result.get(0).getRewardCoin());
        condition.setReason(reason);
        condition.setSpent(false);
        condition.setFrezzen(false);
        AccountingModel.INSTANCE.create(condition);
        return true;
	}
	
	@Override
	public Class getServiceInterface() {
		return IAccountingService.class;
	}
	
}
