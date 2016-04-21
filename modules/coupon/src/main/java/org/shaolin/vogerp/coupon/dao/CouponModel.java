package org.shaolin.vogerp.coupon.dao;

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
public class CouponModel extends BEEntityDaoObject {

    public static final CouponModel INSTANCE = new CouponModel();

    private CouponModel() {
    }

    public List<org.shaolin.vogerp.coupon.be.ICouponType> searchCouponType(org.shaolin.vogerp.coupon.be.CouponTypeImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponTypeImpl.class, "inObject");
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
            if (scObject.getIcon() != null && scObject.getIcon().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.icon", scObject.getIcon()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchCouponTypeCount(org.shaolin.vogerp.coupon.be.CouponTypeImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponTypeImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getIcon() != null && scObject.getIcon().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.icon", scObject.getIcon()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.coupon.be.IDiscountProduct> searchDiscountProduct(org.shaolin.vogerp.coupon.be.DiscountProductImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.DiscountProductImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getCouponTypeId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.couponTypeId", scObject.getCouponTypeId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchDiscountProductCount(org.shaolin.vogerp.coupon.be.DiscountProductImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.DiscountProductImpl.class, "inObject");

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getCouponTypeId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.couponTypeId", scObject.getCouponTypeId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.coupon.be.ICoupon> searchCoupon(org.shaolin.vogerp.coupon.be.CouponImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchCouponCount(org.shaolin.vogerp.coupon.be.CouponImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponImpl.class, "inObject");


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.coupon.be.ICouponOperation> searchCouponOperation(org.shaolin.vogerp.coupon.be.CouponOperationImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponOperationImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getPhoneNum() != null && scObject.getPhoneNum().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.phoneNum", scObject.getPhoneNum()));
            }
            if (scObject.getOpenId() != null && scObject.getOpenId().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.openId", scObject.getOpenId()));
            }
            if (scObject.getType() != null && scObject.getType().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.type", scObject.getType()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchCouponOperationCount(org.shaolin.vogerp.coupon.be.CouponOperationImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponOperationImpl.class, "inObject");

            if (scObject.getPhoneNum() != null && scObject.getPhoneNum().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.phoneNum", scObject.getPhoneNum()));
            }
            if (scObject.getOpenId() != null && scObject.getOpenId().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.openId", scObject.getOpenId()));
            }
            if (scObject.getType() != null && scObject.getType().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.type", scObject.getType()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.coupon.be.ICouponSystem> searchCouponSystem(org.shaolin.vogerp.coupon.be.CouponSystemImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponSystemImpl.class, "inObject");
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

    public long searchCouponSystemCount(org.shaolin.vogerp.coupon.be.CouponSystemImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponSystemImpl.class, "inObject");

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.coupon.be.ICouponUserInfo> searchCouponUserInfo(org.shaolin.vogerp.coupon.be.CouponUserInfoImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponUserInfoImpl.class, "inObject");
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

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchCouponUserInfoCount(org.shaolin.vogerp.coupon.be.CouponUserInfoImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponUserInfoImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.coupon.be.ICoupon> searchEffectedCoupon(org.shaolin.vogerp.coupon.be.CouponImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponImpl.class, "inObject");
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
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getExpiredDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.expiredDate", scObject.getExpiredDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchEffectedCouponCount(org.shaolin.vogerp.coupon.be.CouponImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.coupon.be.CouponImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getExpiredDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.expiredDate", scObject.getExpiredDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

}

