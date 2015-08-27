package org.shaolin.vogerp.order.dao;

import java.util.List;
import java.util.ArrayList;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;

import org.hibernate.criterion.Order;

import org.shaolin.bmdp.persistence.BEEntityDaoObject;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.persistence.query.operator.Operator;

import org.shaolin.vogerp.order.be.IOrderItem;
import org.shaolin.vogerp.order.be.OrderItemImpl;
import org.shaolin.vogerp.order.be.IOrderHandlingInfo;
import org.shaolin.vogerp.order.be.OrderHandlingInfoImpl;
import org.shaolin.vogerp.order.be.IDeliveryInfo;
import org.shaolin.vogerp.order.be.DeliveryInfoImpl;
/**
 * This code is generated automatically, any change will be replaced after rebuild.
 */
public class OrderModel extends BEEntityDaoObject {

    public static final OrderModel INSTANCE = new OrderModel();

    private OrderModel() {
    }

    public List<IOrderItem> listIOrderItems(int offset, int count) {
        return list(offset, count, IOrderItem.class, OrderItemImpl.class);
    }

    public long listIOrderItemCount() {
        return count(IOrderItem.class);
    }

    public List<IOrderHandlingInfo> listIOrderHandlingInfos(int offset, int count) {
        return list(offset, count, IOrderHandlingInfo.class, OrderHandlingInfoImpl.class);
    }

    public long listIOrderHandlingInfoCount() {
        return count(IOrderHandlingInfo.class);
    }

    public List<IDeliveryInfo> listIDeliveryInfos(int offset, int count) {
        return list(offset, count, IDeliveryInfo.class, DeliveryInfoImpl.class);
    }

    public long listIDeliveryInfoCount() {
        return count(IDeliveryInfo.class);
    }

    public List<org.shaolin.vogerp.order.be.ISaleOrder> searchSaleOrder(org.shaolin.vogerp.order.be.SaleOrderImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.SaleOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.order.be.ISaleOrder> searchSaleOrder(org.shaolin.vogerp.order.be.SaleOrderImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.SaleOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchSaleOrderCount(org.shaolin.vogerp.order.be.SaleOrderImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.SaleOrderImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchSaleOrderCount(org.shaolin.vogerp.order.be.SaleOrderImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.SaleOrderImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.order.be.IPurchaseOrder> searchPurchaseOrder(org.shaolin.vogerp.order.be.PurchaseOrderImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.PurchaseOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.order.be.IPurchaseOrder> searchPurchaseOrder(org.shaolin.vogerp.order.be.PurchaseOrderImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.PurchaseOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchPurchaseOrderCount(org.shaolin.vogerp.order.be.PurchaseOrderImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.PurchaseOrderImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchPurchaseOrderCount(org.shaolin.vogerp.order.be.PurchaseOrderImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.PurchaseOrderImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.order.be.IProductOrder> searchProductOrder(org.shaolin.vogerp.order.be.ProductOrderImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.ProductOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.order.be.IProductOrder> searchProductOrder(org.shaolin.vogerp.order.be.ProductOrderImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.ProductOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchProductOrderCount(org.shaolin.vogerp.order.be.ProductOrderImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.ProductOrderImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchProductOrderCount(org.shaolin.vogerp.order.be.ProductOrderImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.ProductOrderImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.order.be.IOrderItem> searchOrderItem(org.shaolin.vogerp.order.be.OrderItemImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.OrderItemImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.order.be.IOrderItem> searchOrderItem(org.shaolin.vogerp.order.be.OrderItemImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.OrderItemImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchOrderItemCount(org.shaolin.vogerp.order.be.OrderItemImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.OrderItemImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchOrderItemCount(org.shaolin.vogerp.order.be.OrderItemImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.OrderItemImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.order.be.IOrderHandlingInfo> searchOrderHandlingInfo(org.shaolin.vogerp.order.be.OrderHandlingInfoImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.OrderHandlingInfoImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.order.be.IOrderHandlingInfo> searchOrderHandlingInfo(org.shaolin.vogerp.order.be.OrderHandlingInfoImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.OrderHandlingInfoImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchOrderHandlingInfoCount(org.shaolin.vogerp.order.be.OrderHandlingInfoImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.OrderHandlingInfoImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchOrderHandlingInfoCount(org.shaolin.vogerp.order.be.OrderHandlingInfoImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.OrderHandlingInfoImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.order.be.IDeliveryInfo> searchDeliveryInfo(org.shaolin.vogerp.order.be.DeliveryInfoImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.DeliveryInfoImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.order.be.IDeliveryInfo> searchDeliveryInfo(org.shaolin.vogerp.order.be.DeliveryInfoImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.DeliveryInfoImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchDeliveryInfoCount(org.shaolin.vogerp.order.be.DeliveryInfoImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.DeliveryInfoImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchDeliveryInfoCount(org.shaolin.vogerp.order.be.DeliveryInfoImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.order.be.DeliveryInfoImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

}

