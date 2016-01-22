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
    <ns2:flow name="GOrderGeneration" eventConsumer="GoldenOrder">
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
                 <ns2:var name="customerId" category="JavaClass" scope="InOut">
                    <type entityName="java.lang.Long"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.Date;
                    import java.util.HashMap;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.vogerp.ecommercial.util.OrderUtil;
                    import org.shaolin.vogerp.order.be.IPurchaseOrder;
                    import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
                    {
                         GoldenOrderImpl order = new GoldenOrderImpl();
                         order.setSerialNumber(OrderUtil.genSerialNumber());
                         order.setDescription($purchaseOrder.getDescription());
                         order.setPublishedCustomerId($customerId);
                         order.setPurchaseOrderId($purchaseOrder.getId());
                         order.setCreateDate(new Date());
                         order.setExpiredDate(new Date());
                         DateUtil.increaseOneHour(order.getExpiredDate());
                         @flowContext.save(order);
                         
                         HashMap result = new HashMap();
                         result.put("goldenOrder", order);
                         return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="goToGoldenOrder"></ns2:dest>
        </ns2:start-node>
        <ns2:mission-node name="goToGoldenOrder" expiredDays="0" expiredHours="0" autoTrigger="true">
            <ns2:description></ns2:description>
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
                         // notify all customers.
                         
                     }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="endNode"></ns2:dest>
        </ns2:mission-node>
        <ns2:end-node name="endNode"></ns2:end-node>
    </ns2:flow>
</ns2:Workflow>