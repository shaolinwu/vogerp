package org.shaolin.vogerp.order.dao;

import java.util.List;

import org.hibernate.Session;
import org.shaolin.bmdp.persistence.BEEntityDaoObject;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.vogerp.order.be.SaleOrderImpl;

public class CustOrderModel extends BEEntityDaoObject {

	public static final CustOrderModel INSTANCE = new CustOrderModel();

	private CustOrderModel() {
	}

	public List getOrderItems(SaleOrderImpl order) {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		try {
			SaleOrderImpl criteria = new SaleOrderImpl();
			criteria.setId(order.getId());
			List<SaleOrderImpl> result = OrderModel.INSTANCE.searchSaleOrder(
					criteria, session, null, 0, 1);

			List a = result.get(0).getItems();
			if (a != null) {
				order.getItems().addAll(a);
			}
			return order.getItems();
		} finally {
			session.getTransaction().commit();
		}
	}
}
