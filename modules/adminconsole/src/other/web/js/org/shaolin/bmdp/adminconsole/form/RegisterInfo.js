/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_form_RegisterInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var emailUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "emailUILabel"]
    });

    var emailUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "emailUI"]
    });

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var passwordUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "passwordUILabel"]
    });

    var passwordUI = new UIMaster.ui.passwordfield
    ({
        ui: elementList[prefix + "passwordUI"]
    });

    var orgNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgNameUILabel"]
    });

    var orgNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orgNameUI"]
    });

    var orgTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgTypeUILabel"]
    });

    var orgTypeUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orgTypeUI"]
    });

    var phoneNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "phoneNumberUILabel"]
    });

    var phoneNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "phoneNumberUI"]
    });

    var addressUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressUILabel"]
    });

    var addressUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "addressUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "emailUILabel",prefix + "emailUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "passwordUILabel",prefix + "passwordUI",prefix + "orgNameUILabel",prefix + "orgNameUI",prefix + "orgTypeUILabel",prefix + "orgTypeUI",prefix + "phoneNumberUILabel",prefix + "phoneNumberUI",prefix + "addressUILabel",prefix + "addressUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [emailUILabel,emailUI,nameUILabel,nameUI,passwordUILabel,passwordUI,orgNameUILabel,orgNameUI,orgTypeUILabel,orgTypeUI,phoneNumberUILabel,phoneNumberUI,addressUILabel,addressUI,fieldPanel]
    });

    Form.emailUILabel=emailUILabel;

    Form.emailUI=emailUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.passwordUILabel=passwordUILabel;

    Form.passwordUI=passwordUI;

    Form.orgNameUILabel=orgNameUILabel;

    Form.orgNameUI=orgNameUI;

    Form.orgTypeUILabel=orgTypeUILabel;

    Form.orgTypeUI=orgTypeUI;

    Form.phoneNumberUILabel=phoneNumberUILabel;

    Form.phoneNumberUI=phoneNumberUI;

    Form.addressUILabel=addressUILabel;

    Form.addressUI=addressUI;

    Form.fieldPanel=fieldPanel;

    Form.emailUILabel=emailUILabel;

    Form.emailUI=emailUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.passwordUILabel=passwordUILabel;

    Form.passwordUI=passwordUI;

    Form.orgNameUILabel=orgNameUILabel;

    Form.orgNameUI=orgNameUI;

    Form.orgTypeUILabel=orgTypeUILabel;

    Form.orgTypeUI=orgTypeUI;

    Form.phoneNumberUILabel=phoneNumberUILabel;

    Form.phoneNumberUI=phoneNumberUI;

    Form.addressUILabel=addressUILabel;

    Form.addressUI=addressUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_form_RegisterInfo */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_form_RegisterInfo */
    };

    Form.invokeDynamicFunction = org_shaolin_bmdp_adminconsole_form_RegisterInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.bmdp.adminconsole.form.RegisterInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_form_RegisterInfo */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_form_RegisterInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_RegisterInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_RegisterInfo_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_RegisterInfo_invokeDynamicFunction */



