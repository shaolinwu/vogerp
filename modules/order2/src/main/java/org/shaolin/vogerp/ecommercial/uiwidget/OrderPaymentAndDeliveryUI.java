package org.shaolin.vogerp.ecommercial.uiwidget;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.uimaster.page.AjaxContext;
import org.shaolin.uimaster.page.HTMLSnapshotContext;
import org.shaolin.uimaster.page.ajax.Empty;
import org.shaolin.uimaster.page.ajax.Layout;
import org.shaolin.uimaster.page.ajax.Widget;
import org.shaolin.uimaster.page.cache.UIFormObject;
import org.shaolin.uimaster.page.javacc.VariableEvaluator;
import org.shaolin.uimaster.page.widgets.HTMLWidgetType;
import org.shaolin.vogerp.accounting.IPaymentService;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.commonmodel.be.DeliveryInfoImpl;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
import org.shaolin.vogerp.ecommercial.be.IEOrder;
import org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl;
import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
import org.shaolin.vogerp.ecommercial.dao.OrderModel;
import org.shaolin.vogerp.ecommercial.util.OrderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OrderPaymentAndDeliveryUI extends HTMLWidgetType {
	private static final long serialVersionUID = 1L;
	private static final Logger logger = LoggerFactory.getLogger(AjaxContext.class);
	
	public static final String order_step_passed = "order_step_passed";;
	
	public OrderPaymentAndDeliveryUI()
    {
    }
    public OrderPaymentAndDeliveryUI(HTMLSnapshotContext context)
    {
        super(context);
    }
    public OrderPaymentAndDeliveryUI(HTMLSnapshotContext context, String id)
    {
        super(context, id);
    }

	@Override
	public void generateBeginHTML(HTMLSnapshotContext context, UIFormObject ownerEntity, int depth) {
	}

	public static long getOrgId(final IEOrder order) {
		if (order instanceof GoldenOrderImpl) {
			return ((GoldenOrderImpl)order).getOrgId();
		} else if (order instanceof RentOrLoanOrderImpl) {
			return ((RentOrLoanOrderImpl)order).getOrgId();
		} else if (order instanceof MachiningOrderImpl) {
			return ((MachiningOrderImpl)order).getOrgId();
		} else {
			return -1;
		}
	}
	
	@Override
	public void generateEndHTML(HTMLSnapshotContext context, UIFormObject ownerEntity, int depth) {
		generateWidget(context);
		String htmlId = getName();
		String funcRef = "javascript:defaultname." + getPrefix();
		try {
			IEOrder order = (IEOrder)this.getAttribute("order");
			IPersonalInfo takener = (IPersonalInfo)this.getAttribute("takener");
			IPersonalInfo provider = (IPersonalInfo)this.getAttribute("provider");
			boolean isTaker = takener.getOrgId() == UserContext.getUserContext().getOrgId();
			boolean isProvider = provider.getOrgId() == UserContext.getUserContext().getOrgId();
			
			if (order.getDeliveryInfoId() > 0) {
		        DeliveryInfoImpl deliveryInfo = (DeliveryInfoImpl)OrderModel.INSTANCE.get(order.getDeliveryInfoId(), DeliveryInfoImpl.class);
		        order.setDeliveryInfo(deliveryInfo);
		    } else {
		    	DeliveryInfoImpl deliveryInfo = new DeliveryInfoImpl();
		    	deliveryInfo.setAddress("\u8BF7\u8BBE\u7F6E\u60A8\u7684\u5730\u5740\u4FE1\u606F\uFF01");
		    	order.setDeliveryInfo(deliveryInfo);
		    }
		    if (order.getDeliveryToInfoId() > 0) {
		        DeliveryInfoImpl deliveryInfo = (DeliveryInfoImpl)OrderModel.INSTANCE.get(order.getDeliveryToInfoId(), DeliveryInfoImpl.class);
		        order.setDeliveryToInfo(deliveryInfo);
		    } else {
		    	DeliveryInfoImpl deliveryInfo = new DeliveryInfoImpl();
		    	deliveryInfo.setAddress("\u8BF7\u8BBE\u7F6E\u60A8\u7684\u5730\u5740\u4FE1\u606F\uFF01");
		        order.setDeliveryToInfo(deliveryInfo);
		    }
		    
			context.generateHTML(OrderUtil.getOrderHTMLInfo(order));
			context.generateHTML("<table id=\""+htmlId+"\" style=\"width:100%\" class=\"order_track_table\">");
			context.generateHTML("<tr><th>\u63A5\u6536\u65B9: "+CustomerInfoUtil.getCustomerEnterpriseBasicInfo(takener)+"</th><th>\u63D0\u4F9B\u65B9: "+CustomerInfoUtil.getCustomerEnterpriseBasicInfo(provider)+"</th></tr>");
			if (order.getDeliveryInfo().getUserId() == takener.getId()) {
				context.generateHTML("<tr><td>\u5730\u5740: "+order.getDeliveryInfo().getAddress()+"</td><td>\u5730\u5740: "+order.getDeliveryToInfo().getAddress()+"</td></tr>");
				context.generateHTML("<tr class=\"order_track_address\"><td>\u7535\u8BDD: "+order.getDeliveryInfo().getMobileNumber()+"</td><td>\u7535\u8BDD: "+order.getDeliveryToInfo().getMobileNumber()+"</td></tr>");
			} else {
				context.generateHTML("<tr><td>\u5730\u5740: "+order.getDeliveryToInfo().getAddress()+"</td><td>\u5730\u5740: "+order.getDeliveryInfo().getAddress()+"</td></tr>");
				context.generateHTML("<tr class=\"order_track_address\"><td>\u7535\u8BDD: "+order.getDeliveryToInfo().getMobileNumber()+"</td><td>\u7535\u8BDD: "+order.getDeliveryInfo().getMobileNumber()+"</td></tr>");
			}
			
			IPaymentService payservice = AppContext.get().getService(IPaymentService.class);
            PayOrderStatusType state = payservice.queryForPayStatus(order.getSerialNumber());
			if (state == PayOrderStatusType.NOTPAYED) {
				context.generateHTML("<tr class=\"order_step\">");
				if (isTaker) {
					context.generateHTML("<td>1.<button onclick=\""+funcRef+"payOrder(defaultname." + htmlId + ");\" class=\"ui-btn-inline\">\u652F\u4ED8</button></td><td>1.\u7B49\u5F85\u652F\u4ED8</td>");
				} else {
					context.generateHTML("<td>1." + state.getDisplayName() + "</td><td>1.\u7B49\u5F85\u652F\u4ED8</td>");
				}
				context.generateHTML("</tr>");
			} else {
				context.generateHTML("<tr class=\"\">");
				context.generateHTML("<td>1." + state.getDisplayName() + "</td><td>1.\u7B49\u5F85\u652F\u4ED8</td>");
				context.generateHTML("</tr>");
			}
			
			if ((state == PayOrderStatusType.PAYED && order.getTakenStatus() == OrderStatusType.NOT_SPECIFIED) 
				|| order.getTakenStatus() == OrderStatusType.TAKEN_PAYED) {
				context.generateHTML("<tr class=\"order_step\">");
				if (isProvider) {
					context.generateHTML("<td >2.\u7B49\u5F85\u53D1\u8D27</td><td>2.\u751F\u4EA7\u5546\u54C1\u8DDF\u8E2A<br/><button onclick=\""+funcRef+"addProductionNote(defaultname." + htmlId + ");\" class=\"ui-btn-inline\">\u751F\u4EA7\u8FDB\u5EA6</button><button onclick=\""+funcRef+"deliveryOrder(defaultname." + htmlId + ");\" class=\"ui-btn-inline\">\u53D1\u8D27</button></td>");
				} else {
					context.generateHTML("<td >2.\u7B49\u5F85\u53D1\u8D27</td><td>2.\u751F\u4EA7\u5546\u54C1\u8DDF\u8E2A</td>");
				}
				context.generateHTML("</tr>");
			} else {
				context.generateHTML("<tr class=\"\">");
				context.generateHTML("<td >2.\u7B49\u5F85\u53D1\u8D27</td><td>2.\u751F\u4EA7\u5546\u54C1\u8DDF\u8E2A</td>");
				context.generateHTML("</tr>");
			}
			
			if (order.getTakenStatus() == OrderStatusType.TAKEN_DELIVERY) {
				context.generateHTML("<tr class=\"order_step\">");
				context.generateHTML("<td>3.\u7B49\u5F85\u53D1\u8D27</td><td>3.\u9001\u8D27\u8DDF\u8E2A</td>");
				context.generateHTML("</tr>");
				context.generateHTML("<tr class=\"order_step\">");
				if (isTaker) {
					context.generateHTML("<td>4.<button onclick=\""+funcRef+"receivedOrder(defaultname." + htmlId + ");\" class=\"ui-btn-inline\">\u786E\u8BA4\u6536\u8D27</button></td><td>4.\u6536\u6B3E\u8DDF\u8E2A</td>");
				} else {
					context.generateHTML("<td>4.\u786E\u8BA4\u6536\u8D27</td><td>4.\u6536\u6B3E\u8DDF\u8E2A</td>");
				}
				context.generateHTML("</tr>");
			} else {
				context.generateHTML("<tr class=\"\">");
				context.generateHTML("<td>3.\u7B49\u5F85\u53D1\u8D27</td><td>3.\u9001\u8D27\u8DDF\u8E2A</td>");
				context.generateHTML("</tr>");
				context.generateHTML("<tr class=\"\">");
				context.generateHTML("<td>4.\u786E\u8BA4\u6536\u8D27</td><td>4.\u6536\u6B3E\u8DDF\u8E2A</td>");
				context.generateHTML("</tr>");
			}
			
			if (order.getTakenStatus() == OrderStatusType.TAKEN_COMPLETED) {
				context.generateHTML("<tr class=\"order_step\">");
				context.generateHTML("<td>5.\u8BC4\u4EF7</td><td>5.\u8BC4\u4EF7</td>");
				context.generateHTML("</tr>");
			} else {
				context.generateHTML("<tr class=\"\">");
				context.generateHTML("<td>5.\u8BC4\u4EF7</td><td>5.\u8BC4\u4EF7</td>");
				context.generateHTML("</tr>");
			}
			
			context.generateHTML("</table>");
			
		} catch (Exception e) {
			logger.warn(htmlId + " error generated: " + e.getMessage(), e);
		} finally {
			generateEndWidget(context);
		}
	}
	
	public Widget createAjaxWidget(VariableEvaluator ee)
    {
      return new Empty(getName(), Layout.NULL);
    }
	
}
