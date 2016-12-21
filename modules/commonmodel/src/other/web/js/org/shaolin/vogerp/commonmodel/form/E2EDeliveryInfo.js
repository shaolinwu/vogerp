/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo(json)
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

    var expressVendorUI = new UIMaster.ui.combobox
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

    var id1UI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "id1UI"]
    });

    var addressId1UILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressId1UILabel"]
    });

    var addressId1UI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressId1UI"]
    });

    var contactId1UILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "contactId1UILabel"]
    });

    var contactId1UI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "contactId1UI"]
    });

    var mobile1UILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "mobile1UILabel"]
    });

    var mobile1UI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "mobile1UI"]
    });

    var expressVendor1UILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expressVendor1UILabel"]
    });

    var expressVendor1UI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "expressVendor1UI"]
    });

    var expressNumber1UILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expressNumber1UILabel"]
    });

    var expressNumber1UI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "expressNumber1UI"]
    });

    var comment1UILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "comment1UILabel"]
    });

    var comment1UI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "comment1UI"]
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

    var fieldPanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel1"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "id1UI",prefix + "addressId1UILabel",prefix + "addressId1UI",prefix + "contactId1UILabel",prefix + "contactId1UI",prefix + "mobile1UILabel",prefix + "mobile1UI",prefix + "expressVendor1UILabel",prefix + "expressVendor1UI",prefix + "expressNumber1UILabel",prefix + "expressNumber1UI",prefix + "comment1UILabel",prefix + "comment1UI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "addressIdUILabel",prefix + "addressIdUI",prefix + "contactIdUILabel",prefix + "contactIdUI",prefix + "mobileUILabel",prefix + "mobileUI",prefix + "expressVendorUILabel",prefix + "expressVendorUI",prefix + "expressNumberUILabel",prefix + "expressNumberUI",prefix + "commentUILabel",prefix + "commentUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,addressIdUILabel,addressIdUI,contactIdUILabel,contactIdUI,mobileUILabel,mobileUI,expressVendorUILabel,expressVendorUI,expressNumberUILabel,expressNumberUI,commentUILabel,commentUI,id1UI,addressId1UILabel,addressId1UI,contactId1UILabel,contactId1UI,mobile1UILabel,mobile1UI,expressVendor1UILabel,expressVendor1UI,expressNumber1UILabel,expressNumber1UI,comment1UILabel,comment1UI,okbtn,cancelbtn,fieldPanel,fieldPanel1,actionPanel]
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

    Form.id1UI=id1UI;

    Form.addressId1UILabel=addressId1UILabel;

    Form.addressId1UI=addressId1UI;

    Form.contactId1UILabel=contactId1UILabel;

    Form.contactId1UI=contactId1UI;

    Form.mobile1UILabel=mobile1UILabel;

    Form.mobile1UI=mobile1UI;

    Form.expressVendor1UILabel=expressVendor1UILabel;

    Form.expressVendor1UI=expressVendor1UI;

    Form.expressNumber1UILabel=expressNumber1UILabel;

    Form.expressNumber1UI=expressNumber1UI;

    Form.comment1UILabel=comment1UILabel;

    Form.comment1UI=comment1UI;

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

    Form.fieldPanel1=fieldPanel1;

    Form.id1UI=id1UI;

    Form.addressId1UILabel=addressId1UILabel;

    Form.addressId1UI=addressId1UI;

    Form.contactId1UILabel=contactId1UILabel;

    Form.contactId1UI=contactId1UI;

    Form.mobile1UILabel=mobile1UILabel;

    Form.mobile1UI=mobile1UI;

    Form.expressVendor1UILabel=expressVendor1UILabel;

    Form.expressVendor1UI=expressVendor1UI;

    Form.expressNumber1UILabel=expressNumber1UILabel;

    Form.expressNumber1UI=expressNumber1UI;

    Form.comment1UILabel=comment1UILabel;

    Form.comment1UI=comment1UI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.E2EDeliveryInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20161216-225330",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20161216-225330",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_E2EDeliveryInfo_invokeDynamicFunction */



