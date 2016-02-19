/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_PartyDeliveryInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var addressUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "addressUI"]
      ,allowBlank:false
    });

    var contactUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "contactUI"]
      ,allowBlank:false
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "addressUI",prefix + "contactUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [addressUI,contactUI,fieldPanel]
    });

    Form.addressUI=addressUI;

    Form.contactUI=contactUI;

    Form.fieldPanel=fieldPanel;

    Form.addressUI=addressUI;

    Form.contactUI=contactUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_PartyDeliveryInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_PartyDeliveryInfo */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_PartyDeliveryInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.PartyDeliveryInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_PartyDeliveryInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_PartyDeliveryInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PartyDeliveryInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PartyDeliveryInfo_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PartyDeliveryInfo_invokeDynamicFunction */



