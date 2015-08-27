/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_PersonalAccount(json)
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
        ,validators:[
        {
            func: function() {
                if (this.value.length > 0) {
        return !/[?~!@#$%\^\+\*&\\\/\?\|:\.<>{}()';="]/.test(this.value);
    }
    return true;
            }
            ,msg: "Please input only alphabets and digits."
        }
,
        {
            func: function() {
                
                    if (this.value.length > 0) {
				        return true;
				    }
				    return true;
                    
            }
            ,msg: "This user name has existed! Please reenter new one."
        }
]    });

    var passwordUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "passwordUILabel"]
    });

    var passwordUI = new UIMaster.ui.passwordfield
    ({
        ui: elementList[prefix + "passwordUI"]
        ,validators:[
        {
            func: function() {
                
                    {
                        if (this.value.length > 0) {
                            return !/[?~!@#$%\^\+\&\\\/\?\|:\.<>{}()';="]/.test(this.value);
                        }
                        return true;
                    }
                    
            }
            ,msg: "Please input only alphabets and digits."
        }
]    });

    var password1UILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "password1UILabel"]
    });

    var password1UI = new UIMaster.ui.passwordfield
    ({
        ui: elementList[prefix + "password1UI"]
        ,validators:[
        {
            func: function() {
                
                    {
	                    if (this.value.length > 0) {
					        return !/[?~!@#$%\^\+\&\\\/\?\|:\.<>{}()';="]/.test(this.value);
					    }
					    return true;
                    }
            }
            ,msg: "Please input only alphabets and digits."
        }
,
        {
            func: function() {
                
                    { 
                    return this.value == passwordUI.value;
                    }
            }
            ,msg: "The password is not matched!"
        }
]    });

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

    var attemptUI = new UIMaster.ui.textfield
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

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "userNameUILabel",prefix + "userNameUI",prefix + "passwordUILabel",prefix + "passwordUI",prefix + "password1UILabel",prefix + "password1UI",prefix + "localeUILabel",prefix + "localeUI",prefix + "attemptUILabel",prefix + "attemptUI",prefix + "isLockedUILabel",prefix + "isLockedUI",prefix + "lockedMomentUILabel",prefix + "lockedMomentUI",prefix + "expirationDateUILabel",prefix + "expirationDateUI",prefix + "lastLoginUILabel",prefix + "lastLoginUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,userNameUILabel,userNameUI,passwordUILabel,passwordUI,password1UILabel,password1UI,localeUILabel,localeUI,attemptUILabel,attemptUI,isLockedUILabel,isLockedUI,lockedMomentUILabel,lockedMomentUI,expirationDateUILabel,expirationDateUI,lastLoginUILabel,lastLoginUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.userNameUILabel=userNameUILabel;

    Form.userNameUI=userNameUI;

    Form.passwordUILabel=passwordUILabel;

    Form.passwordUI=passwordUI;

    Form.password1UILabel=password1UILabel;

    Form.password1UI=password1UI;

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

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_PersonalAccount */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_PersonalAccount */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_PersonalAccount_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_PersonalAccount_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_PersonalAccount_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.PersonalAccount";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_PersonalAccount */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_PersonalAccount */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonalAccount_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonalAccount_Save */

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-1364532124535",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonalAccount_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonalAccount_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonalAccount_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1310282081",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonalAccount_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonalAccount_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonalAccount_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonalAccount_invokeDynamicFunction */



