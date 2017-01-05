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
	<!-- 支付流程 -->
    <ns2:flow name="PayFlow" eventConsumer="PayFlowConsumer">
    </ns2:flow>
    
    <!-- 转账流程 -->
    <ns2:flow name="TransferFlow" eventConsumer="TransferFlowConsumer">
    </ns2:flow>
    
    <!-- 退款流程 -->
    <ns2:flow name="RefundFlow" eventConsumer="RefundFlowConsumer">
    </ns2:flow>
    
</ns2:Workflow>