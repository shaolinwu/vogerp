package org.shaolin.vogerp.accounting;

import org.shaolin.vogerp.accounting.be.IAccountVoucher;

public interface IAccountingService {

	/**
	 * for all receiving money orders.
	 */
	public IAccountVoucher createIncomingVoucher(String incomingCOAType, double amount, String comment);
	
	/**
	 * for all pay orders
	 */
	public IAccountVoucher createOutgoingVoucher(String outgoingCOAType, double amount, String comment);
	
}
