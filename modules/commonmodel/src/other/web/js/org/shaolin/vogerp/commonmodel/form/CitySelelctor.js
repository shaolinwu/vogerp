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
        ,items: []
        ,subComponents: [prefix + "cityListUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentUI,cityListUI,citySubListUI,cityListPanel,citySubListPanel]
    });

    Form.parentUI=parentUI;

    Form.cityListUI=cityListUI;

    Form.citySubListUI=citySubListUI;

    Form.cityListPanel=cityListPanel;

    Form.cityListUI=cityListUI;

    Form.citySubListPanel=citySubListPanel;

    Form.citySubListUI=citySubListUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CitySelelctor */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CitySelelctor */
    };

    Form.selectSubItem = org_shaolin_vogerp_commonmodel_form_CitySelelctor_selectSubItem;

    Form.selectedCity = org_shaolin_vogerp_commonmodel_form_CitySelelctor_selectedCity;

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
    function org_shaolin_vogerp_commonmodel_form_CitySelelctor_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CitySelelctor_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CitySelelctor_invokeDynamicFunction */



