/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_Login_mob(json)
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

    var userName = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "userName"]
    });

    var password = new UIMaster.ui.passwordfield
    ({
        ui: elementList[prefix + "password"]
    });

    var veriCodeQuestion = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "veriCodeQuestion"]
    });

    var veriCode = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "veriCode"]
    });

    var loginBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "loginBtn"]
    });

    var registerBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "registerBtn"]
    });

    var bottomPanelInfo = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottomPanelInfo"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "bottomPanelInfo"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "loginBtn",prefix + "registerBtn"]
    });

    var loginPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "loginPanel"]
        ,items: []
        ,subComponents: [prefix + "errorInfo",prefix + "userName",prefix + "password",prefix + "veriCodeQuestion",prefix + "veriCode",prefix + "actionPanel"]
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
        ,items: [vogerplogo,errorInfo,userName,password,veriCodeQuestion,veriCode,loginBtn,registerBtn,bottomPanelInfo,topPanel,loginPanel,actionPanel,bottomPanel]
    });

    Form.vogerplogo=vogerplogo;

    Form.errorInfo=errorInfo;

    Form.userName=userName;

    Form.password=password;

    Form.veriCodeQuestion=veriCodeQuestion;

    Form.veriCode=veriCode;

    Form.loginBtn=loginBtn;

    Form.registerBtn=registerBtn;

    Form.bottomPanelInfo=bottomPanelInfo;

    Form.topPanel=topPanel;

    Form.vogerplogo=vogerplogo;

    Form.loginPanel=loginPanel;

    Form.errorInfo=errorInfo;

    Form.userName=userName;

    Form.password=password;

    Form.veriCodeQuestion=veriCodeQuestion;

    Form.veriCode=veriCode;

    Form.actionPanel=actionPanel;

    Form.loginBtn=loginBtn;

    Form.registerBtn=registerBtn;

    Form.actionPanel=actionPanel;

    Form.loginBtn=loginBtn;

    Form.registerBtn=registerBtn;

    Form.bottomPanel=bottomPanel;

    Form.bottomPanelInfo=bottomPanelInfo;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_Login_mob */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_Login_mob */
    };

    Form.genVerifiCode = org_shaolin_bmdp_adminconsole_page_Login_mob_genVerifiCode;

    Form.verifiCode = org_shaolin_bmdp_adminconsole_page_Login_mob_verifiCode;

    Form.Login = org_shaolin_bmdp_adminconsole_page_Login_mob_Login;

    Form.Register = org_shaolin_bmdp_adminconsole_page_Login_mob_Register;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_Login_mob_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_Login_mob_finalizePageJs;

    Form.Submit_OutFunctionName = org_shaolin_bmdp_adminconsole_page_Login_mob_Submit_OutFunctionName;

    Form.Register_OutFunctionName = org_shaolin_bmdp_adminconsole_page_Login_mob_Register_OutFunctionName;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.bmdp.adminconsole.page.Login_mob";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_page_Login_mob */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_page_Login_mob */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Login_mob_genVerifiCode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_genVerifiCode */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"genVerifiCode-20151227-1839",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_genVerifiCode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Login_mob_verifiCode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_verifiCode */
        var o = this;
        var UIEntity = this;

		        {   
		            var constraint_result = this.Form.validate();
		            if (constraint_result != true && constraint_result != null) {
		                return false;
		            }
		        }
		        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"verifiCode-20151227-1839",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_verifiCode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Login_mob_Login(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_Login */
        var o = this;
        var UIEntity = this;

        o.Submit_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_Login */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Login_mob_Register(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_Register */
        var o = this;
        var UIEntity = this;

        o.Register_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_Register */


    function org_shaolin_bmdp_adminconsole_page_Login_mob_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_initPageJs */
        var constraint_result = true;
        var UIEntity = this;
{
			// hello, my first js.
			}
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_Login_mob_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_finalizePageJs */


    function org_shaolin_bmdp_adminconsole_page_Login_mob_Submit_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_Submit_OutFunctionName */
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
			// hello, my first js.
			}        
        myForm._outname.value = "Submit";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_Submit_OutFunctionName */

    function org_shaolin_bmdp_adminconsole_page_Login_mob_Register_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_Register_OutFunctionName */
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
            // hello, my first js.
            }        
        myForm._outname.value = "Register";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_Register_OutFunctionName */


