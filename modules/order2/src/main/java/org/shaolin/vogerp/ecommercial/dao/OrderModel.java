package org.shaolin.vogerp.ecommercial.dao;

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

    public List<org.shaolin.vogerp.ecommercial.be.IGoldenOrder> searchGoldenOrder(org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getPublishedCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.publishedCustomerId", scObject.getPublishedCustomerId()));
            }
            if (scObject.getTakenCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.takenCustomerId", scObject.getTakenCustomerId()));
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
            if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.ecommercial.ce.OrderStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.ecommercial.ce.GoldenOrderType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }
            if (scObject.getCity() != null && scObject.getCity().trim().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.city", scObject.getCity()));
            }
            if (scObject.getMaxLongitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.longitude", scObject.getMaxLongitude()));
            }
            if (scObject.getMinLongitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.longitude", scObject.getMinLongitude()));
            }
            if (scObject.getMaxLatitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.latitude", scObject.getMaxLatitude()));
            }
            if (scObject.getMinLatitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.latitude", scObject.getMinLatitude()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchGoldenOrderCount(org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getPublishedCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.publishedCustomerId", scObject.getPublishedCustomerId()));
            }
            if (scObject.getTakenCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.takenCustomerId", scObject.getTakenCustomerId()));
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
            if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.ecommercial.ce.OrderStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.ecommercial.ce.GoldenOrderType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }
            if (scObject.getCity() != null && scObject.getCity().trim().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.city", scObject.getCity()));
            }
            if (scObject.getMaxLongitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.longitude", scObject.getMaxLongitude()));
            }
            if (scObject.getMinLongitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.longitude", scObject.getMinLongitude()));
            }
            if (scObject.getMaxLatitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.latitude", scObject.getMaxLatitude()));
            }
            if (scObject.getMinLatitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.latitude", scObject.getMinLatitude()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.ecommercial.be.IRentOrLoanOrder> searchRentOrLoanOrder(org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getPublishedCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.publishedCustomerId", scObject.getPublishedCustomerId()));
            }
            if (scObject.getTakenCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.takenCustomerId", scObject.getTakenCustomerId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.ecommercial.ce.RentOrLoanOrderType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
            }
            if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.ecommercial.ce.OrderStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
            }
            if (scObject.getCity() != null && scObject.getCity().trim().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.city", scObject.getCity()));
            }
            if (scObject.getMaxLongitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.longitude", scObject.getMaxLongitude()));
            }
            if (scObject.getMinLongitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.longitude", scObject.getMinLongitude()));
            }
            if (scObject.getMaxLatitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.latitude", scObject.getMaxLatitude()));
            }
            if (scObject.getMinLatitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.latitude", scObject.getMinLatitude()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchRentOrLoanOrderCount(org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getPublishedCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.publishedCustomerId", scObject.getPublishedCustomerId()));
            }
            if (scObject.getTakenCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.takenCustomerId", scObject.getTakenCustomerId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.ecommercial.ce.RentOrLoanOrderType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
            }
            if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.ecommercial.ce.OrderStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
            }
            if (scObject.getCity() != null && scObject.getCity().trim().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.city", scObject.getCity()));
            }
            if (scObject.getMaxLongitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.longitude", scObject.getMaxLongitude()));
            }
            if (scObject.getMinLongitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.longitude", scObject.getMinLongitude()));
            }
            if (scObject.getMaxLatitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.latitude", scObject.getMaxLatitude()));
            }
            if (scObject.getMinLatitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.latitude", scObject.getMinLatitude()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.ecommercial.be.IMachiningOrder> searchMachiningOrder(org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getPublishedCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.publishedCustomerId", scObject.getPublishedCustomerId()));
            }
            if (scObject.getTakenCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.takenCustomerId", scObject.getTakenCustomerId()));
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
            if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.ecommercial.ce.OrderStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
            }
            if (scObject.getCity() != null && scObject.getCity().trim().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.city", scObject.getCity()));
            }
            if (scObject.getMaxLongitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.longitude", scObject.getMaxLongitude()));
            }
            if (scObject.getMinLongitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.longitude", scObject.getMinLongitude()));
            }
            if (scObject.getMaxLatitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.latitude", scObject.getMaxLatitude()));
            }
            if (scObject.getMinLatitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.latitude", scObject.getMinLatitude()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchMachiningOrderCount(org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getPublishedCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.publishedCustomerId", scObject.getPublishedCustomerId()));
            }
            if (scObject.getTakenCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.takenCustomerId", scObject.getTakenCustomerId()));
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
            if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.ecommercial.ce.OrderStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
            }
            if (scObject.getCity() != null && scObject.getCity().trim().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.city", scObject.getCity()));
            }
            if (scObject.getMaxLongitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.longitude", scObject.getMaxLongitude()));
            }
            if (scObject.getMinLongitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.longitude", scObject.getMinLongitude()));
            }
            if (scObject.getMaxLatitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.latitude", scObject.getMaxLatitude()));
            }
            if (scObject.getMinLatitude() > 0) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.latitude", scObject.getMinLatitude()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.ecommercial.be.IGoldenOrderHistory> searchGoldenOrderHistory(org.shaolin.vogerp.ecommercial.be.GoldenOrderHistoryImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.GoldenOrderHistoryImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getPublishedCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.publishedCustomerId", scObject.getPublishedCustomerId()));
            }
            if (scObject.getTakenCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.takenCustomerId", scObject.getTakenCustomerId()));
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
            if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.ecommercial.ce.OrderStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchGoldenOrderHistoryCount(org.shaolin.vogerp.ecommercial.be.GoldenOrderHistoryImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.GoldenOrderHistoryImpl.class, "inObject");

            if (scObject.getPublishedCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.publishedCustomerId", scObject.getPublishedCustomerId()));
            }
            if (scObject.getTakenCustomerId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.takenCustomerId", scObject.getTakenCustomerId()));
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
            if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.ecommercial.ce.OrderStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.ecommercial.be.IGOrderSearchCriteria> gorderSearchCriteria(org.shaolin.vogerp.ecommercial.be.GOrderSearchCriteriaImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.GOrderSearchCriteriaImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getOrderId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orderId", scObject.getOrderId()));
            }
            if (scObject.getCity() != null && scObject.getCity().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.city", scObject.getCity()));
            }
            if (scObject.getProductType() != null && scObject.getProductType().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productType", scObject.getProductType()));
            }
            if (scObject.getProductSubType() != null && scObject.getProductSubType().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productSubType", scObject.getProductSubType()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long gorderSearchCriteriaCount(org.shaolin.vogerp.ecommercial.be.GOrderSearchCriteriaImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.GOrderSearchCriteriaImpl.class, "inObject");

            if (scObject.getOrderId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orderId", scObject.getOrderId()));
            }
            if (scObject.getCity() != null && scObject.getCity().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.city", scObject.getCity()));
            }
            if (scObject.getProductType() != null && scObject.getProductType().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productType", scObject.getProductType()));
            }
            if (scObject.getProductSubType() != null && scObject.getProductSubType().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productSubType", scObject.getProductSubType()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.ecommercial.be.IROrderSearchCriteria> rorderSearchCriteria(org.shaolin.vogerp.ecommercial.be.ROrderSearchCriteriaImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.ROrderSearchCriteriaImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getOrderId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orderId", scObject.getOrderId()));
            }
            if (scObject.getCity() != null && scObject.getCity().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.city", scObject.getCity()));
            }
            if (scObject.getProductType() != null && scObject.getProductType().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productType", scObject.getProductType()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long rorderSearchCriteriaCount(org.shaolin.vogerp.ecommercial.be.ROrderSearchCriteriaImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.ROrderSearchCriteriaImpl.class, "inObject");

            if (scObject.getOrderId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orderId", scObject.getOrderId()));
            }
            if (scObject.getCity() != null && scObject.getCity().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.city", scObject.getCity()));
            }
            if (scObject.getProductType() != null && scObject.getProductType().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productType", scObject.getProductType()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.ecommercial.be.IInterestEOrder> searchInterestEOrder(org.shaolin.vogerp.ecommercial.be.InterestEOrderImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.InterestEOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getOrderId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orderId", scObject.getOrderId()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.ecommercial.ce.EOrderType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchInterestEOrderCount(org.shaolin.vogerp.ecommercial.be.InterestEOrderImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.InterestEOrderImpl.class, "inObject");

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getOrderId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orderId", scObject.getOrderId()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.ecommercial.ce.EOrderType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.ecommercial.be.IMachiningComponent> searchMachiningComponent(org.shaolin.vogerp.ecommercial.be.MachiningComponentImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.MachiningComponentImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getCode() != null && scObject.getCode().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.code", scObject.getCode()));
            }
            if (scObject.getName() != null && scObject.getName().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.name", scObject.getName()));
            }
            if (scObject.getCategory() != null && scObject.getCategory() != org.shaolin.vogerp.ecommercial.ce.MachiningCategoryType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.categoryInt", scObject.getCategory().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchMachiningComponentCount(org.shaolin.vogerp.ecommercial.be.MachiningComponentImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.MachiningComponentImpl.class, "inObject");

            if (scObject.getCode() != null && scObject.getCode().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.code", scObject.getCode()));
            }
            if (scObject.getName() != null && scObject.getName().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.name", scObject.getName()));
            }
            if (scObject.getCategory() != null && scObject.getCategory() != org.shaolin.vogerp.ecommercial.ce.MachiningCategoryType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.categoryInt", scObject.getCategory().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.ecommercial.be.IDeliveryInfo> searchDeliveryInfo(org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchDeliveryInfoCount(org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl.class, "inObject");


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

}

