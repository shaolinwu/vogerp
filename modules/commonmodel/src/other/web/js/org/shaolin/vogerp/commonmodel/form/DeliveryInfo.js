/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_DeliveryInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var addressIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressIdUILabel"]
    });

    var addressIdUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressIdUI"]
    });

    var contactIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "contactIdUILabel"]
    });

    var contactIdUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "contactIdUI"]
    });

    var mobileUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "mobileUILabel"]
    });

    var mobileUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "mobileUI"]
    });

    var expressVendorUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expressVendorUILabel"]
    });

    var expressVendorUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "expressVendorUI"]
    });

    var expressNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expressNumberUILabel"]
    });

    var expressNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "expressNumberUI"]
    });

    var commentUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "commentUILabel"]
    });

    var commentUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "commentUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "addressIdUILabel",prefix + "addressIdUI",prefix + "contactIdUILabel",prefix + "contactIdUI",prefix + "mobileUILabel",prefix + "mobileUI",prefix + "expressVendorUILabel",prefix + "expressVendorUI",prefix + "expressNumberUILabel",prefix + "expressNumberUI",prefix + "commentUILabel",prefix + "commentUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,addressIdUILabel,addressIdUI,contactIdUILabel,contactIdUI,mobileUILabel,mobileUI,expressVendorUILabel,expressVendorUI,expressNumberUILabel,expressNumberUI,commentUILabel,commentUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.addressIdUILabel=addressIdUILabel;

    Form.addressIdUI=addressIdUI;

    Form.contactIdUILabel=contactIdUILabel;

    Form.contactIdUI=contactIdUI;

    Form.mobileUILabel=mobileUILabel;

    Form.mobileUI=mobileUI;

    Form.expressVendorUILabel=expressVendorUILabel;

    Form.expressVendorUI=expressVendorUI;

    Form.expressNumberUILabel=expressNumberUILabel;

    Form.expressNumberUI=expressNumberUI;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.addressIdUILabel=addressIdUILabel;

    Form.addressIdUI=addressIdUI;

    Form.contactIdUILabel=contactIdUILabel;

    Form.contactIdUI=contactIdUI;

    Form.mobileUILabel=mobileUILabel;

    Form.mobileUI=mobileUI;

    Form.expressVendorUILabel=expressVendorUILabel;

    Form.expressVendorUI=expressVendorUI;

    Form.expressNumberUILabel=expressNumberUILabel;

    Form.expressNumberUI=expressNumberUI;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_DeliveryInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_DeliveryInfo */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_DeliveryInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_DeliveryInfo_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_DeliveryInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.DeliveryInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_DeliveryInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_DeliveryInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_DeliveryInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_DeliveryInfo_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20161216-225330",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_DeliveryInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_DeliveryInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_DeliveryInfo_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20161216-225330",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_DeliveryInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_DeliveryInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_DeliveryInfo_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_DeliveryInfo_invokeDynamicFunction */



