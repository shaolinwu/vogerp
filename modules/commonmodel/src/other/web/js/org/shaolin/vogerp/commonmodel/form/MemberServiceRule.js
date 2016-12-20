/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_MemberServiceRule(json)
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

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var functionIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "functionIdUILabel"]
    });

    var functionIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "functionIdUI"]
    });

    var priceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "priceUILabel"]
    });

    var priceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "priceUI"]
    });

    var overloadNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "overloadNumberUILabel"]
    });

    var overloadNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "overloadNumberUI"]
    });

    var dateTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "dateTypeUILabel"]
    });

    var dateTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "dateTypeUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "functionIdUILabel",prefix + "functionIdUI",prefix + "priceUILabel",prefix + "priceUI",prefix + "overloadNumberUILabel",prefix + "overloadNumberUI",prefix + "dateTypeUILabel",prefix + "dateTypeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,typeUILabel,typeUI,descriptionUILabel,descriptionUI,functionIdUILabel,functionIdUI,priceUILabel,priceUI,overloadNumberUILabel,overloadNumberUI,dateTypeUILabel,dateTypeUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.functionIdUILabel=functionIdUILabel;

    Form.functionIdUI=functionIdUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.overloadNumberUILabel=overloadNumberUILabel;

    Form.overloadNumberUI=overloadNumberUI;

    Form.dateTypeUILabel=dateTypeUILabel;

    Form.dateTypeUI=dateTypeUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.functionIdUILabel=functionIdUILabel;

    Form.functionIdUI=functionIdUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.overloadNumberUILabel=overloadNumberUILabel;

    Form.overloadNumberUI=overloadNumberUI;

    Form.dateTypeUILabel=dateTypeUILabel;

    Form.dateTypeUI=dateTypeUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_MemberServiceRule */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_MemberServiceRule */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_MemberServiceRule_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_MemberServiceRule_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_MemberServiceRule_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.MemberServiceRule";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_MemberServiceRule */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_MemberServiceRule */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_MemberServiceRule_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_MemberServiceRule_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20161009-221224",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_MemberServiceRule_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_MemberServiceRule_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_MemberServiceRule_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20161009-221224",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_MemberServiceRule_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_MemberServiceRule_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_MemberServiceRule_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_MemberServiceRule_invokeDynamicFunction */



