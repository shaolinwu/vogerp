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

import org.shaolin.vogerp.commonmodel.be.IPartyRelationship;
import org.shaolin.vogerp.commonmodel.be.PartyRelationshipImpl;
import org.shaolin.vogerp.commonmodel.be.IPartyEvent;
import org.shaolin.vogerp.commonmodel.be.PartyEventImpl;
import org.shaolin.vogerp.commonmodel.be.IPersonalAccount;
import org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl;
/**
 * This code is generated automatically, any change will be replaced after rebuild.
 */
public class CommonModel extends BEEntityDaoObject {

    public static final CommonModel INSTANCE = new CommonModel();

    private CommonModel() {
    }

    public List<IPartyRelationship> listIPartyRelationships(int offset, int count) {
        return list(offset, count, IPartyRelationship.class, PartyRelationshipImpl.class);
    }

    public long listIPartyRelationshipCount() {
        return count(IPartyRelationship.class);
    }

    public List<IPartyEvent> listIPartyEvents(int offset, int count) {
        return list(offset, count, IPartyEvent.class, PartyEventImpl.class);
    }

    public long listIPartyEventCount() {
        return count(IPartyEvent.class);
    }

    public List<IPersonalAccount> listIPersonalAccounts(int offset, int count) {
        return list(offset, count, IPersonalAccount.class, PersonalAccountImpl.class);
    }

    public long listIPersonalAccountCount() {
        return count(IPersonalAccount.class);
    }

    public List<org.shaolin.vogerp.commonmodel.be.ICaptcha> allCaptcha(org.shaolin.vogerp.commonmodel.be.CaptchaImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.CaptchaImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }


        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long allCaptchaCount(org.shaolin.vogerp.commonmodel.be.CaptchaImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.CaptchaImpl.class, "inFlow");


        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IPersonalAccount> authenticateUserInfo(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getUserName() != null && scFlow.getUserName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.userName", scFlow.getUserName()));
            }

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long authenticateUserInfoCount(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl.class, "inFlow");

            if (scFlow.getUserName() != null && scFlow.getUserName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.userName", scFlow.getUserName()));
            }

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IPersonalAccount> searchUserAccount(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getUserName() != null && scFlow.getUserName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.userName", scFlow.getUserName()));
            }
            if (scFlow.getInfo() != null && scFlow.getInfo().getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.info", scFlow.getInfo().getId()));
            }

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchUserAccountCount(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl.class, "inFlow");

