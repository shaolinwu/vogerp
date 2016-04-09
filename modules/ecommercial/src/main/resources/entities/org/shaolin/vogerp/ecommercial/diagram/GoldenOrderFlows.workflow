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
	            <ns2:var name="purchaseOrder" category="BusinessEntity" scope="InOut">
	                <type entityName="org.shaolin.vogerp.order.be.PurchaseOrder"></type>
	            </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.ce.CEUtil;
                    import org.shaolin.vogerp.order.ce.OrderStatusType;
                    {
                      // set processing
                      $purchaseOrder.setStatus((OrderStatusType)CEUtil.getConstantEntity("org.shaolin.vogerp.order.ce.OrderStatusType", 1));
                      @flowContext.save($purchaseOrder);
                      //assign task id to sales order. this object is passed from blow action actually.
                    }]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="publishGorder"></ns2:dest>
        </ns2:start-node>
        <ns2:mission-node name="publishGorder" expiredDays="5" expiredHours="0" autoTrigger="true">
            <ns2:description>发送采购单给所有客户</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.order.form.PurchaseOrder"
                actionName="publishGorder" actionText="发送采购单给大家">
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
                    import org.shaolin.vogerp.order.be.PurchaseOrderImpl;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        PurchaseOrderImpl defaultUser = (PurchaseOrderImpl)out.get("beObject");
                        if (defaultUser.getId() == 0) {
                           return false;
                        }
                        
                        form.closeIfinWindows();
                        @page.removeForm(@page.getEntityUiid()); 
                        
                        HashMap result = new HashMap();
                        result.put("purchaseOrder", out.get("beObject"));
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0" />
            <ns2:process>
                <ns2:var name="purchaseOrder" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.order.be.PurchaseOrder"></type>
                </ns2:var>
                <ns2:var name="goldenOrder" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.GoldenOrder"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import java.util.HashMap;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.vogerp.order.be.IPurchaseOrder;
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.order.be.IPurchaseItem;
                    {
                         GoldenOrderImpl order = new GoldenOrderImpl();
                         order.setSerialNumber(OrderUtil.genSerialNumber());
                         order.setDescription($purchaseOrder.getDescription());
                         
                         List items = $purchaseOrder.getItems();
                         IPurchaseItem a = (IPurchaseItem)items.get(0);
                         order.setEstimatedPrice(a.getUnitPrice() * a.getAmount());
                         IUserService service = (IUserService)AppContext.get().getService(IUserService.class); 
                         order.setPublishedCustomerId(service.getUserId());
                         order.setPurchaseOrderId($purchaseOrder.getId());
                         //order.setPhotos();
                         order.setCreateDate(new Date());
                         order.setExpiredDate(new Date());
                         order.setStatus(OrderStatusType.PUBLISHED);
                         DateUtil.increaseOneHour(order.getExpiredDate());
                         
                         @flowContext.save(order);
                         $goldenOrder = order;
                    }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="goToGoldenOrder"></ns2:dest>
        </ns2:mission-node>
        <ns2:node name="goToGoldenOrder">
            <ns2:description>通知客户有新的抢购订单</ns2:description>
            <ns2:process>
                <ns2:var name="goldenOrder" category="BusinessEntity" scope="In">
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
                         // notify all customers.
                         PersonalInfoImpl condition = new PersonalInfoImpl();
                         condition.setId($goldenOrder.getPublishedCustomerId());
                         List result = CommonModel.INSTANCE.searchPersonInfo(condition, null, 0, 1);
                         IPersonalInfo publisher = (IPersonalInfo)result.get(0);
                         
                         String subject = org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil.getCustomerEnterpriseBasicInfo(publisher);
                         String description = $goldenOrder.getDescription();
                         NotificationImpl message = new NotificationImpl();
                         message.setPartyId($goldenOrder.getPublishedCustomerId());
					     message.setSubject(subject + "发布新的抢购订单！！！");
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
			            
			            // compare the prices.
			            if (!OrderUtil.compareAPrice(order, offerPrice)) {
			                @page.getLabel("resultUILabel").setValue("竞价失败，请刷新价格！");
			                return;
			            }
			            
			            form.closeIfinWindows();
			            @page.removeForm(@page.getEntityUiid()); 
			            
			            HashMap result = new HashMap();
			            result.put("goldenOrder", out.get("beObject"));
			            return result;
			        }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0" />
            <ns2:process>
                <ns2:var name="goldenOrder" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.GoldenOrder"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                     import java.util.List;
                     import java.util.ArrayList;
                     import org.shaolin.vogerp.order.be.*;
                     import org.shaolin.vogerp.order.dao.OrderModel;
                     {
                          
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
                        
                        HashMap result = new HashMap();
                        result.put("gorder", out.get("beObject"));
                        
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
                        
                        HashMap result = new HashMap();
                        result.put("gorder", out.get("beObject"));
                        
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
                         $gorder.setEndPrice(OrderUtil.getLowestOfferPrice($gorder, true));
                         $gorder.setTakenCustomerId(OrderUtil.getLowestOfferPriceCustId($gorder));
                         $gorder.setStatus(OrderStatusType.TAKEN);
                         OrderModel.INSTANCE.update($gorder, true);//must commit.
                         
                         PurchaseOrderImpl purchaseOrder = new PurchaseOrderImpl();
                         purchaseOrder.setId($gorder.getPurchaseOrderId());
                         List result = org.shaolin.vogerp.order.dao.OrderModel.INSTANCE.searchPurchaseOrder(purchaseOrder, null, 0, 1);
                         purchaseOrder = (PurchaseOrderImpl)result.get(0);
                         
                         IOrganizationService orgService = (IOrganizationService)AppContext.get().getService(IOrganizationService.class); 
                         SaleOrderImpl saleOrder = new SaleOrderImpl();
                         saleOrder.setOrgId(orgService.getOrgIdByPartyId($gorder.getTakenCustomerId()));
                         saleOrder.setDescription("客户要求: " + purchaseOrder.getDescription());
                         saleOrder.setCustomerId($gorder.getPublishedCustomerId());
                         saleOrder.setPurchasedOrderId(purchaseOrder.getId());
                         saleOrder.setDeliveryDate(purchaseOrder.getDeliveryDate());
                         saleOrder.setSerialNumber(org.shaolin.vogerp.order.util.OrderUtil.genSaleOrderSerialNumber());
                         saleOrder.setStatus(org.shaolin.vogerp.order.ce.OrderStatusType.CREATED);
                         saleOrder.setDeliveryInfoId(purchaseOrder.getDeliveryInfoId());
                         
                         ArrayList saleOrderItems = new ArrayList();
                         List purchaseItems = purchaseOrder.getItems();
                         for (int i=0; i<purchaseItems.size(); i++) {
                             PurchaseItemImpl pItem = (PurchaseItemImpl)purchaseItems.get(i);
	                         OrderItemImpl item = new OrderItemImpl();
	                         item.setAmount(pItem.getAmount());
	                         item.setUnitPrice(pItem.getUnitPrice());
	                         item.setComment(pItem.getComment());
	                         saleOrderItems.add(item);
                         }
                         saleOrder.setItems(saleOrderItems);
                         
                         IAccountingService accountingService = (IAccountingService)AppContext.get().getService(IAccountingService.class);
                         IPayOrder payOrder = accountingService.createPayOrder(PayBusinessType.GOLDENORDERBUSI, $gorder.getId(), $gorder.getEndPrice());
                         @flowContext.save(payOrder);
                         @flowContext.save(saleOrder);
                         
                         $gorder.setSaleOrderId(saleOrder.getId());
                         $gorder.setSaleOrderId(saleOrder.getId());
                         OrderModel.INSTANCE.update($gorder, true);
                          
                         String description = $gorder.getDescription();
                         NotificationImpl message = new NotificationImpl();
                         message.setPartyId($gorder.getTakenCustomerId());
                         message.setSubject("恭喜您成功抢购订单！等待预付款中。订单信息： " + description);
                         message.setDescription(description);
                         message.setCreateDate(new Date());
                         
                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
                         service.addNotification(message, true);
                    }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="makePaymentToCustomer"></ns2:dest>
        </ns2:mission-node>
        <ns2:mission-node name="makePaymentToCustomer" expiredDays="0" expiredHours="1" autoTrigger="false">
            <ns2:description>支付预付款项</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.GoldenOrder"
                actionName="prepaid" actionText="支付预付款项">
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
                        
                        form.closeIfinWindows();
                        @page.removeForm(@page.getEntityUiid()); 
                        
                        HashMap result = new HashMap();
                        result.put("gorder", out.get("beObject"));
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
                    import org.shaolin.vogerp.ecommercial.be.GOOfferPriceImpl;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    {
                    }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
        </ns2:mission-node>
        
        <ns2:mission-node name="cancelGOrder" expiredDays="0" expiredHours="0" autoTrigger="false">
            <ns2:description>取消本订单</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.GoldenOrder"
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
                        
                        form.closeIfinWindows();
                        @page.removeForm(@page.getEntityUiid()); 
                        
                        HashMap result = new HashMap();
                        result.put("gorder", out.get("beObject"));
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
                         // TODO: check condition before cancelling the order.
                         
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
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="endNode"></ns2:dest>
        </ns2:mission-node>
        
        <ns2:end-node name="endNode"></ns2:end-node>
        </ns2:flow>
</ns2:Workflow>