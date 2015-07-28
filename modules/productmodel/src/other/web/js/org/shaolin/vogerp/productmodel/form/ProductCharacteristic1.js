/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductCharacteristic1(json)
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

    var qualityTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "qualityTypeUILabel"]
    });

    var qualityTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "qualityTypeUI"]
    });

    var colorTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "colorTypeUILabel"]
    });

    var colorTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "colorTypeUI"]
    });

    var numberSizeTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "numberSizeTypeUILabel"]
    });

    var numberSizeTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "numberSizeTypeUI"]
    });

    var sizeTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "sizeTypeUILabel"]
    });

    var sizeTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "sizeTypeUI"]
    });

    var unitTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "unitTypeUILabel"]
    });

    var unitTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "unitTypeUI"]
    });

    var tradeIconTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "tradeIconTypeUILabel"]
    });

    var tradeIconTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "tradeIconTypeUI"]
    });

    var softwareTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "softwareTypeUILabel"]
    });

    var softwareTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "softwareTypeUI"]
    });

    var hardwareTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "hardwareTypeUILabel"]
    });

    var hardwareTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "hardwareTypeUI"]
    });

    var paymentTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "paymentTypeUILabel"]
    });

    var paymentTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "paymentTypeUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "productIdUI",prefix + "qualityTypeUILabel",prefix + "qualityTypeUI",prefix + "colorTypeUILabel",prefix + "colorTypeUI",prefix + "numberSizeTypeUILabel",prefix + "numberSizeTypeUI",prefix + "sizeTypeUILabel",prefix + "sizeTypeUI",prefix + "unitTypeUILabel",prefix + "unitTypeUI",prefix + "tradeIconTypeUILabel",prefix + "tradeIconTypeUI",prefix + "softwareTypeUILabel",prefix + "softwareTypeUI",prefix + "hardwareTypeUILabel",prefix + "hardwareTypeUI",prefix + "paymentTypeUILabel",prefix + "paymentTypeUI",prefix + "photoUILabel",prefix + "uploadFile",prefix + "photoPathUI",prefix + "photoUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,productIdUI,qualityTypeUILabel,qualityTypeUI,colorTypeUILabel,colorTypeUI,numberSizeTypeUILabel,numberSizeTypeUI,sizeTypeUILabel,sizeTypeUI,unitTypeUILabel,unitTypeUI,tradeIconTypeUILabel,tradeIconTypeUI,softwareTypeUILabel,softwareTypeUI,hardwareTypeUILabel,hardwareTypeUI,paymentTypeUILabel,paymentTypeUI,photoUILabel,uploadFile,photoPathUI,photoUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.productIdUI=productIdUI;

    Form.qualityTypeUILabel=qualityTypeUILabel;

    Form.qualityTypeUI=qualityTypeUI;

    Form.colorTypeUILabel=colorTypeUILabel;

    Form.colorTypeUI=colorTypeUI;

    Form.numberSizeTypeUILabel=numberSizeTypeUILabel;

    Form.numberSizeTypeUI=numberSizeTypeUI;

    Form.sizeTypeUILabel=sizeTypeUILabel;

    Form.sizeTypeUI=sizeTypeUI;

    Form.unitTypeUILabel=unitTypeUILabel;

    Form.unitTypeUI=unitTypeUI;

    Form.tradeIconTypeUILabel=tradeIconTypeUILabel;

    Form.tradeIconTypeUI=tradeIconTypeUI;

    Form.softwareTypeUILabel=softwareTypeUILabel;

    Form.softwareTypeUI=softwareTypeUI;

    Form.hardwareTypeUILabel=hardwareTypeUILabel;

    Form.hardwareTypeUI=hardwareTypeUI;

    Form.paymentTypeUILabel=paymentTypeUILabel;

    Form.paymentTypeUI=paymentTypeUI;

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
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic1 */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic1 */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_ProductCharacteristic1_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductCharacteristic1_Cancel;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductCharacteristic1";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic1 */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic1 */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCharacteristic1_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCharacteristic1_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1050829457",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCharacteristic1_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCharacteristic1_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCharacteristic1_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-884729403",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCharacteristic1_Cancel */



