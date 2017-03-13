package org.shaolin.vogerp.accounting.internal;

import java.util.List;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.bmdp.workflow.be.NotificationImpl;
import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
import org.shaolin.vogerp.accounting.IAccountingService;
import org.shaolin.vogerp.accounting.be.AccountVoucherImpl;
import org.shaolin.vogerp.accounting.be.CustomerAccountImpl;
import org.shaolin.vogerp.accounting.be.DoubleEntryImpl;
import org.shaolin.vogerp.accounting.be.IAccountVoucher;
import org.shaolin.vogerp.accounting.be.ICustomerAccount;
import org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts;
import org.shaolin.vogerp.accounting.ce.SettlementMethodType;
import org.shaolin.vogerp.accounting.ce.VoucherType;
import org.shaolin.vogerp.accounting.dao.AccountingModel;
import org.shaolin.vogerp.accounting.util.PaymentUtil;

public class AccountingServiceImpl implements IAccountingService, IServiceProvider {

	/**
	 * Do not expose this method into interface.
	 * 
	 * @param userContext
	 */
	public void registerLoginUserAccountInfo(UserContext userContext) {
		CustomerAccountImpl condition = new CustomerAccountImpl();
		condition.setUserId(userContext.getUserId());
		
		List<ICustomerAccount> result = AccountingModel.INSTANCE.searchAccount(condition, null, 0, 1);
		if (result != null && result.size() > 0) {
			UserContext.addUserData("AccountInfo", result.get(0));
		} else {
			NotificationImpl message = new NotificationImpl();
            message.setPartyId(userContext.getUserId());
            ///System/Vogerp/Notification/Payment/UserRegister
            message.setSubject(Registry.getInstance().getValue("/System/Vogerp/Notification/Payment/UserRegister_SUB"));
            message.setDescription(Registry.getInstance().getValue("/System/Vogerp/Notification/Payment/UserRegister_DESC"));
            message.setCreateDate(new java.util.Date());
            
            ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
            service.addNotification(message, true);
		}
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
		item.getDoubleEnties().add(entry);
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
		item.getDoubleEnties().add(entry);
		AccountingModel.INSTANCE.create(item);
		return item;
	}

	@Override
	public Class getServiceInterface() {
		return IAccountingService.class;
	}
	
}
