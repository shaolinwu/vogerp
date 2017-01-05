package org.shaolin.vogerp.accounting;

import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.ce.PayBusinessType;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;

public interface IAccountingService {

	/**
	 * transaction_type	String	 'PAY’ or 'REFUND’ or 'TRANSFER'
	 */
	public enum TransactionType {
		PAY, REFUND, TRANSFER;
	}
	
	public IPayOrder createSelfPayOrder(PayBusinessType type, long endUserId, String orderSeriaNumber, double amount);
	
	public IPayOrder createPayOrder(final PayBusinessType type, final long orgId, final long userId, 
			final long endUserId, final String orderSeriaNumber, final double amount);
	
	public IPayOrder createPayAdminOrder(final PayBusinessType type, final long endUserId, 
			final String orderSerialNumber, final double amount); 
	
	public String prepay(IPayOrder order) throws PaymentException;
	
	public String ensurePayment(IPayOrder order) throws PaymentException;
	
	public String refund(IPayOrder order) throws PaymentException;
	
	public void cancelPayment(IPayOrder order) throws PaymentException;
	
	public String queryForPayStatus(IPayOrder order) throws PaymentException;
	
	public IPayOrder queryForIPayOrder(final String orderSerialNumber);
	
	public PayOrderStatusType queryForPayOrderState(String orderSeriaNumber);
	
}
