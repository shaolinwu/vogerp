/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductStorage(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var productIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "productIdUI"]
    });

    var locationUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "locationUILabel"]
    });

    var locationUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "locationUI"]
    });

    var containerTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "containerTypeUILabel"]
    });

    var containerTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "containerTypeUI"]
    });

    var coordinateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "coordinateUILabel"]
    });

    var coordinateUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "coordinateUI"]
    });

    var containerTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "containerTypeUILabel"]
    });

    var containerTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "containerTypeUI"]
    });

    var numberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "numberUILabel"]
    });

    var numberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "numberUI"]
    });

    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "serialNumberUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "productIdUI",prefix + "locationUILabel",prefix + "locationUI",prefix + "containerTypeUILabel",prefix + "containerTypeUI",prefix + "coordinateUILabel",prefix + "coordinateUI",prefix + "containerTypeUILabel",prefix + "containerTypeUI",prefix + "numberUILabel",prefix + "numberUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,productIdUI,locationUILabel,locationUI,containerTypeUILabel,containerTypeUI,coordinateUILabel,coordinateUI,containerTypeUILabel,containerTypeUI,numberUILabel,numberUI,serialNumberUILabel,serialNumberUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.productIdUI=productIdUI;

    Form.locationUILabel=locationUILabel;

    Form.locationUI=locationUI;

    Form.containerTypeUILabel=containerTypeUILabel;

    Form.containerTypeUI=containerTypeUI;

    Form.coordinateUILabel=coordinateUILabel;

    Form.coordinateUI=coordinateUI;

    Form.containerTypeUILabel=containerTypeUILabel;

    Form.containerTypeUI=containerTypeUI;

    Form.numberUILabel=numberUILabel;

    Form.numberUI=numberUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductStorage */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductStorage */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_ProductStorage_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductStorage_Cancel;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductStorage";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductStorage */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductStorage */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductStorage_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductStorage_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-1693092109",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductStorage_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductStorage_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductStorage_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail356801008",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductStorage_Cancel */



