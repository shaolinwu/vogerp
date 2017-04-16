<?xml version="1.0" ?>
<ns2:Workflow xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:ns6="http://bmdp.shaolin.org/datamodel/PageDiagram" xmlns:ns5="http://bmdp.shaolin.org/datamodel/Page"
	xmlns:ns4="http://bmdp.shaolin.org/datamodel/RDBDiagram" xmlns:ns3="http://bmdp.shaolin.org/datamodel/BEDiagram"
	xmlns:ns2="http://bmdp.shaolin.org/datamodel/Workflow" xmlns="http://bmdp.shaolin.org/datamodel/Common"
	xsi:schemaLocation="">
	<entityName>org.shaolin.vogerp.ecommercial.diagram.RentOrderFlows</entityName>
	<systemVersion>0</systemVersion>
	<description>租赁订单流程</description>
	<ns2:conf>
		<ns2:bootable>true</ns2:bootable>
		<!-- 
		<ns2:service name="userService" category="JavaClass">
			<type entityName="org.shaolin.vogerp.commonmodel.IUserService"></type>
		</ns2:service>
		 -->
	</ns2:conf>
    <ns2:flow name="PublishRentOrder" eventConsumer="PublishRentOrder">
        <ns2:conf>
        </ns2:conf>
        <ns2:start-node name="init">
            <ns2:process>
	            <ns2:var name="gOrder" category="BusinessEntity" scope="InOut">
	                <type entityName="org.shaolin.vogerp.ecommercial.be.RentOrLoanOrder"></type>
	            </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.ce.CEUtil;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                      $gOrder.setStatus(OrderStatusType.VERIFYING);
                      @flowContext.save($gOrder);
                      //assign task id to sales order. this object is passed from blow action actually.
                    }]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="publishGorder"></ns2:dest>
        </ns2:start-node>
        <ns2:mission-node name="publishGorder" expiredDays="5" expiredHours="0" autoTrigger="true">
            <ns2:description>发布租赁订单给所有客户</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.RentOrderEditor"
                actionName="publishGorder" actionText="发布">
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.order.be.PurchaseOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.ce.RentOrLoanOrderType;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        RentOrLoanOrderImpl gorder = (RentOrLoanOrderImpl)out.get("beObject");
                        gorder.setType(RentOrLoanOrderType.RENT);
                        gorder.setStatus(OrderStatusType.VERIFYING);
                        gorder.setCount(1);
			            if (gorder.getDeliveryInfo() != null) {
			                if (gorder.getDeliveryInfo().getId() > 0) {
				               OrderModel.INSTANCE.update(gorder.getDeliveryInfo());
				            } else {
				               OrderModel.INSTANCE.create(gorder.getDeliveryInfo());
				            }
				            gorder.setDeliveryInfoId(gorder.getDeliveryInfo().getId());
			            }
			            if (gorder.getId() == 0) {
			                OrderModel.INSTANCE.create(gorder, true);
			            } else {
			                OrderModel.INSTANCE.update(gorder, true);
			            }
                        
                        form.closeIfinWindows();
                        @page.removeForm(@page.getEntityUiid()); 
                        
                        HashMap result = new HashMap();
                        result.put("gOrder", gorder);
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
                <ns2:filter>
                  <expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                       return $beObject.getStatus() == OrderStatusType.CREATED;
                    }
                   ]]></expressionString>
                </ns2:filter>
            </ns2:uiAction>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.RLoanOrderEditor"
                actionName="publishGorder1" actionText="发布">
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.order.be.PurchaseOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.ce.RentOrLoanOrderType;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        RentOrLoanOrderImpl gorder = (RentOrLoanOrderImpl)out.get("beObject");
                        gorder.setCount(1);
                        gorder.setType(RentOrLoanOrderType.LOAN);
                        gorder.setStatus(OrderStatusType.VERIFYING);
			            if (gorder.getDeliveryInfo() != null) {
			                if (gorder.getDeliveryInfo().getId() > 0) {
				               OrderModel.INSTANCE.update(gorder.getDeliveryInfo());
				            } else {
				               OrderModel.INSTANCE.create(gorder.getDeliveryInfo());
				            }
				            gorder.setDeliveryInfoId(gorder.getDeliveryInfo().getId());
			            }
			            if (gorder.getId() == 0) {
			                OrderModel.INSTANCE.create(gorder, true);
			            } else {
			                OrderModel.INSTANCE.update(gorder, true);
			            }
                        
                        form.closeIfinWindows();
                        @page.removeForm(@page.getEntityUiid()); 
                        
                        HashMap result = new HashMap();
                        result.put("gOrder", gorder);
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
                <ns2:filter>
                  <expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                       return $beObject.getStatus() == OrderStatusType.CREATED;
                    }
                   ]]></expressionString>
                </ns2:filter>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0" />
            <ns2:process>
                <ns2:var name="gOrder" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.RentOrLoanOrder"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import java.util.HashMap;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.productmodel.be.ProductImpl;
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.ROrderSearchCriteriaImpl;
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.order.be.*;
                    import org.shaolin.vogerp.commonmodel.dao.CommonModel;
                    import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl;
                    import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
                    import org.shaolin.vogerp.commonmodel.IUserService;
                    {
                       // add the search criteria.
                       ROrderSearchCriteriaImpl sc = new ROrderSearchCriteriaImpl();
                       sc.setOrderId($gOrder.getId());
                       sc.setCity($gOrder.getCity());
                       if ($gOrder.getProductId() > 0) {
                          sc.setProductType(((ProductImpl)OrderModel.INSTANCE.get($gOrder.getProductId(), ProductImpl.class)).getType());
                       }
                       OrderModel.INSTANCE.create(sc);
                       
                       // notify all customers.
                       IUserService userService = (IUserService)AppContext.get().getService(IUserService.class);
                       IPersonalInfo publisher = userService.getPersonalInfo($gOrder.getPublishedCustomerId());
                       
                       String subject = org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil.getCustomerEnterpriseBasicInfo(publisher);
                       String description = "("+OrderUtil.getOrderLink($gOrder)+")" + $gOrder.getDescription();
                       NotificationImpl message = new NotificationImpl();
                       message.setPartyId($gOrder.getPublishedCustomerId());
			           message.setSubject("您发布新的租赁订单！审核中。。。" +subject);
		               message.setDescription(description);
			           message.setCreateDate(new Date());
                       
                       ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
                       service.addNotification(message, true);
                       
                       Dialog.showMessageDialog("操作成功！", "", Dialog.INFORMATION_MESSAGE, null);
                    }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
                <ns2:dest name="verifyROrder"></ns2:dest>
                <ns2:dest name="forbiddenROrder"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        
        <ns2:mission-node name="verifyROrder" expiredDays="0" expiredHours="0" autoTrigger="false" multipleInvoke="true">
            <ns2:description>审核加工单</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.page.OrderManagementByAdmin"
                actionName="verifyROrder" actionText="审核通过" isHidden="true">
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
                    import org.shaolin.vogerp.commonmodel.be.DeliveryInfoImpl;
                    { 
                        Table orderInfoTable = (Table)@page.getElement("rentOrderTable");
                        if (orderInfoTable.getSelectedRow() == null) {
                            return;
                        }
                        RentOrLoanOrderImpl defaultUser = (RentOrLoanOrderImpl)orderInfoTable.getSelectedRow();
                        if (defaultUser.getStatus() != OrderStatusType.VERIFYING) {
                            Dialog.showMessageDialog("操作失败！", "订单状态: " + defaultUser.getStatus().getDisplayName(), Dialog.WARNING_MESSAGE, null);
                            return;
                        }
                        
                        HashMap result = new HashMap();
                        result.put("order", defaultUser);
                        result.put("verifyPass", Boolean.TRUE);
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.page.OrderManagementByAdmin"
                actionName="unverifiedROrder" actionText="审核不通过" isHidden="true">
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
                    import org.shaolin.vogerp.commonmodel.be.DeliveryInfoImpl;
                    { 
                        Table orderInfoTable = (Table)@page.getElement("rentOrderTable");
                        if (orderInfoTable.getSelectedRow() == null) {
                            return;
                        }
                        RentOrLoanOrderImpl defaultUser = (RentOrLoanOrderImpl)orderInfoTable.getSelectedRow();
                        if (defaultUser.getStatus() != OrderStatusType.VERIFYING) {
                            Dialog.showMessageDialog("操作失败！", "订单状态: " + defaultUser.getStatus().getDisplayName(), Dialog.WARNING_MESSAGE, null);
                            return;
                        }
                        
                        HashMap result = new HashMap();
                        result.put("order", defaultUser);
                        result.put("verifyPass", Boolean.FALSE);
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant partyType="Admin,0"/>
            <ns2:process>
                <ns2:var name="order" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.RentOrLoanOrder"></type>
                </ns2:var>
                <ns2:var name="verifyPass" category="JavaPrimitive" scope="InOut">
                    <type entityName="java.lang.Boolean"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                     import java.util.List;
                     import java.util.ArrayList;
                     import org.shaolin.uimaster.page.ajax.*;
                     import org.shaolin.bmdp.runtime.AppContext;
                     import org.shaolin.bmdp.runtime.security.UserContext;
                     import org.shaolin.vogerp.ecommercial.ce.EOrderType;
                     import org.shaolin.vogerp.ecommercial.be.InterestEOrderImpl;
                     import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                     import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                     import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                     import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                     import org.shaolin.bmdp.workflow.be.NotificationImpl;
                     {
                          @flowContext.save($order);
                          
                          NotificationImpl message = new NotificationImpl();
                          message.setPartyId($order.getPublishedCustomerId());
                          if ($verifyPass.booleanValue()) {
                              $order.setStatus(OrderStatusType.PUBLISHED);
                          	  message.setSubject("您的加工订单通过审核! 推送给所有在线用户...");
	                          message.setDescription(OrderUtil.getOrderLink($order) + $order.getDescription());
	                          
	                          //promote to other interested users as well!
	                          message.setLatitude($order.getLatitude());
		                      message.setLongitude($order.getLongitude());
		                      message.setPartyType(UserContext.getUserContext().getOrgType());
		                      //TODO: add product type as well
                          } else if ($order.getStatus() == OrderStatusType.CREATED) {
                              $order.setStatus(OrderStatusType.CREATED);
                              message.setSubject("您的加工订单审核失败! 请打开订单查看详情。");
                              message.setDescription(OrderUtil.getOrderLink($order) + @flowContext.getEvent().getComments());
                          }
                          message.setCreateDate(new java.util.Date());
	                      
	                      ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
	                      service.addNotification(message, true);
	                      
	                      Dialog.showMessageDialog("操作成功！", "", Dialog.INFORMATION_MESSAGE, null);
                     }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
            	<ns2:dest name="verifyROrder"></ns2:dest>
            	<ns2:dest name="publishGorder"></ns2:dest>
            	<ns2:dest name="offerPrice"></ns2:dest>
            	<ns2:dest name="cancelGOrder"></ns2:dest>
            	<ns2:dest name="forbiddenROrder"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        
        <ns2:mission-node name="offerPrice" expiredDays="0" expiredHours="0" autoTrigger="false" multipleInvoke="true">
            <ns2:description>租赁订单竟价</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.ROOfferPrice"
                actionName="offerPrice" actionText="竟价">
                <ns2:expression>
                    <expressionString><![CDATA[
			        import java.util.HashMap;
			        import java.util.Date;
			        import java.util.ArrayList;
			        import org.shaolin.uimaster.page.AjaxContext;
			        import org.shaolin.uimaster.page.ajax.*;
			        import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
			        import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
			        import org.shaolin.vogerp.ecommercial.dao.*;
			        import org.shaolin.bmdp.runtime.AppContext; 
			        import org.shaolin.bmdp.runtime.security.UserContext;
			        import org.shaolin.vogerp.commonmodel.IUserService; 
			        import org.shaolin.vogerp.ecommercial.util.OrderUtil;
			        import org.shaolin.vogerp.commonmodel.be.DeliveryInfoImpl;
			        { 
			            RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
			            HashMap out = (HashMap)form.ui2Data();
			
			            RentOrLoanOrderImpl order = (RentOrLoanOrderImpl)out.get("beObject");
			            
			            ROOfferPriceImpl offerPrice = new ROOfferPriceImpl();
			            offerPrice.setTakenCustomerId(UserContext.getUserContext().getUserId());
			            offerPrice.setPrice(Double.valueOf(@page.getTextField("priceUI").getValue()));
			            offerPrice.setCreateDate(new Date());
			            offerPrice.setSamplePhoto(@page.getHidden("samplePhotoUI.imagePathUI").getValue());
			            offerPrice.setLeaveWords(@page.getTextArea("leaveWordUI").getValue());
			            offerPrice.setSessionId(OrderUtil.genConversationId());
			            
			            form.closeIfinWindows();
			            @page.removeForm(@page.getEntityUiid()); 
			            
			            HashMap result = new HashMap();
			            result.put("goldenOrder", order);
			            result.put("offerPrice", offerPrice);
			            
			            return result;
			        }
                    ]]></expressionString>
                </ns2:expression>
                <ns2:filter><expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                       return UserContext.hasRole("GenericOrganizationType.Director,0") 
                              && $beObject.getOrgId() != UserContext.getUserContext().getOrgId() 
                              && $beObject.getStatus() == OrderStatusType.PUBLISHED;
                    }
                ]]></expressionString></ns2:filter>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0"/>
            <ns2:process>
                <ns2:var name="goldenOrder" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.RentOrLoanOrder"></type>
                </ns2:var>
                <ns2:var name="offerPrice" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.ROOfferPrice"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                     import java.util.List;
                     import java.util.ArrayList;
                     import org.shaolin.uimaster.page.ajax.*;
                     import org.shaolin.bmdp.runtime.AppContext;
                     import org.shaolin.bmdp.runtime.security.UserContext;
                     import org.shaolin.vogerp.ecommercial.ce.EOrderType;
                     import org.shaolin.vogerp.ecommercial.be.InterestEOrderImpl;
                     import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                     import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                     import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                     import org.shaolin.bmdp.workflow.be.NotificationImpl;
                     {
                          int state = OrderUtil.addAPrice($goldenOrder, $offerPrice);
			              if (state == -1) {
			                 Dialog.showMessageDialog("竞价失败，请刷新订单状态！", "提醒", Dialog.WARNING_MESSAGE, null);
			                 return;
			              } else if (state == -2) {
			                 Dialog.showMessageDialog("您已出价一次，不可重复竞价！", "提醒", Dialog.WARNING_MESSAGE, null);
			                 return;
			              } 
                          
                          InterestEOrderImpl condition = new InterestEOrderImpl();
                          condition.setOrgId(UserContext.getUserContext().getOrgId());
                          condition.setOrderId($goldenOrder.getId());
                          condition.setType(EOrderType.RENTORLOANORDER);
                          long result = OrderModel.INSTANCE.searchInterestEOrderCount(condition);
                          if (result == 0) {
                             OrderModel.INSTANCE.create(condition);
                          }
                          
                          String message0 = $offerPrice.getLeaveWords();
                          long from = $offerPrice.getTakenCustomerId();
                          long to = $goldenOrder.getPublishedCustomerId();
                          String sessionId = $offerPrice.getSessionId();
                          org.shaolin.bmdp.workflow.ws.ChatService.sendOffLine(message0, from, to, sessionId);
                          
                          NotificationImpl message = new NotificationImpl();
                          message.setPartyId($goldenOrder.getPublishedCustomerId());
                          message.setSubject("您的租赁订单("+$goldenOrder.getSerialNumber()+")有新的竞价信息! ");
                          message.setDescription(OrderUtil.getOrderOfferPriceLink($goldenOrder) + $goldenOrder.getDescription());
                          message.setCreateDate(new java.util.Date());
	                      
	                      ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
	                      service.addNotification(message, true);
	                      
	                      Dialog.showMessageDialog("操作成功！", "", Dialog.INFORMATION_MESSAGE, null);
                     }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
                <!-- multiple time for offering a price. -->
                <ns2:dest name="offerPrice"></ns2:dest>
            	<ns2:dest name="acceptPrice"></ns2:dest>
	            <ns2:dest name="cancelGOrder"></ns2:dest>
	            <ns2:dest name="forbiddenROrder"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        
        <ns2:mission-node name="acceptPrice" expiredDays="0" expiredHours="0" autoTrigger="false">
            <ns2:description>接受当前价格</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.ROOfferPriceTable"
                actionName="acceptOfferPrice" actionText="成交选中价格">
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.ce.RentOrLoanOrderType;
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.commonmodel.be.DeliveryInfoImpl; 
                    import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        RentOrLoanOrderImpl gorder = (RentOrLoanOrderImpl)out.get("beObject");
                        if (out.get("selectedPrice") == null) {
                            Dialog.showMessageDialog("请选择一个客户出价单。", "", Dialog.WARNING_MESSAGE, null);
                            return;
                        }
                        ROOfferPriceImpl selectedPrice= (ROOfferPriceImpl)out.get("selectedPrice");
                        IUserService service = (IUserService)AppContext.get().getService(IUserService.class); 
                        if (!service.hasAddressConfigured(selectedPrice.getTakenCustomerId())) {
                            Dialog.showMessageDialog("无法成交，因竟价客户没有配置默认地址！", "", Dialog.WARNING_MESSAGE, null);
                            return;
                        }
                        
                        HashMap result = new HashMap();
                        result.put("gorder", out.get("beObject"));
                        result.put("selectedPrice", selectedPrice);
                        result.put("offerLowestPrice", Boolean.FALSE);
                        result.put("page", @page);
                        
                        form.closeIfinWindows();
                        @page.removeForm(@page.getEntityUiid()); 
                        
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0" />
            <ns2:process>
                <ns2:var name="gorder" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.RentOrLoanOrder"></type>
                </ns2:var>
                <ns2:var name="offerLowestPrice" category="JavaPrimitive" scope="InOut">
                    <type entityName="java.lang.Boolean"></type>
                </ns2:var>
                <ns2:var name="selectedPrice" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.ROOfferPrice"></type>
                </ns2:var>
                <ns2:var name="page" category="JavaClass" scope="InOut">
                    <type entityName="org.shaolin.uimaster.page.AjaxContext"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.ArrayList;
                    import java.util.Date;
                    import java.util.HashMap;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.vogerp.order.be.IPurchaseOrder;
                    import org.shaolin.vogerp.order.be.ISaleOrder;
                    import org.shaolin.vogerp.order.be.SaleOrderImpl;
                    import org.shaolin.vogerp.order.be.OrderItemImpl;
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.ce.RentOrLoanOrderType;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.order.be.IPurchaseOrder;
                    import org.shaolin.vogerp.order.be.PurchaseOrderImpl;
                    import org.shaolin.vogerp.order.be.PurchaseItemImpl;
                    import org.shaolin.vogerp.order.ce.RentOrLoanOrderType;
                    import org.shaolin.vogerp.commonmodel.IOrganizationService;
                    import org.shaolin.vogerp.commonmodel.be.DeliveryInfoImpl;
                    import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.PayBusinessType;
                    import org.shaolin.vogerp.accounting.IPaymentService;
                    import org.shaolin.bmdp.utils.StringUtil;
                    {
                         OrderUtil.setTakenUserAddress($gorder, $selectedPrice.getTakenCustomerId());
                         if ($gorder.getType() == RentOrLoanOrderType.RENT) {
                            OrderUtil.reverseDeliveryAddress($gorder);
                         }
                         if ($offerLowestPrice != null && $offerLowestPrice == Boolean.TRUE) {
                            $gorder.setEndPrice(OrderUtil.getLowestOfferPrice($gorder, true));
                            $gorder.setTakenCustomerId(OrderUtil.getLowestOfferPriceCustId($gorder));
                         } else {
                            $gorder.setEndPrice($selectedPrice.getPrice());
                            $gorder.setTakenCustomerId($selectedPrice.getTakenCustomerId());
                         }
                        
                         $gorder.setStatus(OrderStatusType.TAKEN);
                         OrderModel.INSTANCE.update($gorder);
                         
                         IPaymentService accountingService = (IPaymentService)AppContext.get().getService(IPaymentService.class);
                         IOrganizationService orgService = (IOrganizationService)AppContext.get().getService(IOrganizationService.class); 
                         if ($gorder.getType() == RentOrLoanOrderType.RENT) {
	                         IPayOrder payOrder = accountingService.createSelfPayOrder(PayBusinessType.EQUIPMENTRENTBUSI, 
	                         						$gorder.getTakenCustomerId(), $gorder.getSerialNumber(), $gorder.getEndPrice());
                             if (payOrder.getDescription() == null) {
	                             payOrder.setDescription("[" + $selectedPrice.getTakenCustomer().getOrganization().getDescription() + "]" 
	                                                     + $gorder.getDescription());
	                             @flowContext.save(payOrder);
                             }
                             
                             HashMap input = new HashMap();
				             input.put("beObject", payOrder);
				             input.put("editable", new Boolean(true));
				             RefForm form = new RefForm("payorderForm", "org.shaolin.vogerp.accounting.form.PaymentMethod", input);
				             $page.addElement(form);
				             form.openInWindows("支付方式选择", null, true);
                         } else {
                             long orgId = orgService.getOrgIdByPartyId($selectedPrice.getTakenCustomerId());
	                         IPayOrder payOrder = accountingService.createPayOrder(PayBusinessType.EQUIPMENTLOANBUSI, 
	                         				orgId, $gorder.getTakenCustomerId(), UserContext.getUserContext().getUserId(), 
	                         				$gorder.getSerialNumber(), $gorder.getEndPrice());
	                         if (payOrder.getDescription() == null) {
		                         payOrder.setOrgId(orgService.getOrgIdByPartyId($gorder.getTakenCustomerId()));
	                             payOrder.setDescription("[" + $selectedPrice.getTakenCustomer().getOrganization().getDescription() + "]" 
	                                                     + $gorder.getDescription());
	                             @flowContext.save(payOrder);
                             }
	                         String description = "("+OrderUtil.getOrderLink($gorder)+")" + $gorder.getDescription();
	                         NotificationImpl message = new NotificationImpl();
	                         message.setPartyId($gorder.getTakenCustomerId());
	                         message.setSubject("恭喜您成功抢到租赁订单！等待预付款中...");
	                         message.setDescription(description);
	                         message.setCreateDate(new Date());
	                         
	                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
	                         service.addNotification(message, true);
	                         Dialog.showMessageDialog("操作成功！", "", Dialog.INFORMATION_MESSAGE, null);
                         }
                         
                    }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
            	<ns2:dest name="PrepayCallBack" flow="PrepayFlow" entity="org.shaolin.vogerp.accounting.diagram.PaymentFlows"></ns2:dest>
            	<ns2:dest name="cancelGOrder"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        
        <ns2:mission-node name="cancelGOrder" expiredDays="0" expiredHours="0" autoTrigger="false">
            <ns2:description>取消本订单</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.RLoanOrderEditor"
                actionName="cancelGOrder" actionText="取消本订单">
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        RentOrLoanOrderImpl gorder = (RentOrLoanOrderImpl)out.get("beObject");
                        if (gorder.getTakenCustomerId() > 0) {
                            @page.executeJavaScript("alert(\"此订单所被客户拍下，不能取消！\");");
                            return;
                        }
                        
                        form.closeIfinWindows();
                        @page.removeForm(@page.getEntityUiid()); 
                        
                        HashMap result = new HashMap();
                        result.put("gorder", out.get("beObject"));
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
                <ns2:filter>
	                <expressionString><![CDATA[
	                    import org.shaolin.bmdp.runtime.security.UserContext;
	                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
	                    {
	                       return UserContext.hasRole("GenericOrganizationType.Director,0") 
	                              && $beObject.getId() > 0 
	                              && $beObject.getStatus() == OrderStatusType.PUBLISHED
	                              && UserContext.getUserContext().getOrgId() == $beObject.getOrgId();
	                    }
	                ]]></expressionString>
                </ns2:filter>
            </ns2:uiAction>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.RentOrderEditor"
                actionName="cancelGOrder1" actionText="取消本订单">
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        RentOrLoanOrderImpl gorder = (RentOrLoanOrderImpl)out.get("beObject");
                        if (gorder.getTakenCustomerId() > 0) {
                            @page.executeJavaScript("alert(\"此订单所被客户拍下，不能取消！\");");
                            return;
                        }
                        
                        form.closeIfinWindows();
                        @page.removeForm(@page.getEntityUiid()); 
                        
                        HashMap result = new HashMap();
                        result.put("gorder", out.get("beObject"));
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
                <ns2:filter>
	                <expressionString><![CDATA[
	                    import org.shaolin.bmdp.runtime.security.UserContext;
	                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
	                    {
	                       return UserContext.hasRole("GenericOrganizationType.Director,0") 
	                              && $beObject.getId() > 0 
	                              && $beObject.getStatus() == OrderStatusType.PUBLISHED
	                              && UserContext.getUserContext().getOrgId() == $beObject.getOrgId();
	                    }
	                ]]></expressionString>
                </ns2:filter>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0" />
            <ns2:process>
                <ns2:var name="gorder" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.RentOrLoanOrder"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.ArrayList;
                    import java.util.Date;
                    import java.util.HashMap;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.vogerp.order.be.IPurchaseOrder;
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    {
                         if ($gorder.getId() == 0) {
                            return;
                         }
                         if ($gorder.getStatus() == OrderStatusType.CREATED || $gorder.getStatus() == OrderStatusType.PUBLISHED) {
                             $gorder.setStatus(OrderStatusType.CANCELLED);
                             OrderModel.INSTANCE.update($gorder);
                             
                             if ($gorder.getTakenCustomerId() > 0) {
                                 NotificationImpl message = new NotificationImpl();
                                 message.setPartyId($gorder.getTakenCustomerId());
                                 message.setSubject("您的租赁单已取消！" + $gorder.getSerialNumber());
                                 message.setDescription($gorder.getDescription());
                                 message.setCreateDate(new Date());
                                 
                                 ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
                                 service.addNotification(message, true);
                             }
                             
                             Dialog.showMessageDialog("操作成功！", "", Dialog.INFORMATION_MESSAGE, null);
                         }
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="endNode"></ns2:dest>
        </ns2:mission-node>
        
        <ns2:mission-node name="forbiddenROrder" expiredDays="0"
			expiredHours="0" autoTrigger="false">
			<ns2:description>禁用订单</ns2:description>
			<!-- dynamic action -->
			<ns2:uiAction
				actionPage="org.shaolin.vogerp.ecommercial.page.OrderManagementByAdmin"
				actionName="forbiddenROrder" actionText="禁用订单">
				<ns2:expression>
					<expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.be.*;
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    { 
                        Table orderInfoTable = (Table)@page.getElement("rentOrderTable");
                        if (orderInfoTable.getSelectedRow() == null) {
                            Dialog.showMessageDialog("没有订单选中！", "Error", Dialog.ERROR_MESSAGE, null);
                            return;
                        }
                        IEOrder order = (IEOrder)orderInfoTable.getSelectedRow();
                        if (order.getStatus() != OrderStatusType.PUBLISHED) {
                           Dialog.showMessageDialog("只有处于发布状态的订单可以禁用！", "Error", Dialog.ERROR_MESSAGE, null);
                           return;
                        }
                        
                        HashMap result = new HashMap();
                        result.put("gorder", order);
                        return result;
                    }
                    ]]></expressionString>
				</ns2:expression>
				<ns2:filter>
					<expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                       // only admin
                       return UserContext.hasRole("Admin,0") && ($beObject.getStatus() == OrderStatusType.PUBLISHED || $beObject.getStatus() == OrderStatusType.CREATED);
                    }
                ]]></expressionString>
				</ns2:filter>
			</ns2:uiAction>
			<ns2:participant partyType="GenericOrganizationType.Director,0" />
			<ns2:process>
				<ns2:var name="gorder" category="BusinessEntity" scope="InOut">
					<type entityName="org.shaolin.vogerp.ecommercial.be.EOrder"></type>
				</ns2:var>
				<ns2:expression>
					<expressionString><![CDATA[
                    import java.util.List;
                    import java.util.ArrayList;
                    import java.util.Date;
                    import java.util.HashMap;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.order.be.IPurchaseOrder;
                    import org.shaolin.vogerp.commonmodel.IUserService;
                    import org.shaolin.vogerp.ecommercial.be.*;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    {
                         if ($gorder.getId() == 0) {
                            return;
                         }
                         if ($gorder.getStatus() == OrderStatusType.PUBLISHED) {
	                         $gorder.setStatus(OrderStatusType.FORBIDDEN);
	                         
	                         if ($gorder instanceof RentOrLoanOrderImpl) {
	                            OrderModel.INSTANCE.update((RentOrLoanOrderImpl)$gorder);
	                         } 
	                         if ($gorder.getPublishedCustomerId() > 0) {
		                         NotificationImpl message = new NotificationImpl();
		                         message.setPartyId($gorder.getPublishedCustomerId());
		                         message.setSubject("抢购单由于不适合抢单规定，已被管理员禁用此单！");
		                         message.setDescription(OrderUtil.getOrderLink($gorder) + $gorder.getDescription());
		                         message.setCreateDate(new Date());
		                         
		                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
		                         service.addNotification(message, true);
	                         }
	                         Dialog.showMessageDialog("操作成功！", "", Dialog.INFORMATION_MESSAGE, null);
                         }
                    }
                    ]]></expressionString>
				</ns2:expression>
			</ns2:process>
			<ns2:dest name="endNode"></ns2:dest>
		</ns2:mission-node>
        
        <ns2:end-node name="endNode"></ns2:end-node>
        </ns2:flow>
</ns2:Workflow>