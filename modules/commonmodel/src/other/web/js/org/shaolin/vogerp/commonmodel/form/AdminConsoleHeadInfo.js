/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var userIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "userIdUILabel"]
    });

    var userIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "userIdUI"]
    });

    var userNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "userNameUILabel"]
    });

    var userNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "userNameUI"]
    });

    var userLanguageUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "userLanguageUILabel"]
    });

    var userLanguageUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "userLanguageUI"]
    });

    var roleNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "roleNameUILabel"]
    });

    var roleNameUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "roleNameUI"]
    });

    var loginTimeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "loginTimeUILabel"]
    });

    var loginTimeUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "loginTimeUI"]
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
        ,subComponents: [prefix + "userIdUILabel",prefix + "userIdUI",prefix + "userNameUILabel",prefix + "userNameUI",prefix + "userLanguageUILabel",prefix + "userLanguageUI",prefix + "roleNameUILabel",prefix + "roleNameUI",prefix + "loginTimeUILabel",prefix + "loginTimeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [userIdUILabel,userIdUI,userNameUILabel,userNameUI,userLanguageUILabel,userLanguageUI,roleNameUILabel,roleNameUI,loginTimeUILabel,loginTimeUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.userIdUILabel=userIdUILabel;

    Form.userIdUI=userIdUI;

    Form.userNameUILabel=userNameUILabel;

    Form.userNameUI=userNameUI;

    Form.userLanguageUILabel=userLanguageUILabel;

    Form.userLanguageUI=userLanguageUI;

    Form.roleNameUILabel=roleNameUILabel;

    Form.roleNameUI=roleNameUI;

    Form.loginTimeUILabel=loginTimeUILabel;

    Form.loginTimeUI=loginTimeUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo_Cancel;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.AdminConsoleHeadInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-1784635162",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail316344083",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AdminConsoleHeadInfo_Cancel */



