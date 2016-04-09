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

    public List<org.shaolin.vogerp.accounting.be.ICustomerAccount> searchAccount(org.shaolin.vogerp.accounting.be.CustomerAccountImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CustomerAccountImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getAccountId() != null && scObject.getAccountId().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.accountId", scObject.getAccountId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchAccountCount(org.shaolin.vogerp.accounting.be.CustomerAccountImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CustomerAccountImpl.class, "inObject");

            if (scObject.getAccountId() != null && scObject.getAccountId().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.accountId", scObject.getAccountId()));
            }
            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
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
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getCustomerAPayAccount() != null && scObject.getCustomerAPayAccount().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.customerAPayAccount", scObject.getCustomerAPayAccount()));
            }
            if (scObject.getCustomerBPayAccount() != null && scObject.getCustomerBPayAccount().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.customerBPayAccount", scObject.getCustomerBPayAccount()));
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
            if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
            }
            if (scObject.getCustomerAPayAccount() != null && scObject.getCustomerAPayAccount().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.customerAPayAccount", scObject.getCustomerAPayAccount()));
            }
            if (scObject.getCustomerBPayAccount() != null && scObject.getCustomerBPayAccount().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.customerBPayAccount", scObject.getCustomerBPayAccount()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.IAccountVoucher> searchAccountVoucher(org.shaolin.vogerp.accounting.be.AccountVoucherImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.AccountVoucherImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getOrgId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.orgId", scFlow.getOrgId()));
            }
            if (scFlow.getSeqNumber() != null && scFlow.getSeqNumber().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.seqNumber", scFlow.getSeqNumber()));
            }
            if (scFlow.getVoucherType() != null && scFlow.getVoucherType() != org.shaolin.vogerp.accounting.ce.VoucherType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.voucherTypeInt", scFlow.getVoucherType().getIntValue()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchAccountVoucherCount(org.shaolin.vogerp.accounting.be.AccountVoucherImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.AccountVoucherImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getOrgId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.orgId", scFlow.getOrgId()));
            }
            if (scFlow.getSeqNumber() != null && scFlow.getSeqNumber().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.seqNumber", scFlow.getSeqNumber()));
            }
            if (scFlow.getVoucherType() != null && scFlow.getVoucherType() != org.shaolin.vogerp.accounting.ce.VoucherType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.voucherTypeInt", scFlow.getVoucherType().getIntValue()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        return this._count(inFlowCriteria);
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

    public List<org.shaolin.vogerp.accounting.be.IBudget> searchBudget(org.shaolin.vogerp.accounting.be.BudgetImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.BudgetImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchBudgetCount(org.shaolin.vogerp.accounting.be.BudgetImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.BudgetImpl.class, "inObject");


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.IBudgetItem> searchBudgetItem(org.shaolin.vogerp.accounting.be.BudgetItemImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.BudgetItemImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchBudgetItemCount(org.shaolin.vogerp.accounting.be.BudgetItemImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.BudgetItemImpl.class, "inObject");


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.IInBalanceSheet> searchInBalanceSheet(org.shaolin.vogerp.accounting.be.InBalanceSheetImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.InBalanceSheetImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchInBalanceSheetCount(org.shaolin.vogerp.accounting.be.InBalanceSheetImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.InBalanceSheetImpl.class, "inObject");


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.IProfitSheet> searchProfitSheet(org.shaolin.vogerp.accounting.be.ProfitSheetImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.ProfitSheetImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchProfitSheetCount(org.shaolin.vogerp.accounting.be.ProfitSheetImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.ProfitSheetImpl.class, "inObject");


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.accounting.be.ICashFlowSheet> searchCashFlowSheet(org.shaolin.vogerp.accounting.be.CashFlowSheetImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CashFlowSheetImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchCashFlowSheetCount(org.shaolin.vogerp.accounting.be.CashFlowSheetImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.accounting.be.CashFlowSheetImpl.class, "inObject");


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

}

