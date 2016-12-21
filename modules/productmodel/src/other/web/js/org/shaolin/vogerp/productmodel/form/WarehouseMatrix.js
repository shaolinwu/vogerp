/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_WarehouseMatrix(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var matrixUI = new UIMaster.ui.matrix
    ({
        ui: elementList[prefix + "matrixUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "matrixUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,matrixUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.matrixUI=matrixUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.matrixUI=matrixUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_WarehouseMatrix */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_WarehouseMatrix */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_WarehouseMatrix_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_WarehouseMatrix_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_WarehouseMatrix_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.WarehouseMatrix";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_WarehouseMatrix */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_WarehouseMatrix */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_WarehouseMatrix_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_WarehouseMatrix_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail767028713",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_WarehouseMatrix_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_WarehouseMatrix_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_WarehouseMatrix_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1781808440",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_WarehouseMatrix_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_WarehouseMatrix_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_WarehouseMatrix_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_WarehouseMatrix_invokeDynamicFunction */



