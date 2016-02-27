package org.shaolin.vogerp.coupon.dao;

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

/**
 * This code is generated automatically, any change will be replaced after rebuild.
 */
public class CouponModel extends BEEntityDaoObject {

    public static final CouponModel INSTANCE = new CouponModel();

    private CouponModel() {
    }

    public List<org.shaolin.vogerp.coupon.be.ICoupon> searchCoupon(org.shaolin.vogerp.coupon.be.CouponImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchCouponCount(org.shaolin.vogerp.coupon.be.CouponImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponImpl.class, "inObject");

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.coupon.be.ICouponConfirmation> searchCouponConfirmation(org.shaolin.vogerp.coupon.be.CouponConfirmationImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponConfirmationImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getCouponId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.couponId", scObject.getCouponId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchCouponConfirmationCount(org.shaolin.vogerp.coupon.be.CouponConfirmationImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponConfirmationImpl.class, "inObject");

            if (scObject.getCouponId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.couponId", scObject.getCouponId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.coupon.be.ICouponProbability> searchCouponProbability(org.shaolin.vogerp.coupon.be.CouponProbabilityImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponProbabilityImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchCouponProbabilityCount(org.shaolin.vogerp.coupon.be.CouponProbabilityImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponProbabilityImpl.class, "inObject");


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

}

