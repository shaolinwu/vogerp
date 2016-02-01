/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_Registration(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var vogerplogo = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "vogerplogo"]
    });

    var errorInfo = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "errorInfo"]
    });

    var veriCodeQuestion = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "veriCodeQuestion"]
    });

    var veriCode = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "veriCode"]
    });

    var registerInfo = new org_shaolin_bmdp_adminconsole_form_RegisterInfo({"prefix":prefix + "registerInfo."});

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: []
    });

    var loginPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "loginPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "errorInfo",prefix + "registerInfo",prefix + "veriCodeQuestion",prefix + "veriCode"]
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
        ,items: [vogerplogo,errorInfo,veriCodeQuestion,veriCode,registerInfo,topPanel,loginPanel,bottomPanel]
    });

    Form.vogerplogo=vogerplogo;

    Form.errorInfo=errorInfo;

    Form.veriCodeQuestion=veriCodeQuestion;

    Form.veriCode=veriCode;

    Form.registerInfo=registerInfo;

    Form.topPanel=topPanel;

    Form.vogerplogo=vogerplogo;

    Form.loginPanel=loginPanel;

    Form.errorInfo=errorInfo;

    Form.registerInfo=registerInfo;

    Form.veriCodeQuestion=veriCodeQuestion;

    Form.veriCode=veriCode;

    Form.bottomPanel=bottomPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_Registration */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_Registration */
    };

    Form.genVerifiCode = org_shaolin_bmdp_adminconsole_page_Registration_genVerifiCode;

    Form.verifiCode = org_shaolin_bmdp_adminconsole_page_Registration_verifiCode;

    Form.Register = org_shaolin_bmdp_adminconsole_page_Registration_Register;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_Registration_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_Registration_finalizePageJs;

    Form.Register_OutFunctionName = org_shaolin_bmdp_adminconsole_page_Registration_Register_OutFunctionName;

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

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"genVerifiCode-20151227-1839",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_genVerifiCode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Registration_verifiCode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_verifiCode */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"verifiCode-20151227-1839",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_verifiCode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Registration_Register(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Registration_Register */

        var UIEntity = this;

        this.Register_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_Register */


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
			// hello, my first js.
			}        
        myForm._outname.value = "Register";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Registration_Register_OutFunctionName */


