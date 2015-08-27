package org.shaolin.vogerp.productmodel.dao;

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

import org.shaolin.vogerp.productmodel.be.IWarehouse;
import org.shaolin.vogerp.productmodel.be.WarehouseImpl;
import org.shaolin.vogerp.productmodel.be.IStorageItem;
import org.shaolin.vogerp.productmodel.be.StorageItemImpl;
/**
 * This code is generated automatically, any change will be replaced after rebuild.
 */
public class ProductModel extends BEEntityDaoObject {

    public static final ProductModel INSTANCE = new ProductModel();

    private ProductModel() {
    }

    public List<IWarehouse> listIWarehouses(int offset, int count) {
        return list(offset, count, IWarehouse.class, WarehouseImpl.class);
    }

    public long listIWarehouseCount() {
        return count(IWarehouse.class);
    }

    public List<IStorageItem> listIStorageItems(int offset, int count) {
        return list(offset, count, IStorageItem.class, StorageItemImpl.class);
    }

    public long listIStorageItemCount() {
        return count(IStorageItem.class);
    }

    public List<org.shaolin.vogerp.productmodel.be.IProduct> searchProductInfo(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getParentId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getId()));
            }
            if (scFlow.getName() != null && scFlow.getName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.name", scFlow.getName()));
            }
            if (scFlow.getDescription() != null && scFlow.getDescription().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.description", scFlow.getDescription()));
            }
            if (scFlow.getType() != null && scFlow.getType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.type", scFlow.getType()));
            }
            if (scFlow.getInterestedPartyType() != null && scFlow.getInterestedPartyType() != org.shaolin.vogerp.commonmodel.ce.PartyType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.interestedPartyTypeInt", scFlow.getInterestedPartyType().getIntValue()));
            }
            if (scFlow.getOnSaleDateStart() != null) {
                inFlowCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inFlow.onSaleDate", scFlow.getOnSaleDateStart()));
            }
            if (scFlow.getOnSaleDateEnd() != null) {
                inFlowCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inFlow.onSaleDate", scFlow.getOnSaleDateEnd()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IProduct> searchProductInfo(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getParentId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getId()));
            }
            if (scFlow.getName() != null && scFlow.getName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.name", scFlow.getName()));
            }
            if (scFlow.getDescription() != null && scFlow.getDescription().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.description", scFlow.getDescription()));
            }
            if (scFlow.getType() != null && scFlow.getType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.type", scFlow.getType()));
            }
            if (scFlow.getInterestedPartyType() != null && scFlow.getInterestedPartyType() != org.shaolin.vogerp.commonmodel.ce.PartyType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.interestedPartyTypeInt", scFlow.getInterestedPartyType().getIntValue()));
            }
            if (scFlow.getOnSaleDateStart() != null) {
                inFlowCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inFlow.onSaleDate", scFlow.getOnSaleDateStart()));
            }
            if (scFlow.getOnSaleDateEnd() != null) {
                inFlowCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inFlow.onSaleDate", scFlow.getOnSaleDateEnd()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
        }
    }

    public long searchProductInfoCount(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getParentId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getId()));
            }
            if (scFlow.getName() != null && scFlow.getName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.name", scFlow.getName()));
            }
            if (scFlow.getDescription() != null && scFlow.getDescription().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.description", scFlow.getDescription()));
            }
            if (scFlow.getType() != null && scFlow.getType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.type", scFlow.getType()));
            }
            if (scFlow.getInterestedPartyType() != null && scFlow.getInterestedPartyType() != org.shaolin.vogerp.commonmodel.ce.PartyType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.interestedPartyTypeInt", scFlow.getInterestedPartyType().getIntValue()));
            }
            if (scFlow.getOnSaleDateStart() != null) {
                inFlowCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inFlow.onSaleDate", scFlow.getOnSaleDateStart()));
            }
            if (scFlow.getOnSaleDateEnd() != null) {
                inFlowCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inFlow.onSaleDate", scFlow.getOnSaleDateEnd()));
            }

            return this._count(inFlowCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchProductInfoCount(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow, Session session) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getParentId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getId()));
            }
            if (scFlow.getName() != null && scFlow.getName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.name", scFlow.getName()));
            }
            if (scFlow.getDescription() != null && scFlow.getDescription().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.description", scFlow.getDescription()));
            }
            if (scFlow.getType() != null && scFlow.getType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.type", scFlow.getType()));
            }
            if (scFlow.getInterestedPartyType() != null && scFlow.getInterestedPartyType() != org.shaolin.vogerp.commonmodel.ce.PartyType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.interestedPartyTypeInt", scFlow.getInterestedPartyType().getIntValue()));
            }
            if (scFlow.getOnSaleDateStart() != null) {
                inFlowCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inFlow.onSaleDate", scFlow.getOnSaleDateStart()));
            }
            if (scFlow.getOnSaleDateEnd() != null) {
                inFlowCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inFlow.onSaleDate", scFlow.getOnSaleDateEnd()));
            }

            return this._count(inFlowCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IProduct> searchProductParent(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getParentId() > -1) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getId()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IProduct> searchProductParent(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getParentId() > -1) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getId()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
        }
    }

    public long searchProductParentCount(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductImpl.class, "inFlow");

            if (scFlow.getParentId() > -1) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getId()));
            }

            return this._count(inFlowCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchProductParentCount(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow, Session session) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductImpl.class, "inFlow");

            if (scFlow.getParentId() > -1) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getId()));
            }

            return this._count(inFlowCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IProductCode> searchProductCode(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductCodeImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getId()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IProductCode> searchProductCode(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductCodeImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getId()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
        }
    }

    public long searchProductCodeCount(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductCodeImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getId()));
            }

            return this._count(inFlowCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchProductCodeCount(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow, Session session) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductCodeImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getId()));
            }

            return this._count(inFlowCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IProductCharacteristic> searchProductCharacteristic(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductCharacteristicImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getId()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IProductCharacteristic> searchProductCharacteristic(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductCharacteristicImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getId()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
        }
    }

    public long searchProductCharacteristicCount(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductCharacteristicImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getId()));
            }

            return this._count(inFlowCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchProductCharacteristicCount(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow, Session session) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductCharacteristicImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getId()));
            }

            return this._count(inFlowCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.ISupplierProduct> searchProductSupplier(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.SupplierProductImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getId()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.ISupplierProduct> searchProductSupplier(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.SupplierProductImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getId()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
        }
    }

    public long searchProductSupplierCount(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.SupplierProductImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getId()));
            }

            return this._count(inFlowCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchProductSupplierCount(org.shaolin.vogerp.productmodel.be.ProductImpl scFlow, Session session) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.SupplierProductImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getId()));
            }

            return this._count(inFlowCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IWarehouse> searchWarehouse(org.shaolin.vogerp.productmodel.be.WarehouseImpl scFlow,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.WarehouseImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getName() != null && scFlow.getName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.name", scFlow.getName()));
            }
            if (scFlow.getDescription() != null && scFlow.getDescription().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.description", scFlow.getDescription()));
            }
            if (scFlow.getContainerType() != null && scFlow.getContainerType() != org.shaolin.vogerp.productmodel.ce.StorageContainerType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.containerTypeInt", scFlow.getContainerType().getIntValue()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IWarehouse> searchWarehouse(org.shaolin.vogerp.productmodel.be.WarehouseImpl scFlow,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.WarehouseImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getName() != null && scFlow.getName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.name", scFlow.getName()));
            }
            if (scFlow.getDescription() != null && scFlow.getDescription().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.description", scFlow.getDescription()));
            }
            if (scFlow.getContainerType() != null && scFlow.getContainerType() != org.shaolin.vogerp.productmodel.ce.StorageContainerType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.containerTypeInt", scFlow.getContainerType().getIntValue()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
        }
    }

    public long searchWarehouseCount(org.shaolin.vogerp.productmodel.be.WarehouseImpl scFlow) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.WarehouseImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getName() != null && scFlow.getName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.name", scFlow.getName()));
            }
            if (scFlow.getDescription() != null && scFlow.getDescription().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.description", scFlow.getDescription()));
            }
            if (scFlow.getContainerType() != null && scFlow.getContainerType() != org.shaolin.vogerp.productmodel.ce.StorageContainerType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.containerTypeInt", scFlow.getContainerType().getIntValue()));
            }

            return this._count(inFlowCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchWarehouseCount(org.shaolin.vogerp.productmodel.be.WarehouseImpl scFlow, Session session) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.WarehouseImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getName() != null && scFlow.getName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.name", scFlow.getName()));
            }
            if (scFlow.getDescription() != null && scFlow.getDescription().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.description", scFlow.getDescription()));
            }
            if (scFlow.getContainerType() != null && scFlow.getContainerType() != org.shaolin.vogerp.productmodel.ce.StorageContainerType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.containerTypeInt", scFlow.getContainerType().getIntValue()));
            }

            return this._count(inFlowCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IWarehouse> searchWarehouseRoot(org.shaolin.vogerp.productmodel.be.WarehouseImpl scFlow,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.WarehouseImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getParentId() == 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getParentId()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IWarehouse> searchWarehouseRoot(org.shaolin.vogerp.productmodel.be.WarehouseImpl scFlow,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.WarehouseImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getParentId() == 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getParentId()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
        }
    }

    public long searchWarehouseRootCount(org.shaolin.vogerp.productmodel.be.WarehouseImpl scFlow) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.WarehouseImpl.class, "inFlow");

            if (scFlow.getParentId() == 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getParentId()));
            }

            return this._count(inFlowCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchWarehouseRootCount(org.shaolin.vogerp.productmodel.be.WarehouseImpl scFlow, Session session) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.WarehouseImpl.class, "inFlow");

            if (scFlow.getParentId() == 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getParentId()));
            }

            return this._count(inFlowCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IStorageItem> searchStorageItems(org.shaolin.vogerp.productmodel.be.StorageItemImpl scFlow,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.StorageItemImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getProductId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getProductId()));
            }
            if (scFlow.getWarehouseId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.warehouseId", scFlow.getWarehouseId()));
            }
            if (scFlow.getItemStatus() != null && scFlow.getItemStatus() != org.shaolin.vogerp.productmodel.ce.StorageItemStatusType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.itemStatusInt", scFlow.getItemStatus().getIntValue()));
            }
            if (scFlow.getNumber() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.number", scFlow.getNumber()));
            }
            if (scFlow.getSerialNumber() != null && scFlow.getSerialNumber().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.serialNumber", scFlow.getSerialNumber()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IStorageItem> searchStorageItems(org.shaolin.vogerp.productmodel.be.StorageItemImpl scFlow,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.StorageItemImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getProductId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getProductId()));
            }
            if (scFlow.getWarehouseId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.warehouseId", scFlow.getWarehouseId()));
            }
            if (scFlow.getItemStatus() != null && scFlow.getItemStatus() != org.shaolin.vogerp.productmodel.ce.StorageItemStatusType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.itemStatusInt", scFlow.getItemStatus().getIntValue()));
            }
            if (scFlow.getNumber() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.number", scFlow.getNumber()));
            }
            if (scFlow.getSerialNumber() != null && scFlow.getSerialNumber().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.serialNumber", scFlow.getSerialNumber()));
            }

            List result = this._list(offset, count, inFlowCriteria);
            return result;
        } finally {
        }
    }

    public long searchStorageItemsCount(org.shaolin.vogerp.productmodel.be.StorageItemImpl scFlow) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.StorageItemImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getProductId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getProductId()));
            }
            if (scFlow.getWarehouseId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.warehouseId", scFlow.getWarehouseId()));
            }
            if (scFlow.getItemStatus() != null && scFlow.getItemStatus() != org.shaolin.vogerp.productmodel.ce.StorageItemStatusType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.itemStatusInt", scFlow.getItemStatus().getIntValue()));
            }
            if (scFlow.getNumber() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.number", scFlow.getNumber()));
            }
            if (scFlow.getSerialNumber() != null && scFlow.getSerialNumber().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.serialNumber", scFlow.getSerialNumber()));
            }

            return this._count(inFlowCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchStorageItemsCount(org.shaolin.vogerp.productmodel.be.StorageItemImpl scFlow, Session session) {
        try {
            Criteria inFlowCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.StorageItemImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getProductId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.productId", scFlow.getProductId()));
            }
            if (scFlow.getWarehouseId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.warehouseId", scFlow.getWarehouseId()));
            }
            if (scFlow.getItemStatus() != null && scFlow.getItemStatus() != org.shaolin.vogerp.productmodel.ce.StorageItemStatusType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.itemStatusInt", scFlow.getItemStatus().getIntValue()));
            }
            if (scFlow.getNumber() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.number", scFlow.getNumber()));
            }
            if (scFlow.getSerialNumber() != null && scFlow.getSerialNumber().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.serialNumber", scFlow.getSerialNumber()));
            }

            return this._count(inFlowCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IProductPrice> searchProductPrice(org.shaolin.vogerp.productmodel.be.ProductImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductPriceImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productId", scObject.getId()));
            }

            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IProductPrice> searchProductPrice(org.shaolin.vogerp.productmodel.be.ProductImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductPriceImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productId", scObject.getId()));
            }

            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchProductPriceCount(org.shaolin.vogerp.productmodel.be.ProductImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductPriceImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productId", scObject.getId()));
            }

            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchProductPriceCount(org.shaolin.vogerp.productmodel.be.ProductImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductPriceImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productId", scObject.getId()));
            }

            return this._count(inObjectCriteria);
        } finally {
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IProductCost> searchProductCost(org.shaolin.vogerp.productmodel.be.ProductImpl scObject,
           List<Order> orders, int offset, int count) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductCostImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productId", scObject.getId()));
            }

            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
            session.getTransaction().commit();
        }
    }

    public List<org.shaolin.vogerp.productmodel.be.IProductCost> searchProductCost(org.shaolin.vogerp.productmodel.be.ProductImpl scObject,
           Session session, List<Order> orders, int offset, int count) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductCostImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productId", scObject.getId()));
            }

            List result = this._list(offset, count, inObjectCriteria);
            return result;
        } finally {
        }
    }

    public long searchProductCostCount(org.shaolin.vogerp.productmodel.be.ProductImpl scObject) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductCostImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productId", scObject.getId()));
            }

            return this._count(inObjectCriteria);
        } finally {
            session.getTransaction().commit();
        }
    }

    public long searchProductCostCount(org.shaolin.vogerp.productmodel.be.ProductImpl scObject, Session session) {
        try {
            Criteria inObjectCriteria = this._createCriteria(session, org.shaolin.vogerp.productmodel.be.ProductCostImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.productId", scObject.getId()));
            }

            return this._count(inObjectCriteria);
        } finally {
        }
    }

}

