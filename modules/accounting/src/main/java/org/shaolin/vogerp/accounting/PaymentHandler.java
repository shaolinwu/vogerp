package org.shaolin.vogerp.accounting;

import org.shaolin.vogerp.accounting.be.ICustomerAccount;
import org.shaolin.vogerp.accounting.be.IPayOrder;

public interface PaymentHandler {

	public static final String SUCCESS = "success";
	public static final String FAIL = "failure";
	
	public String prepay(IPayOrder payOrder) throws PaymentException;
	
	public String refund(IPayOrder payOrder) throws PaymentException;
	
	public String transfer(final IPayOrder order, ICustomerAccount customerAccount) throws PaymentException;
	
	public String query(final IPayOrder order) throws PaymentException;
}
