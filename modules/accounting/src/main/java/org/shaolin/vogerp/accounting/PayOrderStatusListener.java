package org.shaolin.vogerp.accounting;

import org.shaolin.vogerp.accounting.be.IPayOrder;

public interface PayOrderStatusListener {

	public void notifyPaySuccess(IPayOrder order);
	
	public void notifyPayRefund(IPayOrder order);
	
	public void notifyFail(IPayOrder order);
}
