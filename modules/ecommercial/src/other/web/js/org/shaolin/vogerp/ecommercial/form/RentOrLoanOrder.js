/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder(json)
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

    var estimatedPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "estimatedPriceUILabel"]
    });

    var estimatedPriceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "estimatedPriceUI"]
    });

    var endPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "endPriceUILabel"]
    });

    var endPriceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "endPriceUI"]
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

    var photosUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "photosUILabel"]
    });

    var photosUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "photosUI"]
    });

    var statusUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "statusUILabel"]
    });

    var statusUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "statusUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var dateTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "dateTypeUILabel"]
    });

    var dateTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "dateTypeUI"]
    });

    var dateCountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "dateCountUILabel"]
    });

    var dateCountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "dateCountUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "estimatedPriceUILabel",prefix + "estimatedPriceUI",prefix + "endPriceUILabel",prefix + "endPriceUI",prefix + "publishedCustomerIdUILabel",prefix + "publishedCustomerIdUI",prefix + "purchaseOrderIdUILabel",prefix + "purchaseOrderIdUI",prefix + "takenCustomerIdUILabel",prefix + "takenCustomerIdUI",prefix + "saleOrderIdUILabel",prefix + "saleOrderIdUI",prefix + "startCreateDateUILabel",prefix + "startCreateDateUI",prefix + "endCreateDateUILabel",prefix + "endCreateDateUI",prefix + "expiredDateUILabel",prefix + "expiredDateUI",prefix + "photosUILabel",prefix + "photosUI",prefix + "statusUILabel",prefix + "statusUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "dateTypeUILabel",prefix + "dateTypeUI",prefix + "dateCountUILabel",prefix + "dateCountUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,serialNumberUILabel,serialNumberUI,descriptionUILabel,descriptionUI,estimatedPriceUILabel,estimatedPriceUI,endPriceUILabel,endPriceUI,publishedCustomerIdUILabel,publishedCustomerIdUI,purchaseOrderIdUILabel,purchaseOrderIdUI,takenCustomerIdUILabel,takenCustomerIdUI,saleOrderIdUILabel,saleOrderIdUI,startCreateDateUILabel,startCreateDateUI,endCreateDateUILabel,endCreateDateUI,expiredDateUILabel,expiredDateUI,photosUILabel,photosUI,statusUILabel,statusUI,typeUILabel,typeUI,dateTypeUILabel,dateTypeUI,dateCountUILabel,dateCountUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.endPriceUILabel=endPriceUILabel;

    Form.endPriceUI=endPriceUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.purchaseOrderIdUILabel=purchaseOrderIdUILabel;

    Form.purchaseOrderIdUI=purchaseOrderIdUI;

    Form.takenCustomerIdUILabel=takenCustomerIdUILabel;

    Form.takenCustomerIdUI=takenCustomerIdUI;

    Form.saleOrderIdUILabel=saleOrderIdUILabel;

    Form.saleOrderIdUI=saleOrderIdUI;

    Form.startCreateDateUILabel=startCreateDateUILabel;

    Form.startCreateDateUI=startCreateDateUI;

    Form.endCreateDateUILabel=endCreateDateUILabel;

    Form.endCreateDateUI=endCreateDateUI;

    Form.expiredDateUILabel=expiredDateUILabel;

    Form.expiredDateUI=expiredDateUI;

    Form.photosUILabel=photosUILabel;

    Form.photosUI=photosUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.dateTypeUILabel=dateTypeUILabel;

    Form.dateTypeUI=dateTypeUI;

    Form.dateCountUILabel=dateCountUILabel;

    Form.dateCountUI=dateCountUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.endPriceUILabel=endPriceUILabel;

    Form.endPriceUI=endPriceUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.purchaseOrderIdUILabel=purchaseOrderIdUILabel;

    Form.purchaseOrderIdUI=purchaseOrderIdUI;

    Form.takenCustomerIdUILabel=takenCustomerIdUILabel;

    Form.takenCustomerIdUI=takenCustomerIdUI;

    Form.saleOrderIdUILabel=saleOrderIdUILabel;

    Form.saleOrderIdUI=saleOrderIdUI;

    Form.startCreateDateUILabel=startCreateDateUILabel;

    Form.startCreateDateUI=startCreateDateUI;

    Form.endCreateDateUILabel=endCreateDateUILabel;

    Form.endCreateDateUI=endCreateDateUI;

    Form.expiredDateUILabel=expiredDateUILabel;

    Form.expiredDateUI=expiredDateUI;

    Form.photosUILabel=photosUILabel;

    Form.photosUI=photosUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.dateTypeUILabel=dateTypeUILabel;

    Form.dateTypeUI=dateTypeUI;

    Form.dateCountUILabel=dateCountUILabel;

    Form.dateCountUI=dateCountUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder_Save;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.RentOrLoanOrder";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160416-173334",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160416-173334",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrder_invokeDynamicFunction */



