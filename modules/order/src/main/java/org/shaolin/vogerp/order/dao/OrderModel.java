package org.shaolin.vogerp.order.dao;

import java.util.List;
import java.util.ArrayList;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;

import org.hibernate.criterion.Order;

import org.hibernate.criterion.Projections;

import org.shaolin.bmdp.persistence.BEEntityDaoObject;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.persistence.query.operator.Operator;

/**
 * This code is generated automatically, any change will be replaced after rebuild.
 */
public class OrderModel extends BEEntityDaoObject {

    public static final OrderModel INSTANCE = new OrderModel();

    private OrderModel() {
    }

    public List<org.shaolin.vogerp.order.be.ISaleOrder> searchSaleOrder(org.shaolin.vogerp.order.be.SaleOrderImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.order.be.SaleOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchSaleOrderCount(org.shaolin.vogerp.order.be.SaleOrderImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.order.be.SaleOrderImpl.class, "inObject");

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.order.be.IPurchaseOrder> searchPurchaseOrder(org.shaolin.vogerp.order.be.PurchaseOrderImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.order.be.PurchaseOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchPurchaseOrderCount(org.shaolin.vogerp.order.be.PurchaseOrderImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.order.be.PurchaseOrderImpl.class, "inObject");

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.order.be.IProductOrder> searchProductOrder(org.shaolin.vogerp.order.be.ProductOrderImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.order.be.ProductOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchProductOrderCount(org.shaolin.vogerp.order.be.ProductOrderImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.order.be.ProductOrderImpl.class, "inObject");

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.order.be.IInStoreOrder> searchInStoreOrder(org.shaolin.vogerp.order.be.InStoreOrderImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.order.be.InStoreOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchInStoreOrderCount(org.shaolin.vogerp.order.be.InStoreOrderImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.order.be.InStoreOrderImpl.class, "inObject");

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.order.be.IOutStoreOrder> searchOutStoreOrder(org.shaolin.vogerp.order.be.OutStoreOrderImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.order.be.OutStoreOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchOutStoreOrderCount(org.shaolin.vogerp.order.be.OutStoreOrderImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.order.be.OutStoreOrderImpl.class, "inObject");

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.order.be.IOrderItem> searchOrderItem(org.shaolin.vogerp.order.be.OrderItemImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.order.be.OrderItemImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchOrderItemCount(org.shaolin.vogerp.order.be.OrderItemImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.order.be.OrderItemImpl.class, "inObject");


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

}

