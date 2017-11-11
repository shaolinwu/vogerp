<?xml version="1.0" ?>
<ns2:Workflow xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:ns6="http://bmdp.shaolin.org/datamodel/PageDiagram" xmlns:ns5="http://bmdp.shaolin.org/datamodel/Page"
	xmlns:ns4="http://bmdp.shaolin.org/datamodel/RDBDiagram" xmlns:ns3="http://bmdp.shaolin.org/datamodel/BEDiagram"
	xmlns:ns2="http://bmdp.shaolin.org/datamodel/Workflow" xmlns="http://bmdp.shaolin.org/datamodel/Common"
	xsi:schemaLocation="">
	<entityName>org.shaolin.vogerp.ecommercial.diagram.GoldenOrderFlows</entityName>
	<systemVersion>0</systemVersion>
	<description>抢订单流程</description>
	<ns2:conf>
		<ns2:bootable>true</ns2:bootable>
		<!-- <ns2:service name="userService" category="JavaClass"> <type entityName="org.shaolin.vogerp.commonmodel.IUserService"></type> 
			</ns2:service> -->
	</ns2:conf>
	<!-- 通知流程 -->
	<ns2:flow name="PublishGoldenOrder" eventConsumer="PublishGoldenOrder">
		<ns2:conf>
		</ns2:conf>
		<ns2:start-node name="init">
			<ns2:process>
				<ns2:expression>
					<expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.ce.CEUtil;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                    }]]></expressionString>
				</ns2:expression>
			</ns2:process>
			<ns2:dest name="publishGorder"></ns2:dest>
		</ns2:start-node>
		<ns2:mission-node name="publishGorder" expiredDays="5"
			expiredHours="0" autoTrigger="true">
			<ns2:description>发布抢购单给所有客户</ns2:description>
			<ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.GoldenOrderEditor"
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
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.GOOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.ce.GoldenOrderType;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.EOrderModel;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        GoldenOrderImpl gorder = (GoldenOrderImpl)out.get("beObject");
                        gorder.setType(GoldenOrderType.PURCHASE);
                        gorder.setStatus(OrderStatusType.VERIFYING);
                        if (gorder.getDeliveryInfo() == null) {
			                Dialog.showMessageDialog("您没有配制地址信息！", "", Dialog.WARNING_MESSAGE, null);
			                return;
			            }
		                if (gorder.getDeliveryInfo().getId() > 0) {
		                   EOrderModel.INSTANCE.update(gorder.getDeliveryInfo());
		                } else {
		                   EOrderModel.INSTANCE.create(gorder.getDeliveryInfo());
		                   gorder.setDeliveryInfoId(gorder.getDeliveryInfo().getId());
		                }
			            if (gorder.getId() == 0) {
			                EOrderModel.INSTANCE.create(gorder);
			            } else {
			                EOrderModel.INSTANCE.update(gorder);
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
			<ns2:uiAction
				actionPage="org.shaolin.vogerp.ecommercial.form.GoldenSaleOrderEditor"
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
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.GOOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.ce.GoldenOrderType;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.EOrderModel;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        GoldenOrderImpl gorder = (GoldenOrderImpl)out.get("beObject");
                        gorder.setType(GoldenOrderType.SALE);
                        gorder.setStatus(OrderStatusType.VERIFYING);
                        if (gorder.getDeliveryInfo() == null) {
			                Dialog.showMessageDialog("您没有配制地址信息！", "", Dialog.WARNING_MESSAGE, null);
			                return;
			            }
                        if (gorder.getDeliveryInfo().getId() > 0) {
		                   EOrderModel.INSTANCE.update(gorder.getDeliveryInfo());
		                } else {
		                   EOrderModel.INSTANCE.create(gorder.getDeliveryInfo());
		                   gorder.setDeliveryInfoId(gorder.getDeliveryInfo().getId());
		                }
			            if (gorder.getId() == 0) {
			                EOrderModel.INSTANCE.create(gorder);
			            } else {
			                EOrderModel.INSTANCE.update(gorder);
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
					<type entityName="org.shaolin.vogerp.ecommercial.be.GoldenOrder"></type>
				</ns2:var>
				<ns2:expression>
					<expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import java.util.HashMap;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.commonmodel.IUserService;
                    import org.shaolin.vogerp.productmodel.IProductService;
                    import org.shaolin.vogerp.productmodel.be.ProductImpl;
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.GOrderSearchCriteriaImpl;
                    import org.shaolin.vogerp.ecommercial.dao.EOrderModel;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.vogerp.order.be.*;
                    import org.shaolin.vogerp.commonmodel.dao.CommonModel;
                    import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl;
                    import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
                    import org.shaolin.vogerp.commonmodel.IUserService;
                    {
                       @flowContext.bindSession($gOrder); // bind workflow session!
                       // add the search criteria.
                       GOrderSearchCriteriaImpl sc = new GOrderSearchCriteriaImpl();
                       sc.setOrderId($gOrder.getId());
                       sc.setCity($gOrder.getCity());
                       if ($gOrder.getProductId() > 0) {
                          sc.setProductType(((ProductImpl)EOrderModel.INSTANCE.get($gOrder.getProductId(), ProductImpl.class)).getType());
                       }
                       EOrderModel.INSTANCE.create(sc);
                       
                       // notify self.
                       IUserService userService = (IUserService)AppContext.get().getService(IUserService.class);
                       IPersonalInfo publisher = userService.getPersonalInfo($gOrder.getPublishedCustomerId());
                       
                       String subject = org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil.getCustomerEnterpriseBasicInfo(publisher);
                       String description = "("+OrderUtil.getOrderLink($gOrder)+")" + $gOrder.getDescription();
                       NotificationImpl message = new NotificationImpl();
                       message.setPartyId($gOrder.getPublishedCustomerId());
			           message.setSubject("您发布了新的抢购订单！审核中。。。" + subject);
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
				<ns2:dest name="verifyGOrder"></ns2:dest>
				<ns2:dest name="forbiddenGOrder"></ns2:dest>
			</ns2:eventDest>
		</ns2:mission-node>
		
		<ns2:mission-node name="verifyGOrder" expiredDays="0" expiredHours="0" autoTrigger="false" multipleInvoke="true">
            <ns2:description>审核加工单</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.page.OrderManagementByAdmin"
                actionName="verifiedGOrder" actionText="审核通过" isHidden="true">
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
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.EOrderModel;
                    import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
                    import org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl;
                    { 
                        Table orderInfoTable = (Table)@page.getElement("goldenOrderTable");
                        if (orderInfoTable.getSelectedRow() == null) {
                            return;
                        }
                        GoldenOrderImpl defaultUser = (GoldenOrderImpl)orderInfoTable.getSelectedRow();
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
                actionName="unverifiedGOrder" actionText="审核不通过" isHidden="true">
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
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.EOrderModel;
                    import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
                    import org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl;
                    { 
                        Table orderInfoTable = (Table)@page.getElement("goldenOrderTable");
                        if (orderInfoTable.getSelectedRow() == null) {
                            return;
                        }
                        GoldenOrderImpl defaultUser = (GoldenOrderImpl)orderInfoTable.getSelectedRow();
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
                    <type entityName="org.shaolin.vogerp.ecommercial.be.GoldenOrder"></type>
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
                     import org.shaolin.vogerp.ecommercial.dao.EOrderModel;
                     import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                     import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                     import org.shaolin.bmdp.workflow.be.NotificationImpl;
                     {
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
                          EOrderModel.INSTANCE.update($order);
                          message.setCreateDate(new java.util.Date());
	                      
	                      ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
	                      service.addNotification(message, true);
	                      
	                      Dialog.showMessageDialog("操作成功！", "", Dialog.INFORMATION_MESSAGE, null);
                     }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
            	<ns2:dest name="verifyGOrder"></ns2:dest>
            	<ns2:dest name="publishGorder"></ns2:dest>
            	<ns2:dest name="cancelGOrder"></ns2:dest>
            	<ns2:dest name="offerPrice"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>

		<ns2:mission-node name="offerPrice" expiredDays="0"
			expiredHours="0" autoTrigger="false" multipleInvoke="true">
			<ns2:description>抢购采购或销售订单竟价</ns2:description>
			<ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.GOOfferPrice"
				actionName="offerPrice" actionText="竟价">
				<ns2:expression>
					<expressionString><![CDATA[
			        import java.util.HashMap;
			        import java.util.Date;
			        import java.util.ArrayList;
			        import org.shaolin.uimaster.page.AjaxContext;
			        import org.shaolin.uimaster.page.ajax.*;
			        import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
			        import org.shaolin.vogerp.ecommercial.be.GOOfferPriceImpl;
			        import org.shaolin.vogerp.ecommercial.dao.*;
			        import org.shaolin.bmdp.runtime.AppContext; 
			        import org.shaolin.bmdp.runtime.security.UserContext;
			        import org.shaolin.vogerp.commonmodel.IUserService; 
			        import org.shaolin.vogerp.ecommercial.util.OrderUtil;
			        import org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl;
			        import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
			        { 
			            RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
			            HashMap out = (HashMap)form.ui2Data();
			
			            GoldenOrderImpl order = (GoldenOrderImpl)out.get("beObject");
			            
			            GOOfferPriceImpl offerPrice = new GOOfferPriceImpl();
			            offerPrice.setTakenCustomerId(UserContext.getUserContext().getUserId());
			            offerPrice.setTakenCustInfo(CustomerInfoUtil.getCustomerEnterpriseBasicInfo(UserContext.getUserContext().getUserId()));
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
				<ns2:filter>
					<expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                       return UserContext.hasRole("GenericOrganizationType.Director,0") 
                              && $beObject.getOrgId() != UserContext.getUserContext().getOrgId() 
                              && $beObject.getStatus() == OrderStatusType.PUBLISHED;
                    }
                  ]]></expressionString>
				</ns2:filter>
			</ns2:uiAction>
			<ns2:participant partyType="GenericOrganizationType.Director,0"
				onlyOwner="false" />
			<ns2:process>
				<ns2:var name="goldenOrder" category="BusinessEntity" scope="InOut">
					<type entityName="org.shaolin.vogerp.ecommercial.be.GoldenOrder"></type>
				</ns2:var>
				<ns2:var name="offerPrice" category="BusinessEntity" scope="InOut">
					<type entityName="org.shaolin.vogerp.ecommercial.be.GOOfferPrice"></type>
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
                     import org.shaolin.vogerp.ecommercial.dao.EOrderModel;
                     import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                     import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                     import org.shaolin.bmdp.workflow.be.NotificationImpl;
                     import org.shaolin.bmdp.workflow.ws.ChatService;
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
                          condition.setType(EOrderType.GOLDENORDER);
                          long result = EOrderModel.INSTANCE.searchInterestEOrderCount(condition);
                          if (result == 0) {
                             EOrderModel.INSTANCE.create(condition);
                          }
			              
                          String message0 = $offerPrice.getLeaveWords();
                          long from = $offerPrice.getTakenCustomerId();
                          long to = $goldenOrder.getPublishedCustomerId();
                          String sessionId = $offerPrice.getSessionId();
                          org.shaolin.bmdp.workflow.ws.ChatService.sendOffLine(message0, from, to, sessionId);
                          
                          NotificationImpl message = new NotificationImpl();
                          message.setPartyId($goldenOrder.getPublishedCustomerId());
                          message.setSubject("您的抢购订单("+$goldenOrder.getSerialNumber()+")有新的竞价信息! ");
                          message.setDescription(OrderUtil.getOrderOfferPriceLink($goldenOrder) + $goldenOrder.getDescription());
                          message.setCreateDate(new java.util.Date());
	                      
	                      ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
	                      service.addNotification(message, true);
	                      
	                      Dialog.showMessageDialog("出价成功！", "", Dialog.INFORMATION_MESSAGE, null);
                     }
                     ]]></expressionString>
				</ns2:expression>
			</ns2:process>
			<ns2:eventDest>
				<!-- multiple time for offering a price. -->
				<ns2:dest name="offerPrice"></ns2:dest>
				<ns2:dest name="acceptPrice"></ns2:dest>
				<ns2:dest name="cancelGOrder"></ns2:dest>
				<ns2:dest name="forbiddenGOrder"></ns2:dest>
			</ns2:eventDest>
		</ns2:mission-node>

		<ns2:mission-node name="acceptPrice" expiredDays="0"
			expiredHours="0" autoTrigger="false">
			<ns2:description>接受当前价格</ns2:description>
			<ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.GOOfferPriceTable"
				actionName="acceptOfferPrice" actionText="选中价格成交">
				<ns2:expression>
					<expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.GOOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.ce.GoldenOrderType;
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
                    import org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        if (out.get("selectedPrice") == null) {
                            Dialog.showMessageDialog("请选择一个客户出价单。", "", Dialog.WARNING_MESSAGE, null);
                            return;
                        }
                        GOOfferPriceImpl selectedPrice= (GOOfferPriceImpl)out.get("selectedPrice");
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
				<ns2:filter>
					<expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                       return $beObject.getOrgId() == UserContext.getUserContext().getOrgId() 
                              && $beObject.getStatus() == OrderStatusType.PUBLISHED;
                    }
                  ]]></expressionString>
				</ns2:filter>
			</ns2:uiAction>
			<ns2:participant partyType="GenericOrganizationType.Director,0" />
			<ns2:process>
				<ns2:var name="gorder" category="BusinessEntity" scope="InOut">
					<type entityName="org.shaolin.vogerp.ecommercial.be.GoldenOrder"></type>
				</ns2:var>
				<ns2:var name="offerLowestPrice" category="JavaPrimitive" scope="InOut">
					<type entityName="java.lang.Boolean"></type>
				</ns2:var>
				<ns2:var name="selectedPrice" category="BusinessEntity" scope="InOut">
					<type entityName="org.shaolin.vogerp.ecommercial.be.GOOfferPrice"></type>
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
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.order.be.*;
                    import org.shaolin.vogerp.ecommercial.be.*;
                    import org.shaolin.vogerp.ecommercial.ce.*;
                    import org.shaolin.vogerp.ecommercial.dao.EOrderModel;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.vogerp.commonmodel.IUserService;
                    import org.shaolin.vogerp.commonmodel.IOrganizationService;
                    import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
                    import org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl;
                    import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.PayBusinessType;
                    import org.shaolin.vogerp.accounting.IPaymentService;
                    import org.shaolin.bmdp.utils.StringUtil;
                    {
                         OrderUtil.setTakenUserAddress($gorder, $selectedPrice.getTakenCustomerId());
                         if ($gorder.getType() == GoldenOrderType.PURCHASE) {
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
                         EOrderModel.INSTANCE.update($gorder);
                         
                         IOrganizationService orgService = (IOrganizationService)AppContext.get().getService(IOrganizationService.class); 
                         IPaymentService accountingService = (IPaymentService)AppContext.get().getService(IPaymentService.class);
                         if ($gorder.getType() == GoldenOrderType.PURCHASE) {
	                         IPayOrder payOrder = accountingService.createSelfPayOrder(PayBusinessType.GOLDENPORDERBUSI, 
	                         						$gorder.getTakenCustomerId(), $gorder.getSerialNumber(), $gorder.getEndPrice());
	                         if (payOrder.getDescription() == null) {
		                         payOrder.setDescription("[" + $selectedPrice.getTakenCustomer().getOrganization().getDescription() + "]" 
	                                                     + $gorder.getDescription());
		                         @flowContext.bindSession(payOrder);
	                         }
	                         org.shaolin.bmdp.persistence.HibernateUtil.releaseSession(true);
	                         
			                 HashMap input = new HashMap();
				             input.put("beObject", payOrder);
				             input.put("editable", new Boolean(true));
				             RefForm form = new RefForm("payorderForm", "org.shaolin.vogerp.accounting.form.PaymentMethod", input);
				             $page.addElement(form);
				             form.openInWindows("预支付方式选择", null, true);
                         } else {
	                         long orgId = orgService.getOrgIdByPartyId($selectedPrice.getTakenCustomerId());
                             IPayOrder payOrder = accountingService.createPayOrder(PayBusinessType.GOLDENSORDERBUSI, 
                             						orgId, $gorder.getTakenCustomerId(), UserContext.getUserContext().getUserId(),
                             						$gorder.getSerialNumber(), $gorder.getEndPrice());
                             if (payOrder.getDescription() == null) {
	                             payOrder.setDescription("[" + $selectedPrice.getTakenCustomer().getOrganization().getDescription() + "]" 
	                                                     + $gorder.getDescription());
		                         @flowContext.bindSession(payOrder);
	                         }
	                         String description = "("+OrderUtil.getOrderLink($gorder)+")" + $gorder.getDescription();
	                         NotificationImpl message = new NotificationImpl();
	                         message.setPartyId($gorder.getTakenCustomerId());
	                         message.setSubject("恭喜您成功抢购订单！等待付款中...");
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
				<ns2:dest name="PrepayCallBack" flow="PrepayFlow"
					entity="org.shaolin.vogerp.accounting.diagram.PaymentFlows"></ns2:dest>
				<!-- payment goes back for delivering order. -->
				<ns2:dest name="cancelGOrder"></ns2:dest>
				
			</ns2:eventDest>
		</ns2:mission-node>

		<ns2:mission-node name="cancelGOrder" expiredDays="0"
			expiredHours="0" autoTrigger="false">
			<ns2:description>取消本订单</ns2:description>
			<ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.GoldenOrderEditor"
				actionName="cancelGOrder" actionText="取消本订单">
				<ns2:expression>
					<expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.GOOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        GoldenOrderImpl gorder = (GoldenOrderImpl)out.get("beObject");
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
			<ns2:uiAction
				actionPage="org.shaolin.vogerp.ecommercial.form.GoldenSaleOrderEditor"
				actionName="cancelGOrder" actionText="取消本订单">
				<ns2:expression>
					<expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.GOOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        GoldenOrderImpl gorder = (GoldenOrderImpl)out.get("beObject");
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
					<type entityName="org.shaolin.vogerp.ecommercial.be.GoldenOrder"></type>
				</ns2:var>
				<ns2:expression>
					<expressionString><![CDATA[
                    import java.util.List;
                    import java.util.ArrayList;
                    import java.util.Date;
                    import java.util.HashMap;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.vogerp.order.be.IPurchaseOrder;
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.EOrderModel;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    {
                         if ($gorder.getId() == 0) {
                            return;
                         }
                         if ($gorder.getStatus() == OrderStatusType.CREATED || $gorder.getStatus() == OrderStatusType.PUBLISHED) {
	                         $gorder.setStatus(OrderStatusType.CANCELLED);
	                         EOrderModel.INSTANCE.update($gorder);
	                         
	                         if ($gorder.getTakenCustomerId() > 0) {
		                         NotificationImpl message = new NotificationImpl();
		                         message.setPartyId($gorder.getTakenCustomerId());
		                         message.setSubject("抢购单取消!");
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

		<ns2:mission-node name="forbiddenGOrder" expiredDays="0"
			expiredHours="0" autoTrigger="false">
			<ns2:description>禁用订单</ns2:description>
			<!-- dynamic action -->
			<ns2:uiAction
				actionPage="org.shaolin.vogerp.ecommercial.page.OrderManagementByAdmin"
				actionName="forbiddenGOrder" actionText="禁用订单">
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
                        Table orderInfoTable = (Table)@page.getElement("goldenOrderTable");
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
                    import org.shaolin.vogerp.ecommercial.dao.EOrderModel;
                    import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    {
                         if ($gorder.getId() == 0) {
                            return;
                         }
                         if ($gorder.getStatus() == OrderStatusType.PUBLISHED) {
	                         $gorder.setStatus(OrderStatusType.FORBIDDEN);
	                         
	                         if ($gorder instanceof GoldenOrderImpl) {
	                         	EOrderModel.INSTANCE.update((GoldenOrderImpl)$gorder);
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