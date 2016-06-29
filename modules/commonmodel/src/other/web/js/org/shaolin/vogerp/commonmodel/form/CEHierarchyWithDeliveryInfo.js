/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var partyUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "partyUI"]
      ,allowBlank:false
    });

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
        ,subComponents: [prefix + "partyUI",prefix + "addressUI",prefix + "contactUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [partyUI,addressUI,contactUI,fieldPanel]
    });

    Form.partyUI=partyUI;

    Form.addressUI=addressUI;

    Form.contactUI=contactUI;

    Form.fieldPanel=fieldPanel;

    Form.partyUI=partyUI;

    Form.addressUI=addressUI;

    Form.contactUI=contactUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo */
    };

    Form.ChangeItem = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_ChangeItem;

    Form.ChangePaty = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_ChangePaty;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEHierarchyWithDeliveryInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_ChangeItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_ChangeItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"ChangeItem_201507012234",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_ChangeItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_ChangePaty(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_ChangePaty */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"ChangePaty_201507112220",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_ChangePaty */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_invokeDynamicFunction */



