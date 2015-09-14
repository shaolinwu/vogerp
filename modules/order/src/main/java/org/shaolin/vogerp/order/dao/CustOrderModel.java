package org.shaolin.vogerp.order.dao;

import java.util.List;

import org.shaolin.bmdp.persistence.BEEntityDaoObject;
import org.shaolin.vogerp.order.be.ISaleOrder;
import org.shaolin.vogerp.order.be.SaleOrderImpl;

public class CustOrderModel extends BEEntityDaoObject {

	public static final CustOrderModel INSTANCE = new CustOrderModel();

	private CustOrderModel() {
	}

	public List getOrderItems(SaleOrderImpl order) {
		SaleOrderImpl criteria = new SaleOrderImpl();
		criteria.setId(order.getId());
		List<ISaleOrder> result = OrderModel.INSTANCE.searchSaleOrder(
				criteria, null, 0, 1);

		List a = result.get(0).getItems();
		if (a != null) {
			order.getItems().addAll(a);
		}
		return order.getItems();
	}
}
