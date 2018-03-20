package org.shaolin.vogerp.ecommercial;

import java.util.List;

public interface IOrderService {

	public void accessedGOrder(long orderId);

	public void accessedROrder(long orderId);
	
	public void accessedMOrder(long orderId);
}
