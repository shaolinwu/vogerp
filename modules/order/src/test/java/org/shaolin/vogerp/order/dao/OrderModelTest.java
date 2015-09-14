package org.shaolin.vogerp.order.dao;

import java.util.List;

import org.junit.Test;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.test.TestContext;
import org.shaolin.vogerp.order.be.ISaleOrder;
import org.shaolin.vogerp.order.be.SaleOrderImpl;

public class OrderModelTest extends TestContext {

    @Test
    public void testsearchSaleOrder() {
    	HibernateUtil.getSessionFactory();
    	HibernateUtil.getConfiguration();
    	OrderModel.INSTANCE.addResource("ORDER_SALEORDER.hbm.xml");
    	OrderModel.INSTANCE.addResource("ORDER_ORDERITEM.hbm.xml");
    	
    	SaleOrderImpl scObject = new SaleOrderImpl();
    	List<ISaleOrder> list = OrderModel.INSTANCE.searchSaleOrder(scObject, null, 0, -1);
    	for (ISaleOrder order: list) {
    		System.out.println("Order: " + order);
    	}
    }

    @Test
    public void testsearchPurchaseOrder() {
    }

    @Test
    public void testsearchOrderItem() {
    }

    @Test
    public void testsearchOrderHandlingInfo() {
    }

    @Test
    public void testsearchDeliveryInfo() {
    }

}

