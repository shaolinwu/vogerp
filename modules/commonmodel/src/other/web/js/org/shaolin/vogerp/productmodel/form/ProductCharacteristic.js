/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductCharacteristic(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var productIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "productIdUI"]
    });

    var photoUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "photoUILabel"]
    });

    var uploadFile = new UIMaster.ui.file
    ({
        ui: elementList[prefix + "uploadFile"]
    });

    var photoPathUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "photoPathUI"]
    });

    var photoUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "photoUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "productIdUI",prefix + "photoUILabel",prefix + "uploadFile",prefix + "photoPathUI",prefix + "photoUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,productIdUI,photoUILabel,uploadFile,photoPathUI,photoUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.productIdUI=productIdUI;

    Form.photoUILabel=photoUILabel;

    Form.uploadFile=uploadFile;

    Form.photoPathUI=photoPathUI;

    Form.photoUI=photoUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Cancel;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductCharacteristic";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1050829457",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-884729403",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Cancel */



