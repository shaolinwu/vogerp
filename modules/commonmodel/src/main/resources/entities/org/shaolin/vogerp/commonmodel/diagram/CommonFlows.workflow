<?xml version="1.0" ?>
<ns2:Workflow xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:ns6="http://bmdp.shaolin.org/datamodel/PageDiagram" xmlns:ns5="http://bmdp.shaolin.org/datamodel/Page"
	xmlns:ns4="http://bmdp.shaolin.org/datamodel/RDBDiagram" xmlns:ns3="http://bmdp.shaolin.org/datamodel/BEDiagram"
	xmlns:ns2="http://bmdp.shaolin.org/datamodel/Workflow" xmlns="http://bmdp.shaolin.org/datamodel/Common"
	xsi:schemaLocation="">
	<entityName>org.shaolin.vogerp.commonmodel.diagram.CommonFlows</entityName>
	<systemVersion>0</systemVersion>
	<description></description>
	<ns2:conf>
		<ns2:bootable>true</ns2:bootable>
		<!-- 
		<ns2:service name="userService" category="JavaClass">
			<type entityName="org.shaolin.vogerp.commonmodel.IUserService"></type>
		</ns2:service>
		 -->
	</ns2:conf>
	<!-- 客户身体验证审核 -->
    <ns2:flow name="CustomerApplyForVerification" eventConsumer="ApplyForVerification">
        <ns2:conf>
        </ns2:conf>
        <ns2:start-node name="init">
            <ns2:process>
	            <ns2:var name="orgLegalinfo" category="BusinessEntity" scope="InOut">
	                <type entityName="org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfo"></type>
	            </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import org.shaolin.bmdp.runtime.ce.CEUtil;
                    import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
                    {
                      @flowContext.save($orgLegalinfo);
                    }]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="applyForVerification"></ns2:dest>
        </ns2:start-node>
        <ns2:mission-node name="applyForVerification" expiredDays="0" expiredHours="0" autoTrigger="true">
            <ns2:description>发送管理员审核</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.commonmodel.form.LegalOrganizationInfo"
                actionName="verifyLegalInfo" actionText="提交审核">
                <ns2:filter>
                    <expressionString><![CDATA[
                    import org.shaolin.vogerp.commonmodel.ce.OrgVerifyStatusType;
                    import org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfoImpl;
                    {
                        return $beObject.getVeriState() != OrgVerifyStatusType.VERIFYING 
                            || $beObject.getVeriState() != OrgVerifyStatusType.VERIFIED;
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
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.commonmodel.be.*;
			        import org.shaolin.vogerp.commonmodel.ce.*;
                    import org.shaolin.vogerp.commonmodel.IMemberService;
                    import org.shaolin.vogerp.commonmodel.IOrganizationService;
                    import org.shaolin.vogerp.commonmodel.dao.CommonModel;
			        import org.shaolin.vogerp.accounting.be.IPayOrder;
			        import org.shaolin.vogerp.accounting.ce.PayBusinessType;
			        import org.shaolin.vogerp.accounting.IAccountingService;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        
                        IOrganizationService orgService = (IOrganizationService)AppContext.get().getService(IOrganizationService.class);
                        OrganizationImpl orgInfo = (OrganizationImpl)orgService.getOrganizationInfo();
                        LegalOrganizationInfoImpl templLegalInfo = (LegalOrganizationInfoImpl)out.get("beObject");
                        if (templLegalInfo.getId() == 0) {
				            OrganizationImpl tempInfo = (OrganizationImpl)out.get("orgInfo");
				            orgInfo.setName(tempInfo.getName());
				            orgInfo.setType(tempInfo.getType());
				            orgInfo.setDescription(tempInfo.getDescription());
				            CommonModel.INSTANCE.update(orgInfo);
				            
				            templLegalInfo.setOrgId(orgInfo.getId());
				            CommonModel.INSTANCE.create(templLegalInfo, true);
                        } else {
				            CommonModel.INSTANCE.update(templLegalInfo, true);
                        }
                        if (form.isInWindows()) {
	                        form.closeIfinWindows(true);
	                        @page.removeForm(@page.getEntityUiid()); 
                        }
                        
                        //make a payment!
			            IMemberService memberService = (IMemberService)AppContext.get().getService(IMemberService.class);
			            IAssignedMember member = memberService.getUserMember(templLegalInfo.getOrgId());
			            if (member == null) {
			            	AssignedMemberImpl assignedMember = new AssignedMemberImpl();
							assignedMember.setOrgId(templLegalInfo.getOrgId());
							assignedMember.setType(AMemberType.GENERAL);
							assignedMember.setDescription("Defualt");
							Date assingedDate = new Date();
							DateUtil.increaseMonths(assingedDate, Registry.getInstance().getValue("/System/Vogerp/UserMemberRule/DefaultMonth", 6));
							assignedMember.setEndtime(assingedDate);
							assignedMember.setStarttime(new Date());
							CommonModel.INSTANCE.create(assignedMember);
							member = assignedMember;
			            }
			            double price = memberService.getServicePrice(member, AMemberFunctionType.A);
			            IAccountingService accountingService = (IAccountingService)AppContext.get().getService(IAccountingService.class);
			            IPayOrder payOrder = accountingService.createPayAdminOrder(PayBusinessType.MEMBERBUSI, UserContext.getUserContext().getUserId(), "AM-"+templLegalInfo.getId(), price);
                        String json = accountingService.prepay(payOrder);
	                    @page.getRequest().getSession().setAttribute("__payJson", json);
	                    
                        Dialog.showMessageDialog("提交审核中, 请您支付("+price+")元会员费用，谢谢（本功能要求浏览器允许“弹出窗口”）！", "", Dialog.INFORMATION_MESSAGE, null);
	                    @page.executeJavaScript("window.open('/uimaster/jsp/paywindow.jsp')");
                        
                        HashMap result = new HashMap();
                        result.put("orgLegalinfo", out.get("beObject"));
                        result.put("orgInfo", out.get("orgInfo"));
                        result.put("payOrder", payOrder);
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant onlyOwner="true"/>
            <ns2:process>
                <ns2:var name="orgLegalinfo" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfo"></type>
                </ns2:var>
                <ns2:var name="orgInfo" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.commonmodel.be.Organization"></type>
                </ns2:var>
                <ns2:var name="payOrder" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.accounting.be.PayOrder"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.commonmodel.ce.OrgVerifyStatusType;
                    import org.shaolin.vogerp.commonmodel.dao.CommonModel;
                    {
                       $orgInfo.setVeriState(OrgVerifyStatusType.VERIFYING);
                       CommonModel.INSTANCE.update($orgInfo);
                       
                       $orgLegalinfo.setVeriState($orgInfo.getVeriState());
        			   $orgLegalinfo.setVerifierId($orgInfo.getVerifierId());
        			   
        			   @flowContext.save($orgLegalinfo);
        			   @flowContext.save($payOrder);
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
                <ns2:dest name="verifyCustomerInfoFailed"></ns2:dest>
            	<ns2:dest name="verifiedCustomerInfo"></ns2:dest>
            	<ns2:dest name="applyForVerification"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        
        <ns2:mission-node name="verifyCustomerInfoFailed" expiredDays="0" expiredHours="0" autoTrigger="true">
            <ns2:description>管理员审核客户信息未通过</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.commonmodel.form.LegalOrganizationInfo"
                actionName="verifyCustomerInfoFailed" actionText="不能通过">
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfoImpl;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        LegalOrganizationInfoImpl defaultUser = (LegalOrganizationInfoImpl)out.get("beObject");
                        if (defaultUser.getId() == 0) {
                           @page.executeJavaScript("alert(\"请先保存信息 !\");");
                           return;
                        }
                        
                        if (form.isInWindows()) {
                            form.closeIfinWindows(true);
                            @page.removeForm(@page.getEntityUiid()); 
                        }
                        
                        HashMap result = new HashMap();
                        result.put("orgLegalinfo", out.get("beObject"));
                        result.put("orgInfo", out.get("orgInfo"));
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant partyType="Admin,0"/>
            <ns2:process>
                <ns2:var name="orgLegalinfo" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfo"></type>
                </ns2:var>
                <ns2:var name="orgInfo" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.commonmodel.be.Organization"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import java.util.HashMap;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl;
                    import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
                    import org.shaolin.vogerp.commonmodel.dao.CommonModel;
                    import org.shaolin.vogerp.commonmodel.ce.OrgVerifyStatusType;
                     {
                         $orgInfo.setVeriState(OrgVerifyStatusType.FAILED);
                         CommonModel.INSTANCE.update($orgInfo);
                         
                         // notify customer.
                         IUserService userService = (IUserService)AppContext.get().getService(AppContext.class);
                         PersonalInfoImpl condition = new PersonalInfoImpl();
                         condition.setOrgId($orgInfo.getId());
                         List result = CommonModel.INSTANCE.searchPersonInfo(condition, null, 0, 1);
                         IPersonalInfo publisher = (IPersonalInfo)result.get(0);
                         
                         String subject = "您的帐号未验证通过！";
                         String description = "原因： 信息不明确。";
                         NotificationImpl message = new NotificationImpl();
                         message.setPartyId(publisher.getId());
                         message.setSubject(subject);
                         message.setDescription(description);
                         message.setCreateDate(new Date());
                         
                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
                         service.addNotification(message, true);
                     }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:eventDest>
                <ns2:dest name="verifiedCustomerInfo"></ns2:dest>
            </ns2:eventDest>
        </ns2:mission-node>
        
        <ns2:mission-node name="verifiedCustomerInfo" expiredDays="0" expiredHours="0" autoTrigger="true">
            <ns2:description>管理员审核客户信息通过</ns2:description>
            <ns2:uiAction actionPage="org.shaolin.vogerp.commonmodel.form.LegalOrganizationInfo"
                actionName="verifiedLegalInfo" actionText="验证通过">
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.HashMap;
                    import java.util.Date;
                    import java.util.ArrayList;
                    import org.shaolin.uimaster.page.AjaxContext;
                    import org.shaolin.uimaster.page.ajax.*;
                    import org.shaolin.vogerp.ecommercial.dao.*;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.vogerp.commonmodel.be.*;
                    import org.shaolin.vogerp.commonmodel.dao.CommonModel;
                    { 
                        RefForm form = (RefForm)@page.getElement(@page.getEntityUiid()); 
                        HashMap out = (HashMap)form.ui2Data();
                        LegalOrganizationInfoImpl defaultUser = (LegalOrganizationInfoImpl)out.get("beObject");
                        if (defaultUser.getId() == 0) {
				            OrganizationImpl orgInfo = (OrganizationImpl)out.get("orgInfo");
				            defaultUser.setOrgId(orgInfo.getId());
				            CommonModel.INSTANCE.create(defaultUser, true);
                        }
                        
                        if (form.isInWindows()) {
                            form.closeIfinWindows(true);
                            @page.removeForm(@page.getEntityUiid()); 
                        }
                        
                        HashMap result = new HashMap();
                        result.put("orgLegalinfo", out.get("beObject"));
                        result.put("orgInfo", out.get("orgInfo"));
                        return result;
                    }
                    ]]></expressionString>
                </ns2:expression>
            </ns2:uiAction>
            <ns2:participant partyType="Admin,0"/>
            <ns2:process>
                <ns2:var name="orgLegalinfo" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfo"></type>
                </ns2:var>
                <ns2:var name="orgInfo" category="BusinessEntity" scope="Out">
                    <type entityName="org.shaolin.vogerp.commonmodel.be.Organization"></type>
                </ns2:var>
                <ns2:expression>
                    <expressionString><![CDATA[
                    import java.util.List;
                    import java.util.Date;
                    import java.util.HashMap;
                    import org.shaolin.bmdp.utils.DateUtil;
                    import org.shaolin.bmdp.runtime.AppContext; 
                    import org.shaolin.vogerp.commonmodel.IUserService; 
                    import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
                    import org.shaolin.bmdp.workflow.be.NotificationImpl;
                    import org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl;
                    import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
                    import org.shaolin.vogerp.commonmodel.dao.CommonModel;
                    import org.shaolin.vogerp.commonmodel.ce.OrgVerifyStatusType;
                     {
                         $orgInfo.setVeriState(OrgVerifyStatusType.VERIFIED);
                         CommonModel.INSTANCE.update($orgInfo);
                         
                         // notify customer.
                         PersonalInfoImpl condition = new PersonalInfoImpl();
                         condition.setOrgId($orgInfo.getId());
                         List result = CommonModel.INSTANCE.searchPersonInfo(condition, null, 0, 1);
                         IPersonalInfo publisher = (IPersonalInfo)result.get(0);
                         
                         String subject = "恭喜您的帐号通过验证！";
                         String description = "";
                         NotificationImpl message = new NotificationImpl();
                         message.setPartyId(publisher.getId());
                         message.setSubject(subject);
                         message.setDescription(description);
                         message.setCreateDate(new Date());
                         
                         ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
                         service.addNotification(message, true);
                     }
                     ]]></expressionString>
                </ns2:expression>
            </ns2:process>
            <ns2:dest name="endNode"></ns2:dest>
        </ns2:mission-node>
        <ns2:end-node name="endNode"></ns2:end-node>
    </ns2:flow>
</ns2:Workflow>