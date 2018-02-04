package org.shaolin.vogerp.accounting.dao;

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
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * This code is generated automatically, any change will be replaced after rebuild.
 */
@Repository
@Transactional
public class AccountingModel extends BEEntityDaoObject {

    public static final AccountingModel INSTANCE = new AccountingModel();

    public AccountingModel() {
    }

    public List<org.shaolin.vogerp.accounting.be.ICustomerAccount> searchAccount(org.shaolin.vogerp.accounting.be.CustomerAccountImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CustomerAccountImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchAccountCount(org.shaolin.vogerp.accounting.be.CustomerAccountImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CustomerAccountImpl.class, "inObject");

            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.IPayOrder> searchPaymentOrder(org.shaolin.vogerp.accounting.be.PayOrderImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.PayOrderImpl.class, "inObject");
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
            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getEndUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.endUserId", scObject.getEndUserId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getOutTradeNo() != null && scObject.getOutTradeNo().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.outTradeNo", scObject.getOutTradeNo()));
            }
            if (scObject.getOrderSerialNumber() != null && scObject.getOrderSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orderSerialNumber", scObject.getOrderSerialNumber()));
            }
            if (scObject.getCustomerAPayAccount() != null && scObject.getCustomerAPayAccount().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.customerAPayAccount", scObject.getCustomerAPayAccount()));
            }
            if (scObject.getCustomerBPayAccount() != null && scObject.getCustomerBPayAccount().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.customerBPayAccount", scObject.getCustomerBPayAccount()));
            }
            if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.accounting.ce.PayOrderStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchPaymentOrderCount(org.shaolin.vogerp.accounting.be.PayOrderImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.PayOrderImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getEndUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.endUserId", scObject.getEndUserId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getOutTradeNo() != null && scObject.getOutTradeNo().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.outTradeNo", scObject.getOutTradeNo()));
            }
            if (scObject.getOrderSerialNumber() != null && scObject.getOrderSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orderSerialNumber", scObject.getOrderSerialNumber()));
            }
            if (scObject.getCustomerAPayAccount() != null && scObject.getCustomerAPayAccount().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.customerAPayAccount", scObject.getCustomerAPayAccount()));
            }
            if (scObject.getCustomerBPayAccount() != null && scObject.getCustomerBPayAccount().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.customerBPayAccount", scObject.getCustomerBPayAccount()));
            }
            if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.accounting.ce.PayOrderStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.IPayOrder> searchWithdrawnPaymentOrder(org.shaolin.vogerp.accounting.be.PayOrderImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.PayOrderImpl.class, "inObject");
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
            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getEndUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.endUserId", scObject.getEndUserId()));
            }
            if (true) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.withdrawn", scObject.getWithdrawn()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getOutTradeNo() != null && scObject.getOutTradeNo().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.outTradeNo", scObject.getOutTradeNo()));
            }
            if (scObject.getOrderSerialNumber() != null && scObject.getOrderSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orderSerialNumber", scObject.getOrderSerialNumber()));
            }
            if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.accounting.ce.PayOrderStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchWithdrawnPaymentOrderCount(org.shaolin.vogerp.accounting.be.PayOrderImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.PayOrderImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getEndUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.endUserId", scObject.getEndUserId()));
            }
            if (true) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.withdrawn", scObject.getWithdrawn()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getOutTradeNo() != null && scObject.getOutTradeNo().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.outTradeNo", scObject.getOutTradeNo()));
            }
            if (scObject.getOrderSerialNumber() != null && scObject.getOrderSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orderSerialNumber", scObject.getOrderSerialNumber()));
            }
            if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.accounting.ce.PayOrderStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.IPayOrderRequest> searchPayOrderRequest(org.shaolin.vogerp.accounting.be.PayOrderRequestImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.PayOrderRequestImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getPayOrderId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.payOrderId", scObject.getPayOrderId()));
            }
            if (scObject.getState() != null && scObject.getState() != org.shaolin.vogerp.accounting.ce.RequestStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.stateInt", scObject.getState().getIntValue()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.accounting.ce.PayOrderRequestType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchPayOrderRequestCount(org.shaolin.vogerp.accounting.be.PayOrderRequestImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.PayOrderRequestImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getPayOrderId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.payOrderId", scObject.getPayOrderId()));
            }
            if (scObject.getState() != null && scObject.getState() != org.shaolin.vogerp.accounting.ce.RequestStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.stateInt", scObject.getState().getIntValue()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.accounting.ce.PayOrderRequestType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.IDoubleEntry> searchDoubleEntry(org.shaolin.vogerp.accounting.be.DoubleEntryImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.DoubleEntryImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchDoubleEntryCount(org.shaolin.vogerp.accounting.be.DoubleEntryImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.DoubleEntryImpl.class, "inObject");


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.IServiceChargeTemplate> searchServiceCharge(org.shaolin.vogerp.accounting.be.ServiceChargeTemplateImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.ServiceChargeTemplateImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (true) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.version", scObject.getVersion()));
            }
            if (scObject.getPayBusinessType() != null && scObject.getPayBusinessType() != org.shaolin.vogerp.accounting.ce.PayBusinessType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.payBusinessTypeInt", scObject.getPayBusinessType().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchServiceChargeCount(org.shaolin.vogerp.accounting.be.ServiceChargeTemplateImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.ServiceChargeTemplateImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (true) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.version", scObject.getVersion()));
            }
            if (scObject.getPayBusinessType() != null && scObject.getPayBusinessType() != org.shaolin.vogerp.accounting.ce.PayBusinessType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.payBusinessTypeInt", scObject.getPayBusinessType().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.ICustomerAccount> searchUserAccount(org.shaolin.vogerp.accounting.be.CustomerAccountImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CustomerAccountImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchUserAccountCount(org.shaolin.vogerp.accounting.be.CustomerAccountImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CustomerAccountImpl.class, "inObject");

            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.ICustomerCoin> searchUserCoin(org.shaolin.vogerp.accounting.be.CustomerCoinImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CustomerCoinImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getCoin() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getCoin()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchUserCoinCount(org.shaolin.vogerp.accounting.be.CustomerCoinImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CustomerCoinImpl.class, "inObject");

            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getCoin() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getCoin()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.ICustomerScore> searchUserScore(org.shaolin.vogerp.accounting.be.CustomerScoreImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CustomerScoreImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getScore() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getScore()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchUserScoreCount(org.shaolin.vogerp.accounting.be.CustomerScoreImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CustomerScoreImpl.class, "inObject");

            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getScore() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getScore()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.ICoinPolicyTemplate> searchCoinPolicy(org.shaolin.vogerp.accounting.be.CoinPolicyTemplateImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CoinPolicyTemplateImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getReason() != null && scObject.getReason() != org.shaolin.vogerp.accounting.ce.CoinOrScoreReasonType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.reasonInt", scObject.getReason().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchCoinPolicyCount(org.shaolin.vogerp.accounting.be.CoinPolicyTemplateImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CoinPolicyTemplateImpl.class, "inObject");

            if (scObject.getReason() != null && scObject.getReason() != org.shaolin.vogerp.accounting.ce.CoinOrScoreReasonType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.reasonInt", scObject.getReason().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

}

