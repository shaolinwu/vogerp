/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GoldenOrder(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
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

    var publishedCustomerIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "publishedCustomerIdUILabel"]
    });

    var publishedCustomerIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "publishedCustomerIdUI"]
    });

    var purchaseOrderIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "purchaseOrderIdUILabel"]
    });

    var purchaseOrderIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "purchaseOrderIdUI"]
    });

    var takenCustomerIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "takenCustomerIdUILabel"]
    });

    var takenCustomerIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "takenCustomerIdUI"]
    });

    var saleOrderIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "saleOrderIdUILabel"]
    });

    var saleOrderIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "saleOrderIdUI"]
    });

    var createDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "createDateUILabel"]
    });

    var createDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "createDateUI"]
    });

    var expiredDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expiredDateUILabel"]
    });

    var expiredDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "expiredDateUI"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "publishedCustomerIdUILabel",prefix + "publishedCustomerIdUI",prefix + "purchaseOrderIdUILabel",prefix + "purchaseOrderIdUI",prefix + "takenCustomerIdUILabel",prefix + "takenCustomerIdUI",prefix + "saleOrderIdUILabel",prefix + "saleOrderIdUI",prefix + "createDateUILabel",prefix + "createDateUI",prefix + "expiredDateUILabel",prefix + "expiredDateUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,serialNumberUILabel,serialNumberUI,descriptionUILabel,descriptionUI,publishedCustomerIdUILabel,publishedCustomerIdUI,purchaseOrderIdUILabel,purchaseOrderIdUI,takenCustomerIdUILabel,takenCustomerIdUI,saleOrderIdUILabel,saleOrderIdUI,createDateUILabel,createDateUI,expiredDateUILabel,expiredDateUI,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.purchaseOrderIdUILabel=purchaseOrderIdUILabel;

    Form.purchaseOrderIdUI=purchaseOrderIdUI;

    Form.takenCustomerIdUILabel=takenCustomerIdUILabel;

    Form.takenCustomerIdUI=takenCustomerIdUI;

    Form.saleOrderIdUILabel=saleOrderIdUILabel;

    Form.saleOrderIdUI=saleOrderIdUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.expiredDateUILabel=expiredDateUILabel;

    Form.expiredDateUI=expiredDateUI;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.purchaseOrderIdUILabel=purchaseOrderIdUILabel;

    Form.purchaseOrderIdUI=purchaseOrderIdUI;

    Form.takenCustomerIdUILabel=takenCustomerIdUILabel;

    Form.takenCustomerIdUI=takenCustomerIdUI;

    Form.saleOrderIdUILabel=saleOrderIdUILabel;

    Form.saleOrderIdUI=saleOrderIdUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.expiredDateUILabel=expiredDateUILabel;

    Form.expiredDateUI=expiredDateUI;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrder */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrder */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_GoldenOrder_Save;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_GoldenOrder_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GoldenOrder_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GoldenOrder";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrder */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrder */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrder_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrder_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160106-214008",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrder_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrder_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrder_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160106-214008",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrder_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrder_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrder_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'????',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrder_invokeDynamicFunction */



