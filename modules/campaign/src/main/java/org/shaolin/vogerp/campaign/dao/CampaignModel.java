package org.shaolin.vogerp.campaign.dao;

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
public class CampaignModel extends BEEntityDaoObject {

    public static final CampaignModel INSTANCE = new CampaignModel();

    private CampaignModel() {
    }

    public List<org.shaolin.vogerp.campaign.be.ICampaign> searchCampaign(org.shaolin.vogerp.campaign.be.CampaignImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.campaign.be.CampaignImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getName() != null && scObject.getName().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.name", scObject.getName()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.campaign.ce.CampaignType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.startDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.endDate", scObject.getEndCreateDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchCampaignCount(org.shaolin.vogerp.campaign.be.CampaignImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.campaign.be.CampaignImpl.class, "inObject");

            if (scObject.getName() != null && scObject.getName().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.name", scObject.getName()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.campaign.ce.CampaignType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }
            if (scObject.getStartCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.startDate", scObject.getStartCreateDate()));
            }
            if (scObject.getEndCreateDate() != null) {
                inObjectCriteria.add(createCriterion(Operator.GREATER_THAN_OR_EQUALS, "inObject.endDate", scObject.getEndCreateDate()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

}

