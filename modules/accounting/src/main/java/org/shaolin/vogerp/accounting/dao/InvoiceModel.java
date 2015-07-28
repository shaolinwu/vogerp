package org.shaolin.vogerp.accounting.dao;

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

import org.shaolin.vogerp.accounting.be.IInvoice;
import org.shaolin.vogerp.accounting.be.InvoiceImpl;
/**
 * This code is generated automatically, any change will be replaced after rebuild.
 */
public class InvoiceModel extends BEEntityDaoObject {

    public static final InvoiceModel INSTANCE = new InvoiceModel();

    private InvoiceModel() {
    }

    public List<IInvoice> listIInvoices(int offset, int count) {
        return list(offset, count, IInvoice.class, InvoiceImpl.class);
    }

    public long listIInvoiceCount() {
        return count(IInvoice.class);
    }

    public List<org.shaolin.vogerp.accounting.be.InvoiceImpl> searchInvoice(org.shaolin.vogerp.accounting.be.InvoiceImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceImpl.class, "inObject");
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

    public List<org.shaolin.vogerp.accounting.be.InvoiceImpl> searchInvoice(org.shaolin.vogerp.accounting.be.InvoiceImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchInvoiceCount(org.shaolin.vogerp.accounting.be.InvoiceImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchInvoiceCount(org.shaolin.vogerp.accounting.be.InvoiceImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.accounting.be.InvoiceItemImpl> searchInvoiceItem(org.shaolin.vogerp.accounting.be.InvoiceItemImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceItemImpl.class, "inObject");
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

    public List<org.shaolin.vogerp.accounting.be.InvoiceItemImpl> searchInvoiceItem(org.shaolin.vogerp.accounting.be.InvoiceItemImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceItemImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchInvoiceItemCount(org.shaolin.vogerp.accounting.be.InvoiceItemImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceItemImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchInvoiceItemCount(org.shaolin.vogerp.accounting.be.InvoiceItemImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceItemImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.accounting.be.InvoiceItemWithShipmentImpl> searchInvoiceItemWithShipment(org.shaolin.vogerp.accounting.be.InvoiceItemWithShipmentImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceItemWithShipmentImpl.class, "inObject");
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

    public List<org.shaolin.vogerp.accounting.be.InvoiceItemWithShipmentImpl> searchInvoiceItemWithShipment(org.shaolin.vogerp.accounting.be.InvoiceItemWithShipmentImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceItemWithShipmentImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchInvoiceItemWithShipmentCount(org.shaolin.vogerp.accounting.be.InvoiceItemWithShipmentImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceItemWithShipmentImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchInvoiceItemWithShipmentCount(org.shaolin.vogerp.accounting.be.InvoiceItemWithShipmentImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceItemWithShipmentImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.accounting.be.InvoiceItemWithOrderImpl> searchInvoiceItemWithOrder(org.shaolin.vogerp.accounting.be.InvoiceItemWithOrderImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceItemWithOrderImpl.class, "inObject");
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

    public List<org.shaolin.vogerp.accounting.be.InvoiceItemWithOrderImpl> searchInvoiceItemWithOrder(org.shaolin.vogerp.accounting.be.InvoiceItemWithOrderImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceItemWithOrderImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchInvoiceItemWithOrderCount(org.shaolin.vogerp.accounting.be.InvoiceItemWithOrderImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceItemWithOrderImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchInvoiceItemWithOrderCount(org.shaolin.vogerp.accounting.be.InvoiceItemWithOrderImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoiceItemWithOrderImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.accounting.be.InvoicePaymentImpl> searchInvoicePayment(org.shaolin.vogerp.accounting.be.InvoicePaymentImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoicePaymentImpl.class, "inObject");
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

    public List<org.shaolin.vogerp.accounting.be.InvoicePaymentImpl> searchInvoicePayment(org.shaolin.vogerp.accounting.be.InvoicePaymentImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoicePaymentImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchInvoicePaymentCount(org.shaolin.vogerp.accounting.be.InvoicePaymentImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoicePaymentImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchInvoicePaymentCount(org.shaolin.vogerp.accounting.be.InvoicePaymentImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InvoicePaymentImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

}

