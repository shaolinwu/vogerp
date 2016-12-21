/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_StorageItem(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var productIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "productIdUILabel"]
    });

    var warehouseIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "warehouseIdUILabel"]
    });

    var warehouseIdUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "warehouseIdUI"]
    });

    var coordinateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "coordinateUILabel"]
    });

    var coordinateUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "coordinateUI"]
    });

    var numberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "numberUILabel"]
    });

    var numberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "numberUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var productIdUI = new org_shaolin_vogerp_productmodel_form_ProductSelector({"prefix":prefix + "productIdUI."});

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
        ,subComponents: [prefix + "idUI",prefix + "productIdUILabel",prefix + "productIdUI",prefix + "warehouseIdUILabel",prefix + "warehouseIdUI",prefix + "coordinateUILabel",prefix + "coordinateUI",prefix + "numberUILabel",prefix + "numberUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,productIdUILabel,warehouseIdUILabel,warehouseIdUI,coordinateUILabel,coordinateUI,numberUILabel,numberUI,okbtn,cancelbtn,productIdUI,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.productIdUILabel=productIdUILabel;

    Form.warehouseIdUILabel=warehouseIdUILabel;

    Form.warehouseIdUI=warehouseIdUI;

    Form.coordinateUILabel=coordinateUILabel;

    Form.coordinateUI=coordinateUI;

    Form.numberUILabel=numberUILabel;

    Form.numberUI=numberUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.productIdUI=productIdUI;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.productIdUILabel=productIdUILabel;

    Form.productIdUI=productIdUI;

    Form.warehouseIdUILabel=warehouseIdUILabel;

    Form.warehouseIdUI=warehouseIdUI;

    Form.coordinateUILabel=coordinateUILabel;

    Form.coordinateUI=coordinateUI;

    Form.numberUILabel=numberUILabel;

    Form.numberUI=numberUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_StorageItem */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_StorageItem */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_StorageItem_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_StorageItem_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_StorageItem_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.StorageItem";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_StorageItem */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_StorageItem */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_StorageItem_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_StorageItem_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-742555938",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_StorageItem_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_StorageItem_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_StorageItem_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1018486543",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_StorageItem_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_StorageItem_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_StorageItem_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_StorageItem_invokeDynamicFunction */



