package org.shaolin.vogerp.ecommercial.dao;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.shaolin.bmdp.persistence.BEEntityDaoObject;
import org.shaolin.bmdp.persistence.query.operator.Operator;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
import org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl;
import org.shaolin.vogerp.ecommercial.be.IEOrder;

public class CustOrderModel extends BEEntityDaoObject {

	public static final CustOrderModel INSTANCE = new CustOrderModel();

    private CustOrderModel() {
    }

    /**
     * Supported for OR condition.
     * 
     * @param scObject
     * @param orders
     * @param offset
     * @param count
     * @return
     */
    public List<org.shaolin.vogerp.ecommercial.be.IGoldenOrder> searchGoldenOrder(org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl scObject,
            List<Order> orders, int offset, int count) {
             Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl.class, "inObject");
             if (orders == null) {
             } else {
                 this._addOrders(inObjectCriteria, orders);
             }

             if (scObject.getId() > 0) {
                  Criterion c = createCriterion(Operator.EQUALS, "inObject.id", scObject.getId());
                  inObjectCriteria.add(c);
             }
             if (scObject.getOrgId() > 0) {
                  Criterion c = createCriterion(Operator.EQUALS, "inObject.orgId", scObject.getOrgId());
                  inObjectCriteria.add(c);
             }
             ArrayList<Criterion> junctions = null; 
             if (scObject.getPublishedCustomerId() > 0) {
                  Criterion c = createCriterion(Operator.EQUALS, "inObject.publishedCustomerId", scObject.getPublishedCustomerId());
                 if (junctions == null) {junctions = new ArrayList<Criterion>();}
                 junctions.add(c);
             }
             if (scObject.getTakenCustomerId() > 0) {
                  Criterion c = createCriterion(Operator.EQUALS, "inObject.takenCustomerId", scObject.getTakenCustomerId());
                  if (junctions != null) {
                	  inObjectCriteria.add(Restrictions.or(junctions.remove(0), c));
                  } else {
                	  inObjectCriteria.add(c);
                  }
             } else {
            	 if (junctions != null) {
            		 inObjectCriteria.add(junctions.remove(0));
            	 }
             }
             if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                  Criterion c = createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber());
                  inObjectCriteria.add(c);
             }
             if (scObject.getStartCreateDate() != null) {
                  Criterion c = createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate());
                  inObjectCriteria.add(c);
             }
             if (scObject.getEndCreateDate() != null) {
                  Criterion c = createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate());
                  inObjectCriteria.add(c);
             }
             if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.ecommercial.ce.OrderStatusType.NOT_SPECIFIED) {
                  Criterion c = createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue());
                  inObjectCriteria.add(c);
             }
             if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.ecommercial.ce.GoldenOrderType.NOT_SPECIFIED) {
                  Criterion c = createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue());
                  inObjectCriteria.add(c);
             }
             if (scObject.getCity() != null && scObject.getCity().trim().length() > 0) {
                  Criterion c = createCriterion(Operator.EQUALS, "inObject.city", scObject.getCity());
                  inObjectCriteria.add(c);
             }

         inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

         List result = this._list(offset, count, inObjectCriteria);
         return result;
     }
    
    public List<org.shaolin.vogerp.ecommercial.be.IRentOrLoanOrder> searchRentOrLoanOrder(org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl scObject,
            List<Order> orders, int offset, int count) {
             Criteria inObjectCriteria = this._createCriteria(org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl.class, "inObject");
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
             ArrayList<Criterion> junctions = null; 
             if (scObject.getPublishedCustomerId() > 0) {
                 Criterion c = createCriterion(Operator.EQUALS, "inObject.publishedCustomerId", scObject.getPublishedCustomerId());
                if (junctions == null) {junctions = new ArrayList<Criterion>();}
                junctions.add(c);
            }
            if (scObject.getTakenCustomerId() > 0) {
                 Criterion c = createCriterion(Operator.EQUALS, "inObject.takenCustomerId", scObject.getTakenCustomerId());
                 if (junctions != null) {
               	  inObjectCriteria.add(Restrictions.or(junctions.remove(0), c));
                 } else {
               	  inObjectCriteria.add(c);
                 }
            } else {
           	 if (junctions != null) {
           		 inObjectCriteria.add(junctions.remove(0));
           	 }
            }
             if (scObject.getSerialNumber() != null && scObject.getSerialNumber().length() > 0) {
                 inObjectCriteria.add(createCriterion(Operator.START_WITH_RIGHT, "inObject.serialNumber", scObject.getSerialNumber()));
             }
             if (scObject.getType() != null && scObject.getType() != org.shaolin.vogerp.ecommercial.ce.RentOrLoanOrderType.NOT_SPECIFIED) {
                 inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.typeInt", scObject.getType().getIntValue()));
             }
             if (scObject.getStartCreateDate() != null) {
                 inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getStartCreateDate()));
             }
             if (scObject.getEndCreateDate() != null) {
                 inObjectCriteria.add(createCriterion(Operator.LESS_THAN_OR_EQUALS, "inObject.createDate", scObject.getEndCreateDate()));
             }
             if (scObject.getStatus() != null && scObject.getStatus() != org.shaolin.vogerp.ecommercial.ce.OrderStatusType.NOT_SPECIFIED) {
                 inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.statusInt", scObject.getStatus().getIntValue()));
             }
             if (scObject.getCity() != null && scObject.getCity().trim().length() > 0) {
                 inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject.city", scObject.getCity()));
             }

         inObjectCriteria.add(createCriterion(Operator.EQUALS, "inObject._enable", scObject.isEnabled()));

         List result = this._list(offset, count, inObjectCriteria);
         return result;
     }

    public static void joinPublishedUserInfo(List<IEOrder> orders) {
    	if (orders == null || orders.size() == 0) {
    		return;
    	}
    	HashSet<Long> userIds = new HashSet<Long>();
    	for (IEOrder order : orders) {
    		userIds.add(order.getPublishedCustomerId());
    	}
    	List<IPersonalInfo> userInfoList = AppContext.get().getService(IUserService.class).getPersonalInfos(userIds);
    	for (IEOrder order : orders) {
    		order.setPublishedCustomer(selectAUser(order.getPublishedCustomerId(), userInfoList));
    	}
    }
    
    private static PersonalInfoImpl selectAUser(long userId, List<IPersonalInfo> userInfoList) {
    	for (IPersonalInfo info : userInfoList) {
    		if (userId == info.getId()) {
    			return (PersonalInfoImpl)info;
    		}
    	}
    	return null;
    }
    
}

