/* null */
/* auto generated constructor */
function org_shaolin_vogerp_herewego_page_Login(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var errorInfo = new UIMaster.ui.hidden
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

    var loginBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "loginBtn"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: []
    });

    var loginPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "loginPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "errorInfo",prefix + "userName",prefix + "password",prefix + "loginBtn"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: []
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [errorInfo,userName,password,loginBtn,topPanel,loginPanel,bottomPanel]
    });

    Form.errorInfo=errorInfo;

    Form.userName=userName;

    Form.password=password;

    Form.loginBtn=loginBtn;

    Form.topPanel=topPanel;

    Form.loginPanel=loginPanel;

    Form.bottomPanel=bottomPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_herewego_page_Login */
        /* Construct_LAST:org_shaolin_vogerp_herewego_page_Login */
    };

    Form.Login = org_shaolin_vogerp_herewego_page_Login_Login;

    Form.initPageJs = org_shaolin_vogerp_herewego_page_Login_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_herewego_page_Login_finalizePageJs;

    Form.Submit_OutFunctionName = org_shaolin_vogerp_herewego_page_Login_Submit_OutFunctionName;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.herewego.page.Login";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_herewego_page_Login */
/* Other_Func_LAST:org_shaolin_vogerp_herewego_page_Login */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_herewego_page_Login_Login(eventsource,event) {/* Gen_First:org_shaolin_vogerp_herewego_page_Login_Login */

        var UIEntity = this;

        this.Submit_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_vogerp_herewego_page_Login_Login */


    function org_shaolin_vogerp_herewego_page_Login_initPageJs(){/* Gen_First:org_shaolin_vogerp_herewego_page_Login_initPageJs */
        var constraint_result = true;
        var UIEntity = this;
{
			// hello, my first js.
			}
    }/* Gen_Last:org_shaolin_vogerp_herewego_page_Login_initPageJs */


    function org_shaolin_vogerp_herewego_page_Login_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_herewego_page_Login_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_herewego_page_Login_finalizePageJs */


    function org_shaolin_vogerp_herewego_page_Login_Submit_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_vogerp_herewego_page_Login_Submit_OutFunctionName */
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
    }/* Gen_Last:org_shaolin_vogerp_herewego_page_Login_Submit_OutFunctionName */


