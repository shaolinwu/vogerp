<?xml version="1.0" ?>
<ns2:Workflow xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:ns6="http://bmdp.shaolin.org/datamodel/PageDiagram" xmlns:ns5="http://bmdp.shaolin.org/datamodel/Page"
	xmlns:ns4="http://bmdp.shaolin.org/datamodel/RDBDiagram" xmlns:ns3="http://bmdp.shaolin.org/datamodel/BEDiagram"
	xmlns:ns2="http://bmdp.shaolin.org/datamodel/Workflow" xmlns="http://bmdp.shaolin.org/datamodel/Common"
	xsi:schemaLocation="">
	<entityName>org.shaolin.vogerp.order.SaleOrderFlows</entityName>
	<systemVersion>0</systemVersion>
	<description>销售订单流程</description>
	<ns2:conf>
		<ns2:bootable>true</ns2:bootable>
		<ns2:service name="userService" category="JavaClass">
			<type entityName="org.shaolin.vogerp.commonmodel.IUserService"></type>
		</ns2:service>
	</ns2:conf>
	<ns2:flow name="Mission0" eventConsumer="SaleOrder">
		<ns2:conf>
		 <!-- 
			<ns2:param name="saleOrder" category="BusinessEntity">
				<type entityName="org.shaolin.vogerp.order.be.SaleOrder"></type>
			</ns2:param>
			 -->
		</ns2:conf>
		<ns2:start-node name="init">
			<ns2:process>
				<ns2:expression>
					<expressionString>{
						System.out.println("initial the workflow user data session on start node.");
						System.out.println("place an order.");
						}
					</expressionString>
				</ns2:expression>
			</ns2:process>
			<ns2:dest name="createdOrder"></ns2:dest>
		</ns2:start-node>
		<ns2:mission-node name="createdOrder" expiredDays="0" expiredHours="1" autoTrigger="true">
			<ns2:description>建立销售订单</ns2:description>
			<ns2:uiAction actionPage="org.shaolin.vogerp.order.form.SaleOrder" actionName="ApproveOrder" actionText="批准">
					<ns2:expression>
								<expressionString><![CDATA[
								import java.util.HashMap;
								import org.shaolin.uimaster.page.AjaxContext;
				    import org.shaolin.uimaster.page.ajax.*;
								{
									    System.out.println("workflow action!!!");
									    RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
									    HashMap values = (HashMap)form.ui2Data();
									    form.closeIfinWindows(true);
				         @page.removeForm(@page.getEntityUiid()); 
				         HashMap result = new HashMap();
				         result.put("saleOrder", values.get("beObject"));
				         return result;
									}
								]]></expressionString>
					</ns2:expression>
			</ns2:uiAction>
			<ns2:participant partyType="GenericOrganizationType.Director,0" />
			<ns2:process>
			 <ns2:var name="saleOrder" category="BusinessEntity" scope="InOut">
	    <type entityName="org.shaolin.vogerp.order.be.SaleOrder"></type>
	   </ns2:var>
				<ns2:expression>
					<expressionString>{
						System.out.println("approved the created order: " + $saleOrder);
						}
					</expressionString>
				</ns2:expression>
			</ns2:process>
			<ns2:dest name="deliveryOrder"></ns2:dest>
		</ns2:mission-node>
		<!-- the actionName must be unique as well as the node name does! -->
		<ns2:mission-node name="deliveryOrder" expiredDays="2" expiredHours="0" autoTrigger="false">
   <ns2:description>发送订单</ns2:description>
   <ns2:uiAction actionPage="org.shaolin.vogerp.order.form.SaleOrder" actionName="DeliveryOrder" actionText="确认订单寄出完成">
     <ns2:expression>
        <expressionString><![CDATA[
        import java.util.HashMap;
        import org.shaolin.uimaster.page.AjaxContext;
        import org.shaolin.uimaster.page.ajax.*;
        {
             System.out.println("workflow action!!!");
             RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
             HashMap values = (HashMap)form.ui2Data();
             form.closeIfinWindows(true);
             @page.removeForm(@page.getEntityUiid()); 
             HashMap result = new HashMap();
             result.put("saleOrder", values.get("beObject"));
             return result;
         }
        ]]></expressionString>
     </ns2:expression>
   </ns2:uiAction>
   <ns2:participant partyType="GenericOrganizationType.Director,0" />
   <ns2:process>
    <ns2:var name="saleOrder" category="BusinessEntity" scope="InOut">
     <type entityName="org.shaolin.vogerp.order.be.SaleOrder"></type>
    </ns2:var>
    <ns2:expression>
     <expressionString>{
      System.out.println("delivered the sale order: " + $saleOrder);
      }
     </expressionString>
    </ns2:expression>
   </ns2:process>
   <ns2:dest name="endNode"></ns2:dest>
  </ns2:mission-node>
		<ns2:end-node name="endNode"></ns2:end-node>
	</ns2:flow>
</ns2:Workflow>