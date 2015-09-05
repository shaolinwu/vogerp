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

import org.shaolin.vogerp.accounting.be.IInBalanceSheet;
import org.shaolin.vogerp.accounting.be.InBalanceSheetImpl;
import org.shaolin.vogerp.accounting.be.IProfitSheet;
import org.shaolin.vogerp.accounting.be.ProfitSheetImpl;
import org.shaolin.vogerp.accounting.be.ICashFlowSheet;
import org.shaolin.vogerp.accounting.be.CashFlowSheetImpl;
/**
 * This code is generated automatically, any change will be replaced after rebuild.
 */
public class AccountingModel extends BEEntityDaoObject {

    public static final AccountingModel INSTANCE = new AccountingModel();

    private AccountingModel() {
    }

    public List<IInBalanceSheet> listIInBalanceSheets(int offset, int count) {
        return list(offset, count, IInBalanceSheet.class, InBalanceSheetImpl.class);
    }

    public long listIInBalanceSheetCount() {
        return count(IInBalanceSheet.class);
    }

    public List<IProfitSheet> listIProfitSheets(int offset, int count) {
        return list(offset, count, IProfitSheet.class, ProfitSheetImpl.class);
    }

    public long listIProfitSheetCount() {
        return count(IProfitSheet.class);
    }

    public List<ICashFlowSheet> listICashFlowSheets(int offset, int count) {
        return list(offset, count, ICashFlowSheet.class, CashFlowSheetImpl.class);
    }

    public long listICashFlowSheetCount() {
        return count(ICashFlowSheet.class);
    }

    public List<org.shaolin.vogerp.accounting.be.IAccountVoucher> searchAccountVoucher(org.shaolin.vogerp.accounting.be.AccountVoucherImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.AccountVoucherImpl.class, "inObject");
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

    public List<org.shaolin.vogerp.accounting.be.IAccountVoucher> searchAccountVoucher(org.shaolin.vogerp.accounting.be.AccountVoucherImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.AccountVoucherImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchAccountVoucherCount(org.shaolin.vogerp.accounting.be.AccountVoucherImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.AccountVoucherImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchAccountVoucherCount(org.shaolin.vogerp.accounting.be.AccountVoucherImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.AccountVoucherImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.accounting.be.IDoubleEntry> searchDoubleEntry(org.shaolin.vogerp.accounting.be.DoubleEntryImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.DoubleEntryImpl.class, "inObject");
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

    public List<org.shaolin.vogerp.accounting.be.IDoubleEntry> searchDoubleEntry(org.shaolin.vogerp.accounting.be.DoubleEntryImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.DoubleEntryImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchDoubleEntryCount(org.shaolin.vogerp.accounting.be.DoubleEntryImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.DoubleEntryImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchDoubleEntryCount(org.shaolin.vogerp.accounting.be.DoubleEntryImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.DoubleEntryImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.accounting.be.IBudget> searchBudget(org.shaolin.vogerp.accounting.be.BudgetImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.BudgetImpl.class, "inObject");
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

    public List<org.shaolin.vogerp.accounting.be.IBudget> searchBudget(org.shaolin.vogerp.accounting.be.BudgetImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.BudgetImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchBudgetCount(org.shaolin.vogerp.accounting.be.BudgetImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.BudgetImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchBudgetCount(org.shaolin.vogerp.accounting.be.BudgetImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.BudgetImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.accounting.be.IBudgetItem> searchBudgetItem(org.shaolin.vogerp.accounting.be.BudgetItemImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.BudgetItemImpl.class, "inObject");
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

    public List<org.shaolin.vogerp.accounting.be.IBudgetItem> searchBudgetItem(org.shaolin.vogerp.accounting.be.BudgetItemImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.BudgetItemImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchBudgetItemCount(org.shaolin.vogerp.accounting.be.BudgetItemImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.BudgetItemImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchBudgetItemCount(org.shaolin.vogerp.accounting.be.BudgetItemImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.BudgetItemImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.accounting.be.IInBalanceSheet> searchInBalanceSheet(org.shaolin.vogerp.accounting.be.InBalanceSheetImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InBalanceSheetImpl.class, "inObject");
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

    public List<org.shaolin.vogerp.accounting.be.IInBalanceSheet> searchInBalanceSheet(org.shaolin.vogerp.accounting.be.InBalanceSheetImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InBalanceSheetImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchInBalanceSheetCount(org.shaolin.vogerp.accounting.be.InBalanceSheetImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InBalanceSheetImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchInBalanceSheetCount(org.shaolin.vogerp.accounting.be.InBalanceSheetImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.InBalanceSheetImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.accounting.be.IProfitSheet> searchProfitSheet(org.shaolin.vogerp.accounting.be.ProfitSheetImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.ProfitSheetImpl.class, "inObject");
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

    public List<org.shaolin.vogerp.accounting.be.IProfitSheet> searchProfitSheet(org.shaolin.vogerp.accounting.be.ProfitSheetImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.ProfitSheetImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchProfitSheetCount(org.shaolin.vogerp.accounting.be.ProfitSheetImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.ProfitSheetImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchProfitSheetCount(org.shaolin.vogerp.accounting.be.ProfitSheetImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.ProfitSheetImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.accounting.be.ICashFlowSheet> searchCashFlowSheet(org.shaolin.vogerp.accounting.be.CashFlowSheetImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.CashFlowSheetImpl.class, "inObject");
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

    public List<org.shaolin.vogerp.accounting.be.ICashFlowSheet> searchCashFlowSheet(org.shaolin.vogerp.accounting.be.CashFlowSheetImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.CashFlowSheetImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchCashFlowSheetCount(org.shaolin.vogerp.accounting.be.CashFlowSheetImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.CashFlowSheetImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchCashFlowSheetCount(org.shaolin.vogerp.accounting.be.CashFlowSheetImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.accounting.be.CashFlowSheetImpl.class, "inObject");


            return this._count(inObjectCriteria);
        } finally {
        }
    }

}