            if (scFlow.getUserName() != null && scFlow.getUserName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.userName", scFlow.getUserName()));
            }
            if (scFlow.getInfo() != null && scFlow.getInfo().getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.info", scFlow.getInfo().getId()));
            }

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IPersonalInfo> searchPersonInfo(org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl.class, "inFlow");
            if (orders == null) {
                // add default orders.
                inFlowCriteria.addOrder(Order.desc("inFlow.lastName"));
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getFirstName() != null && scFlow.getFirstName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.firstName", scFlow.getFirstName()));
            }
            if (scFlow.getLastName() != null && scFlow.getLastName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.lastName", scFlow.getLastName()));
            }
            if (scFlow.getBirthdayStart() != null) {
                inFlowCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inFlow.birthday", scFlow.getBirthdayStart()));
            }
            if (scFlow.getBirthdayEnd() != null) {
                inFlowCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inFlow.birthday", scFlow.getBirthdayEnd()));
            }
            if (scFlow.getGender() != null && scFlow.getGender() != org.shaolin.vogerp.commonmodel.ce.Gender.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.genderInt", scFlow.getGender().getIntValue()));
            }

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchPersonInfoCount(org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getFirstName() != null && scFlow.getFirstName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.firstName", scFlow.getFirstName()));
            }
            if (scFlow.getLastName() != null && scFlow.getLastName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.lastName", scFlow.getLastName()));
            }
            if (scFlow.getBirthdayStart() != null) {
                inFlowCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inFlow.birthday", scFlow.getBirthdayStart()));
            }
            if (scFlow.getBirthdayEnd() != null) {
                inFlowCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inFlow.birthday", scFlow.getBirthdayEnd()));
            }
            if (scFlow.getGender() != null && scFlow.getGender() != org.shaolin.vogerp.commonmodel.ce.Gender.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.genderInt", scFlow.getGender().getIntValue()));
            }

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IPartyRelationship> searchPartyRelationshipInfo(org.shaolin.vogerp.commonmodel.be.PartyRelationshipImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PartyRelationshipImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }


        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchPartyRelationshipInfoCount(org.shaolin.vogerp.commonmodel.be.PartyRelationshipImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PartyRelationshipImpl.class, "inFlow");


        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IOrganization> searchRootOrganizationInfo(org.shaolin.vogerp.commonmodel.be.OrganizationImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.OrganizationImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getParentId() == 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getParentId()));
            }
            if (scFlow.getOrgCode() != null && scFlow.getOrgCode().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.orgCode", scFlow.getOrgCode()));
            }

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchRootOrganizationInfoCount(org.shaolin.vogerp.commonmodel.be.OrganizationImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.OrganizationImpl.class, "inFlow");

            if (scFlow.getParentId() == 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getParentId()));
            }
            if (scFlow.getOrgCode() != null && scFlow.getOrgCode().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.orgCode", scFlow.getOrgCode()));
            }

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IOrganization> searchSubOrganizationInfo(org.shaolin.vogerp.commonmodel.be.OrganizationImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.OrganizationImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getParentId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getParentId()));
            }
            if (scFlow.getOrgCode() != null && scFlow.getOrgCode().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.orgCode", scFlow.getOrgCode()));
            }

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchSubOrganizationInfoCount(org.shaolin.vogerp.commonmodel.be.OrganizationImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.OrganizationImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getParentId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.parentId", scFlow.getParentId()));
            }
            if (scFlow.getOrgCode() != null && scFlow.getOrgCode().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.orgCode", scFlow.getOrgCode()));
            }

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IOrganization> searchOrganization(org.shaolin.vogerp.commonmodel.be.OrganizationImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.OrganizationImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getOrgCode() != null && scFlow.getOrgCode().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.orgCode", scFlow.getOrgCode()));
            }

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchOrganizationCount(org.shaolin.vogerp.commonmodel.be.OrganizationImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.OrganizationImpl.class, "inFlow");

            if (scFlow.getOrgCode() != null && scFlow.getOrgCode().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.orgCode", scFlow.getOrgCode()));
            }

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.ILegalOrganizationInfo> searchOrgaLegalInfo(org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfoImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfoImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getOrgId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.orgId", scFlow.getOrgId()));
            }

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchOrgaLegalInfoCount(org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfoImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfoImpl.class, "inFlow");

            if (scFlow.getOrgId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.orgId", scFlow.getOrgId()));
            }

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IModelPermission> searchModelPermission(org.shaolin.vogerp.commonmodel.be.ModelPermissionImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.ModelPermissionImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getModuleId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.moduleId", scFlow.getModuleId()));
            }
            if (scFlow.getPartyType() != null && scFlow.getPartyType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.partyType", scFlow.getPartyType()));
            }

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchModelPermissionCount(org.shaolin.vogerp.commonmodel.be.ModelPermissionImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.ModelPermissionImpl.class, "inFlow");

            if (scFlow.getModuleId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.moduleId", scFlow.getModuleId()));
            }
            if (scFlow.getPartyType() != null && scFlow.getPartyType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.partyType", scFlow.getPartyType()));
            }

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IUIWidgetPermission> searchUIWidgetPermission(org.shaolin.vogerp.commonmodel.be.UIWidgetPermissionImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.UIWidgetPermissionImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getPartyType() != null && scFlow.getPartyType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.partyType", scFlow.getPartyType()));
            }

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchUIWidgetPermissionCount(org.shaolin.vogerp.commonmodel.be.UIWidgetPermissionImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.UIWidgetPermissionImpl.class, "inFlow");

            if (scFlow.getPartyType() != null && scFlow.getPartyType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.partyType", scFlow.getPartyType()));
            }

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IBEPermission> searchBEPermission(org.shaolin.vogerp.commonmodel.be.BEPermissionImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.BEPermissionImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getPartyType() != null && scFlow.getPartyType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.partyType", scFlow.getPartyType()));
            }

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchBEPermissionCount(org.shaolin.vogerp.commonmodel.be.BEPermissionImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.BEPermissionImpl.class, "inFlow");

            if (scFlow.getPartyType() != null && scFlow.getPartyType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.partyType", scFlow.getPartyType()));
            }

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IOrganizationContract> searchContract(org.shaolin.vogerp.commonmodel.be.OrganizationContractImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.OrganizationContractImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getType() != null && scFlow.getType() != org.shaolin.vogerp.commonmodel.ce.ContractType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.typeInt", scFlow.getType().getIntValue()));
            }

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchContractCount(org.shaolin.vogerp.commonmodel.be.OrganizationContractImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.OrganizationContractImpl.class, "inFlow");

            if (scFlow.getType() != null && scFlow.getType() != org.shaolin.vogerp.commonmodel.ce.ContractType.NOT_SPECIFIED) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.typeInt", scFlow.getType().getIntValue()));
            }

        return this._count(inFlowCriteria);
    }

}

