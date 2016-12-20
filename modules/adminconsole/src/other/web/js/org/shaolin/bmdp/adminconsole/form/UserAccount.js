/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_form_UserAccount(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var userNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "userNameUILabel"]
    });

    var userNameUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "userNameUI"]
    });

    var orgInfoUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgInfoUILabel"]
    });

    var orgInfoUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgInfoUI"]
    });

    var localeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "localeUILabel"]
    });

    var localeUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "localeUI"]
    });

    var lastLoginUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "lastLoginUILabel"]
    });

    var lastLoginUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "lastLoginUI"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: []
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "userNameUILabel",prefix + "userNameUI",prefix + "orgInfoUILabel",prefix + "orgInfoUI",prefix + "localeUILabel",prefix + "localeUI",prefix + "lastLoginUILabel",prefix + "lastLoginUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,userNameUILabel,userNameUI,orgInfoUILabel,orgInfoUI,localeUILabel,localeUI,lastLoginUILabel,lastLoginUI,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.userNameUILabel=userNameUILabel;

    Form.userNameUI=userNameUI;

    Form.orgInfoUILabel=orgInfoUILabel;

    Form.orgInfoUI=orgInfoUI;

    Form.localeUILabel=localeUILabel;

    Form.localeUI=localeUI;

    Form.lastLoginUILabel=lastLoginUILabel;

    Form.lastLoginUI=lastLoginUI;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.userNameUILabel=userNameUILabel;

    Form.userNameUI=userNameUI;

    Form.orgInfoUILabel=orgInfoUILabel;

    Form.orgInfoUI=orgInfoUI;

    Form.localeUILabel=localeUILabel;

    Form.localeUI=localeUI;

    Form.lastLoginUILabel=lastLoginUILabel;

    Form.lastLoginUI=lastLoginUI;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_form_UserAccount */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_form_UserAccount */
    };

    Form.Save = org_shaolin_bmdp_adminconsole_form_UserAccount_Save;

    Form.Cancel = org_shaolin_bmdp_adminconsole_form_UserAccount_Cancel;

    Form.invokeDynamicFunction = org_shaolin_bmdp_adminconsole_form_UserAccount_invokeDynamicFunction;

    Form.__entityName="org.shaolin.bmdp.adminconsole.form.UserAccount";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_form_UserAccount */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_form_UserAccount */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_UserAccount_Save(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_UserAccount_Save */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-1364532124535",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_UserAccount_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_UserAccount_Cancel(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_UserAccount_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1310282081",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_UserAccount_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_UserAccount_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_UserAccount_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        var constraint_result = this.Form.validate();
        if (constraint_result != true && constraint_result != null) {
            return false;
        }

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_UserAccount_invokeDynamicFunction */



