/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_ServiceChargeTemplate(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var chargeRateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "chargeRateUILabel"]
    });

    var chargeRateUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "chargeRateUI"]
    });

    var payBusinessTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "payBusinessTypeUILabel"]
    });

    var payBusinessTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "payBusinessTypeUI"]
    });

    var versionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "versionUILabel"]
    });

    var versionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "versionUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "chargeRateUILabel",prefix + "chargeRateUI",prefix + "payBusinessTypeUILabel",prefix + "payBusinessTypeUI",prefix + "versionUILabel",prefix + "versionUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,chargeRateUILabel,chargeRateUI,payBusinessTypeUILabel,payBusinessTypeUI,versionUILabel,versionUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.chargeRateUILabel=chargeRateUILabel;

    Form.chargeRateUI=chargeRateUI;

    Form.payBusinessTypeUILabel=payBusinessTypeUILabel;

    Form.payBusinessTypeUI=payBusinessTypeUI;

    Form.versionUILabel=versionUILabel;

    Form.versionUI=versionUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.chargeRateUILabel=chargeRateUILabel;

    Form.chargeRateUI=chargeRateUI;

    Form.payBusinessTypeUILabel=payBusinessTypeUILabel;

    Form.payBusinessTypeUI=payBusinessTypeUI;

    Form.versionUILabel=versionUILabel;

    Form.versionUI=versionUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_ServiceChargeTemplate */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_ServiceChargeTemplate */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_ServiceChargeTemplate_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_ServiceChargeTemplate_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_ServiceChargeTemplate_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.ServiceChargeTemplate";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_ServiceChargeTemplate */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_ServiceChargeTemplate */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_ServiceChargeTemplate_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_ServiceChargeTemplate_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20171104-120116",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_ServiceChargeTemplate_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_ServiceChargeTemplate_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_ServiceChargeTemplate_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20171104-120116",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_ServiceChargeTemplate_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_ServiceChargeTemplate_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_ServiceChargeTemplate_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_ServiceChargeTemplate_invokeDynamicFunction */



