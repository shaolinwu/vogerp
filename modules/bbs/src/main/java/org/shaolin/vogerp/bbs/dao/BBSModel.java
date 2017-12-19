package org.shaolin.vogerp.bbs.dao;

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
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * This code is generated automatically, any change will be replaced after rebuild.
 */
@Repository
@Transactional
public class BBSModel extends BEEntityDaoObject {

    public static final BBSModel INSTANCE = new BBSModel();

    public BBSModel() {
    }

    public List<org.shaolin.vogerp.bbs.be.ITopic> searchTopic(org.shaolin.vogerp.bbs.be.TopicImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.bbs.be.TopicImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getDescription() != null && scObject.getDescription().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.description", scObject.getDescription()));
            }
            if (scObject.getState() != null && scObject.getState() != org.shaolin.vogerp.bbs.ce.TopicStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.stateInt", scObject.getState().getIntValue()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.bbs.ce.TopicType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchTopicCount(org.shaolin.vogerp.bbs.be.TopicImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.bbs.be.TopicImpl.class, "inObject");

            if (scObject.getId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.id", scObject.getId()));
            }
            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getDescription() != null && scObject.getDescription().length() > 0) {
                inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.description", scObject.getDescription()));
            }
            if (scObject.getState() != null && scObject.getState() != org.shaolin.vogerp.bbs.ce.TopicStatusType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.stateInt", scObject.getState().getIntValue()));
            }
            if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.bbs.ce.TopicType.NOT_SPECIFIED) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

    public List<org.shaolin.vogerp.bbs.be.IComment> searchComment(org.shaolin.vogerp.bbs.be.CommentImpl scObject,
           List<Order> orders, int offset, int count) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.bbs.be.CommentImpl.class, "inObject");
            if (orders == null) {
            } else {
                this._addOrders(inObjectCriteria, orders);
            }

            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getTopicId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.topicId", scObject.getTopicId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        List result = this._list(offset, count, inObjectCriteria);
        return result;
    }

    public long searchCommentCount(org.shaolin.vogerp.bbs.be.CommentImpl scObject) {
            Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.bbs.be.CommentImpl.class, "inObject");

            if (scObject.getUserId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.userId", scObject.getUserId()));
            }
            if (scObject.getTopicId() > 0) {
                inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.topicId", scObject.getTopicId()));
            }

        inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

        return this._count(inObjectCriteria);
    }

}

