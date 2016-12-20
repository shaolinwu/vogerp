/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_Registry(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var pathUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "pathUILabel"]
    });

    var pathUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "pathUI"]
    });

    var valueUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "valueUILabel"]
    });

    var valueUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "valueUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "pathUILabel",prefix + "pathUI",prefix + "valueUILabel",prefix + "valueUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,pathUILabel,pathUI,valueUILabel,valueUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.pathUILabel=pathUILabel;

    Form.pathUI=pathUI;

    Form.valueUILabel=valueUILabel;

    Form.valueUI=valueUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.pathUILabel=pathUILabel;

    Form.pathUI=pathUI;

    Form.valueUILabel=valueUILabel;

    Form.valueUI=valueUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_Registry */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_Registry */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_Registry_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_Registry_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_Registry_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.Registry";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_Registry */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_Registry */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Registry_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Registry_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160411-154026",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Registry_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Registry_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Registry_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160411-154026",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Registry_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Registry_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Registry_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Registry_invokeDynamicFunction */



