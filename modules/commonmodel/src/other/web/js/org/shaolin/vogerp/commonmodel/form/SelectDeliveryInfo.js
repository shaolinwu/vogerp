/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo(json)
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

    var addressListUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressListUILabel"]
    });

    var addressListUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "addressListUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "userIdUI",prefix + "nameUI",prefix + "mobileUI",prefix + "addressListUILabel",prefix + "addressListUI",prefix + "contactorUILabel",prefix + "contactorUI",prefix + "addressUILabel",prefix + "addressUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,userIdUI,nameUI,mobileUI,addressListUILabel,addressListUI,contactorUILabel,contactorUI,addressUILabel,addressUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.userIdUI=userIdUI;

    Form.nameUI=nameUI;

    Form.mobileUI=mobileUI;

    Form.addressListUILabel=addressListUILabel;

    Form.addressListUI=addressListUI;

    Form.contactorUILabel=contactorUILabel;

    Form.contactorUI=contactorUI;

    Form.addressUILabel=addressUILabel;

    Form.addressUI=addressUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.userIdUI=userIdUI;

    Form.nameUI=nameUI;

    Form.mobileUI=mobileUI;

    Form.addressListUILabel=addressListUILabel;

    Form.addressListUI=addressListUI;

    Form.contactorUILabel=contactorUILabel;

    Form.contactorUI=contactorUI;

    Form.addressUILabel=addressUILabel;

    Form.addressUI=addressUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo */
    };

    Form.selectAddress = org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_selectAddress;

    Form.Save = org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.SelectDeliveryInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_selectAddress(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_selectAddress */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectAddress-20170329-1716",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_selectAddress */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"Save_20170322-2034",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170215-215501",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_SelectDeliveryInfo_invokeDynamicFunction */



