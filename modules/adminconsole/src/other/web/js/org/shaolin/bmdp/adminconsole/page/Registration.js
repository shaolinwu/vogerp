/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_Registration(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var vogerplogo = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "vogerplogo"]
    });

    var errorInfo = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "errorInfo"]
    });

    var veriCodeQuestionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "veriCodeQuestionUILabel"]
    });

    var veriCodeQuestion = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "veriCodeQuestion"]
    });

    var veriCodeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "veriCodeUILabel"]
    });

    var veriCode = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "veriCode"]
    });

    var termsUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "termsUI"]
        ,label: "接受用户注册协议书"
    });

    var registerBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "registerBtn"]
    });

    var loginBtn = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "loginBtn"]
    });

    var bottomPanelInfo = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottomPanelInfo"]
    });

    var registerInfo = new org_shaolin_bmdp_adminconsole_form_RegisterInfo({"prefix":prefix + "registerInfo."});

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "bottomPanelInfo"]
    });

    var verifyCodePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "verifyCodePanel"]
        ,items: []
        ,subComponents: [prefix + "veriCodeQuestionUILabel",prefix + "veriCodeQuestion",prefix + "veriCodeUILabel",prefix + "veriCode",prefix + "termsUI",prefix + "registerBtn",prefix + "loginBtn"]
    });

    var loginPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "loginPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "errorInfo",prefix + "registerInfo",prefix + "verifyCodePanel"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,items: []
        ,subComponents: [prefix + "vogerplogo"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [vogerplogo,errorInfo,veriCodeQuestionUILabel,veriCodeQuestion,veriCodeUILabel,veriCode,termsUI,registerBtn,loginBtn,bottomPanelInfo,registerInfo,topPanel,loginPanel,verifyCodePanel,bottomPanel]
    });

    Form.vogerplogo=vogerplogo;

    Form.errorInfo=errorInfo;

    Form.veriCodeQuestionUILabel=veriCodeQuestionUILabel;

    Form.veriCodeQuestion=veriCodeQuestion;

    Form.veriCodeUILabel=veriCodeUILabel;

    Form.veriCode=veriCode;

    Form.termsUI=termsUI;

    Form.registerBtn=registerBtn;

    Form.loginBtn=loginBtn;

    Form.bottomPanelInfo=bottomPanelInfo;

    Form.registerInfo=registerInfo;

    Form.topPanel=topPanel;

    Form.vogerplogo=vogerplogo;

    Form.loginPanel=loginPanel;

    Form.errorInfo=errorInfo;

    Form.registerInfo=registerInfo;

    Form.verifyCodePanel=verifyCodePanel;

    Form.veriCodeQuestionUILabel=veriCodeQuestionUILabel;

    Form.veriCodeQuestion=veriCodeQuestion;

    Form.veriCodeUILabel=veriCodeUILabel;

    Form.veriCode=veriCode;

    Form.termsUI=termsUI;

    Form.registerBtn=registerBtn;

    Form.loginBtn=loginBtn;

    Form.verifyCodePanel=verifyCodePanel;

    Form.veriCodeQuestionUILabel=veriCodeQuestionUILabel;

    Form.veriCodeQuestion=veriCodeQuestion;

    Form.veriCodeUILabel=veriCodeUILabel;

    Form.veriCode=veriCode;

    Form.termsUI=termsUI;

    Form.registerBtn=registerBtn;

    Form.loginBtn=loginBtn;

    Form.bottomPanel=bottomPanel;
package com.hp.usage.partition.cli;

import com.hp.usage.console.api.CommandContext;
import com.hp.usage.console.api.CommandHandler;

public class DeleteSequenceHandler extends AccessMgmtServer implements CommandHandler{

    @Override
    public Object execute(CommandContext context) throws Exception {
        String pserver = getArgument(context, "pserver");
        String applicationName = getArgument(context, "applicationName");
        String sequenceName = getArgument(context, "sequenceName");
        
        Object[] params = new Object[] {applicationName.trim(), sequenceName};
        String[] types = new String[] {String.class.getName(), String.class.getName()};
        invoke(context, getPartitionModelRef(pserver), "deleteSequence", params, types);
        context.output("*** Deleted sequence: "+sequenceName+" ***");
        return true;
    }
    
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	/workflow        D ,org.eclipse.jdt.launching.jreContainerMarker  message 楤uild path specifies execution environment JavaSE-1.7. There are no JREs installed in the workspace that are strictly compatible with this environment.  severity    location 
Build path  V齋8b O/workflow/src/test/java/org/shaolin/bmdp/workflow/internal/ProcessFlowTest.java        瓦 org.eclipse.jdt.core.problem 	 severity    sourceId JDT 	charStart  
 charEnd  
 	arguments $2:java.lang.Class#java.lang.Class<T> id < message PClass is a raw type. References to generic type Class<T> should be parameterized 
lineNumber   J 
categoryId   �  W)"c�     袜 org.eclipse.jdt.core.task  sourceId JDT 	charStart   userEditable  charEnd  ! id  � message TODO Auto-generated method stub priority    
lineNumber   U  W)"c� R/workflow/src/test/java/org/shaolin/bmdp/workflow/internal/MockSessionService.java        B    	 severity    sourceId JDT 	charStart  � charEnd  � 	arguments $2:java.lang.Class#java.lang.Class<T> id < message PClass is a raw type. References to generic type Class<T> should be parameterized 
lineNumber   D 
categoryId   �  V齋8R K/workflow/src/test/java/org/shaolin/bmdp/workflow/internal/MockSession.java        C    	 severity    sourceId JDT 	charStart   { charEnd   � 	arguments 1:MockSession id   ` message fThe serializable class MockSession does not declare a static final serialVersionUID field of type long 
lineNumber    
categoryId   Z  V齋8T M/workflow/src/main/java/org/shaolin/bmdp/workflow/ws/NotificationService.java        � .org.eclipse.jdt.debug.javaLineBreakpointMarker 
 	charStart   (org.eclipse.jdt.debug.core.suspendPolicy    /org.eclipse.jdt.debug.ui.JAVA_ELEMENT_HANDLE_ID c=workflow/src\/main\/java<org.shaolin.bmdp.workflow.ws{NotificationService.java[NotificationService charEnd  H org.eclipse.debug.core.enabled 
lineNumber   � message CLine breakpoint:NotificationService 