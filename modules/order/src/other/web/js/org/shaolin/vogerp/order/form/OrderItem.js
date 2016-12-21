/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_form_OrderItem(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var productIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "productIdUILabel"]
    });

    var productIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "productIdUI"]
    });

    var amountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "amountUILabel"]
    });

    var amountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "amountUI"]
    });

    var unitPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "unitPriceUILabel"]
    });

    var unitPriceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "unitPriceUI"]
    });

    var ajustPriceTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "ajustPriceTypeUILabel"]
    });

    var ajustPriceTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "ajustPriceTypeUI"]
    });

    var ajustPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "ajustPriceUILabel"]
    });

    var ajustPriceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "ajustPriceUI"]
    });

    var commentUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "commentUILabel"]
    });

    var commentUI = new UIMaster.ui.textfield
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
        ,subComponents: [prefix + "idUI",prefix + "productIdUILabel",prefix + "productIdUI",prefix + "amountUILabel",prefix + "amountUI",prefix + "unitPriceUILabel",prefix + "unitPriceUI",prefix + "ajustPriceTypeUILabel",prefix + "ajustPriceTypeUI",prefix + "ajustPriceUILabel",prefix + "ajustPriceUI",prefix + "commentUILabel",prefix + "commentUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,productIdUILabel,productIdUI,amountUILabel,amountUI,unitPriceUILabel,unitPriceUI,ajustPriceTypeUILabel,ajustPriceTypeUI,ajustPriceUILabel,ajustPriceUI,commentUILabel,commentUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.productIdUILabel=productIdUILabel;

    Form.productIdUI=productIdUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.unitPriceUILabel=unitPriceUILabel;

    Form.unitPriceUI=unitPriceUI;

    Form.ajustPriceTypeUILabel=ajustPriceTypeUILabel;

    Form.ajustPriceTypeUI=ajustPriceTypeUI;

    Form.ajustPriceUILabel=ajustPriceUILabel;

    Form.ajustPriceUI=ajustPriceUI;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.productIdUILabel=productIdUILabel;

    Form.productIdUI=productIdUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.unitPriceUILabel=unitPriceUILabel;

    Form.unitPriceUI=unitPriceUI;

    Form.ajustPriceTypeUILabel=ajustPriceTypeUILabel;

    Form.ajustPriceTypeUI=ajustPriceTypeUI;

    Form.ajustPriceUILabel=ajustPriceUILabel;

    Form.ajustPriceUI=ajustPriceUI;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_OrderItem */
        /* Construct_LAST:org_shaolin_vogerp_order_form_OrderItem */
    };

    Form.Save = org_shaolin_vogerp_order_form_OrderItem_Save;

    Form.Cancel = org_shaolin_vogerp_order_form_OrderItem_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_order_form_OrderItem_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.order.form.OrderItem";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_order_form_OrderItem */
/* Other_Func_LAST:org_shaolin_vogerp_order_form_OrderItem */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItem_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItem_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1087017690",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItem_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItem_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItem_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-781675249",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItem_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItem_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItem_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItem_invokeDynamicFunction */



