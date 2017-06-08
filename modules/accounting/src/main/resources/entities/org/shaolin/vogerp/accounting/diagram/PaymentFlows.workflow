<?xml version="1.0" ?>
<ns2:Workflow xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:ns6="http://bmdp.shaolin.org/datamodel/PageDiagram" xmlns:ns5="http://bmdp.shaolin.org/datamodel/Page"
	xmlns:ns4="http://bmdp.shaolin.org/datamodel/RDBDiagram" xmlns:ns3="http://bmdp.shaolin.org/datamodel/BEDiagram"
	xmlns:ns2="http://bmdp.shaolin.org/datamodel/Workflow" xmlns="http://bmdp.shaolin.org/datamodel/Common"
	xsi:schemaLocation="">
	<entityName>org.shaolin.vogerp.accounting.diagram.PaymentFlows</entityName>
	<systemVersion>0</systemVersion>
	<description></description>
	<ns2:conf>
		<ns2:bootable>true</ns2:bootable>
	</ns2:conf>
	<!-- 预支付流程由外面业务流程完成 -->
    <ns2:flow name="PrepayFlow" eventConsumer="PayFlowConsumer">
    
       <ns2:mission-node name="PrepayCallBack" autoTrigger="false">
            <ns2:description>预支付成功后回调</ns2:description>
            <ns2:participant onlyOwner="false"/>
            <ns2:process>
                <ns2:var name="payOrder" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrder"></type>
                </ns2:var>
                <ns2:var name="jsonObj" category="JavaClass" scope="Out">
                    <type entityName="org.shaolin.bmdp.json.JSONObject"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
			        import org.shaolin.vogerp.accounting.IPaymentService;
			        import org.shaolin.vogerp.accounting.IPaymentService.TransactionType;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
			        import org.shaolin.vogerp.accounting.internal.PaymentServiceImpl;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.bmdp.json.JSONObject;
                    {
                        // only notified when success for deriving workflow.
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
                <ns2:dest name="PrepayCallBack"></ns2:dest>
                <!-- if the products are not delivered, the payed user is able to cancel this payment.-->
                <!-- if the products is delivered, the payed user is unable to cancel this payment which must contact Customer Service Center for trace off.-->
                <ns2:dest name="refundPrepayment"></ns2:dest>
                <ns2:dest name="deliveryOrder" flow="DeliveryOrder" entity="org.shaolin.vogerp.ecommercial.diagram.DeliveryFlows"></ns2:dest>
                <!-- 
            	<ns2:dest name="deliveryOrder" flow="PublishGoldenOrder" entity="org.shaolin.vogerp.ecommercial.diagram.GoldenOrderFlows"></ns2:dest>
            	<ns2:dest name="deliveryOrder" flow="PublishRentOrder" entity="org.shaolin.vogerp.ecommercial.diagram.RentOrderFlows"></ns2:dest>
            	<ns2:dest name="deliveryOrder" flow="PublishRentOrder" entity="org.shaolin.vogerp.ecommercial.diagram.MachiningOrderFlows"></ns2:dest>
                 -->
            </ns2:eventDest>
        </ns2:mission-node>
        
       <ns2:mission-node name="TransferCallBack">
            <ns2:description>转账成功后回调</ns2:description>
            <ns2:participant onlyOwner="false"/>
            <ns2:process>
                <ns2:var name="payOrder" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrder"></type>
                </ns2:var>
                <ns2:var name="translog" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrderTransactionLog"></type>
                </ns2:var>
                <ns2:var name="jsonObj" category="JavaClass" scope="Out">
                    <type entityName="org.shaolin.bmdp.json.JSONObject"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
			        import org.shaolin.vogerp.accounting.IPaymentService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.bmdp.json.JSONObject;
                    {
                        //just triggered for workflow node logging!
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
                <ns2:dest name="TransferCallBack"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        
        <ns2:mission-node name="refundPrepayment">
            <ns2:description>申请退款给打款客户</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.accounting.page.PaymentOrderManagement" actionName="refundPrepayment" actionText="申请退款">
                <ns2:filter>
                    <expressionString><![CDATA[
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
                    {
                        return true;
                    }
                    ]]></expressionString>
                </ns2:filter>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.ArrayList;
                    import org.shaolin.bmdp.runtime.Registry;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.bmdp.runtime.security.UserContext;
			        import org.shaolin.vogerp.accounting.be.*;
			        import org.shaolin.vogerp.accounting.ce.*;
			        import org.shaolin.vogerp.accounting.IPaymentService;
                    { 
                        Table orderInfoTable = (Table)@page.getElement("payOrderTable");
	                    if (orderInfoTable.getSelectedRow() == null) {
	                        return;
	                    }
	                    PayOrderImpl payrOrder = (PayOrderImpl)orderInfoTable.getSelectedRow();
                        if (payrOrder.getStatus() == PayOrderStatusType.PAYED 
                               && payrOrder.getOrderSerialNumber() != null) {
	                        HashMap result = new HashMap();
	                        result.put("payOrder", payrOrder);
	                        return result;
                        } else {
                            Dialog.showMessageDialog("支付订单状态异常，不能继续本次操作!", "", Dialog.WARNING_MESSAGE, null);
                        }
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant onlyOwner="true" />
            <ns2:process>
                <ns2:var name="payOrder" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrder"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.*;
			        import org.shaolin.vogerp.accounting.IPaymentService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
                    {
                        IPaymentService accountingService = (IPaymentService)AppContext.get().getService(IPaymentService.class);
		                accountingService.requestForRefund((IPayOrder)$payOrder);
		                Dialog.showMessageDialog("退款申请中，系统将在5个工作日内处理退款申请!","提醒",Dialog.INFORMATION_MESSAGE, null);
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
                <ns2:dest name="confirmRefundPayOrder"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        
        <ns2:mission-node name="RefundCallBack" autoTrigger="false">
            <ns2:description>确认退款成功后回调</ns2:description>
            <ns2:participant onlyOwner="false"/>
            <ns2:process>
                <ns2:var name="payOrder" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrder"></type>
                </ns2:var>
                <ns2:var name="translog" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrderTransactionLog"></type>
                </ns2:var>
                <ns2:var name="jsonObj" category="JavaClass" scope="Out">
                    <type entityName="org.shaolin.bmdp.json.JSONObject"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
			        import org.shaolin.vogerp.accounting.IPaymentService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.bmdp.json.JSONObject;
                    {
                        
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
        </ns2:mission-node>
        
        <ns2:mission-node name="confirmRefundPayOrder" autoTrigger="false">
            <ns2:description>管理员确认退款</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.accounting.form.PayOrderRefundAdmin"
                actionName="confirmRefundPayOrder" actionText="批准退款">
                <ns2:filter>
                    <expressionString><![CDATA[
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
                    import org.shaolin.vogerp.accounting.ce.RequestStatusType;
                    {
                        return $beObject.getState() == RequestStatusType.REQUEST && $beObject.getPayOrderId() > 0;
                    }
                    ]]></expressionString>
                </ns2:filter>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.bmdp.runtime.Registry;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.bmdp.runtime.security.UserContext;
			        import org.shaolin.vogerp.accounting.be.*;
			        import org.shaolin.vogerp.accounting.ce.*;
			        import org.shaolin.vogerp.accounting.IPaymentService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
		                
		                PayOrderRequestImpl request = (PayOrderRequestImpl)out.get("beObject");
                        if (request.getState() == RequestStatusType.REQUEST && request.getPayOrderId() > 0) {
                            IPayOrder payOrder = (IPayOrder)AccountingModel.INSTANCE.get(request.getPayOrderId(), PayOrderImpl.class);
	                        HashMap result = new HashMap();
	                        result.put("payOrderRequest", request);
	                        result.put("payOrder", payOrder);
	                        result.put("page", @page);
	                        
	                        form.closeIfinWindows();
                            @page.removeForm(@page.getEntityUiid()); 
	                        return result;
                        } else {
                            Dialog.showMessageDialog("订单状态异常，不能继续本次操作!", "", Dialog.WARNING_MESSAGE, null);
                        }
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant partyType="Admin,0"/>
            <ns2:process>
                <ns2:var name="payOrderRequest" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrderRequest"></type>
                </ns2:var>
                <ns2:var name="payOrder" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrder"></type>
                </ns2:var>
                <ns2:var name="customerAccount" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.CustomerAccount"></type>
                </ns2:var>
                <ns2:var name="page" category="JavaClass" scope="Out">
                    <type entityName="org.shaolin.uimaster.page.AjaxContext"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.Date;
                    import java.util.List;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.be.PayOrderImpl;
                    import org.shaolin.vogerp.accounting.be.IPayOrderRequest;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
                    import org.shaolin.vogerp.accounting.ce.RequestStatusType;
			        import org.shaolin.vogerp.accounting.IPaymentService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
			        import org.shaolin.vogerp.accounting.PaymentHandler;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    {
		                IPaymentService accountingService = (IPaymentService)AppContext.get().getService(IPaymentService.class);
		                String returnUrl = accountingService.refund($payOrder);
		                if (!returnUrl.equalsIgnoreCase(PaymentHandler.SUCCESS)) {
		                    Dialog.showMessageDialog("退款确认失败, 请联系技术人员!","提醒", Dialog.ERROR_MESSAGE, null);
		                    return;
		                }
		                
                        $payOrderRequest.setState(RequestStatusType.SUCCESS);
                        $payOrder.setStatus(PayOrderStatusType.REFUND);
                        AccountingModel.INSTANCE.update($payOrderRequest);
                        AccountingModel.INSTANCE.update($payOrder);
                        
                        ICoordinatorService coorService = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
			    		NotificationImpl message = new NotificationImpl();
			    		message.setPartyId($payOrder.getEndUserId());
			    		message.setSubject("您有退款成功通知！");
			    		message.setDescription("退款： " + ($payOrder.getAmount()/100) + "元！来自订单: " + $payOrder.getOrderSerialNumber());
			    		message.setCreateDate(new Date());
			    		coorService.addNotification(message, false);
			    		Dialog.showMessageDialog("更新成功!","提醒",Dialog.INFORMATION_MESSAGE, null);
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="endRefundPayOrder"></ns2:dest>
        </ns2:mission-node>
        <ns2:end-node name="endRefundPayOrder"></ns2:end-node>
    </ns2:flow>
    
</ns2:Workflow>