/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var userIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "userIdUI"]
    });

    var nameUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var mobileUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "mobileUI"]
    });

    var contactorUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "contactorUILabel"]
    });

    var contactorUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "contactorUI"]
    });

    var addressUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressUILabel"]
    });

    var addressUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "userIdUI",prefix + "nameUI",prefix + "mobileUI",prefix + "contactorUILabel",prefix + "contactorUI",prefix + "addressUILabel",prefix + "addressUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.RighOpenPanel"
        ,items: [idUI,userIdUI,nameUI,mobileUI,contactorUILabel,contactorUI,addressUILabel,addressUI,fieldPanel]
    });

    Form.idUI=idUI;

    Form.userIdUI=userIdUI;

    Form.nameUI=nameUI;

    Form.mobileUI=mobileUI;

    Form.contactorUILabel=contactorUILabel;

    Form.contactorUI=contactorUI;

    Form.addressUILabel=addressUILabel;

    Form.addressUI=addressUI;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.userIdUI=userIdUI;

    Form.nameUI=nameUI;

    Form.mobileUI=mobileUI;

    Form.contactorUILabel=contactorUILabel;

    Form.contactorUI=contactorUI;

    Form.addressUILabel=addressUILabel;

    Form.addressUI=addressUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView */
    };

    Form.openList = org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView_openList;

    Form.refershSelectedAddress = org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView_refershSelectedAddress;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ReceiverInfoSimpleView";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView_openList(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView_openList */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openList-20161216-225330",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView_openList */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView_refershSelectedAddress(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView_refershSelectedAddress */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refershSelectedAddress-20161216",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView_refershSelectedAddress */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ReceiverInfoSimpleView_invokeDynamicFunction */



