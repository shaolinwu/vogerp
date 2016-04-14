package org.shaolin.vogerp.accounting;

import org.shaolin.vogerp.accounting.be.IAccountVoucher;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.ce.PayBusinessType;

public interface IAccountingService {

	public IPayOrder createPayOrder(PayBusinessType type, long origOrderId, double amount);
	
	public String prepay(IPayOrder order);
	
	public String queryforPayStatus(IPayOrder order);
	
	public void ensurePayment(IPayOrder order);
	
	public void refund(IPayOrder order);
	
	public void cancelPayment(IPayOrder order);
	
	/**
	 * for all receiving money orders.
	 */
	public IAccountVoucher createIncomingVoucher(String incomingCOAType, double amount, String comment);
	
	/**
	 * for all pay orders
	 */
	public IAccountVoucher createOutgoingVoucher(String outgoingCOAType, double amount, String comment);
	
}
