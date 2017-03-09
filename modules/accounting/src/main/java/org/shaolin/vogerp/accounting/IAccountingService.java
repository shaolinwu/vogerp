package org.shaolin.vogerp.accounting;

import org.shaolin.uimaster.page.ajax.json.JSONObject;
import org.shaolin.vogerp.accounting.be.ICustomerAccount;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.ce.PayBusinessType;
import org.shaolin.vogerp.accounting.ce.PayOrderRequestType;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.accounting.ce.RequestStatusType;

public interface IAccountingService {

	/**
	 * transaction_type	String	 'PAY� or 'REFUND� or 'TRANSFER'
	 */
	public enum TransactionType {
		PAY, REFUND, TRANSFER;
	}
	
	public void addListener(PayOrderStatusListener listener);
	
	public void notifyPaySuccess(IPayOrder payOrder);
	
	public void notifyPayFail(IPayOrder payOrder);
	
	public IPayOrder createSelfPayOrder(PayBusinessType type, long endUserId, String orderSeriaNumber, double amount);
	
	public IPayOrder createPayOrder(final PayBusinessType type, final long orgId, final long userId, 
			final long endUserId, final String orderSeriaNumber, final double amount);
	
	public IPayOrder createPayAdminOrder(final PayBusinessType type, final long endUserId, 
			final String orderSerialNumber, final double amount); 
	
	public String prepay(final IPayOrder order) throws PaymentException;
	
	public String transfer(final IPayOrder order, ICustomerAccount customerAccount) throws PaymentException;
	
	public String refund(final IPayOrder order) throws PaymentException;
	
	public void cancelPayment(final IPayOrder order) throws PaymentException;
	
	public void updatePayState(JSONObject jsonObj, IPayOrder payOrder) throws PaymentException;
	
	public void requestForPayOrder(final IPayOrder order, final RequestStatusType state, final PayOrderRequestType type);
	
	public String queryForPayStatus(final IPayOrder order) throws PaymentException;
	
	public IPayOrder queryForPayOrder(final String orderSerialNumber);
	
	public PayOrderStatusType queryForPayOrderState(String orderSeriaNumber);
	
}
