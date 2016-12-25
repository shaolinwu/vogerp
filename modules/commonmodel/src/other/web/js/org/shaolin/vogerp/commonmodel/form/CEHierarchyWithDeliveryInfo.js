/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var pidUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "pidUI"]
    });

    var parentUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentUI"]
    });

    var addressUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressUILabel"]
    });

    var addressUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "addressUI"]
      ,allowBlank:false
    });

    var savebtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "savebtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "savebtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "pidUI",prefix + "parentUI",prefix + "addressUILabel",prefix + "addressUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [pidUI,parentUI,addressUILabel,addressUI,savebtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.pidUI=pidUI;

    Form.parentUI=parentUI;

    Form.addressUILabel=addressUILabel;

    Form.addressUI=addressUI;

    Form.savebtn=savebtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.pidUI=pidUI;

    Form.parentUI=parentUI;

    Form.addressUILabel=addressUILabel;

    Form.addressUI=addressUI;

    Form.actionPanel=actionPanel;

    Form.savebtn=savebtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo */
    };

    Form.ChangePaty = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_ChangePaty;

    Form.Save = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEHierarchyWithDeliveryInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_ChangePaty(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_ChangePaty */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"ChangePaty_201507112220",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_ChangePaty */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"Save_20161222-2034",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"Cancel_20161222-2034",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo_invokeDynamicFunction */



