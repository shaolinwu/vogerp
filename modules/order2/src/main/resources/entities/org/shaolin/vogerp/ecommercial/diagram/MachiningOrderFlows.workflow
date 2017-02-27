<?xml version="1.0" ?>
<ns2:Workflow xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:ns6="http://bmdp.shaolin.org/datamodel/PageDiagram" xmlns:ns5="http://bmdp.shaolin.org/datamodel/Page"
	xmlns:ns4="http://bmdp.shaolin.org/datamodel/RDBDiagram" xmlns:ns3="http://bmdp.shaolin.org/datamodel/BEDiagram"
	xmlns:ns2="http://bmdp.shaolin.org/datamodel/Workflow" xmlns="http://bmdp.shaolin.org/datamodel/Common"
	xsi:schemaLocation="">
	<entityName>org.shaolin.vogerp.ecommercial.diagram.MachiningOrderFlows</entityName>
	<systemVersion>0</systemVersion>
	<description>机械加工订单流程</description>
	<ns2:conf>
		<ns2:bootable>true</ns2:bootable>
		<!-- 
		<ns2:service name="userService" category="JavaClass">
			<type entityName="org.shaolin.vogerp.commonmodel.IUserService"></type>
		</ns2:service>
		 -->
	</ns2:conf>
    <ns2:flow name="PublishMachiningOrder" eventConsumer="PublishMachiningOrder">
        <ns2:conf>
        </ns2:conf>
        <ns2:start-node name="init">
            <ns2:process>
	            <ns2:var name="gOrder" category="BusinessEntity" scope="InOut">
	                <type entityName="org.shaolin.vogerp.ecommercial.be.MachiningOrder"></type>
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
        <ns2:mission-node name="publishGorder" expiredDays="0" expiredHours="0" autoTrigger="true">
            <ns2:description>评估加工订单</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.MachiningOrder"
                actionName="publishGorder" actionText="评估订单">
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
                    import org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl;
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
                    import org.shaolin.vogerp.commonmodel.be.DeliveryInfoImpl;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        MachiningOrderImpl gorder = (MachiningOrderImpl)out.get("beObject");
                        gorder.setCount(1);
			            if (gorder.getDeliveryInfo() == null) {
					        gorder.setDeliveryInfo((DeliveryInfoImpl)CustomerInfoUtil.createDeliveryInfo(UserContext.getUserContext().getUserId()));
				            OrderModel.INSTANCE.create(gorder.getDeliveryInfo());
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
                    <type entityName="org.shaolin.vogerp.ecommercial.be.MachiningOrder"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                     import java.util.Date;
                     import java.util.ArrayList;
                     import org.shaolin.uimaster.page.ajax.*;
                     import org.shaolin.vogerp.order.be.*;
                     import org.shaolin.vogerp.order.dao.OrderModel;
                     import org.shaolin.vogerp.commonmodel.dao.CommonModel;
                     import org.shaolin.bmdp.runtime.AppContext; 
                     import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                     import org.shaolin.bmdp.workflow.be.NotificationImpl;
                     import org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl;
                     import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
                     {
                         PersonalInfoImpl condition = new PersonalInfoImpl();
                         condition.setId($gOrder.getPublishedCustomerId());
                         List result = CommonModel.INSTANCE.searchPersonInfo(condition, null, 0, 1);
                         IPersonalInfo publisher = (IPersonalInfo)result.get(0);
                         
                         String subject = org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil.getCustomerEnterpriseBasicInfo(publisher);
                         String description = $gOrder.getDescription();
                         NotificationImpl message = new NotificationImpl();
					     message.setSubject(subject + "发布新的加工订单！");
				         message.setDescription(description);
					     message.setCreateDate(new Date());
                         
                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
                         service.addNotificationToAdmin(message, true);
                         
                         Dialog.showMessageDialog("操作成功！", "", Dialog.INFORMATION_MESSAGE, null);
                     }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
                <ns2:dest name="offerPrice"></ns2:dest>
            	<ns2:dest name="cancelGOrder"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        
        <ns2:mission-node name="offerPrice" expiredDays="0" expiredHours="0" autoTrigger="false" multipleInvoke="true">
            <ns2:description>加工订单估价</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.MachiningOrderByAdmin"
                actionName="offerPrice" actionText="出价">
                <ns2:expression>
                    <expressionString><![CDATA[
			        import java.util.HashMap;
			        import java.util.Date;
			        import java.util.ArrayList;
			        import org.shaolin.uimaster.page.AjaxContext;
			        import org.shaolin.uimaster.page.ajax.*;
			        import org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl;
			        import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
			        import org.shaolin.vogerp.ecommercial.dao.*;
			        import org.shaolin.bmdp.runtime.AppContext; 
			        import org.shaolin.vogerp.commonmodel.IUserService; 
			        import org.shaolin.vogerp.ecommercial.util.OrderUtil;
			        { 
			            RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
			            HashMap out = (HashMap)form.ui2Data();
			
			            MachiningOrderImpl order = (MachiningOrderImpl)out.get("beObject");
			            if (order.getEndPrice() <= 0) {
			            	Dialog.showMessageDialog("出价必需大于0", "", Dialog.WARNING_MESSAGE, null);
			                return;
			            }
			            order.setEstimatedPrice(order.getEndPrice());
			            
			            form.closeIfinWindows();
			            @page.removeForm(@page.getEntityUiid()); 
			            
			            HashMap result = new HashMap();
			            result.put("goldenOrder", order);
			            return result;
			        }
                    ]]></expressionString>
                </ns2:expression>
                <ns2:filter><expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                       return (UserContext.hasRole("Admin,0") || UserContext.hasRole("org.shaolin.vogerp.commonmodel.ce.GenericOrganizationType,3"))
                           && $beObject.getStatus() == OrderStatusType.PUBLISHED;
                    }
                ]]></expressionString></ns2:filter>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0"/>
            <ns2:process>
                <ns2:var name="goldenOrder" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.MachiningOrder"></type>
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
                     import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                     import org.shaolin.bmdp.workflow.be.NotificationImpl;
                     {
                          @flowContext.save($goldenOrder);
                          
                          NotificationImpl message = new NotificationImpl();
                          message.setPartyId($goldenOrder.getPublishedCustomerId());
                          message.setSubject($goldenOrder.getSerialNumber() + "有新的加工订单报价信息。");
                          message.setDescription($goldenOrder.getDescription());
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
            </ns2:eventDest>
        </ns2:mission-node>
        
        <ns2:mission-node name="acceptPrice" expiredDays="0" expiredHours="0" autoTrigger="false">
            <ns2:description>同意接受系统估价</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.MachiningOrderWithResult"
                actionName="acceptOfferPrice" actionText="同意成交订单">
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl;
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        MachiningOrderImpl gorder = (MachiningOrderImpl)out.get("beObject");
                        
                        HashMap result = new HashMap();
                        result.put("gorder", out.get("beObject"));
                        result.put("page", @page);
                        
                        form.closeIfinWindows();
                        @page.removeForm(@page.getEntityUiid()); 
                        
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
                <ns2:filter><expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                       return $beObject.getStatus() == OrderStatusType.PUBLISHED 
                           && $beObject.getPublishedCustomerId() == UserContext.getUserContext().getOrgId();
                    }
                ]]></expressionString></ns2:filter>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0" onlyOwner="true"/>
            <ns2:process>
                <ns2:var name="gorder" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.MachiningOrder"></type>
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
                    import org.shaolin.vogerp.order.be.*;
                    import org.shaolin.vogerp.ecommercial.be.*;
                    import org.shaolin.vogerp.ecommercial.ce.*;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.vogerp.ecommercial.dao.OrderModel;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService;
                    import org.shaolin.vogerp.commonmodel.IOrganizationService;
                    import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.vogerp.order.be.*;
                    import org.shaolin.vogerp.accounting.be.*;
                    import org.shaolin.vogerp.accounting.ce.*;
                    import org.shaolin.vogerp.accounting.IAccountingService;
                    import org.shaolin.bmdp.utils.StringUtil;
                    {
                         $gorder.setStatus(OrderStatusType.TAKEN);
                         OrderModel.INSTANCE.update($gorder);
                         
                         IAccountingService accountingService = (IAccountingService)AppContext.get().getService(IAccountingService.class);
                         IOrganizationService orgService = (IOrganizationService)AppContext.get().getService(IOrganizationService.class); 
                         IPayOrder payOrder = accountingService.createSelfPayOrder(PayBusinessType.MACHININGBUSI, 
                         						$gorder.getPublishedCustomerId(), $gorder.getSerialNumber(), $gorder.getEndPrice());
                         if (payOrder.getDescription() == null) {
	                         payOrder.setDescription("[" + $gorder.getPublishedCustomer().getOrganization().getDescription() + "]" 
	                                                    + $gorder.getDescription());
	                         @flowContext.save(payOrder);
                         }
                         String json = accountingService.prepay(payOrder);
		                 $page.getRequest().getSession().setAttribute("__payJson", json);
		                 $page.executeJavaScript("window.open('/uimaster/jsp/paywindow.jsp')");
		                 Dialog.showMessageDialog("请点击“刷新”按钮查看支付是否成功（本功能要求浏览器允许“弹出窗口”）。", "Information", Dialog.INFORMATION_MESSAGE, null);
                         
                         String description = $gorder.getDescription();
                         NotificationImpl message = new NotificationImpl();
                         message.setPartyId($gorder.getPublishedCustomerId());
                         message.setSubject("加工订单已确认，等待付款中！订单信息： " + description);
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
            	<ns2:dest name="PrepayCallBack" flow="PrepayFlow" entity="org.shaolin.vogerp.accounting.diagram.PaymentFlows"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        
        <ns2:mission-node name="cancelGOrder" expiredDays="0" expiredHours="0" autoTrigger="false">
            <ns2:description>取消本订单</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.MachiningOrder"
                actionName="cancelGOrder" actionText="取消本订单">
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        MachiningOrderImpl gorder = (MachiningOrderImpl)out.get("beObject");
                        
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
                       return $beObject.getStatus() == OrderStatusType.PUBLISHED;
                    }
                ]]></expressionString></ns2:filter>
            </ns2:uiAction>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.MachiningOrderByAdmin"
                actionName="cancelGOrder" actionText="取消本订单">
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl;
                    import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        MachiningOrderImpl gorder = (MachiningOrderImpl)out.get("beObject");
                        
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
                       return $beObject.getStatus() == OrderStatusType.PUBLISHED;
                    }
                ]]></expressionString></ns2:filter>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0" />
            <ns2:process>
                <ns2:var name="gorder" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.MachiningOrder"></type>
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
                    import org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl;
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
                             
                             if ($gorder.getPublishedCustomerId() > 0) {
                                 NotificationImpl message = new NotificationImpl();
                                 message.setPartyId($gorder.getPublishedCustomerId());
                                 message.setSubject($gorder.getSerialNumber() + "加工订单取消!");
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
        
        <ns2:end-node name="endNode"></ns2:end-node>
        </ns2:flow>
</ns2:Workflow>