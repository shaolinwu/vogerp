/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_UserAccount(json)
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

    var userNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "userNameUI"]
    });

    var localeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "localeUILabel"]
    });

    var localeUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "localeUI"]
    });

    var attemptUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "attemptUILabel"]
    });

    var attemptUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "attemptUI"]
    });

    var isLockedUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "isLockedUILabel"]
    });

    var isLockedUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "isLockedUI"]
    });

    var lockedMomentUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "lockedMomentUILabel"]
    });

    var lockedMomentUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "lockedMomentUI"]
    });

    var expirationDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expirationDateUILabel"]
    });

    var expirationDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "expirationDateUI"]
    });

    var lastLoginUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "lastLoginUILabel"]
    });

    var lastLoginUI = new UIMaster.ui.calendar
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
        ,subComponents: [prefix + "idUI",prefix + "userNameUILabel",prefix + "userNameUI",prefix + "localeUILabel",prefix + "localeUI",prefix + "attemptUILabel",prefix + "attemptUI",prefix + "isLockedUILabel",prefix + "isLockedUI",prefix + "lockedMomentUILabel",prefix + "lockedMomentUI",prefix + "expirationDateUILabel",prefix + "expirationDateUI",prefix + "lastLoginUILabel",prefix + "lastLoginUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,userNameUILabel,userNameUI,localeUILabel,localeUI,attemptUILabel,attemptUI,isLockedUILabel,isLockedUI,lockedMomentUILabel,lockedMomentUI,expirationDateUILabel,expirationDateUI,lastLoginUILabel,lastLoginUI,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.userNameUILabel=userNameUILabel;

    Form.userNameUI=userNameUI;

    Form.localeUILabel=localeUILabel;

    Form.localeUI=localeUI;

    Form.attemptUILabel=attemptUILabel;

    Form.attemptUI=attemptUI;

    Form.isLockedUILabel=isLockedUILabel;

    Form.isLockedUI=isLockedUI;

    Form.lockedMomentUILabel=lockedMomentUILabel;

    Form.lockedMomentUI=lockedMomentUI;

    Form.expirationDateUILabel=expirationDateUILabel;

    Form.expirationDateUI=expirationDateUI;

    Form.lastLoginUILabel=lastLoginUILabel;

    Form.lastLoginUI=lastLoginUI;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_UserAccount */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_UserAccount */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_UserAccount_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_UserAccount_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_UserAccount_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.UserAccount";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_UserAccount */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_UserAccount */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UserAccount_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UserAccount_Save */

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-1364532124535",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UserAccount_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UserAccount_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UserAccount_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1310282081",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UserAccount_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UserAccount_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UserAccount_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UserAccount_invokeDynamicFunction */



