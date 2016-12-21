/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_Warehouse(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var parentIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "parentIdUILabel"]
    });

    var parentIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var photoPathUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "photoPathUILabel"]
    });

    var photoPathUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "photoPathUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "parentIdUILabel",prefix + "parentIdUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "photoPathUILabel",prefix + "photoPathUI",prefix + "locationUILabel",prefix + "locationUI",prefix + "containerTypeUILabel",prefix + "containerTypeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,parentIdUILabel,parentIdUI,nameUILabel,nameUI,descriptionUILabel,descriptionUI,photoPathUILabel,photoPathUI,locationUILabel,locationUI,containerTypeUILabel,containerTypeUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.parentIdUILabel=parentIdUILabel;

    Form.parentIdUI=parentIdUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.photoPathUILabel=photoPathUILabel;

    Form.photoPathUI=photoPathUI;

    Form.locationUILabel=locationUILabel;

    Form.locationUI=locationUI;

    Form.containerTypeUILabel=containerTypeUILabel;

    Form.containerTypeUI=containerTypeUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.parentIdUILabel=parentIdUILabel;

    Form.parentIdUI=parentIdUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.photoPathUILabel=photoPathUILabel;

    Form.photoPathUI=photoPathUI;

    Form.locationUILabel=locationUILabel;

    Form.locationUI=locationUI;

    Form.containerTypeUILabel=containerTypeUILabel;

    Form.containerTypeUI=containerTypeUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_Warehouse */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_Warehouse */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_Warehouse_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_Warehouse_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_Warehouse_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.Warehouse";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_Warehouse */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_Warehouse */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Warehouse_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Warehouse_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail767028713",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Warehouse_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Warehouse_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Warehouse_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1781808440",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Warehouse_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Warehouse_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Warehouse_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Warehouse_invokeDynamicFunction */



