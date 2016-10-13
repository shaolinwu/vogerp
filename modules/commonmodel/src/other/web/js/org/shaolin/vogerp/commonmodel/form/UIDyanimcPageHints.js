/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var uiEntityUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "uiEntityUILabel"]
    });

    var uiEntityUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "uiEntityUI"]
    });

    var uiPanelUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "uiPanelUILabel"]
    });

    var uiPanelUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "uiPanelUI"]
    });

    var uiWidgetUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "uiWidgetUILabel"]
    });

    var uiWidgetUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "uiWidgetUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var linkUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "linkUILabel"]
    });

    var linkUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "linkUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "uiEntityUILabel",prefix + "uiEntityUI",prefix + "uiPanelUILabel",prefix + "uiPanelUI",prefix + "uiWidgetUILabel",prefix + "uiWidgetUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "linkUILabel",prefix + "linkUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,uiEntityUILabel,uiEntityUI,uiPanelUILabel,uiPanelUI,uiWidgetUILabel,uiWidgetUI,descriptionUILabel,descriptionUI,linkUILabel,linkUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.uiEntityUILabel=uiEntityUILabel;

    Form.uiEntityUI=uiEntityUI;

    Form.uiPanelUILabel=uiPanelUILabel;

    Form.uiPanelUI=uiPanelUI;

    Form.uiWidgetUILabel=uiWidgetUILabel;

    Form.uiWidgetUI=uiWidgetUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.linkUILabel=linkUILabel;

    Form.linkUI=linkUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.uiEntityUILabel=uiEntityUILabel;

    Form.uiEntityUI=uiEntityUI;

    Form.uiPanelUILabel=uiPanelUILabel;

    Form.uiPanelUI=uiPanelUI;

    Form.uiWidgetUILabel=uiWidgetUILabel;

    Form.uiWidgetUI=uiWidgetUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.linkUILabel=linkUILabel;

    Form.linkUI=linkUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.UIDyanimcPageHints";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20161012-190443",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20161012-190443",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHints_invokeDynamicFunction */



