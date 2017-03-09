package org.shaolin.vogerp.accounting;

import org.shaolin.vogerp.accounting.be.IPayOrder;

public interface PayOrderStatusListener {

	public void notifySuccess(IPayOrder order);
	
	public void notifyFail(IPayOrder order);
}
