/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentUI"]
    });

    var cityListUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "cityListUI"]
        ,horizontalLayout: true
        ,colCount: 6
    });

    var cityListPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "cityListPanel"]
        ,items: []
        ,subComponents: [prefix + "cityListUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentUI,cityListUI,cityListPanel]
    });

    Form.parentUI=parentUI;

    Form.cityListUI=cityListUI;

    Form.cityListPanel=cityListPanel;

    Form.cityListUI=cityListUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor */
    };

    Form.selectSubItem = org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor_selectSubItem;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CityOnlySelelctor";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor_selectSubItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor_selectSubItem */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor_selectSubItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor_invokeDynamicFunction */



