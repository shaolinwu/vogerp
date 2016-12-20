/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ExpressQuery(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var expressTypeUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expressTypeUI"]
    });

    var expressNumberUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expressNumberUI"]
    });

    var expressRecordUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "expressRecordUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "expressTypeUI",prefix + "expressNumberUI",prefix + "expressRecordUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,expressTypeUI,expressNumberUI,expressRecordUI,fieldPanel]
    });

    Form.idUI=idUI;

    Form.expressTypeUI=expressTypeUI;

    Form.expressNumberUI=expressNumberUI;

    Form.expressRecordUI=expressRecordUI;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.expressTypeUI=expressTypeUI;

    Form.expressNumberUI=expressNumberUI;

    Form.expressRecordUI=expressRecordUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ExpressQuery */

        
        { 
           eventsource = this.expressNumberUI;
           UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"query-20161216-2211",UIMaster.getValue(eventsource),o.__entityName);
        }
    
            /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ExpressQuery */
    };

    Form.query = org_shaolin_vogerp_commonmodel_form_ExpressQuery_query;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_ExpressQuery_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ExpressQuery";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ExpressQuery */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ExpressQuery */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ExpressQuery_query(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ExpressQuery_query */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"query-20161216-2211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ExpressQuery_query */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ExpressQuery_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ExpressQuery_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ExpressQuery_invokeDynamicFunction */



