/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_form_PurchaseItem(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
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

    var tproductIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "tproductIdUILabel"]
    });

    var tproductIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "tproductIdUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "amountUILabel",prefix + "amountUI",prefix + "unitPriceUILabel",prefix + "unitPriceUI",prefix + "ajustPriceTypeUILabel",prefix + "ajustPriceTypeUI",prefix + "ajustPriceUILabel",prefix + "ajustPriceUI",prefix + "commentUILabel",prefix + "commentUI",prefix + "tproductIdUILabel",prefix + "tproductIdUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,amountUILabel,amountUI,unitPriceUILabel,unitPriceUI,ajustPriceTypeUILabel,ajustPriceTypeUI,ajustPriceUILabel,ajustPriceUI,commentUILabel,commentUI,tproductIdUILabel,tproductIdUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

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

    Form.tproductIdUILabel=tproductIdUILabel;

    Form.tproductIdUI=tproductIdUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

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

    Form.tproductIdUILabel=tproductIdUILabel;

    Form.tproductIdUI=tproductIdUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_PurchaseItem */
        /* Construct_LAST:org_shaolin_vogerp_order_form_PurchaseItem */
    };

    Form.Save = org_shaolin_vogerp_order_form_PurchaseItem_Save;

    Form.Cancel = org_shaolin_vogerp_order_form_PurchaseItem_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_order_form_PurchaseItem_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.order.form.PurchaseItem";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_order_form_PurchaseItem */
/* Other_Func_LAST:org_shaolin_vogerp_order_form_PurchaseItem */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseItem_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseItem_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItem_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseItem_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseItem_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItem_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseItem_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseItem_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItem_invokeDynamicFunction */



