/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CitySelelctor(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentUI"]
    });

    var cityListUI = new UIMaster.ui.radiobuttongroup
    ({
        ui: elementList[prefix + "cityListUI"]
        ,horizontalLayout: true
        ,colCount: 6
    });

    var citySubListUI = new UIMaster.ui.radiobuttongroup
    ({
        ui: elementList[prefix + "citySubListUI"]
        ,horizontalLayout: true
        ,colCount: 6
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

    var citySubListPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "citySubListPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "citySubListUI"]
    });

    var cityListPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "cityListPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "cityListUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentUI,cityListUI,citySubListUI,cancelbtn,cityListPanel,citySubListPanel,actionPanel]
    });

    Form.parentUI=parentUI;

    Form.cityListUI=cityListUI;

    Form.citySubListUI=citySubListUI;

    Form.cancelbtn=cancelbtn;

    Form.cityListPanel=cityListPanel;

    Form.cityListUI=cityListUI;

    Form.citySubListPanel=citySubListPanel;

    Form.citySubListUI=citySubListUI;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CitySelelctor */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CitySelelctor */
    };

    Form.selectSubItem = org_shaolin_vogerp_commonmodel_form_CitySelelctor_selectSubItem;

    Form.selectedCity = org_shaolin_vogerp_commonmodel_form_CitySelelctor_selectedCity;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_CitySelelctor_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CitySelelctor_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CitySelelctor";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CitySelelctor */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CitySelelctor */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CitySelelctor_selectSubItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CitySelelctor_selectSubItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectSubItem-201604102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CitySelelctor_selectSubItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CitySelelctor_selectedCity(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CitySelelctor_selectedCity */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedCity-201604152311",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CitySelelctor_selectedCity */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CitySelelctor_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CitySelelctor_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"Cancel-201604152311",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CitySelelctor_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CitySelelctor_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CitySelelctor_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CitySelelctor_invokeDynamicFunction */



