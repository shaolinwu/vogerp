/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_AMemberRules(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var functionIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "functionIdUILabel"]
    });

    var functionIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "functionIdUI"]
    });

    var overloadConditionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "overloadConditionUILabel"]
    });

    var overloadConditionUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "overloadConditionUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "functionIdUILabel",prefix + "functionIdUI",prefix + "overloadConditionUILabel",prefix + "overloadConditionUI",prefix + "descriptionUILabel",prefix + "descriptionUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,typeUILabel,typeUI,functionIdUILabel,functionIdUI,overloadConditionUILabel,overloadConditionUI,descriptionUILabel,descriptionUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.functionIdUILabel=functionIdUILabel;

    Form.functionIdUI=functionIdUI;

    Form.overloadConditionUILabel=overloadConditionUILabel;

    Form.overloadConditionUI=overloadConditionUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.functionIdUILabel=functionIdUILabel;

    Form.functionIdUI=functionIdUI;

    Form.overloadConditionUILabel=overloadConditionUILabel;

    Form.overloadConditionUI=overloadConditionUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_AMemberRules */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_AMemberRules */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_AMemberRules_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_AMemberRules_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_AMemberRules_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.AMemberRules";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_AMemberRules */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_AMemberRules */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AMemberRules_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AMemberRules_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20161007-182859",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AMemberRules_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AMemberRules_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AMemberRules_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20161007-182859",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AMemberRules_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AMemberRules_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AMemberRules_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AMemberRules_invokeDynamicFunction */



