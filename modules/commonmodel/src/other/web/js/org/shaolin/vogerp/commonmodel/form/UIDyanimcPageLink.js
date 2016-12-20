/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var srcUINameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "srcUINameUILabel"]
    });

    var srcUINameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "srcUINameUI"]
    });

    var srcUIPanelUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "srcUIPanelUILabel"]
    });

    var srcUIPanelUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "srcUIPanelUI"]
    });

    var srcUIWidgetUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "srcUIWidgetUILabel"]
    });

    var srcUIWidgetUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "srcUIWidgetUI"]
    });

    var linkCommentUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "linkCommentUILabel"]
    });

    var linkCommentUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "linkCommentUI"]
    });

    var tarUINameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "tarUINameUILabel"]
    });

    var tarUINameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "tarUINameUI"]
    });

    var tarUITabUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "tarUITabUILabel"]
    });

    var tarUITabUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "tarUITabUI"]
    });

    var tarUIArchorUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "tarUIArchorUILabel"]
    });

    var tarUIArchorUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "tarUIArchorUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "srcUINameUILabel",prefix + "srcUINameUI",prefix + "srcUIPanelUILabel",prefix + "srcUIPanelUI",prefix + "srcUIWidgetUILabel",prefix + "srcUIWidgetUI",prefix + "linkCommentUILabel",prefix + "linkCommentUI",prefix + "tarUINameUILabel",prefix + "tarUINameUI",prefix + "tarUITabUILabel",prefix + "tarUITabUI",prefix + "tarUIArchorUILabel",prefix + "tarUIArchorUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,srcUINameUILabel,srcUINameUI,srcUIPanelUILabel,srcUIPanelUI,srcUIWidgetUILabel,srcUIWidgetUI,linkCommentUILabel,linkCommentUI,tarUINameUILabel,tarUINameUI,tarUITabUILabel,tarUITabUI,tarUIArchorUILabel,tarUIArchorUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.srcUINameUILabel=srcUINameUILabel;

    Form.srcUINameUI=srcUINameUI;

    Form.srcUIPanelUILabel=srcUIPanelUILabel;

    Form.srcUIPanelUI=srcUIPanelUI;

    Form.srcUIWidgetUILabel=srcUIWidgetUILabel;

    Form.srcUIWidgetUI=srcUIWidgetUI;

    Form.linkCommentUILabel=linkCommentUILabel;

    Form.linkCommentUI=linkCommentUI;

    Form.tarUINameUILabel=tarUINameUILabel;

    Form.tarUINameUI=tarUINameUI;

    Form.tarUITabUILabel=tarUITabUILabel;

    Form.tarUITabUI=tarUITabUI;

    Form.tarUIArchorUILabel=tarUIArchorUILabel;

    Form.tarUIArchorUI=tarUIArchorUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.srcUINameUILabel=srcUINameUILabel;

    Form.srcUINameUI=srcUINameUI;

    Form.srcUIPanelUILabel=srcUIPanelUILabel;

    Form.srcUIPanelUI=srcUIPanelUI;

    Form.srcUIWidgetUILabel=srcUIWidgetUILabel;

    Form.srcUIWidgetUI=srcUIWidgetUI;

    Form.linkCommentUILabel=linkCommentUILabel;

    Form.linkCommentUI=linkCommentUI;

    Form.tarUINameUILabel=tarUINameUILabel;

    Form.tarUINameUI=tarUINameUI;

    Form.tarUITabUILabel=tarUITabUILabel;

    Form.tarUITabUI=tarUITabUI;

    Form.tarUIArchorUILabel=tarUIArchorUILabel;

    Form.tarUIArchorUI=tarUIArchorUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.UIDyanimcPageLink";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150713-125459",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150713-125459",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLink_invokeDynamicFunction */



