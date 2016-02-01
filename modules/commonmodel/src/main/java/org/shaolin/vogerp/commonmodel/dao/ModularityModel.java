package org.shaolin.vogerp.commonmodel.dao;

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
public class ModularityModel extends BEEntityDaoObject {

    public static final ModularityModel INSTANCE = new ModularityModel();

    private ModularityModel() {
    }

    public List<org.shaolin.vogerp.commonmodel.be.IModuleGroup> searchModuleGroup(org.shaolin.vogerp.commonmodel.be.ModuleGroupImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.ModuleGroupImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getName() != null && scFlow.getName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.name", scFlow.getName()));
            }
            if (scFlow.getParentId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getParentId()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchModuleGroupCount(org.shaolin.vogerp.commonmodel.be.ModuleGroupImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.ModuleGroupImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getName() != null && scFlow.getName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.name", scFlow.getName()));
            }
            if (scFlow.getParentId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getParentId()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.ICEEntityInfo> searchCEInfo(org.shaolin.vogerp.commonmodel.be.CEEntityInfoImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.CEEntityInfoImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scObject.getCeName() != null && scObject.getCeName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.ceName", scObject.getCeName()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchCEInfoCount(org.shaolin.vogerp.commonmodel.be.CEEntityInfoImpl scObject) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.CEEntityInfoImpl.class, "inFlow");

            if (scObject.getCeName() != null && scObject.getCeName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.ceName", scObject.getCeName()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scObject.isEnabled()));

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.ICEExtension> searchCEExtension(org.shaolin.vogerp.commonmodel.be.CEExtensionImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.CEExtensionImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getCeName() != null && scFlow.getCeName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.ceName", scFlow.getCeName()));
            }
            if (scFlow.getIntValue() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.intValue", scFlow.getIntValue()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchCEExtensionCount(org.shaolin.vogerp.commonmodel.be.CEExtensionImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.CEExtensionImpl.class, "inFlow");

            if (scFlow.getCeName() != null && scFlow.getCeName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.ceName", scFlow.getCeName()));
            }
            if (scFlow.getIntValue() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.intValue", scFlow.getIntValue()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.ICEHierarchy> searchCEHierarchy(org.shaolin.vogerp.commonmodel.be.CEHierarchyImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.CEHierarchyImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getCeName() != null && scFlow.getCeName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.ceName", scFlow.getCeName()));
            }
            if (scFlow.getParentCeName() != null && scFlow.getParentCeName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentCeName", scFlow.getParentCeName()));
            }
            if (scFlow.getParentCeItem() >= 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentCeItem", scFlow.getParentCeItem()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchCEHierarchyCount(org.shaolin.vogerp.commonmodel.be.CEHierarchyImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.CEHierarchyImpl.class, "inFlow");

            if (scFlow.getCeName() != null && scFlow.getCeName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.ceName", scFlow.getCeName()));
            }
            if (scFlow.getParentCeName() != null && scFlow.getParentCeName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentCeName", scFlow.getParentCeName()));
            }
            if (scFlow.getParentCeItem() >= 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentCeItem", scFlow.getParentCeItem()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IUIDyanimcItem> searchDynamicItemEntities(org.shaolin.vogerp.commonmodel.be.UIDyanimcItemImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.UIDyanimcItemImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getUiEntityName() != null && scFlow.getUiEntityName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.uiEntityName", scFlow.getUiEntityName()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchDynamicItemEntitiesCount(org.shaolin.vogerp.commonmodel.be.UIDyanimcItemImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.UIDyanimcItemImpl.class, "inFlow");

            if (scFlow.getUiEntityName() != null && scFlow.getUiEntityName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.uiEntityName", scFlow.getUiEntityName()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IUIDyanimcItem> searchDynamicItems(org.shaolin.vogerp.commonmodel.be.UIDyanimcItemImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.UIDyanimcItemImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getUiEntityName() != null && scFlow.getUiEntityName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.uiEntityName", scFlow.getUiEntityName()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchDynamicItemsCount(org.shaolin.vogerp.commonmodel.be.UIDyanimcItemImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.UIDyanimcItemImpl.class, "inFlow");

            if (scFlow.getUiEntityName() != null && scFlow.getUiEntityName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.uiEntityName", scFlow.getUiEntityName()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IUIDyanimcPageLink> searchDynamicPageLink(org.shaolin.vogerp.commonmodel.be.UIDyanimcPageLinkImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.UIDyanimcPageLinkImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchDynamicPageLinkCount(org.shaolin.vogerp.commonmodel.be.UIDyanimcPageLinkImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.UIDyanimcPageLinkImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        return this._count(inFlowCriteria);
    }

}

