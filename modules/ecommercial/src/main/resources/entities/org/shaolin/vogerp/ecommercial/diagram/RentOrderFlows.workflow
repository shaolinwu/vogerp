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
                      $gOrder.setStatus(OrderStatusType.PUBLISHED);
                      @flowContext.save($gOrder);
                      //assign task id to sales order. this object is passed from blow action actually.
                    }]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="publishGorder"></ns2:dest>
        </ns2:start-node>
        <ns2:mission-node name="publishGorder" expiredDays="5" expiredHours="0" autoTrigger="true">
            <ns2:description>发布租赁订单给所有客户</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.RentOrLoanOrderEditor"
                actionName="publishGorder" actionText="发布此单给大家">
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
                    import org.shaolin.vogerp.order.be.PurchaseOrderImpl;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        RentOrLoanOrderImpl gorder = (RentOrLoanOrderImpl)out.get("beObject");
                        if (gorder.getId() == 0) {
                           @page.executeJavaScript("alert(\"请先保存订单!\");");
                           return;
                        }
                        
                        form.closeIfinWindows();
                        @page.removeForm(@page.getEntityUiid()); 
                        
                        HashMap result = new HashMap();
                        result.put("gOrder", out.get("beObject"));
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
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
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.productmodel.IProductService;
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    {
                    }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="goToGoldenOrder"></ns2:dest>
        </ns2:mission-node>
        <ns2:node name="goToGoldenOrder">
            <ns2:description>通知客户有新的租赁订单</ns2:description>
            <ns2:process>
                <ns2:var name="gOrder" category="BusinessEntity" scope="In">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.RentOrLoanOrder"></type>
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
                         condition.setId($gOrder.getPublishedCustomerId());
                         List result = CommonModel.INSTANCE.searchPersonInfo(condition, null, 0, 1);
                         IPersonalInfo publisher = (IPersonalInfo)result.get(0);
                         
                         String subject = org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil.getCustomerEnterpriseBasicInfo(publisher);
                         String description = $gOrder.getDescription();
                         NotificationImpl message = new NotificationImpl();
                         message.setPartyId($gOrder.getPublishedCustomerId());
					     message.setSubject(subject + "发布新的租赁订单！");
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
			        import org.shaolin.vogerp.commonmodel.IUserService; 
			        import org.shaolin.vogerp.ecommercial.util.OrderUtil;
			        { 
			            RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
			            HashMap out = (HashMap)form.ui2Data();
			
			            RentOrLoanOrderImpl order = (RentOrLoanOrderImpl)out.get("beObject");
			            ROOfferPriceImpl offerPrice = new ROOfferPriceImpl();
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
            <ns2:participant partyType="GenericOrganizationType.Director,0" onlyOwner="false"/>
            <ns2:process>
                <ns2:var name="goldenOrder" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.RentOrLoanOrder"></type>
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
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.ROOfferPriceTable"
                actionName="acceptOfferPrice" actionText="按当前价格成交">
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
                        if (out.get("selectedPrice") == null) {
                            @page.executeJavaScript("alert(\"请选择一个竟价单。\");");
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
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.ROOfferPriceTable"
                actionName="acceptOfferPrice1" actionText="按当最低价格成交">
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
                        if (gorder.getOfferPrices() == null || gorder.getOfferPrices().size() == 0) {
                            @page.executeJavaScript("alert(\"当前没有客户竟价单。\");");
                            return;
                        }
                        
                        HashMap result = new HashMap();
                        result.put("gorder", out.get("beObject"));
                        result.put("selectedPrice", out.get("selectedPrice"));
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
                    <type entityName="org.shaolin.vogerp.ecommercial.be.RentOrLoanOrder"></type>
                </ns2:var>
                <ns2:var name="offerLowestPrice" category="JavaPrimitive" scope="InOut">
                    <type entityName="java.lang.Boolean"></type>
                </ns2:var>
                <ns2:var name="selectedPrice" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.ROOfferPrice"></type>
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
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
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
                         OrderModel.INSTANCE.update($gorder, true);//must commit.
                         
                         IOrganizationService orgService = (IOrganizationService)AppContext.get().getService(IOrganizationService.class); 
                         IAccountingService accountingService = (IAccountingService)AppContext.get().getService(IAccountingService.class);
                         IPayOrder payOrder = accountingService.createPayOrder(PayBusinessType.GOLDENORDERBUSI, $gorder.getId(), $gorder.getEndPrice());
                         @flowContext.save(payOrder);
                         
                         String description = $gorder.getDescription();
                         NotificationImpl message = new NotificationImpl();
                         message.setPartyId($gorder.getTakenCustomerId());
                         message.setSubject("恭喜您成功抢到租赁订单！等待预付款中。订单信息： " + description);
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
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.RentOrLoanOrderEditor"
                actionName="prepaid" actionText="支付预付款项">
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
                    <type entityName="org.shaolin.vogerp.ecommercial.be.RentOrLoanOrder"></type>
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
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
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
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.RentOrLoanOrderEditor"
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
                    <type entityName="org.shaolin.vogerp.ecommercial.be.RentOrLoanOrder"></type>
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
                    import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
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
	                         message.setSubject($gorder.getSerialNumber() + "租赁单取消");
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