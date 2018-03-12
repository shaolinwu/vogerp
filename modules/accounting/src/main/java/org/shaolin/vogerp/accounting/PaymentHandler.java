package org.shaolin.vogerp.accounting;

import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.be.IPayOrderRequest;

public interface PaymentHandler {

	public static final String SUCCESS = "success";//SUCCESS
	public static final String FAIL = "failure";
	
	public String prepay(IPayOrder payOrder) throws PaymentException;
	
	public String refund(IPayOrder payOrder) throws PaymentException;
	
	public String transfer(IPayOrderRequest request0) throws PaymentException;
	
	public String query(final IPayOrder order) throws PaymentException;
}
