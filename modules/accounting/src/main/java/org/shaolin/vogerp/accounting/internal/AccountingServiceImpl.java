package org.shaolin.vogerp.accounting.internal;

import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.vogerp.accounting.IAccountingService;
import org.shaolin.vogerp.accounting.be.AccountVoucherImpl;
import org.shaolin.vogerp.accounting.be.CustomerAccountImpl;
import org.shaolin.vogerp.accounting.be.DoubleEntryImpl;
import org.shaolin.vogerp.accounting.be.IAccountVoucher;
import org.shaolin.vogerp.accounting.be.ICustomerAccount;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.be.PayOrderImpl;
import org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts;
import org.shaolin.vogerp.accounting.ce.PayBusinessType;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.accounting.ce.SettlementMethodType;
import org.shaolin.vogerp.accounting.ce.VoucherType;
import org.shaolin.vogerp.accounting.dao.AccountingModel;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.IUserService.UserActionListener;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;

/**
 * 
 * @author wushaol
 *
 */
public class AccountingServiceImpl implements ILifeCycleProvider, IServiceProvider, IAccountingService, UserActionListener {

	@Override
	public void loggedIn(IPersonalInfo userInfo) {
		CustomerAccountImpl scObject = new CustomerAccountImpl();
		scObject.setOrgId(UserContext.getUserContext().getOrgId());
		List<ICustomerAccount> result = AccountingModel.INSTANCE.searchAccount(scObject, null, 0, 1);
		if (result.size() == 0) {
//			throw new IllegalStateException("No Account ");
			return;
		}
		UserContext.addUserData("CustAccountId", result.get(0).getAccountId());
	}

	@Override
	public void registered(IPersonalInfo userInfo) {
		CustomerAccountImpl newAccount = new CustomerAccountImpl();
		newAccount.setAccountId(genAccountNumber());
		newAccount.setOrgId(UserContext.getUserContext().getOrgId());
		
		AccountingModel.INSTANCE.create(newAccount);
	}	
	
	public static String genAccountNumber() {
		DateParser parse = new DateParser(new Date());
		return "ACCN-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getSeconds(), 2);
	}
	
	public static String genSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "ACCV-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getSeconds(), 2);
	}
	
	public static String genPayOrderSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "PayO-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getSeconds(), 2);
	}
	
	public IPayOrder createPayOrder(PayBusinessType type, long origOrderId, double amount) {
		PayOrderImpl order = new PayOrderImpl();
		order.setPayBusinessType(type);
//		order.setCustomerAPayAccount(customerAPayAccount);
//		order.setCustomerAPaymentMethod(customerAPayAccount);
		order.setOrgId(UserContext.getUserContext().getOrgId());
		order.setSerialNumber(genPayOrderSerialNumber());
		order.setStatus(PayOrderStatusType.CREATED);
		order.setOrderId(origOrderId);
		order.setAmount(amount);
		
		AccountingModel.INSTANCE.create(order);
		return order;
	}
	
	public void withdrawals(IPayOrder order) {
		
	}
	
	/**
	 * for all receiving money orders.
	 */
	public IAccountVoucher createIncomingVoucher(String incomingCOAType, double amount, String comment) {
		AccountVoucherImpl item = new AccountVoucherImpl();
		item.setSeqNumber(genSerialNumber());
		item.setVoucherType(VoucherType.RECEIVER);
		item.setComment(comment);
		item.setOrgId(UserContext.getUserContext().getOrgId());
		item.setEntered(UserContext.getUserContext().getUserId());
		item.setSettlementMethod(SettlementMethodType.ALIPAY);
		DoubleEntryImpl entry = new DoubleEntryImpl();
		entry.setCreditAmount(amount);
		entry.setGeneralLedger(ClassifyOfAccounts.PROFIT);
		entry.setSubLedger(incomingCOAType);
		item.getDoubleEnties().add(entry);
		AccountingModel.INSTANCE.create(item);
		return item;
	}
	
	/**
	 * for all pay orders
	 */
	public IAccountVoucher createOutgoingVoucher(String outgoingCOAType, double amount, String comment) {
		AccountVoucherImpl item = new AccountVoucherImpl();
		item.setSeqNumber(genSerialNumber());
		item.setVoucherType(VoucherType.PAYMENT);
		item.setComment(comment);;
		item.setOrgId(UserContext.getUserContext().getOrgId());
		item.setEntered(UserContext.getUserContext().getUserId());
		item.setSettlementMethod(SettlementMethodType.ALIPAY);
		DoubleEntryImpl entry = new DoubleEntryImpl();
		entry.setDebitAmount(amount);
		entry.setGeneralLedger(ClassifyOfAccounts.COST);
		entry.setSubLedger(outgoingCOAType);
		item.getDoubleEnties().add(entry);
		AccountingModel.INSTANCE.create(item);
		return item;
	}
	
	@Override
	public Class getServiceInterface() {
		return IAccountingService.class;
	}

	@Override
	public void startService() {
		AppContext.get().register(this);
		IUserService userService = (IUserService) AppContext.get().getService(
				IUserService.class);
		userService.addListener(this);
	}

	@Override
	public boolean readyToStop() {
		return true;
	}

	@Override
	public void stopService() {
		
	}

	@Override
	public void reload() {
		
	}

	@Override
	public int getRunLevel() {
		return 10;
	}

}
