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
                <ns2:dest name="deliveryOrder" flow="DeliveryOrder" entity="org.shaolin.vogerp.ecommercial.diagram.DeliveryFlows"></ns2:dest>
                <!-- 
            	<ns2:dest name="deliveryOrder" flow="PublishGoldenOrder" entity="org.shaolin.vogerp.ecommercial.diagram.GoldenOrderFlows"></ns2:dest>
            	<ns2:dest name="deliveryOrder" flow="PublishRentOrder" entity="org.shaolin.vogerp.ecommercial.diagram.RentOrderFlows"></ns2:dest>
            	<ns2:dest name="deliveryOrder" flow="PublishRentOrder" entity="org.shaolin.vogerp.ecommercial.diagram.MachiningOrderFlows"></ns2:dest>
                 -->
            </ns2:eventDest>
        </ns2:mission-node>
        
       <ns2:mission-node name="TransferCallBack" autoTrigger="false">
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
    </ns2:flow>
    <!-- 转账流程是基于其它流程的子流程. 
    
      Commit the pre-payment order to the end user virtual account. this operation 
	  only performs inside our system flow. the third payment system is not necessary interoperated. 
    -->
    <ns2:flow name="TransferFlow" eventConsumer="TransferFlowConsumer">
        <!-- A user is able to request for withdraw money from a pay order of our system account. -->
        <ns2:mission-node name="withdrawPayOrder" autoTrigger="false">
            <ns2:description>客户提现，以申请审批的方式</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.accounting.page.PaymentOrderManagement"
                actionName="withdrawPayOrder" actionText="提现">
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
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.bmdp.runtime.Registry;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.bmdp.runtime.security.UserContext;
			        import org.shaolin.vogerp.accounting.be.ICustomerAccount;
			        import org.shaolin.vogerp.accounting.be.IPayOrder;
			        import org.shaolin.vogerp.accounting.be.PayOrderImpl;
			        import org.shaolin.vogerp.accounting.ce.*;
			        import org.shaolin.vogerp.accounting.IPaymentService;
			        import org.shaolin.bmdp.runtime.AppContext;
		            import org.shaolin.vogerp.accounting.IAccountingService;
                    { 
			            // 之前一直没找到微信转账的接口，我现在才知道，微信是没有提供转账的api的，所以客户不能提现到微信. 客户只能提现到支付宝.
		                IAccountingService accountingService = (IAccountingService)AppContext.get().getService(IAccountingService.class);
						double availabeAmount = accountingService.queryUserTotalAvailableAmount(UserContext.getUserContext().getUserId());
                        if (availabeAmount > 0) {
	                        ICustomerAccount customerAccount = (ICustomerAccount)UserContext.getUserData("AccountInfo", true);
	                        if (customerAccount == null || customerAccount.getThirdPartyAccount() == null) {
	                           Dialog.showMessageDialog("您还没有配制支付宝提现帐号！", "没有第三方交易帐号", Dialog.WARNING_MESSAGE, null);
	                           return;
	                        }
	                        
	                        HashMap result = new HashMap();
	                        result.put("availabeAmount", new Double(availabeAmount));
	                        return result;
                        } else {
                            Dialog.showMessageDialog("您没有余额提现，请多加油吧！", "", Dialog.WARNING_MESSAGE, null);
                        }
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant onlyOwner="true"/>
            <ns2:process>
                <ns2:var name="availabeAmount" category="JavaClass" scope="Out">
                    <type entityName="java.lang.Double"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import org.shaolin.bmdp.runtime.AppContext;
			        import org.shaolin.bmdp.runtime.security.UserContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.accounting.ce.*;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.be.ICustomerAccount;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
			        import org.shaolin.vogerp.accounting.IPaymentService;
			        import org.shaolin.vogerp.accounting.be.ICustomerAccount;
                    import org.shaolin.vogerp.accounting.be.CustomerAccountImpl;
                    {
                        ICustomerAccount customerAccount = (ICustomerAccount)UserContext.getUserData("AccountInfo", true);
                        IPaymentService accountingService = (IPaymentService)AppContext.get().getService(IPaymentService.class);
		                accountingService.requestForWithdraw(customerAccount);
                        
                        Dialog.showMessageDialog("提现申请中，系统将在5个工作日内完成提现申请。","提醒",Dialog.INFORMATION_MESSAGE, null);
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
                <ns2:dest name="confirmWithdrawPayOrder"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        
        <!-- 由管理理人工转账后，点击此按钮确认 -->
        <ns2:mission-node name="confirmWithdrawPayOrder" autoTrigger="false">
            <ns2:description>管理员批准提现</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.accounting.form.PayOrder"
                actionName="confirmWithdrawPayOrder" actionText="批准提现">
                <ns2:filter>
                    <expressionString><![CDATA[
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
                    {
                        return $beObject.getWithdrawn();
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
			        import org.shaolin.vogerp.accounting.be.ICustomerAccount;
                    import org.shaolin.vogerp.accounting.be.CustomerAccountImpl;
			        import org.shaolin.vogerp.accounting.be.IPayOrder;
			        import org.shaolin.vogerp.accounting.be.PayOrderImpl;
			        import org.shaolin.vogerp.accounting.ce.*;
			        import org.shaolin.vogerp.accounting.IPaymentService;
			        import org.shaolin.vogerp.accounting.IAccountingService;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
			            HashMap out = (HashMap)form.ui2Data();
			            PayOrderImpl payrOrder = (PayOrderImpl)out.get("beObject");
			            if (payrOrder.getWithdrawn()) {
			                Dialog.showMessageDialog("该支付订单已申请过提现成功！", "支付订单已经提现", Dialog.WARNING_MESSAGE, null);
			                return;
			            }
		                if (payrOrder.getStatus() == PayOrderStatusType.AGREEDPAYTOEND) {
		                    IAccountingService accountingService = (IAccountingService)AppContext.get().getService(IAccountingService.class); 
                            ICustomerAccount customerAccount = accountingService.getCustomerAccount(payrOrder.getUserId());
	                        if (customerAccount == null) {
	                           Dialog.showMessageDialog("您还没有配制支付宝提现帐号！", "没有第三方交易帐号", Dialog.WARNING_MESSAGE, null);
	                           return;
	                        }
	                        if (customerAccount.getUserId() != payrOrder.getEndUserId()) {
	                           Dialog.showMessageDialog("不是您的支付订单，不可提现！", "不是您的支付订单", Dialog.WARNING_MESSAGE, null);
	                           return;
	                        }
                                
	                        HashMap result = new HashMap();
	                        result.put("beObject", payrOrder);
	                        
	                        return result;
                        } else {
                            Dialog.showMessageDialog("支付订单状态异常，不能继续本次操作!", "", Dialog.WARNING_MESSAGE, null);
                        }
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant partyType="Admin,0"/>
            <ns2:process>
                <ns2:var name="beObject" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrder"></type>
                </ns2:var>
                <ns2:var name="customerAccount" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.CustomerAccount"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
                    import org.shaolin.vogerp.accounting.ce.SettlementMethodType;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.be.ICustomerAccount;
                    import org.shaolin.vogerp.accounting.be.CustomerAccountImpl;
			        import org.shaolin.vogerp.accounting.IPaymentService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    {
                        $beObject.setWithdrawn(true);
                        AccountingModel.INSTANCE.update($beObject);
                           
                        ICoordinatorService coorService = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
			    		NotificationImpl message = new NotificationImpl();
			    		message.setPartyId($beObject.getEndUserId());
			    		message.setSubject("提现成功通知！");
			    		message.setDescription("提现： " + ($beObject.getAmount()/100) + "元！来自订单: " + $beObject.getOrderSerialNumber());
			    		message.setCreateDate(new Date());
			    		coorService.addNotification(message, false);
                   }
                  ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="endWithdrawPayOrder"></ns2:dest>
        </ns2:mission-node>
        <ns2:end-node name="endWithdrawPayOrder"></ns2:end-node>
    </ns2:flow>
    
    <!-- 退款流程 -->
    <ns2:flow name="RefundFlow" eventConsumer="RefundFlowConsumer">
        <ns2:mission-node name="refundPrepayment" autoTrigger="false">
            <ns2:description>申请退款给打款客户</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.accounting.page.PaymentOrderManagement"
                actionName="refundPrepayment" actionText="申请退款">
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
            <ns2:participant onlyOwner="true"/>
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
        <ns2:mission-node name="confirmRefundPayOrder" autoTrigger="false">
            <ns2:description>管理员确认退款</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.accounting.page.PaymentOrderManagementByAdmin"
                actionName="confirmWithdrawPayOrder" actionText="批准退款">
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
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
		                
		                Table orderInfoTable = (Table)@page.getElement("payOrderTable");
	                    if (orderInfoTable.getSelectedRow() == null) {
	                        return;
	                    }
	                    PayOrderImpl payrOrder = (PayOrderImpl)orderInfoTable.getSelectedRow();
                        if (payrOrder.getStatus() == PayOrderStatusType.PAYED 
                               && payrOrder.getOrderSerialNumber() != null) {
	                        HashMap result = new HashMap();
	                        result.put("payOrder", payrOrder);
	                        result.put("page", @page);
	                        
	                        return result;
                        } else {
                            Dialog.showMessageDialog("支付订单状态异常，不能继续本次操作!", "", Dialog.WARNING_MESSAGE, null);
                        }
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant partyType="Admin,0"/>
            <ns2:process>
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
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
			        import org.shaolin.vogerp.accounting.IPaymentService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    {
                        IPayOrder payOrder = $payOrder;
		                IPaymentService accountingService = (IPaymentService)AppContext.get().getService(IPaymentService.class);
		                String returnUrl = accountingService.refund(payOrder);
		                String script = "UIMaster.util.forwardToPage(\"" + returnUrl + "\",true)";
		                $page.executeJavaScript(script);
                        $payOrder.setStatus(PayOrderStatusType.REFUND);
                        AccountingModel.INSTANCE.update($payOrder);
                        
                        ICoordinatorService coorService = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
			    		NotificationImpl message = new NotificationImpl();
			    		message.setPartyId($payOrder.getEndUserId());
			    		message.setSubject("您有退款成功通知！");
			    		message.setDescription("退款： " + ($payOrder.getAmount()/100) + "元！来自订单: " + $payOrder.getOrderSerialNumber());
			    		message.setCreateDate(new Date());
			    		coorService.addNotification(message, false);
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="endRefundPayOrder"></ns2:dest>
        </ns2:mission-node>
        <ns2:end-node name="endRefundPayOrder"></ns2:end-node>
    </ns2:flow>
    
</ns2:Workflow>