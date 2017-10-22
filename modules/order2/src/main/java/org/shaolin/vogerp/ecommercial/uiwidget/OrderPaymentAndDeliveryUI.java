package org.shaolin.vogerp.ecommercial.uiwidget;

import java.util.Date;

import org.shaolin.bmdp.json.JSONArray;
import org.shaolin.bmdp.json.JSONException;
import org.shaolin.bmdp.json.JSONObject;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.uimaster.page.AjaxContext;
import org.shaolin.uimaster.page.UserRequestContext;
import org.shaolin.uimaster.page.cache.UIFormObject;
import org.shaolin.uimaster.page.javacc.VariableEvaluator;
import org.shaolin.uimaster.page.od.formats.FormatUtil;
import org.shaolin.uimaster.page.widgets.HTMLWidgetType;
import org.shaolin.vogerp.accounting.IPaymentService;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.commonmodel.IExpressService;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
import org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl;
import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
import org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl;
import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
import org.shaolin.vogerp.ecommercial.be.IDeliveryInfo;
import org.shaolin.vogerp.ecommercial.be.IEOrder;
import org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl;
import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
import org.shaolin.vogerp.ecommercial.dao.EOrderModel;
import org.shaolin.vogerp.ecommercial.util.OrderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OrderPaymentAndDeliveryUI extends HTMLWidgetType {
	private static final long serialVersionUID = 1L;
	private static final Logger logger = LoggerFactory.getLogger(AjaxContext.class);
	
	public static final String order_step_passed = "order_step_passed";;
	
    public OrderPaymentAndDeliveryUI(String id)
    {
        super(id);
    }

	@Override
	public void generateBeginHTML(UserRequestContext context, UIFormObject ownerEntity, int depth) {
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
	
	public static void addProgressNote(final IEOrder order, final String note) {
		try {
			DeliveryInfoImpl info = EOrderModel.INSTANCE.get(order.getDeliveryInfoId(), DeliveryInfoImpl.class);
			JSONArray array = new JSONArray();
			if (info.getProgressNote() != null && info.getProgressNote().trim().length() > 0) {
				array = new JSONArray(info.getProgressNote());
			}
			JSONObject json = new JSONObject();
			json.put("note", note);
			json.put("date", FormatUtil.formatDateTime(new Date()));
			array.put(json);
			info.setProgressNote(array.toString());
			
			EOrderModel.INSTANCE.update(info);
			order.setDeliveryInfo(info);
		} catch (Exception e) {
			logger.warn("Add progress note error!", e);
		}
	}
	
	@Override
	public void generateEndHTML(UserRequestContext context, UIFormObject ownerEntity, int depth) {
		generateWidget(context);
		String htmlId = getName();
		String funcRef = "javascript:defaultname." + context.getHTMLPrefix();
		try {
			IEOrder order = (IEOrder)this.getAttribute("order");
			if (order.getDeliveryInfoId() > 0) {
		        DeliveryInfoImpl deliveryInfo = (DeliveryInfoImpl)EOrderModel.INSTANCE.get(order.getDeliveryInfoId(), DeliveryInfoImpl.class);
		        order.setDeliveryInfo(deliveryInfo);
		    } else {
		    	context.generateHTML("\u5F53\u524D\u8BA2\u5355\u6CA1\u6709\u914D\u5236\u5730\u5740\u4FE1\u606F\uFF01");
		    	return;
		    }
			if (order.getDeliveryInfo().getToUserId() == 0) {
				context.generateHTML("\u5F53\u524D\u8BA2\u5355\u6CA1\u6709\u6307\u5B9A\u5BC4\u9001\u5730\u5740\u4FE1\u606F\uFF01");
		    	return;
			}
			IDeliveryInfo deliveryInfo = order.getDeliveryInfo();
			IPersonalInfo provider = EOrderModel.INSTANCE.get(deliveryInfo.getUserId(), PersonalInfoImpl.class);
			IPersonalInfo takener = EOrderModel.INSTANCE.get(deliveryInfo.getToUserId(), PersonalInfoImpl.class);
			boolean isCurrTaker = takener.getOrgId() == UserContext.getUserContext().getOrgId();
			boolean isCurrProvider = provider.getOrgId() == UserContext.getUserContext().getOrgId();
			
			context.generateHTML(OrderUtil.getOrderHTMLInfo(order));
			context.generateHTML("<table id=\""+htmlId+"\" style=\"width:100%\" class=\"order_track_table\">");
			context.generateHTML("<tr><th>\u63D0\u4F9B\u65B9: "+CustomerInfoUtil.getCustomerEnterpriseBasicInfo(provider)+"</th><th>\u63A5\u6536\u65B9: "+CustomerInfoUtil.getCustomerEnterpriseBasicInfo(takener)+"</th></tr>");
			context.generateHTML("<tr><td>\u5730\u5740: "+deliveryInfo.getAddress()+"</td><td>\u5730\u5740: "+deliveryInfo.getToAddress()+"</td></tr>");
			context.generateHTML("<tr class=\"order_track_address\"><td>\u7535\u8BDD: "+deliveryInfo.getMobileNumber()+"</td><td>\u7535\u8BDD: "+deliveryInfo.getMobileNumber()+"</td></tr>");
			
			IPaymentService payservice = AppContext.get().getService(IPaymentService.class);
            PayOrderStatusType state = payservice.queryForPayStatus(order.getSerialNumber());
			if (state == PayOrderStatusType.NOTPAYED) {
				context.generateHTML("<tr class=\"order_step\">");
				if (isCurrTaker) {
					context.generateHTML("<td>1.\u7B49\u5F85\u652F\u4ED8</td><td>1.<button onclick=\""+funcRef+"payOrder(defaultname." + htmlId + ");\" class=\"ui-btn-inline\">\u652F\u4ED8</button></td>");
				} else {
					context.generateHTML("<td>1.\u7B49\u5F85\u652F\u4ED8</td><td>1." + state.getDisplayName() + "</td>");
				}
				context.generateHTML("</tr>");
			} else {
				context.generateHTML("<tr class=\"\">");
				context.generateHTML("<td>1.\u7B49\u5F85\u652F\u4ED8</td><td>1." + state.getDisplayName() + "</td>");
				context.generateHTML("</tr>");
			}
			
			if ((state == PayOrderStatusType.PAYED && order.getTakenStatus() == OrderStatusType.NOT_SPECIFIED) 
				|| order.getTakenStatus() == OrderStatusType.TAKEN_PAYED) {
				context.generateHTML("<tr class=\"order_step\">");
				if (isCurrProvider) {
					context.generateHTML("<td>2.\u751F\u4EA7\u5546\u54C1\u8DDF\u8E2A<br/><button onclick=\""+funcRef+"addProductionNote(defaultname." + htmlId + ");\" class=\"ui-btn-inline\">\u751F\u4EA7\u8FDB\u5EA6</button><button onclick=\""+funcRef+"updateExpress(defaultname." + htmlId + ");\" class=\"ui-btn-inline\">\u53D1\u8D27</button>");
					generateProgressInfo(context, deliveryInfo.getProgressNote());
					context.generateHTML("<td>2.\u7B49\u5F85\u53D1\u8D27</td></td>");
				} else {
					context.generateHTML("<td>2.\u751F\u4EA7\u5546\u54C1\u8DDF\u8E2A");
					generateProgressInfo(context, deliveryInfo.getProgressNote());
					if (order.getTakenStatus().getIntValue() > OrderStatusType.TAKEN_PAYED.getIntValue()) {
						context.generateHTML("</td><td>2." + order.getTakenStatus().getDisplayName() + "</td>");
					} else {
						context.generateHTML("</td><td>2.\u7B49\u5F85\u53D1\u8D27</td>");
					}
				}
				context.generateHTML("</tr>");
			} else {
				context.generateHTML("<tr class=\"\">");
				context.generateHTML("<td>2.\u751F\u4EA7\u5546\u54C1\u8DDF\u8E2A");
				generateProgressInfo(context, deliveryInfo.getProgressNote());
				if (order.getTakenStatus().getIntValue() > OrderStatusType.TAKEN_PAYED.getIntValue()) {
					context.generateHTML("</td><td>2." + order.getTakenStatus().getDisplayName() + "</td>");
				} else {
					context.generateHTML("</td><td>2.\u7B49\u5F85\u53D1\u8D27</td>");
				}
				context.generateHTML("</tr>");
			}
			
			if (order.getTakenStatus() == OrderStatusType.TAKEN_DELIVERY) {
				context.generateHTML("<tr class=\"order_step\">");
				context.generateHTML("<td>3.\u9001\u8D27\u8DDF\u8E2A");
				generateExpressInfo(context, deliveryInfo);
				context.generateHTML("</td><td>3.\u7B49\u5F85\u53D1\u8D27</td>");
				context.generateHTML("</tr>");
				context.generateHTML("<tr class=\"order_step\">");
				if (isCurrTaker) {
					context.generateHTML("<td>4.\u6536\u6B3E\u8DDF\u8E2A</td><td>4.<button onclick=\""+funcRef+"receivedOrder(defaultname." + htmlId + ");\" class=\"ui-btn-inline\">\u786E\u8BA4\u6536\u8D27</button></td>");
				} else {
					context.generateHTML("<td>4.\u6536\u6B3E\u8DDF\u8E2A</td><td>4.\u786E\u8BA4\u6536\u8D27</td>");
				}
				context.generateHTML("</tr>");
			} else {
				context.generateHTML("<tr class=\"\">");
				context.generateHTML("<td>3.\u9001\u8D27\u8DDF\u8E2A");
				generateExpressInfo(context, deliveryInfo);
				context.generateHTML("</td><td>3.\u7B49\u5F85\u53D1\u8D27</td>");
				context.generateHTML("</tr>");
				context.generateHTML("<tr class=\"\">");
				if (order.getTakenStatus() == OrderStatusType.TAKEN_COMPLETED) {
					context.generateHTML("<td>4.\u786E\u8BA4\u6536\u8D27</td><td>4." + order.getTakenStatus().getDisplayName() + "</td>");
				} else {
					context.generateHTML("<td>4.\u6536\u6B3E\u8DDF\u8E2A</td><td>4.\u786E\u8BA4\u6536\u8D27</td>");
				}
				context.generateHTML("</tr>");
			}
			
			if (order.getTakenStatus() == OrderStatusType.TAKEN_COMPLETED) {
				context.generateHTML("<tr class=\"order_step\">");
				if (isCurrTaker) {
					context.generateHTML("<td>5.\u8BC4\u4EF7\u4FE1\u606F</td><td>5.<button onclick=\""+funcRef+"commentOrder(defaultname." + htmlId + ");\" class=\"ui-btn-inline\">\u8BC4\u4EF7</button></td>");
				} else {
					context.generateHTML("<td>5.<button onclick=\""+funcRef+"commentOrder(defaultname." + htmlId + ");\" class=\"ui-btn-inline\">\u8BC4\u4EF7</button></td><td>5.\u8BC4\u4EF7\u4FE1\u606F</td>");
				}
				context.generateHTML("</tr>");
			} else {
				context.generateHTML("<tr class=\"\">");
				context.generateHTML("<td>5.\u8BC4\u4EF7\u4FE1\u606F</td><td>5.\u8BC4\u4EF7\u4FE1\u606F</td>");
				context.generateHTML("</tr>");
			}
			
			context.generateHTML("</table>");
			
		} catch (Exception e) {
			logger.warn(htmlId + " error generated: " + e.getMessage(), e);
		} finally {
			generateEndWidget(context);
		}
	}
	
	private void generateProgressInfo(UserRequestContext context, String progressInfo) {
		if (progressInfo == null || progressInfo.trim().length() == 0) {
			return;
		}
		try {
			context.generateHTML("<UL>");
			JSONArray array = new JSONArray(progressInfo);
			for (int i=0; i<array.length(); i++) {
				JSONObject item = array.getJSONObject(i);
				context.generateHTML("<LI>["+item.getString("date")+"]"+item.getString("note")+"</LI>");
			}
			context.generateHTML("</UL>");
		} catch (JSONException e) {
		}
	}

	private void generateExpressInfo(UserRequestContext context, IDeliveryInfo deliveryInfo) {
		if (deliveryInfo.getExpressNumber() == null || deliveryInfo.getExpressNumber().trim().length() == 0) {
			return;
		}
		context.generateHTML("<DIV>");
		context.generateHTML("<DIV class=\"express_title\">");
		context.generateHTML(CEUtil.getValue("ExpressVendor," + deliveryInfo.getExpressVendor()));
		context.generateHTML("--");
		context.generateHTML(deliveryInfo.getExpressNumber());
		context.generateHTML("</DIV>");
		context.generateHTML("<DIV class=\"express_content\">");
		IExpressService service = (IExpressService)AppContext.get().getService(IExpressService.class);
		String result = service.query(deliveryInfo.getExpressVendor(), deliveryInfo.getExpressNumber());
		context.generateHTML(result);
		context.generateHTML("</DIV>");
		context.generateHTML("</DIV>");
	}
	
	public JSONObject createJsonModel(VariableEvaluator ee) throws JSONException
    {
      return super.createJsonModel(ee);
    }
	
}
