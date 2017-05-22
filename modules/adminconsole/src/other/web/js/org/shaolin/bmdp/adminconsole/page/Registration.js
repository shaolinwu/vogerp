/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_Registration(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var latitudeInfo = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "latitudeInfo"]
    });

    var longitudeInfo = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "longitudeInfo"]
    });

    var vogerplogo = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "vogerplogo"]
    });

    var errorInfo = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "errorInfo"]
        ,needAjaxSupport: true
    });

    var selectModeUI = new UIMaster.ui.radiobuttongroup
    ({
        ui: elementList[prefix + "selectModeUI"]
        ,horizontalLayout: true
        ,value: "0"
    });

    var veriCodeQuestionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "veriCodeQuestionUILabel"]
    });

    var veriCodeQuestion = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "veriCodeQuestion"]
        ,needAjaxSupport: true
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
        ,label: "???????????"
        ,mustCheck: true
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

    var registerCompanyInfo = new org_shaolin_bmdp_adminconsole_form_RegisterCompanyInfo({"prefix":prefix + "registerCompanyInfo."});

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
        ,subComponents: [prefix + "errorInfo",prefix + "selectModeUI",prefix + "registerInfo",prefix + "registerCompanyInfo",prefix + "verifyCodePanel"]
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
        ,items: [latitudeInfo,longitudeInfo,vogerplogo,errorInfo,selectModeUI,veriCodeQuestionUILabel,veriCodeQuestion,veriCodeUILabel,veriCode,termsUI,registerBtn,loginBtn,bottomPanelInfo,registerInfo,registerCompanyInfo,topPanel,loginPanel,verifyCodePanel,bottomPanel]
    });

    Form.latitudeInfo=latitudeInfo;

    Form.longitudeInfo=longitudeInfo;

    Form.vogerplogo=vogerplogo;

    Form.errorInfo=errorInfo;

    Form.selectModeUI=selectModeUI;

    Form.veriCodeQuestionUILabel=veriCodeQuestionUILabel;

    Form.veriCodeQuestion=veriCodeQuestion;

    Form.veriCodeUILabel=veriCodeUILabel;

    Form.veriCode=veriCode;

    Form.termsUI=termsUI;

    Form.registerBtn=registerBtn;

    Form.loginBtn=loginBtn;

    Form.bottomPanelInfo=bottomPanelInfo;

    Form.registerInfo=registerInfo;

    Form.registerCompanyInfo=registerCompanyInfo;

    Form.topPanel=topPanel;

    Form.vogerplogo=vogerplogo;

    Form.loginPanel=loginPanel;

    Form.errorInfo=errorInfo;

    Form.selectModeUI=selectModeUI;

    Form.registerInfo=registerInfo;

    Form.registerCompanyInfo=registerCompanyInfo;

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

    Form.bottomPanelInfo=bottomPanelInfo;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_Registration */

        
		        { 
		            $(this.registerCompanyInfo.Form).parent().css("display", "none");
		            // notify user open up the GPS.
		            if(navigator.geolocation){
				        var latitudeInfo = this.latitudeInfo;
				        var longitudeInfo = this.longitudeInfo;
				        navigator.geolocation.getCurrentPosition(
			                function(p){
			                    latitudeInfo.setValue(p.coords.latitude);
			                    longitudeInfo.setValue(p.coords.longitude);
			                },
			                function(e){
			                    var msg = e.code + "\n" + e.message;
			                    console.log(msg);
			                }
				        );
				    }
		        }
		    
            /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_Registration */
    };

    Form.genVerifiCode = org_shaolin_bmdp_adminconsole_page_Registration_genVerifiCode;

    Form.switchRegisterUserPanel = org_shaolin_bmdp_adminconsole_page_Registration_switchRegisterUserPanel;

    Form.verifiCode = org_shaolin_bmdp_adminconsole_page_Registration_verifiCode;

    Form.openUserTerms = org_shaolin_bmdp_adminconsole_page_Registration_openUserTerms;

    Form.Login = org_shaolin_bmdp_adminconsole_page_Registration_Login;

    Form.Register = org_shaolin_bmdp_adminconsole_page_Registration_Register;

    Form.AppRegister = org_shaolin_bmdp_adminconsole_page_Registration_AppRegister;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_Registration_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_Registration_finalizePageJs;

    Form.Register_OutFunctionName = org_shaolin_bmdp_adminconsole_page_Registration_Register_OutFunctionName;

    Form.Login_OutFunctionName = org_shaolin_bmdp_adminconsole_page_Registration_Login_OutFunctionName;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.bmdp.adminconsole.page.Registration";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_page_Registration */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_page_Registration */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Registration_genVerifiCode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_genVerifiCode */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"genVerifiCode-20151227-1839",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_genVerifiCode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Registration_switchRegisterUserPanel(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_switchRegisterUserPanel */
        var o = this;
        var UIEntity = this;

		        {   
		            if (this.selectModeUI.getValue() == "0") {
		                $(this.registerInfo.Form).parent().css("display", "block");
		                $(this.registerCompanyInfo.Form).parent().css("display", "none");
		            } else {
		                $(this.registerInfo.Form).parent().css("display", "none");
		                $(this.registerCompanyInfo.Form).parent().css("display", "block");
		            }
		        }
		            }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_switchRegisterUserPanel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Registration_verifiCode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_verifiCode */
        var o = this;
        var UIEntity = this;

		        {   
		            if (this.selectModeUI.getValue() == "0") {
		                var constraint_result = this.registerInfo.Form.validate();
			            if (constraint_result != true && constraint_result != null) {
			                return false;
			            }
		            } else {
		               var constraint_result = this.registerCompanyInfo.Form.validate();
			            if (constraint_result != true && constraint_result != null) {
			                return false;
			            }
		            }
		            var constraint_result = this.veriCode.validate();
		            if (constraint_result != true && constraint_result != null) {
		                return false;
		            }
		        }
		        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"verifiCode-20151227-1839",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_verifiCode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Registration_openUserTerms(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_openUserTerms */
        var o = this;
        var UIEntity = this;

		        {   
		            UIMaster.ui.mask.openHtml("/html/hints/terms.html");
		        }
		            }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_openUserTerms */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Registration_Login(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_Login */
        var o = this;
        var UIEntity = this;

        o.Login_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_Login */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Registration_Register(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_Register */
        var o = this;
        var UIEntity = this;

		        {   
		            constraint_result = this.Form.validate();
					if (this.selectModeUI.getValue() == "0") {
		                constraint_result = this.registerInfo.Form.validate();
			            if (constraint_result != true && constraint_result != null) {
			                return false;
			            }
		            } else {
		                constraint_result = this.registerCompanyInfo.Form.validate();
			            if (constraint_result != true && constraint_result != null) {
			                return false;
			            }
		            }
		            constraint_result = this.veriCode.validate();
		            if (constraint_result != true && constraint_result != null) {
		                return false;
		            }
		            constraint_result = this.termsUI.validate();
		            if (constraint_result != true && constraint_result != null) {
		                return false;
		            }
		            
		            if (MobileAppMode) {
		               // webview does not support form.
		               
		               UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"AppRegister-20151227-1839",UIMaster.getValue(eventsource),o.__entityName);
		               
		               return;
		            }
		        }
		        
        o.Register_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_Register */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Registration_AppRegister(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_AppRegister */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"AppRegister-20151227-1839",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_AppRegister */


    function org_shaolin_bmdp_adminconsole_page_Registration_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_initPageJs */
        var constraint_result = true;
        var UIEntity = this;
{
			// hello, my first js.
			}
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_Registration_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_finalizePageJs */


    function org_shaolin_bmdp_adminconsole_page_Registration_Register_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_Register_OutFunctionName */
        var constraint_result = true;
        var myForm;
        if (this.formName != undefined)
        {
            myForm = document.forms[this.formName];
        }
        else
        {
            var p = this.Form.parentNode;
            while(p.tagName != "FORM")
                p = p.parentNode;
            myForm = p;//document.forms[0];
        }

        var UIEntity = this;

        constraint_result = this.Form.validate();
{
			}        
        myForm._outname.value = "Register";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_Register_OutFunctionName */

    function org_shaolin_bmdp_adminconsole_page_Registration_Login_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_Login_OutFunctionName */
        var constraint_result = true;
        var myForm;
        if (this.formName != undefined)
        {
            myForm = document.forms[this.formName];
        }
        else
        {
            var p = this.Form.parentNode;
            while(p.tagName != "FORM")
                p = p.parentNode;
            myForm = p;//document.forms[0];
        }

        var UIEntity = this;
{
            constraint_result = true;
            // hello, my first js.
            }        
        myForm._outname.value = "Login";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_Login_OutFunctionName */


