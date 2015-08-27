/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_AddressInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var countryUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "countryUILabel"]
    });

    var countryUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "countryUI"]
    });

    var cityUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "cityUILabel"]
    });

    var cityUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "cityUI"]
    });

    var streetUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "streetUILabel"]
    });

    var streetUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "streetUI"]
    });

    var blockUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "blockUILabel"]
    });

    var blockUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "blockUI"]
    });

    var zipcodeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "zipcodeUILabel"]
    });

    var zipcodeUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "zipcodeUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "countryUILabel",prefix + "countryUI",prefix + "cityUILabel",prefix + "cityUI",prefix + "streetUILabel",prefix + "streetUI",prefix + "blockUILabel",prefix + "blockUI",prefix + "zipcodeUILabel",prefix + "zipcodeUI",prefix + "descriptionUILabel",prefix + "descriptionUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,countryUILabel,countryUI,cityUILabel,cityUI,streetUILabel,streetUI,blockUILabel,blockUI,zipcodeUILabel,zipcodeUI,descriptionUILabel,descriptionUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.countryUILabel=countryUILabel;

    Form.countryUI=countryUI;

    Form.cityUILabel=cityUILabel;

    Form.cityUI=cityUI;

    Form.streetUILabel=streetUILabel;

    Form.streetUI=streetUI;

    Form.blockUILabel=blockUILabel;

    Form.blockUI=blockUI;

    Form.zipcodeUILabel=zipcodeUILabel;

    Form.zipcodeUI=zipcodeUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_AddressInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_AddressInfo */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_AddressInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_AddressInfo_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_AddressInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.AddressInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_AddressInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_AddressInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfo_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail946006518",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfo_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1136099838",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfo_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfo_invokeDynamicFunction */



