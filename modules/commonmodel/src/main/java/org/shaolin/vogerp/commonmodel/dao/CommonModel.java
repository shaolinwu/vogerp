package org.shaolin.vogerp.commonmodel.dao;

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

import org.shaolin.vogerp.commonmodel.be.IPartyRelationship;
import org.shaolin.vogerp.commonmodel.be.PartyRelationshipImpl;
import org.shaolin.vogerp.commonmodel.be.IPartyEvent;
import org.shaolin.vogerp.commonmodel.be.PartyEventImpl;
import org.shaolin.vogerp.commonmodel.be.IMemberServiceRule;
import org.shaolin.vogerp.commonmodel.be.MemberServiceRuleImpl;
import org.shaolin.vogerp.commonmodel.be.IAssignedMember;
import org.shaolin.vogerp.commonmodel.be.AssignedMemberImpl;
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

    public List<IMemberServiceRule> listIMemberServiceRules(int offset, int count) {
        return list(offset, count, IMemberServiceRule.class, MemberServiceRuleImpl.class);
    }

    public long listIMemberServiceRuleCount() {
        return count(IMemberServiceRule.class);
    }

    public List<IAssignedMember> listIAssignedMembers(int offset, int count) {
        return list(offset, count, IAssignedMember.class, AssignedMemberImpl.class);
    }

    public long listIAssignedMemberCount() {
        return count(IAssignedMember.class);
    }

    public List<org.shaolin.vogerp.commonmodel.be.ICaptcha> allCaptcha(org.shaolin.vogerp.commonmodel.be.CaptchaImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.CaptchaImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }


        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long allCaptchaCount(org.shaolin.vogerp.commonmodel.be.CaptchaImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.CaptchaImpl.class, "inFlow");


        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IPersonalAccount> authenticateUserInfo(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getUserName() != null && scFlow.getUserName().trim().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.userName", scFlow.getUserName()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long authenticateUserInfoCount(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl.class, "inFlow");

            if (scFlow.getUserName() != null && scFlow.getUserName().trim().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.userName", scFlow.getUserName()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IPersonalAccount> searchUserAccount(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getUserName() != null && scFlow.getUserName().trim().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.userName", scFlow.getUserName()));
            }
            if (scFlow.getInfo() != null && scFlow.getInfo().getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.personalId", scFlow.getInfo().getId()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchUserAccountCount(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl.class, "inFlow");

            if (scFlow.getUserName() != null && scFlow.getUserName().trim().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.userName", scFlow.getUserName()));
            }
            if (scFlow.getInfo() != null && scFlow.getInfo().getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.personalId", scFlow.getInfo().getId()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

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
            if (scFlow.getOrgId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.orgId", scFlow.getOrgId()));
            }
            if (scFlow.getFirstName() != null && scFlow.getFirstName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.firstName", scFlow.getFirstName()));
            }
            if (scFlow.getLastName() != null && scFlow.getLastName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.lastName", scFlow.getLastName()));
            }
            if (scFlow.getType() != null && scFlow.getType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.type", scFlow.getType()));
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

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchPersonInfoCount(org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getOrgId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.orgId", scFlow.getOrgId()));
            }
            if (scFlow.getFirstName() != null && scFlow.getFirstName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.firstName", scFlow.getFirstName()));
            }
            if (scFlow.getLastName() != null && scFlow.getLastName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.lastName", scFlow.getLastName()));
            }
            if (scFlow.getType() != null && scFlow.getType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.type", scFlow.getType()));
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

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IPartyRelationship> searchPartyRelationshipInfo(org.shaolin.vogerp.commonmodel.be.PartyRelationshipImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PartyRelationshipImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }


        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchPartyRelationshipInfoCount(org.shaolin.vogerp.commonmodel.be.PartyRelationshipImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.PartyRelationshipImpl.class, "inFlow");


        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

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

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

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

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

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
            if (scFlow.getName() != null && scFlow.getName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.name", scFlow.getName()));
            }
            if (scFlow.getType() != null && scFlow.getType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.type", scFlow.getType()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

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
            if (scFlow.getName() != null && scFlow.getName().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inFlow.name", scFlow.getName()));
            }
            if (scFlow.getType() != null && scFlow.getType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.type", scFlow.getType()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IOrganization> searchOrganization(org.shaolin.vogerp.commonmodel.be.OrganizationImpl scFlow,
           List<Order> orders, int offset, int count) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.OrganizationImpl.class, "inFlow");
            if (orders == null) {
            } else {
                this._addOrders(inFlowCriteria, orders);
            }

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getOrgCode() != null && scFlow.getOrgCode().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.orgCode", scFlow.getOrgCode()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchOrganizationCount(org.shaolin.vogerp.commonmodel.be.OrganizationImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.OrganizationImpl.class, "inFlow");

            if (scFlow.getId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.id", scFlow.getId()));
            }
            if (scFlow.getOrgCode() != null && scFlow.getOrgCode().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.orgCode", scFlow.getOrgCode()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

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

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchOrgaLegalInfoCount(org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfoImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfoImpl.class, "inFlow");

            if (scFlow.getOrgId() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.orgId", scFlow.getOrgId()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

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

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

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

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

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

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchUIWidgetPermissionCount(org.shaolin.vogerp.commonmodel.be.UIWidgetPermissionImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.UIWidgetPermissionImpl.class, "inFlow");

            if (scFlow.getPartyType() != null && scFlow.getPartyType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.partyType", scFlow.getPartyType()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

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

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        List result = this._list(offset, count, inFlowCriteria);
        return result;
    }

    public long searchBEPermissionCount(org.shaolin.vogerp.commonmodel.be.BEPermissionImpl scFlow) {
            Criteria inFlowCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.BEPermissionImpl.class, "inFlow");

            if (scFlow.getPartyType() != null && scFlow.getPartyType().length() > 0) {
                inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow.partyType", scFlow.getPartyType()));
            }

        inFlowCriteria.add(createCriterion(Operator.EQUALS, "inFlow._enable", scFlow.isEnabled()));

        return this._count(inFlowCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IRegisterInfo> searchRegisterInfo(org.shaolin.vogerp.commonmodel.be.RegisterInfoImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.RegisterInfoImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchRegisterInfoCount(org.shaolin.vogerp.commonmodel.be.RegisterInfoImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.RegisterInfoImpl.class, "inObject");


        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IAssignedMember> searchAssignedMember(org.shaolin.vogerp.commonmodel.be.AssignedMemberImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.AssignedMemberImpl.class, "inObject");
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

    public long searchAssignedMemberCount(org.shaolin.vogerp.commonmodel.be.AssignedMemberImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.AssignedMemberImpl.class, "inObject");

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IAssignedMemberServiceUsed> searchMemberServiceUsed(org.shaolin.vogerp.commonmodel.be.AssignedMemberServiceUsedImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.AssignedMemberServiceUsedImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getFunctionId() != null && scObject.getFunctionId().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.functionId", scObject.getFunctionId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchMemberServiceUsedCount(org.shaolin.vogerp.commonmodel.be.AssignedMemberServiceUsedImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.AssignedMemberServiceUsedImpl.class, "inObject");

            if (scObject.getOrgId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId()));
            }
            if (scObject.getFunctionId() != null && scObject.getFunctionId().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.functionId", scObject.getFunctionId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.commonmodel.be.IMemberServiceRule> searchMemberService(org.shaolin.vogerp.commonmodel.be.MemberServiceRuleImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.MemberServiceRuleImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getFunctionId() != null && scObject.getFunctionId().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.functionId", scObject.getFunctionId()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.commonmodel.ce.AMemberType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchMemberServiceCount(org.shaolin.vogerp.commonmodel.be.MemberServiceRuleImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.commonmodel.be.MemberServiceRuleImpl.class, "inObject");

            if (scObject.getFunctionId() != null && scObject.getFunctionId().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.functionId", scObject.getFunctionId()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.commonmodel.ce.AMemberType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

}

