<?xml version="1.0" ?>
<ns2:Workflow xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:ns6="http://bmdp.shaolin.org/datamodel/PageDiagram" xmlns:ns5="http://bmdp.shaolin.org/datamodel/Page"
	xmlns:ns4="http://bmdp.shaolin.org/datamodel/RDBDiagram" xmlns:ns3="http://bmdp.shaolin.org/datamodel/BEDiagram"
	xmlns:ns2="http://bmdp.shaolin.org/datamodel/Workflow" xmlns="http://bmdp.shaolin.org/datamodel/Common"
	xsi:schemaLocation="">
	<entityName>org.shaolin.vogerp.order.PurchaseOrderFlows</entityName>
	<systemVersion>0</systemVersion>
	<description>采购订单流程</description>
	<ns2:conf>
		<ns2:bootable>true</ns2:bootable>
		<ns2:service name="userService" category="JavaClass">
			<type entityName="org.shaolin.vogerp.commonmodel.IUserService"></type>
		</ns2:service>
	</ns2:conf>
	<!-- 发布流程 -->
	<ns2:flow name="PublishingPOrder" eventConsumer="PurchaseOrder">
		<ns2:conf>
			<!-- <ns2:param name="saleOrder" category="BusinessEntity"> 
			<type entityName="org.shaolin.vogerp.order.be.SaleOrder"></type> 
				</ns2:param> -->
		</ns2:conf>
		<ns2:start-node name="init">
			<ns2:process>
				<ns2:var name="purchaseOrder" category="BusinessEntity" scope="InOut">
					<type entityName="org.shaolin.vogerp.order.be.PurchaseOrder"></type>
				</ns2:var>
				<ns2:expression>
					<expressionString>{
						@flowContext.save($purchaseOrder);
						}
					</expressionString>
				</ns2:expression>
			</ns2:process>
			<ns2:dest name="publishOrder"></ns2:dest>
		</ns2:start-node>
		<ns2:mission-node name="publishOrder" expiredDays="0" expiredHours="0" autoTrigger="true">
			<ns2:description>发送采购订单</ns2:description>
			<ns2:uiAction actionPage="org.shaolin.vogerp.order.form.PurchaseOrder"
				actionName="publishOrder" actionText="发送采购单给大家">
				<ns2:expression>
					<expressionString><![CDATA[
                        import java.util.HashMap;
                        import org.shaolin.uimaster.page.AjaxContext;
                        import org.shaolin.uimaster.page.ajax.*;
                        {
                             RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                             HashMap values = (HashMap)form.ui2Data();
                             form.closeIfinWindows(true);
                             @page.removeForm(@page.getEntityUiid()); 
                             HashMap result = new HashMap();
                             result.put("purchaseOrder", values.get("beObject"));
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
					 import java.util.List;
					 import java.util.ArrayList;
					 import org.shaolin.vogerp.order.be.*;
					 import org.shaolin.vogerp.order.dao.OrderModel;
					 {
					     // invoke UIMaster node.
					     
				     }
					 ]]></expressionString>
				</ns2:expression>
			</ns2:process>
			<ns2:dest name="endNode"></ns2:dest>
		</ns2:mission-node>
		<ns2:end-node name="endNode"></ns2:end-node>
	</ns2:flow>
</ns2:Workflow>