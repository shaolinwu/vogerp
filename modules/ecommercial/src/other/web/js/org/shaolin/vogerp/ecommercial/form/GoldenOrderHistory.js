/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory(json)
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

    var publishedCustomerUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "publishedCustomerUILabel"]
    });

    var publishedCustomerUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "publishedCustomerUI"]
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

    var takenCustomerUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "takenCustomerUILabel"]
    });

    var takenCustomerUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "takenCustomerUI"]
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

    var startCreateDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "startCreateDateUILabel"]
    });

    var startCreateDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "startCreateDateUI"]
    });

    var endCreateDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "endCreateDateUILabel"]
    });

    var endCreateDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "endCreateDateUI"]
    });

    var expiredDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expiredDateUILabel"]
    });

    var expiredDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "expiredDateUI"]
    });

    var statusUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "statusUILabel"]
    });

    var statusUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "statusUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "publishedCustomerIdUILabel",prefix + "publishedCustomerIdUI",prefix + "publishedCustomerUILabel",prefix + "publishedCustomerUI",prefix + "purchaseOrderIdUILabel",prefix + "purchaseOrderIdUI",prefix + "takenCustomerIdUILabel",prefix + "takenCustomerIdUI",prefix + "takenCustomerUILabel",prefix + "takenCustomerUI",prefix + "saleOrderIdUILabel",prefix + "saleOrderIdUI",prefix + "createDateUILabel",prefix + "createDateUI",prefix + "startCreateDateUILabel",prefix + "startCreateDateUI",prefix + "endCreateDateUILabel",prefix + "endCreateDateUI",prefix + "expiredDateUILabel",prefix + "expiredDateUI",prefix + "statusUILabel",prefix + "statusUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,serialNumberUILabel,serialNumberUI,descriptionUILabel,descriptionUI,publishedCustomerIdUILabel,publishedCustomerIdUI,publishedCustomerUILabel,publishedCustomerUI,purchaseOrderIdUILabel,purchaseOrderIdUI,takenCustomerIdUILabel,takenCustomerIdUI,takenCustomerUILabel,takenCustomerUI,saleOrderIdUILabel,saleOrderIdUI,createDateUILabel,createDateUI,startCreateDateUILabel,startCreateDateUI,endCreateDateUILabel,endCreateDateUI,expiredDateUILabel,expiredDateUI,statusUILabel,statusUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.publishedCustomerUILabel=publishedCustomerUILabel;

    Form.publishedCustomerUI=publishedCustomerUI;

    Form.purchaseOrderIdUILabel=purchaseOrderIdUILabel;

    Form.purchaseOrderIdUI=purchaseOrderIdUI;

    Form.takenCustomerIdUILabel=takenCustomerIdUILabel;

    Form.takenCustomerIdUI=takenCustomerIdUI;

    Form.takenCustomerUILabel=takenCustomerUILabel;

    Form.takenCustomerUI=takenCustomerUI;

    Form.saleOrderIdUILabel=saleOrderIdUILabel;

    Form.saleOrderIdUI=saleOrderIdUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.startCreateDateUILabel=startCreateDateUILabel;

    Form.startCreateDateUI=startCreateDateUI;

    Form.endCreateDateUILabel=endCreateDateUILabel;

    Form.endCreateDateUI=endCreateDateUI;

    Form.expiredDateUILabel=expiredDateUILabel;

    Form.expiredDateUI=expiredDateUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.publishedCustomerUILabel=publishedCustomerUILabel;

    Form.publishedCustomerUI=publishedCustomerUI;

    Form.purchaseOrderIdUILabel=purchaseOrderIdUILabel;

    Form.purchaseOrderIdUI=purchaseOrderIdUI;

    Form.takenCustomerIdUILabel=takenCustomerIdUILabel;

    Form.takenCustomerIdUI=takenCustomerIdUI;

    Form.takenCustomerUILabel=takenCustomerUILabel;

    Form.takenCustomerUI=takenCustomerUI;

    Form.saleOrderIdUILabel=saleOrderIdUILabel;

    Form.saleOrderIdUI=saleOrderIdUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.startCreateDateUILabel=startCreateDateUILabel;

    Form.startCreateDateUI=startCreateDateUI;

    Form.endCreateDateUILabel=endCreateDateUILabel;

    Form.endCreateDateUI=endCreateDateUI;

    Form.expiredDateUILabel=expiredDateUILabel;

    Form.expiredDateUI=expiredDateUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory_Save;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GoldenOrderHistory";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160115-151205",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160115-151205",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderHistory_invokeDynamicFunction */



