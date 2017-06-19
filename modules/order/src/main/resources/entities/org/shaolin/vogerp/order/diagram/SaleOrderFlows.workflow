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
	</ns2:conf>
	<ns2:flow name="GeneralSaleOrderFlow" eventConsumer="SaleOrder">
		<ns2:conf>
			<!-- <ns2:param name="saleOrder" category="BusinessEntity"> <type entityName="org.shaolin.vogerp.order.be.SaleOrder"></type> 
				</ns2:param> -->
		</ns2:conf>
		<ns2:start-node name="init">
			<ns2:process>
				<ns2:expression>
					<expressionString>{
						}
					</expressionString>
				</ns2:expression>
			</ns2:process>
			<ns2:dest name="createdOrder"></ns2:dest>
		</ns2:start-node>
		<ns2:mission-node name="createdOrder" expiredDays="0"
			expiredHours="1" autoTrigger="true">
			<ns2:description>建立销售订单</ns2:description>
			<ns2:uiAction actionPage="org.shaolin.vogerp.order.form.SaleOrder"
				actionName="ApproveOrder" actionText="批准生产">
				<ns2:expression>
					<expressionString><![CDATA[
					import java.util.HashMap;
					import org.shaolin.uimaster.page.AjaxContext;
	                import org.shaolin.uimaster.page.ajax.*;
	                import org.shaolin.vogerp.order.be.*;
					{
					    System.out.println("workflow action!!!");
					    RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
					    HashMap values = (HashMap)form.ui2Data();
					    SaleOrderImpl defaultUser = (SaleOrderImpl)values.get("beObject");
					    if (defaultUser.getId() == 0) {
                           @page.executeJavaScript("alert(\"请先保存订单!\");");
                           return;
                        }
					    
					    form.closeIfinWindows(true);
				        @page.removeForm(@page.getEntityUiid()); 
				        HashMap result = new HashMap();
				        result.put("saleOrder", defaultUser);
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
					<expressionString><![CDATA[
					 import java.util.List;
					 import java.util.ArrayList;
					 import org.shaolin.vogerp.order.be.*;
					 import org.shaolin.vogerp.order.dao.OrderModel;
					 {
						   System.out.println("approved the created order: " + $saleOrder);
						   ProductOrderImpl productOrder = new ProductOrderImpl();
						   productOrder.setSaleOrderId($saleOrder.getId());
						   productOrder.setCreateDate(new java.util.Date());
						   List pItems = $saleOrder.getItems();
						   ArrayList items = new ArrayList();
						   for (int i=0; i<pItems.size(); i++) {
						       IOrderItem oitem = (IOrderItem)pItems.get(i);
						       
						       OrderItemImpl pitem = new OrderItemImpl();
						       pitem.setPriceId(oitem.getPriceId());
						       pitem.setAmount(oitem.getAmount());
						       items.add(pitem);
						   }
						   productOrder.setItems(items);
						   @flowContext.bindSession(productOrder);
						}
					 ]]></expressionString>
				</ns2:expression>
			</ns2:process>
			<ns2:dest name="onProduction"></ns2:dest>
		</ns2:mission-node>
		<ns2:mission-node name="onProduction" expiredDays="2" expiredHours="0" autoTrigger="false">
			<ns2:description>生产中</ns2:description>
			<ns2:uiAction actionPage="org.shaolin.vogerp.order.form.ProductOrder"
				actionName="processOrder" actionText="生产完成">
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
	             result.put("productOrder", values.get("beObject"));
	             return result;
            }
        ]]></expressionString>
				</ns2:expression>
			</ns2:uiAction>
			<ns2:participant partyType="GenericOrganizationType.Director,0" />
			<ns2:process>
				<ns2:var name="productOrder" category="BusinessEntity" scope="InOut">
					<type entityName="org.shaolin.vogerp.order.be.ProductOrder"></type>
				</ns2:var>
				<ns2:expression>
					<expressionString><![CDATA[
      import java.util.List;
      import java.util.ArrayList;
      import org.shaolin.vogerp.order.be.*;
      import org.shaolin.vogerp.order.dao.OrderModel;
      {
         System.out.println("productOrder: " + $productOrder);
         InStoreOrderImpl inStoreOrder = new InStoreOrderImpl();
         inStoreOrder.setProductOrderId($productOrder.getId());
         inStoreOrder.setCreateDate(new java.util.Date());
         
         List pItems = $productOrder.getItems();
         ArrayList items = new ArrayList();
         for (int i=0; i<pItems.size(); i++) {
             IOrderItem oitem = (IOrderItem)pItems.get(i);
             
             OrderItemImpl pitem = new OrderItemImpl();
             pitem.setPriceId(oitem.getPriceId());
             pitem.setAmount(oitem.getAmount());
             items.add(pitem);
         }
         inStoreOrder.setItems(items);
         @flowContext.bindSession(inStoreOrder);
      }
     ]]></expressionString>
				</ns2:expression>
			</ns2:process>
			<ns2:dest name="addIntoStorage"></ns2:dest>
		</ns2:mission-node>
		<ns2:mission-node name="addIntoStorage" expiredDays="2"
			expiredHours="0" autoTrigger="false">
			<ns2:description>生产完成，等待入库</ns2:description>
			<ns2:uiAction actionPage="org.shaolin.vogerp.order.form.InStoreOrder"
				actionName="AddIntoStorage" actionText="入库">
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
             result.put("inStoreOrder", values.get("beObject"));
             return result;
         }
        ]]></expressionString>
				</ns2:expression>
			</ns2:uiAction>
			<ns2:participant partyType="GenericOrganizationType.Director,0" />
			<ns2:process>
				<ns2:var name="inStoreOrder" category="BusinessEntity"
					scope="InOut">
					<type entityName="org.shaolin.vogerp.order.be.InStoreOrder"></type>
				</ns2:var>
				<ns2:expression>
					<expressionString><![CDATA[
      import java.util.List;
      import java.util.ArrayList;
      import org.shaolin.vogerp.order.be.*;
      import org.shaolin.vogerp.order.dao.OrderModel;
      {
         System.out.println("inStoreOrder: " + $inStoreOrder);
         OutStoreOrderImpl outStoreOrder = new OutStoreOrderImpl();
         outStoreOrder.setSaleOrderId($inStoreOrder.getId());
         
         List pItems = $inStoreOrder.getItems();
         ArrayList items = new ArrayList();
         for (int i=0; i<pItems.size(); i++) {
             IOrderItem oitem = (IOrderItem)pItems.get(i);
             
             OrderItemImpl pitem = new OrderItemImpl();
             pitem.setPriceId(oitem.getPriceId());
             pitem.setAmount(oitem.getAmount());
             items.add(pitem);
         }
         outStoreOrder.setItems(items);
         @flowContext.bindSession(outStoreOrder);
      }
     ]]></expressionString>
				</ns2:expression>
			</ns2:process>
			<ns2:dest name="deliveryOrder"></ns2:dest>
		</ns2:mission-node>
		<!-- the actionName must be unique as well as the node name does! -->
		<ns2:mission-node name="deliveryOrder" expiredDays="2"
			expiredHours="0" autoTrigger="false">
			<ns2:description>发送订单</ns2:description>
			<ns2:uiAction actionPage="org.shaolin.vogerp.order.form.OutStoreOrder"
				actionName="DeliveryOrder" actionText="寄出">
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
             result.put("deliveryOrder", values.get("beObject"));
             return result;
         }
        ]]></expressionString>
				</ns2:expression>
			</ns2:uiAction>
			<ns2:participant partyType="GenericOrganizationType.Director,0" />
			<ns2:process>
				<ns2:var name="deliveryOrder" category="BusinessEntity"
					scope="InOut">
					<type entityName="org.shaolin.vogerp.order.be.OutStoreOrder"></type>
				</ns2:var>
				<ns2:expression>
					<expressionString>{
						System.out.println("delivered the sale order: " + $deliveryOrder);
						}
					</expressionString>
				</ns2:expression>
			</ns2:process>
			<ns2:dest name="endNode"></ns2:dest>
		</ns2:mission-node>
		<ns2:end-node name="endNode"></ns2:end-node>
	</ns2:flow>
</ns2:Workflow>