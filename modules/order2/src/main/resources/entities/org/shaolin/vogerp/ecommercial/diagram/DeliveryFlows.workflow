<?xml version="1.0" ?>
<ns2:Workflow xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:ns6="http://bmdp.shaolin.org/datamodel/PageDiagram" xmlns:ns5="http://bmdp.shaolin.org/datamodel/Page"
	xmlns:ns4="http://bmdp.shaolin.org/datamodel/RDBDiagram" xmlns:ns3="http://bmdp.shaolin.org/datamodel/BEDiagram"
	xmlns:ns2="http://bmdp.shaolin.org/datamodel/Workflow" xmlns="http://bmdp.shaolin.org/datamodel/Common"
	xsi:schemaLocation="">
	<entityName>org.shaolin.vogerp.ecommercial.diagram.DeliveryFlows</entityName>
	<systemVersion>0</systemVersion>
	<description>发货流程</description>
	<ns2:conf>
		<ns2:bootable>true</ns2:bootable>
	</ns2:conf>
	<!-- 通知流程 -->
    <ns2:flow name="DeliveryOrder" eventConsumer="DeliveryOrder">
        <ns2:conf />
        
        <ns2:mission-node name="deliveryOrder" expiredDays="0" expiredHours="0" autoTrigger="false" multipleInvoke="true">
            <ns2:description>确认发货</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.OrderPaymentAndDeliveryTrack"
                actionName="deliveryOrder" actionText="发货" isHidden="true">
                <ns2:expression>
                    <expressionString><![CDATA[
			        import java.util.HashMap;
			        import java.util.Date;
			        import java.util.ArrayList;
			        import org.shaolin.bmdp.runtime.AppContext; 
			        import org.shaolin.uimaster.page.AjaxContext;
			        import org.shaolin.uimaster.page.ajax.*;
			        import org.shaolin.vogerp.ecommercial.be.*;
			        import org.shaolin.vogerp.ecommercial.ce.*;
			        import org.shaolin.vogerp.ecommercial.dao.*;
			        import org.shaolin.vogerp.ecommercial.util.OrderUtil;
			        import org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl;
			        import org.shaolin.vogerp.commonmodel.dao.CommonModel;
			        { 
			            RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        IEOrder order = (IEOrder)form.getInputParameter("order");
			            if (order.getDeliveryInfoId() == 0) {
			                Dialog.showMessageDialog("您还没有填写快递信息。请输入快递编号和选择快递商家,方便对方确认哟！", "", Dialog.WARNING_MESSAGE, null);
			                return false;
			            }
			            if (order.getTakenStatus() == OrderStatusType.NOT_SPECIFIED
			                || order.getTakenStatus() == OrderStatusType.TAKEN_PAYED) {
				            String expressVendor = @page.getComboBox("expressVendorUI").getValue();
				            String expressNumber = @page.getTextField("expressNumberUI").getValue();
				            order.getDeliveryInfo().setExpressVendor(expressVendor);
				            order.getDeliveryInfo().setExpressNumber(expressNumber);
				            OrderModel.INSTANCE.update(order.getDeliveryInfo());
				            
			                HashMap result = new HashMap();
                            result.put("order", order);
                            result.put("form", form);
                            return result;
			            } else {
			                Dialog.showMessageDialog("亲，请先确认对方已支付，再发货哟！", "", Dialog.WARNING_MESSAGE, null);
			                return false;
			            }
			        }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0" onlyOwner="false"/>
            <ns2:process>
                <ns2:var name="order" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.EOrder"></type>
                </ns2:var>
                <ns2:var name="form" category="JavaClass" scope="InOut">
                    <type entityName="org.shaolin.uimaster.page.ajax.RefForm"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
			        import java.util.Date;
			        import java.util.ArrayList;
			        import org.shaolin.bmdp.runtime.AppContext; 
			        import org.shaolin.bmdp.runtime.be.ITaskEntity;
			        import org.shaolin.uimaster.page.AjaxContext;
			        import org.shaolin.uimaster.page.ajax.*;
			        import org.shaolin.vogerp.ecommercial.be.*;
			        import org.shaolin.vogerp.ecommercial.ce.*;
			        import org.shaolin.vogerp.ecommercial.dao.*;
			        import org.shaolin.vogerp.ecommercial.util.OrderUtil;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                     {
                         $order.setTakenStatus(OrderStatusType.TAKEN_DELIVERY);
			             @flowContext.save((ITaskEntity)$order);
			             
			             String description = "("+OrderUtil.getOrderLink($order)+")" + $order.getDescription();
                         NotificationImpl message = new NotificationImpl();
                         message.setPartyId($order.getTakenCustomerId());
                         message.setSubject("您的订单已发货，请注意查收！");
                         message.setDescription(description);
                         message.setCreateDate(new Date());
                         
                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
                         service.addNotification(message, true);
			             
			             Dialog.showMessageDialog("更新成功！", "", Dialog.INFORMATION_MESSAGE, null);
			             $form.setInputParameter("order", $order);
			             $form.refresh();
                     }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
                <ns2:dest name="receivedOrder"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        <ns2:mission-node name="receivedOrder" expiredDays="0" expiredHours="0" autoTrigger="false" multipleInvoke="true">
            <ns2:description>确认收货</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.ecommercial.form.OrderPaymentAndDeliveryTrack"
                actionName="receivedOrder" actionText="确认收货" isHidden="true">
                <ns2:expression>
                    <expressionString><![CDATA[
			        import java.util.HashMap;
			        import java.util.Date;
			        import java.util.ArrayList;
			        import org.shaolin.bmdp.runtime.AppContext; 
			        import org.shaolin.uimaster.page.AjaxContext;
			        import org.shaolin.uimaster.page.ajax.*;
			        import org.shaolin.vogerp.ecommercial.be.*;
			        import org.shaolin.vogerp.ecommercial.ce.*;
			        import org.shaolin.vogerp.ecommercial.dao.*;
			        import org.shaolin.vogerp.ecommercial.util.OrderUtil;
			        import org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl;
			        import org.shaolin.vogerp.commonmodel.dao.CommonModel;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
			        { 
			            RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        IEOrder order = (IEOrder)form.getInputParameter("order");
			            if (order.getTakenStatus() == OrderStatusType.TAKEN_DELIVERY) {
			                HashMap result = new HashMap();
                            result.put("order", order);
                            result.put("form", form);
                            return result;
			            } else {
			                Dialog.showMessageDialog("亲，您的订单还未发货！", "", Dialog.WARNING_MESSAGE, null);
			                return false;
			            }
			        }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant partyType="GenericOrganizationType.Director,0" onlyOwner="false"/>
            <ns2:process>
                <ns2:var name="order" category="BusinessEntity" scope="InOut">
                    <type entityName="org.shaolin.vogerp.ecommercial.be.EOrder"></type>
                </ns2:var>
                <ns2:var name="form" category="JavaClass" scope="InOut">
                    <type entityName="org.shaolin.uimaster.page.ajax.RefForm"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
			        import java.util.Date;
			        import java.util.ArrayList;
			        import org.shaolin.bmdp.runtime.AppContext; 
			        import org.shaolin.bmdp.runtime.be.ITaskEntity;
			        import org.shaolin.uimaster.page.AjaxContext;
			        import org.shaolin.uimaster.page.ajax.*;
			        import org.shaolin.vogerp.ecommercial.be.*;
			        import org.shaolin.vogerp.ecommercial.ce.*;
			        import org.shaolin.vogerp.ecommercial.dao.*;
			        import org.shaolin.vogerp.ecommercial.util.OrderUtil;
			        import org.shaolin.vogerp.accounting.IPaymentService;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                     {
                         $order.setTakenStatus(OrderStatusType.TAKEN_COMPLETED);
			             @flowContext.save((ITaskEntity)$order);
                         IPaymentService payService = (IPaymentService)AppContext.get().getService(IPaymentService.class);
                         payService.ensurePay($order.getSerialNumber());     
			             
			             String description = "("+OrderUtil.getOrderLink($order)+")" + $order.getDescription();
                         NotificationImpl message = new NotificationImpl();
                         message.setPartyId($order.getPublishedCustomerId());
                         message.setSubject("您的订单已确认收货成功！");
                         message.setDescription(description);
                         message.setCreateDate(new Date());
                         
                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
                         service.addNotification(message, true);
			             Dialog.showMessageDialog("更新成功！", "", Dialog.INFORMATION_MESSAGE, null);
			             
			             $form.setInputParameter("order", $order);
			             $form.refresh();
                     }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="endOrder"></ns2:dest>
        </ns2:mission-node>
        <ns2:end-node name="endOrder"></ns2:end-node>
        </ns2:flow>
</ns2:Workflow>