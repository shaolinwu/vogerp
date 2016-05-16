/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_LocationSelelctor(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentUI"]
    });

    var provinListUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "provinListUI"]
    });

    var cityListUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "cityListUI"]
    });

    var xianListUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "xianListUI"]
    });

    var cityListPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "cityListPanel"]
        ,items: []
        ,subComponents: [prefix + "provinListUI",prefix + "cityListUI",prefix + "xianListUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentUI,provinListUI,cityListUI,xianListUI,cityListPanel]
    });

    Form.parentUI=parentUI;

    Form.provinListUI=provinListUI;

    Form.cityListUI=cityListUI;

    Form.xianListUI=xianListUI;

    Form.cityListPanel=cityListPanel;

    Form.provinListUI=provinListUI;

    Form.cityListUI=cityListUI;

    Form.xianListUI=xianListUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_LocationSelelctor */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_LocationSelelctor */
    };

    Form.selectSubItem = org_shaolin_vogerp_commonmodel_form_LocationSelelctor_selectSubItem;

    Form.selectedCity = org_shaolin_vogerp_commonmodel_form_LocationSelelctor_selectedCity;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_LocationSelelctor_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.LocationSelelctor";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_LocationSelelctor */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_LocationSelelctor */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_LocationSelelctor_selectSubItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_LocationSelelctor_selectSubItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectSubItem-201604102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_LocationSelelctor_selectSubItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_LocationSelelctor_selectedCity(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_LocationSelelctor_selectedCity */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedCity-201604152311",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_LocationSelelctor_selectedCity */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_LocationSelelctor_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_LocationSelelctor_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_LocationSelelctor_invokeDynamicFunction */



