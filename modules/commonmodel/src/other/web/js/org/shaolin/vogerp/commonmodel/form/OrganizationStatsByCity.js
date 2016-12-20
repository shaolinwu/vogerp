/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var cityCharts = new UIMaster.ui.field
    ({
        ui: elementList[prefix + "cityCharts"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "cityCharts"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [cityCharts,cancelbtn,fieldPanel,actionPanel]
    });

    Form.cityCharts=cityCharts;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.cityCharts=cityCharts;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity */
    };

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.OrganizationStatsByCity";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-945221342",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByCity_invokeDynamicFunction */



