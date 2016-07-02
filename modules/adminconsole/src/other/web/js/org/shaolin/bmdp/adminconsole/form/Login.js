/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_form_Login(json)
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

    var password0 = new UIMaster.ui.passwordfield
    ({
        ui: elementList[prefix + "password0"]
    });

    var loginBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "loginBtn"]
    });

    var loginPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "loginPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "errorInfo",prefix + "userName",prefix + "password0",prefix + "loginBtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [errorInfo,userName,password0,loginBtn,loginPanel]
    });

    Form.errorInfo=errorInfo;

    Form.userName=userName;

    Form.password0=password0;

    Form.loginBtn=loginBtn;

    Form.loginPanel=loginPanel;

    Form.errorInfo=errorInfo;

    Form.userName=userName;

    Form.password0=password0;

    Form.loginBtn=loginBtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_form_Login */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_form_Login */
    };

    Form.Login = org_shaolin_bmdp_adminconsole_form_Login_Login;

    Form.invokeDynamicFunction = org_shaolin_bmdp_adminconsole_form_Login_invokeDynamicFunction;

    Form.__entityName="org.shaolin.bmdp.adminconsole.form.Login";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_form_Login */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_form_Login */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_Login_Login(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_Login_Login */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
            this.Form.submit();
        }
            }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_Login_Login */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_Login_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_Login_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_Login_invokeDynamicFunction */



