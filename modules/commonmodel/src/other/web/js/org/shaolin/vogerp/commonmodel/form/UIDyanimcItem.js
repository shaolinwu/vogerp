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

    var uipanelUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "uipanelUILabel"]
    });

    var uipanelUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "uipanelUI"]
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

    var ceDetailUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "ceDetailUILabel"]
    });

    var ceDetailIU = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "ceDetailIU"]
    });

    var ceSelectModeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "ceSelectModeUILabel"]
    });

    var ceSelectModeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "ceSelectModeUI"]
    });

    var filterUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "filterUILabel"]
    });

    var filterUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "filterUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "uiEntityNameUILabel",prefix + "uiEntityNameUI",prefix + "uipanelUILabel",prefix + "uipanelUI",prefix + "labelNameUILabel",prefix + "labelNameUI",prefix + "ceNameUILabel",prefix + "ceNameUI",prefix + "ceDetailUILabel",prefix + "ceDetailIU",prefix + "ceSelectModeUILabel",prefix + "ceSelectModeUI",prefix + "filterUILabel",prefix + "filterUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,uiEntityNameUILabel,uiEntityNameUI,uipanelUILabel,uipanelUI,labelNameUILabel,labelNameUI,ceNameUILabel,ceNameUI,ceDetailUILabel,ceDetailIU,ceSelectModeUILabel,ceSelectModeUI,filterUILabel,filterUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.uiEntityNameUILabel=uiEntityNameUILabel;

    Form.uiEntityNameUI=uiEntityNameUI;

    Form.uipanelUILabel=uipanelUILabel;

    Form.uipanelUI=uipanelUI;

    Form.labelNameUILabel=labelNameUILabel;

    Form.labelNameUI=labelNameUI;

    Form.ceNameUILabel=ceNameUILabel;

    Form.ceNameUI=ceNameUI;

    Form.ceDetailUILabel=ceDetailUILabel;

    Form.ceDetailIU=ceDetailIU;

    Form.ceSelectModeUILabel=ceSelectModeUILabel;

    Form.ceSelectModeUI=ceSelectModeUI;

    Form.filterUILabel=filterUILabel;

    Form.filterUI=filterUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.uiEntityNameUILabel=uiEntityNameUILabel;

    Form.uiEntityNameUI=uiEntityNameUI;

    Form.uipanelUILabel=uipanelUILabel;

    Form.uipanelUI=uipanelUI;

    Form.labelNameUILabel=labelNameUILabel;

    Form.labelNameUI=labelNameUI;

    Form.ceNameUILabel=ceNameUILabel;

    Form.ceNameUI=ceNameUI;

    Form.ceDetailUILabel=ceDetailUILabel;

    Form.ceDetailIU=ceDetailIU;

    Form.ceSelectModeUILabel=ceSelectModeUILabel;

    Form.ceSelectModeUI=ceSelectModeUI;

    Form.filterUILabel=filterUILabel;

    Form.filterUI=filterUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem */
    };

    Form.RefreshCEDetail = org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_RefreshCEDetail;

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
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_RefreshCEDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_RefreshCEDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"RefreshCEDetail-20151110-181623",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_RefreshCEDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20151110-181623",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20151110-181623",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcItem_invokeDynamicFunction */



