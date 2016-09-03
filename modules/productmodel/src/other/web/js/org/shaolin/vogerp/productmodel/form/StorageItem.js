/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_StorageItem(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
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

    var itemStatusUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "itemStatusUILabel"]
    });

    var itemStatusUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "itemStatusUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "warehouseIdUILabel",prefix + "warehouseIdUI",prefix + "coordinateUILabel",prefix + "coordinateUI",prefix + "itemStatusUILabel",prefix + "itemStatusUI",prefix + "numberUILabel",prefix + "numberUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,warehouseIdUILabel,warehouseIdUI,coordinateUILabel,coordinateUI,itemStatusUILabel,itemStatusUI,numberUILabel,numberUI,serialNumberUILabel,serialNumberUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.warehouseIdUILabel=warehouseIdUILabel;

    Form.warehouseIdUI=warehouseIdUI;

    Form.coordinateUILabel=coordinateUILabel;

    Form.coordinateUI=coordinateUI;

    Form.itemStatusUILabel=itemStatusUILabel;

    Form.itemStatusUI=itemStatusUI;

    Form.numberUILabel=numberUILabel;

    Form.numberUI=numberUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.warehouseIdUILabel=warehouseIdUILabel;

    Form.warehouseIdUI=warehouseIdUI;

    Form.coordinateUILabel=coordinateUILabel;

    Form.coordinateUI=coordinateUI;

    Form.itemStatusUILabel=itemStatusUILabel;

    Form.itemStatusUI=itemStatusUI;

    Form.numberUILabel=numberUILabel;

    Form.numberUI=numberUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

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

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_StorageItem_invokeDynamicFunction */



