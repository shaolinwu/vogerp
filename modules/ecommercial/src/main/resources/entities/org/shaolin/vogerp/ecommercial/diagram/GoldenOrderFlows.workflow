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
		<ns2:service name="userService" category="JavaClass">
			<type entityName="org.shaolin.vogerp.commonmodel.IUserService"></type>
		</ns2:service>
	</ns2:conf>
	<!-- 通知流程 -->
    <ns2:flow name="GoldenOrderFlow" eventConsumer="GoldenOrder">
        <ns2:conf>
            <!-- <ns2:param name="saleOrder" category="BusinessEntity"> 
            <type entityName="org.shaolin.vogerp.order.be.SaleOrder"></type> 
                </ns2:param> -->
        </ns2:conf>
        <ns2:start-node name="init">
            <ns2:process>
                <ns2:expression>
                    <expressionString><![CDATA[""]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="publishGorder"></ns2:dest>
        </ns2:start-node>
        <ns2:mission-node name="publishGorder" expiredDays="5" expiredHours="0" autoTrigger="true">
            <ns2:description>发送采购单给所有客户</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.order.form.PurchaseOrder"
                actionName="publishGorder" actionText="发送采购单">
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
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.Date;
                    import java.util.HashMap;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.vogerp.order.be.IPurchaseOrder;
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    {
                         GoldenOrderImpl order = new GoldenOrderImpl();
                         order.setSerialNumber(OrderUtil.genSerialNumber());
                         order.setDescription($purchaseOrder.getDescription());
                         IUserService service = (IUserService)AppContext.get().getService(IUserService.class); 
                         order.setPublishedCustomerId(service.getUserId());
                         order.setPurchaseOrderId($purchaseOrder.getId());
                         order.setCreateDate(new Date());
                         order.setExpiredDate(new Date());
                         DateUtil.increaseOneHour(order.getExpiredDate());
                         
                         @flowContext.save($purchaseOrder);
                         @flowContext.save(order);
                         
                         HashMap result = new HashMap();
                         result.put("goldenOrder", order);
                         return result;
                    }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="goToGoldenOrder"></ns2:dest>
        </ns2:mission-node>
        <ns2:mission-node name="goToGoldenOrder" expiredDays="0" expiredHours="0" autoTrigger="true">
            <ns2:description>通知客户有新的抢购订单</ns2:description>
            <ns2:process>
                <ns2:var name="goldenOrder" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.GoldenOrder"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                     import java.util.List;
                     import java.util.Date;
                     import java.util.ArrayList;
                     import org.shaolin.vogerp.order.be.*;
                     import org.shaolin.vogerp.order.dao.OrderModel;
                     import org.shaolin.bmdp.runtime.AppContext; 
                     import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                     import org.shaolin.bmdp.workflow.be.NotificationImpl;
                     {
                         // notify all customers.
                         String subject = org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil.getCustomerEnterpriseBasicInfo($goldenOrder.getPublishedCustomer());
                         String description = $goldenOrder.getDescription();
                         NotificationImpl message = new NotificationImpl();
                         message.setPartyId($goldenOrder.getPublishedCustomerId());
					     message.setSubject(subject + "发布新的抢购订单！！！");
				         message.setDescription(description);
					     message.setCreateTime(new Date());
                         
                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
                         service.addNotification(message, true);
                     }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="offerPrice"></ns2:dest>
        </ns2:mission-node>
        <ns2:mission-node name="offerPrice" expiredDays="5" expiredHours="0" autoTrigger="false">
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
			        { 
			            RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
			            HashMap out = (HashMap)form.ui2Data();
			
			            GoldenOrderImpl order = (GoldenOrderImpl)out.get("beObject");
			            GOOfferPriceImpl offerPrice = new GOOfferPriceImpl();
			            
			            IUserService service = (IUserService)AppContext.get().getService(IUserService.class); 
			            offerPrice.setTakenCustomerId(service.getUserId());
			            offerPrice.setPrice(Double.valueOf(@page.getTextField("priceUI").getValue()));
			            offerPrice.setCreateDate(new Date());
			            
			            //TODO: compare offer price
			            if (offerPrice.getPrice() >= order.getEndPrice()) {
			                
			                return;
			            }
			            
			            if (order.getOfferPrices() == null) {
			                order.setOfferPrices(new ArrayList());
			            }
			            order.getOfferPrices().add(offerPrice);
			
			            OrderModel.INSTANCE.update(order);
			            
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
            <ns2:dest name="endNode"></ns2:dest>
        </ns2:mission-node>
        <ns2:end-node name="endNode"></ns2:end-node>
    </ns2:flow>
</ns2:Workflow>