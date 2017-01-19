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
                <ns2:var name="translog" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrderTransactionLog"></type>
                </ns2:var>
                <ns2:var name="jsonObj" category="JavaClass" scope="Out">
                    <type entityName="org.shaolin.uimaster.page.ajax.json.JSONObject"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
			        import org.shaolin.vogerp.accounting.IAccountingService;
			        import org.shaolin.vogerp.accounting.IAccountingService.TransactionType;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
			        import org.shaolin.vogerp.accounting.internal.AccountingServiceImpl;
			        import org.shaolin.vogerp.accounting.internal.BCWebHookHandler;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.uimaster.page.ajax.json.JSONObject;
                    {
                        int momey = $jsonObj.getInt("transaction_fee");
		    			if (Double.valueOf($payOrder.getAmount() * 100).intValue() != momey) {
		    				$translog.setIsCorrect(false);
		    				AccountingModel.INSTANCE.update($translog, true);
		    				BCWebHookHandler.getLogger().warn("Payment order("+$payOrder.getSerialNumber()+") amount does not the same! PayOrder amount: " + $payOrder.getAmount() + ", Callback amount: " + momey);
		    				return;
		    			}
		    			if ($jsonObj.getBoolean("trade_success")) {
		    			    String transactionId = $jsonObj.getString("transaction_id");
		    				AccountingServiceImpl.updatePayState(transactionId, $jsonObj, $payOrder);
		    				AccountingModel.INSTANCE.update($payOrder, true);
		    			} else {
		    				//notify user that the trade is not successful.
		    				JSONObject orderDetail = $jsonObj.getJSONObject("message_detail");
		    				
		    				ICoordinatorService coorService = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
		    				NotificationImpl message = new NotificationImpl();
		    				message.setPartyId($payOrder.getUserId());
		    				//message.setOrgId($payOrder.getOrderId());
		    				message.setSubject("您有支付操作异常订单: " + $payOrder.getSerialNumber());
		    				message.setDescription(orderDetail.toString());
		    				message.setCreateDate(new Date());
		    				coorService.addNotification(message, false);
		    			}
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
                <ns2:dest name="TransferCallBack"></ns2:dest>
            	<ns2:dest name="RefundCallBack"></ns2:dest>
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
                    <type entityName="org.shaolin.uimaster.page.ajax.json.JSONObject"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
			        import org.shaolin.vogerp.accounting.IAccountingService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
			        import org.shaolin.vogerp.accounting.internal.AccountingServiceImpl;
			        import org.shaolin.vogerp.accounting.internal.BCWebHookHandler;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.uimaster.page.ajax.json.JSONObject;
                    {
                        
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
                    <type entityName="org.shaolin.uimaster.page.ajax.json.JSONObject"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
			        import org.shaolin.vogerp.accounting.IAccountingService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
			        import org.shaolin.vogerp.accounting.internal.AccountingServiceImpl;
			        import org.shaolin.vogerp.accounting.internal.BCWebHookHandler;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.uimaster.page.ajax.json.JSONObject;
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
        
        <ns2:mission-node name="commitPrepayment" autoTrigger="false">
            <ns2:description>用户将交易订单金额授权给目标客户</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.accounting.page.PaymentOrderManagement"
                actionName="commitPrepayment" actionText="确认成交">
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
			        import org.shaolin.vogerp.accounting.be.IPayOrder;
			        import org.shaolin.vogerp.accounting.be.PayOrderImpl;
			        import org.shaolin.vogerp.accounting.ce.*;
			        import org.shaolin.vogerp.accounting.IAccountingService;
                    { 
                        Table orderInfoTable = (Table)@page.getElement("payOrderTable");
	                    if (orderInfoTable.getSelectedRow() == null) {
	                        return;
	                    }
	                    PayOrderImpl payrOrder = (PayOrderImpl)orderInfoTable.getSelectedRow();
                        if (payrOrder.getStatus() == PayOrderStatusType.PAYED 
                               && payrOrder.getOrderSerialNumber() != null) {
                            HashMap result = new HashMap();
	                        result.put("beObject", payrOrder);
	                        return result;
                        } else {
                            Dialog.showMessageDialog("支付订单状态异常，不能继续本次操作!", "订单异常", Dialog.WARNING_MESSAGE, null);
                        }
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant onlyOwner="true"/>
            <ns2:process>
                <ns2:var name="beObject" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrder"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
			        import org.shaolin.vogerp.accounting.IAccountingService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    {
                        $beObject.setStatus(PayOrderStatusType.AGREEDPAYTOEND);
                        AccountingModel.INSTANCE.update($beObject);
                        
                        ICoordinatorService coorService = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
			    		NotificationImpl message = new NotificationImpl();
			    		message.setPartyId($beObject.getEndUserId());
			    		message.setSubject("您有收款成功通知！");
			    		message.setDescription("收款： " + ($beObject.getAmount()/100) + "元！来自订单: " + $beObject.getOrderSerialNumber());
			    		message.setCreateDate(new Date());
			    		coorService.addNotification(message, false);
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
                <ns2:dest name="withdrawPayOrder"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        
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
			        import org.shaolin.vogerp.accounting.IAccountingService;
                    { 
                        Table orderInfoTable = (Table)@page.getElement("payOrderTable");
	                    if (orderInfoTable.getSelectedRow() == null) {
	                        return;
	                    }
	                    PayOrderImpl payrOrder = (PayOrderImpl)orderInfoTable.getSelectedRow();
                        if (payrOrder.getStatus() == PayOrderStatusType.AGREEDPAYTOEND 
                               && payrOrder.getOrderSerialNumber() != null) {
	                        ICustomerAccount customerAccount = (ICustomerAccount)UserContext.getUserData("AccountInfo", true);
	                        if (customerAccount == null || customerAccount.getUserId() != payrOrder.getEndUserId()) {
	                           Dialog.showMessageDialog("您还没有配制支付宝或微号提现帐号！", "没有第三方交易帐号", Dialog.WARNING_MESSAGE, null);
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
            <ns2:participant onlyOwner="true"/>
            <ns2:process>
                <ns2:var name="beObject" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrder"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.accounting.ce.*;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.be.ICustomerAccount;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
			        import org.shaolin.vogerp.accounting.IAccountingService;
                    {
                        IAccountingService accountingService = (IAccountingService)AppContext.get().getService(IAccountingService.class);
		                accountingService.requestForPayOrder((IPayOrder)$beObject, RequestStatusType.REQUEST, PayOrderRequestType.WITHDRAW);
                        
                        Dialog.showMessageDialog("提现申请成功，系统将在5个工作日内处理转账到您帐户。","提醒",Dialog.INFORMATION_MESSAGE, null);
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
                    import org.shaolin.vogerp.accounting.be.CustomerAccountImpl;
			        import org.shaolin.vogerp.accounting.be.IPayOrder;
			        import org.shaolin.vogerp.accounting.be.PayOrderImpl;
			        import org.shaolin.vogerp.accounting.ce.*;
			        import org.shaolin.vogerp.accounting.IAccountingService;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
			            HashMap out = (HashMap)form.ui2Data();
			            PayOrderImpl payrOrder = (PayOrderImpl)out.get("beObject");
		                if (payrOrder.getStatus() == PayOrderStatusType.WITHDRAWING && payrOrder.getOrderSerialNumber() != null) { 
                            ICustomerAccount customerAccount = (ICustomerAccount)UserContext.getUserData("AccountInfo", true);
	                        if (customerAccount == null || customerAccount.getUserId() != payrOrder.getEndUserId()) {
	                           Dialog.showMessageDialog("您还没有配制支付宝或微号提现帐号！", "没有第三方交易帐号", Dialog.WARNING_MESSAGE, null);
	                           return;
	                        }
                                
                            IAccountingService accountingService = (IAccountingService)AppContext.get().getService(IAccountingService.class);
                            String url = accountingService.transfer((IPayOrder)payrOrder, customerAccount);
                            if (customerAccount.getThirdPartyAccountType() == SettlementMethodType.ALIPAY) {
                                @page.executeJavaScript("UIMaster.util.forwardToPage('" + url + "', true)");
					        }
					        
	                        HashMap result = new HashMap();
	                        result.put("beObject", payrOrder);
	                        result.put("customerAccount", customerAccount);
	                        
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
			        import org.shaolin.vogerp.accounting.IAccountingService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    {
                        if ($customerAccount.getThirdPartyAccountType() == SettlementMethodType.WEIXI) {
                            $beObject.setStatus(PayOrderStatusType.WITHDRAWN);
                            AccountingModel.INSTANCE.update($beObject);
                            
	                        ICoordinatorService coorService = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
				    		NotificationImpl message = new NotificationImpl();
				    		message.setPartyId($beObject.getEndUserId());
				    		message.setSubject("提现成功通知！");
				    		message.setDescription("提现： " + ($beObject.getAmount()/100) + "元！来自订单: " + $beObject.getOrderSerialNumber());
				    		message.setCreateDate(new Date());
				    		coorService.addNotification(message, false);
				        } else if ($customerAccount.getThirdPartyAccountType() == SettlementMethodType.ALIPAY) {
				            // it's async operation.
				        }
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
            <ns2:description>从我们系统中退款给打款客户</ns2:description>
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
			        import org.shaolin.vogerp.accounting.IAccountingService;
                    { 
                        Table orderInfoTable = (Table)@page.getElement("payOrderTable");
	                    if (orderInfoTable.getSelectedRow() == null) {
	                        return;
	                    }
	                    PayOrderImpl payrOrder = (PayOrderImpl)orderInfoTable.getSelectedRow();
                        if (payrOrder.getStatus() == PayOrderStatusType.PAYED 
                               && payrOrder.getOrderSerialNumber() != null) {
	                        ICustomerAccount customerAccount = (ICustomerAccount)UserContext.getUserData("AccountInfo", true);
	                        if (customerAccount == null || customerAccount.getUserId() != payrOrder.getEndUserId()) {
	                           Dialog.showMessageDialog("您还没有配制支付宝或微号提现帐号！", "没有第三方交易帐号", Dialog.WARNING_MESSAGE, null);
	                           return;
	                        }
				            
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
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.*;
			        import org.shaolin.vogerp.accounting.IAccountingService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
                    {
                        IAccountingService accountingService = (IAccountingService)AppContext.get().getService(IAccountingService.class);
		                accountingService.requestForPayOrder((IPayOrder)$payOrder, RequestStatusType.REQUEST, PayOrderRequestType.REFUND);
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
			        import org.shaolin.vogerp.accounting.IAccountingService;
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
	                        ICustomerAccount customerAccount = (ICustomerAccount)UserContext.getUserData("AccountInfo", true);
	                        if (customerAccount == null || customerAccount.getUserId() != payrOrder.getEndUserId()) {
	                           Dialog.showMessageDialog("您还没有配制支付宝或微号提现帐号！", "没有第三方交易帐号", Dialog.WARNING_MESSAGE, null);
	                           return;
	                        }
				            
	                        HashMap result = new HashMap();
	                        result.put("beObject", payrOrder);
	                        result.put("customerAccount", customerAccount);
	                        
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
                    import java.util.Date;
                    import java.util.List;
                    import org.shaolin.bmdp.runtime.AppContext;
                    import org.shaolin.vogerp.accounting.be.IPayOrder;
                    import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
			        import org.shaolin.vogerp.accounting.IAccountingService;
			        import org.shaolin.vogerp.accounting.dao.AccountingModel;
			        import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    {
                        $beObject.setStatus(PayOrderStatusType.REFUND);
                        AccountingModel.INSTANCE.update($beObject);
                        
                        ICoordinatorService coorService = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
			    		NotificationImpl message = new NotificationImpl();
			    		message.setPartyId($beObject.getEndUserId());
			    		message.setSubject("您有退款成功通知！");
			    		message.setDescription("退款： " + ($beObject.getAmount()/100) + "元！来自订单: " + $beObject.getOrderSerialNumber());
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