/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_form_OutStoreOrder(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var parentIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "parentIdUILabel"]
    });

    var parentIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var createDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "createDateUILabel"]
    });

    var createDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "createDateUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "parentIdUILabel",prefix + "parentIdUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "createDateUILabel",prefix + "createDateUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,parentIdUILabel,parentIdUI,serialNumberUILabel,serialNumberUI,descriptionUILabel,descriptionUI,createDateUILabel,createDateUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.parentIdUILabel=parentIdUILabel;

    Form.parentIdUI=parentIdUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.parentIdUILabel=parentIdUILabel;

    Form.parentIdUI=parentIdUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_OutStoreOrder */
        /* Construct_LAST:org_shaolin_vogerp_order_form_OutStoreOrder */
    };

    Form.Save = org_shaolin_vogerp_order_form_OutStoreOrder_Save;

    Form.Cancel = org_shaolin_vogerp_order_form_OutStoreOrder_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_order_form_OutStoreOrder_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.order.form.OutStoreOrder";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_order_form_OutStoreOrder */
/* Other_Func_LAST:org_shaolin_vogerp_order_form_OutStoreOrder */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OutStoreOrder_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OutStoreOrder_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150915-233517",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_OutStoreOrder_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OutStoreOrder_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OutStoreOrder_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150915-233517",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_OutStoreOrder_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OutStoreOrder_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OutStoreOrder_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_order_form_OutStoreOrder_invokeDynamicFunction */



