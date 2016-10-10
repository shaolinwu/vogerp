/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var partyIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "partyIdUILabel"]
    });

    var partyIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "partyIdUI"]
    });

    var functionIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "functionIdUILabel"]
    });

    var functionIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "functionIdUI"]
    });

    var countUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "countUILabel"]
    });

    var countUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "countUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "partyIdUILabel",prefix + "partyIdUI",prefix + "functionIdUILabel",prefix + "functionIdUI",prefix + "countUILabel",prefix + "countUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,partyIdUILabel,partyIdUI,functionIdUILabel,functionIdUI,countUILabel,countUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.partyIdUILabel=partyIdUILabel;

    Form.partyIdUI=partyIdUI;

    Form.functionIdUILabel=functionIdUILabel;

    Form.functionIdUI=functionIdUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.partyIdUILabel=partyIdUILabel;

    Form.partyIdUI=partyIdUI;

    Form.functionIdUILabel=functionIdUILabel;

    Form.functionIdUI=functionIdUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.AMemberRulesUsed";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20161007-182900",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20161007-182900",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AMemberRulesUsed_invokeDynamicFunction */



