package org.shaolin.vogerp.accounting;

import org.shaolin.vogerp.accounting.be.IAccountVoucher;
import org.shaolin.vogerp.accounting.be.ICustomerAccount;

public interface IAccountingService {

	public IAccountVoucher createIncomingVoucher(final String incomingCOAType, final double amount, final String comment);
	
	public IAccountVoucher createOutgoingVoucher(final String outgoingCOAType, final double amount, final String comment);
	
	public ICustomerAccount getCustomerAccount(long userId);
	
	public double queryUserTotalAmount(long userId);
	
	public double queryUserTotalSpent(long userId);
	
}
