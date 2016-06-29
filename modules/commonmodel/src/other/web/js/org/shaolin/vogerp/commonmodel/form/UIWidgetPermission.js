/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_UIWidgetPermission(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var pageNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "pageNameUILabel"]
    });

    var pageNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "pageNameUI"]
    });

    var widgetUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "widgetUILabel"]
    });

    var widgetUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "widgetUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "pageNameUILabel",prefix + "pageNameUI",prefix + "widgetUILabel",prefix + "widgetUI",prefix + "typeUILabel",prefix + "typeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,pageNameUILabel,pageNameUI,widgetUILabel,widgetUI,typeUILabel,typeUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.pageNameUILabel=pageNameUILabel;

    Form.pageNameUI=pageNameUI;

    Form.widgetUILabel=widgetUILabel;

    Form.widgetUI=widgetUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.pageNameUILabel=pageNameUILabel;

    Form.pageNameUI=pageNameUI;

    Form.widgetUILabel=widgetUILabel;

    Form.widgetUI=widgetUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_UIWidgetPermission */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_UIWidgetPermission */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_UIWidgetPermission_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_UIWidgetPermission_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_UIWidgetPermission_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.UIWidgetPermission";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_UIWidgetPermission */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_UIWidgetPermission */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIWidgetPermission_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIWidgetPermission_Save */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-1975584251",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIWidgetPermission_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIWidgetPermission_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIWidgetPermission_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1945891060",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIWidgetPermission_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIWidgetPermission_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIWidgetPermission_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIWidgetPermission_invokeDynamicFunction */



