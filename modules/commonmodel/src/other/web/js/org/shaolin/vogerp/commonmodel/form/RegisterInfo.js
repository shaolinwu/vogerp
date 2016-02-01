/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_RegisterInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "idUILabel"]
    });

    var idUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "idUI"]
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

    var passwordUI = new UIMaster.ui.textfield
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

    var emailUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "emailUILabel"]
    });

    var emailUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "emailUI"]
    });

    var addressUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressUILabel"]
    });

    var addressUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "addressUI"]
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
        ,subComponents: [prefix + "idUILabel",prefix + "idUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "passwordUILabel",prefix + "passwordUI",prefix + "orgNameUILabel",prefix + "orgNameUI",prefix + "orgTypeUILabel",prefix + "orgTypeUI",prefix + "phoneNumberUILabel",prefix + "phoneNumberUI",prefix + "emailUILabel",prefix + "emailUI",prefix + "addressUILabel",prefix + "addressUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUILabel,idUI,nameUILabel,nameUI,passwordUILabel,passwordUI,orgNameUILabel,orgNameUI,orgTypeUILabel,orgTypeUI,phoneNumberUILabel,phoneNumberUI,emailUILabel,emailUI,addressUILabel,addressUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUILabel=idUILabel;

    Form.idUI=idUI;

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

    Form.emailUILabel=emailUILabel;

    Form.emailUI=emailUI;

    Form.addressUILabel=addressUILabel;

    Form.addressUI=addressUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUILabel=idUILabel;

    Form.idUI=idUI;

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

    Form.emailUILabel=emailUILabel;

    Form.emailUI=emailUI;

    Form.addressUILabel=addressUILabel;

    Form.addressUI=addressUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_RegisterInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_RegisterInfo */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_RegisterInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_RegisterInfo_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_RegisterInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.RegisterInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_RegisterInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_RegisterInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_RegisterInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_RegisterInfo_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160131-211838",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_RegisterInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_RegisterInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_RegisterInfo_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160131-211838",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_RegisterInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_RegisterInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_RegisterInfo_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_RegisterInfo_invokeDynamicFunction */



