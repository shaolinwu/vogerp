/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_UIDyanimcItem(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var uiEntityNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "uiEntityNameUILabel"]
    });

    var uiEntityNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "uiEntityNameUI"]
    });

    var labelNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "labelNameUILabel"]
    });

    var labelNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "labelNameUI"]
    });

    var ceNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "ceNameUILabel"]
    });

    var ceNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "ceNameUI"]
    });

    var ceSelectModeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "ceSelectModeUILabel"]
    });

    var ceSelectModeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "ceSelectModeUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "uiEntityNameUILabel",prefix + "uiEntityNameUI",prefix + "labelNameUILabel",prefix + "labelNameUI",prefix + "ceNameUILabel",prefix + "ceNameUI",prefix + "ceSelectModeUILabel",prefix + "ceSelectModeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,uiEntityNameUILabel,uiEntityNameUI,labelNameUILabel,labelNameUI,ceNameUILabel,ceNameUI,ceSelectModeUILabel,ceSelectModeUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.uiEntityNameUILabel=uiEntityNameUILabel;

    Form.uiEntityNameUI=uiEntityNameUI;

    Form.labelNameUILabel=labelNameUILabel;

    Form.labelNameUI=labelNameUI;

    Form.ceNameUILabel=ceNameUILabel;

    Form.ceNameUI=ceNameUI;

    Form.ceSelectModeUILabel=ceSelectModeUILabel;

    Form.ceSelectModeUI=ceSelectModeUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.UIDyanimcItem";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-465167527",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-177033630",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_invokeDynamicFunction */



