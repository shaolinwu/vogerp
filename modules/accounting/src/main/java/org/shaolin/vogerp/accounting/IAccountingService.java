package org.shaolin.vogerp.accounting;

import org.shaolin.vogerp.accounting.be.IAccountVoucher;

public interface IAccountingService {

	public IAccountVoucher createIncomingVoucher(final String incomingCOAType, final double amount, final String comment);
	
	public IAccountVoucher createOutgoingVoucher(final String outgoingCOAType, final double amount, final String comment);
}
