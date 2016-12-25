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
		<!-- 
		<ns2:service name="userService" category="JavaClass">
			<type entityName="org.shaolin.vogerp.commonmodel.IUserService"></type>
		</ns2:service>
		 -->
	</ns2:conf>
	<!-- 通知流程 -->
    <ns2:flow name="PublishGoldenOrder" eventConsumer="PublishGoldenOrder">
        <ns2:conf>
        </ns2:conf>
        <ns2:start-node name="init">
            <ns2:process>
	            <ns2:var name="gOrder" category="BusinessEntity" scope="InOut">
	                <type entityName="org.shaolin.vogerp.ecommercial.be.GoldenOrder"></type>
	            </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.ce.CEUtil;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                      $gOrder.setStatus(OrderStatusType.PUBLISHED);
                      $gOrder.setSessionId(@flowContext.getSession().getID());
                      @flowContext.save($gOrder);
                      //assign task id to sales order. this object is passed from blow action actually.
                    }]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="publishGorder"></ns2:dest>
        </ns2:start-node>
        <ns2:mission-node name="publishGorder" expiredDays="5" expiredHours="0" autoTrigger="true">
            <ns2:description>发布抢购单给所有客户</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.GoldenOrderEditor"
                actionName="publishGorder" actionText="发布此单给大家">
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
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        GoldenOrderImpl gorder = (GoldenOrderImpl)out.get("beObject");
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
                    import java.util.HashMap;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.productmodel.IProductService;
                    import org.shaolin.vogerp.productmodel.be.ProductImpl;
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.GOrderSearchCriteriaImpl;
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    {
                       // add the search criteria.
                       GOrderSearchCriteriaImpl sc = new GOrderSearchCriteriaImpl();
                       sc.setOrderId($gOrder.getId());
                       sc.setCity($gOrder.getCity());
                       if ($gOrder.getProductId() > 0) {
                          sc.setProductType(((ProductImpl)OrderModel.INSTANCE.get($gOrder.getProductId(), ProductImpl.class)).getType());
                       }
                       OrderModel.INSTANCE.create(sc);
                    }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="goToGoldenOrder"></ns2:dest>
        </ns2:mission-node>
        <ns2:node name="goToGoldenOrder">
            <ns2:description>通知客户有新的抢购订单</ns2:description>
            <ns2:process>
                <ns2:var name="gOrder" category="BusinessEntity" scope="In">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.GoldenOrder"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                     import java.util.List;
                     import java.util.Date;
                     import java.util.ArrayList;
                     import org.shaolin.vogerp.order.be.*;
                     import org.shaolin.vogerp.order.dao.OrderModel;
                     import org.shaolin.vogerp.commonmodel.dao.CommonModel;
                     import org.shaolin.bmdp.runtime.AppContext; 
                     import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                     import org.shaolin.bmdp.workflow.be.NotificationImpl;
                     import org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl;
                     import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
                     {
                         //TODO: notify all interested customers.
                         
                         // notify self.
                         PersonalInfoImpl condition = new PersonalInfoImpl();
                         condition.setId($gOrder.getPublishedCustomerId());
                         List result = CommonModel.INSTANCE.searchPersonInfo(condition, null, 0, 1);
                         IPersonalInfo publisher = (IPersonalInfo)result.get(0);
                         
                         String subject = org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil.getCustomerEnterpriseBasicInfo(publisher);
                         String description = $gOrder.getDescription();
                         NotificationImpl message = new NotificationImpl();
                         message.setPartyId($gOrder.getPublishedCustomerId());
					     message.setSubject(subject + "发布新的抢购订单！");
				         message.setDescription(description);
					     message.setCreateDate(new Date());
                         
                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
                         service.addNotification(message, true);
                     }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
        </ns2:node>
        
        <ns2:mission-node name="offerPrice" expiredDays="0" expiredHours="0" autoTrigger="false" multipleInvoke="true">
            <ns2:description>抢购订单竟价</ns2:description>
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
			        import org.shaolin.vogerp.commonmodel.IUserService; 
			        import org.shaolin.vogerp.ecommercial.util.OrderUtil;
			        { 
			            RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
			            HashMap out = (HashMap)form.ui2Data();
			
			            GoldenOrderImpl order = (GoldenOrderImpl)out.get("beObject");
			            GOOfferPriceImpl offerPrice = new GOOfferPriceImpl();
			            IUserService service = (IUserService)AppContext.get().getService(IUserService.class); 
			            offerPrice.setTakenCustomerId(service.getUserId());
			            offerPrice.setPrice(Double.valueOf(@page.getTextField("priceUI").getValue()));
			            offerPrice.setCreateDate(new Date());
			            offerPrice.setSamplePhoto(@page.getHidden("samplePhotoUI.imagePathUI").getValue());
			            offerPrice.setLeaveWords(@page.getTextArea("leaveWordUI").getValue());
			            offerPrice.setSessionId(OrderUtil.genConversationId());
			            
			            // compare the prices.
			            if (!OrderUtil.addAPrice(order, offerPrice)) {
			                @page.getLabel("resultUILabel").setValue("竞价失败，请刷新订单状态！");
			                return;
			            }
			            
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
            <ns2:participant partyType="GenericOrganizationType.Director,0" onlyOwner="false"/>
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
                     import org.shaolin.bmdp.runtime.AppContext; 
                     import org.shaolin.bmdp.runtime.security.UserContext;
                     import org.shaolin.vogerp.ecommercial.ce.EOrderType;
                     import org.shaolin.vogerp.ecommercial.be.InterestEOrderImpl;
                     import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                     import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                     import org.shaolin.bmdp.workflow.be.NotificationImpl;
                     import org.shaolin.bmdp.workflow.ws.ChatService;
                     {
                          InterestEOrderImpl condition = new InterestEOrderImpl();
                          condition.setOrgId(UserContext.getUserContext().getOrgId());
                          condition.setOrderId($goldenOrder.getId());
                          condition.setType(EOrderType.GOLDENORDER);
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
                          message.setSubject($goldenOrder.getSerialNumber() + "有新的竞价信息。");
                          message.setDescription($goldenOrder.getDescription());
                          message.setCreateDate(new java.util.Date());
	                      
	                      ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
	                      service.addNotification(message, true);
                     }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
        </ns2:mission-node>
        
        <ns2:mission-node name="acceptPrice" expiredDays="0" expiredHours="0" autoTrigger="false">
            <ns2:description>接受当前价格</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.GOOfferPriceTable"
                actionName="acceptOfferPrice" actionText="按当前价格成交">
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
                        if (out.get("selectedPrice") == null) {
                            @page.executeJavaScript("alert(\"请选择一个客户竟价单。\");");
                            return;
                        }
                        GOOfferPriceImpl selectedPrice= (GOOfferPriceImpl)out.get("selectedPrice");
                        IUserService service = (IUserService)AppContext.get().getService(IUserService.class); 
                        if (!service.hasAddressConfigured(selectedPrice.getTakenCustomerId())) {
                            @page.executeJavaScript("alert(\"无法成交，因竟价客户没有配置默认地址！\");");
                            return;
                        }
                        
                        HashMap result = new HashMap();
                        result.put("gorder", out.get("beObject"));
                        result.put("selectedPrice", out.get("selectedPrice"));
                        result.put("offerLowestPrice", Boolean.FALSE);
                        
                        form.closeIfinWindows();
                        @page.removeForm(@page.getEntityUiid()); 
                        
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.GOOfferPriceTable"
                actionName="acceptOfferPrice1" actionText="按当最低价格成交">
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
                        if (gorder.getOfferPrices() == null || gorder.getOfferPrices().size() == 0) {
                            @page.executeJavaScript("alert(\"当前没有客户竟价单。\");");
                            return;
                        }
                        GOOfferPriceImpl selectedPrice= (GOOfferPriceImpl)out.get("selectedPrice");
                        IUserService service = (IUserService)AppContext.get().getService(IUserService.class); 
                        if (!service.hasAddressConfigured(selectedPrice.getTakenCustomerId())) {
                            @page.executeJavaScript("alert(\"无法成交，因竟价客户没有配置默认地址！\");");
                            return;
                        }
                        
                        HashMap result = new HashMap();
                        result.put("gorder", out.get("beObject"));
                        result.put("selectedPrice", selectedPrice);
                        result.put("offerLowestPrice", Boolean.TRUE);
                        
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
                    <type entityName="org.shaolin.vogerp.ecommercial.be.GoldenOrder"></type>
                </ns2:var>
                <ns2:var name="offerLowestPrice" category="JavaPrimitive" scope="InOut">
                    <type entityName="java.lang.Boolean"></type>
                </ns2:var>
                <ns2:var name="selectedPrice" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.GOOfferPrice"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.ArrayList;
                    import java.util.Date;
                    import java.util.HashMap;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.vogerp.order.be.IPurchaseOrder;
                    import org.shaolin.vogerp.order.be.ISaleOrder;
                    import org.shaolin.vogerp.order.be.SaleOrderImpl;
                    import org.shaolin.vogerp.order.be.OrderItemImpl;
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.GOOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.ce.GoldenOrderType;
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
                    import org.shaolin.vogerp.commonmodel.IOrganizationService;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.PayBusinessType;
                    import org.shaolin.vogerp.accounting.IAccountingService;
                    {
                         if ($offerLowestPrice != null && $offerLowestPrice == Boolean.TRUE) {
                            $gorder.setEndPrice(OrderUtil.getLowestOfferPrice($gorder, true));
                            $gorder.setTakenCustomerId(OrderUtil.getLowestOfferPriceCustId($gorder));
                         } else {
                            $gorder.setEndPrice($selectedPrice.getPrice());
                            $gorder.setTakenCustomerId($selectedPrice.getTakenCustomerId());
                         }
                         $gorder.setStatus(OrderStatusType.TAKEN);
                         OrderModel.INSTANCE.update($gorder);
                         
                         IOrganizationService orgService = (IOrganizationService)AppContext.get().getService(IOrganizationService.class); 
                         IAccountingService accountingService = (IAccountingService)AppContext.get().getService(IAccountingService.class);
                         if ($gorder.getType() == GoldenOrderType.PURCHASE) {
	                         IPayOrder payOrder = accountingService.createSelfPayOrder(PayBusinessType.GOLDENPORDERBUSI, 
	                         						$gorder.getPublishedCustomerId(), $gorder.getSerialNumber(), $gorder.getEndPrice());
	                         @flowContext.save(payOrder);
                         } else {
	                         long orgId = orgService.getOrgIdByPartyId($gorder.getTakenCustomerId());
                             IPayOrder payOrder = accountingService.createPayOrder(PayBusinessType.GOLDENSORDERBUSI, 
                             						orgId, $gorder.getTakenCustomerId(), UserContext.getUserContext().getUserId(), 
                             						$gorder.getSerialNumber(), $gorder.getEndPrice());
	                         @flowContext.save(payOrder);
                         }
                         
                         String description = $gorder.getDescription();
                         NotificationImpl message = new NotificationImpl();
                         message.setPartyId($gorder.getTakenCustomerId());
                         message.setSubject("恭喜您成功抢购订单！等待付款中...订单信息： " + description);
                         message.setDescription(description);
                         message.setCreateDate(new Date());
                         
                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
                         service.addNotification(message, true);
                    }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
        </ns2:mission-node>
        
        <ns2:mission-node name="cancelGOrder" expiredDays="0" expiredHours="0" autoTrigger="false">
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
                <ns2:filter><expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                       return UserContext.hasRole("GenericOrganizationType.Director,0") 
                              && $beObject.getId() > 0 
                              && $beObject.getStatus() == OrderStatusType.PUBLISHED
                              && UserContext.getUserContext().getOrgId() == $beObject.getOrgId();
                    }
                ]]></expressionString></ns2:filter>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0"/>
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
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.vogerp.order.be.IPurchaseOrder;
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
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
		                         message.setSubject($gorder.getSerialNumber() + "抢购单取消");
		                         message.setDescription($gorder.getDescription());
		                         message.setCreateDate(new Date());
		                         
		                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
		                         service.addNotification(message, true);
	                         }
                         }
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="endNode"></ns2:dest>
        </ns2:mission-node>
        
        <ns2:mission-node name="forbiddenGOrder" expiredDays="0" expiredHours="0" autoTrigger="false">
            <ns2:description>禁用订单</ns2:description>
            <!-- dynamic action -->
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.page.OrderManagementByAdmin" actionName="forbiddenGOrder" actionText="禁用订单">
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
                        String tableId = "goldenOrderTable";
                        TabPane tabPanel = (TabPane)@page.getElement("functionsTab");
                        if (tabPanel.getSelectedIndex() == 0) {
                           tableId = "goldenOrderTable";
                        } else if (tabPanel.getSelectedIndex() == 1) {
                           tableId = "gsaleOrderTable";
                        } else if (tabPanel.getSelectedIndex() == 2) {
                           tableId = "rentOrderTable";
                        } else if (tabPanel.getSelectedIndex() == 2) {
                           tableId = "loanOrderTable";
                        } else {
                           Dialog.showMessageDialog("未支持的订单类型！", "Error", Dialog.ERROR_MESSAGE, null);
                           return;
                        }
                        Table orderInfoTable = (Table)@page.getElement(tableId);
                        if (orderInfoTable.getSelectedRow() == null) {
                            Dialog.showMessageDialog("没有订单选中！", "Error", Dialog.ERROR_MESSAGE, null);
                            return;
                        }
                        IEOrder order = (IEOrder)orderInfoTable.getSelectedRow();
                        if (order.getStatus() != OrderStatusType.PUBLISHED) {
                           Dialog.showMessageDialog("只有处于发布状态的订单可以禁用！", "Error", Dialog.ERROR_MESSAGE, null);
                           return;
                        }
                        order.setDescription("[管理员留言： "+ @page.getTextArea("comment").getValue()+"]"+ order.getDescription());
                        
                        HashMap result = new HashMap();
                        result.put("gorder", order);
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
                <ns2:filter><expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                       // only admin
                       return UserContext.hasRole("org.shaolin.vogerp.commonmodel.ce.GenericOrganizationType,3;Admin,0") 
                              && $beObject.getStatus() == OrderStatusType.PUBLISHED
                    }
                ]]></expressionString></ns2:filter>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0"/>
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
	                         
	                         if ($gorder instanceof GoldenOrderImpl) {
	                         	OrderModel.INSTANCE.update((GoldenOrderImpl)$gorder);
	                         } else if ($gorder instanceof RentOrLoanOrderImpl) {
	                            OrderModel.INSTANCE.update((RentOrLoanOrderImpl)$gorder);
	                         }
	                         if ($gorder.getPublishedCustomerId() > 0) {
		                         NotificationImpl message = new NotificationImpl();
		                         message.setPartyId($gorder.getPublishedCustomerId());
		                         message.setSubject($gorder.getSerialNumber() + "抢购单由于不适合抢单规定，已被管理员禁用此单！");
		                         message.setDescription($gorder.getDescription());
		                         message.setCreateDate(new Date());
		                         
		                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
		                         service.addNotification(message, true);
	                         }
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