/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_SupplierProduct(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var orgIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "orgIdUI"]
    });

    var productIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "productIdUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var feasibleStartDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "feasibleStartDateUILabel"]
    });

    var feasibleStartDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "feasibleStartDateUI"]
    });

    var standardDaysUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "standardDaysUILabel"]
    });

    var standardDaysUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "standardDaysUI"]
    });

    var priorityTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "priorityTypeUILabel"]
    });

    var priorityTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "priorityTypeUI"]
    });

    var levelTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "levelTypeUILabel"]
    });

    var levelTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "levelTypeUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "orgIdUI",prefix + "productIdUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "feasibleStartDateUILabel",prefix + "feasibleStartDateUI",prefix + "standardDaysUILabel",prefix + "standardDaysUI",prefix + "priorityTypeUILabel",prefix + "priorityTypeUI",prefix + "levelTypeUILabel",prefix + "levelTypeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,orgIdUI,productIdUI,descriptionUILabel,descriptionUI,feasibleStartDateUILabel,feasibleStartDateUI,standardDaysUILabel,standardDaysUI,priorityTypeUILabel,priorityTypeUI,levelTypeUILabel,levelTypeUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.orgIdUI=orgIdUI;

    Form.productIdUI=productIdUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.feasibleStartDateUILabel=feasibleStartDateUILabel;

    Form.feasibleStartDateUI=feasibleStartDateUI;

    Form.standardDaysUILabel=standardDaysUILabel;

    Form.standardDaysUI=standardDaysUI;

    Form.priorityTypeUILabel=priorityTypeUILabel;

    Form.priorityTypeUI=priorityTypeUI;

    Form.levelTypeUILabel=levelTypeUILabel;

    Form.levelTypeUI=levelTypeUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.orgIdUI=orgIdUI;

    Form.productIdUI=productIdUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.feasibleStartDateUILabel=feasibleStartDateUILabel;

    Form.feasibleStartDateUI=feasibleStartDateUI;

    Form.standardDaysUILabel=standardDaysUILabel;

    Form.standardDaysUI=standardDaysUI;

    Form.priorityTypeUILabel=priorityTypeUILabel;

    Form.priorityTypeUI=priorityTypeUI;

    Form.levelTypeUILabel=levelTypeUILabel;

    Form.levelTypeUI=levelTypeUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_SupplierProduct */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_SupplierProduct */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_SupplierProduct_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_SupplierProduct_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_SupplierProduct_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.SupplierProduct";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_SupplierProduct */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_SupplierProduct */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_SupplierProduct_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_SupplierProduct_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-45575639",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_SupplierProduct_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_SupplierProduct_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_SupplierProduct_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1484156710",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_SupplierProduct_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_SupplierProduct_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_SupplierProduct_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_SupplierProduct_invokeDynamicFunction */



