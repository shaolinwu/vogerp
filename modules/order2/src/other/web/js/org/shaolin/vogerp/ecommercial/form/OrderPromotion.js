/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_OrderPromotion(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var orderproductTypeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "orderproductTypeUI"]
    });

    var ordeInfoUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "ordeInfoUI"]
    });

    var productTypeTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "productTypeTab"]
        ,items: []
        ,subComponents: [prefix + "selectProductTypePanel",prefix + "autoProductTypePanel"]
    });
    var productTypeUI = new org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2({"prefix":prefix + "productTypeUI."});

    var supplierSelector = new org_shaolin_vogerp_productmodel_form_ProductTypeSupplierSelector({"prefix":prefix + "supplierSelector."});


    var mserviceTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "mserviceTypeUI"]
    });

    var orgNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orgNameUI"]
    });

    var searchbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "searchbtn"]
    });

    var orgInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "orgInfoTable"]
    });

    var chatbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "chatbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var citySelector = new org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor({"prefix":prefix + "citySelector."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "chatbtn",prefix + "cancelbtn"]
    });

    var fieldPanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel1"]
        ,items: []
        ,subComponents: [prefix + "orgInfoTable"]
    });

    var moreConditionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "moreConditionPanel"]
        ,items: []
        ,subComponents: [prefix + "citySelector",prefix + "mserviceTypeUI",prefix + "orgNameUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "orderproductTypeUI",prefix + "ordeInfoUI",prefix + "productTypeTab",prefix + "moreConditionPanel",prefix + "searchbtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [orderproductTypeUI,ordeInfoUI,productTypeTab,mserviceTypeUI,orgNameUI,searchbtn,orgInfoTable,chatbtn,cancelbtn,citySelector,fieldPanel,moreConditionPanel,fieldPanel1,actionPanel]
    });

    Form.orderproductTypeUI=orderproductTypeUI;

    Form.ordeInfoUI=ordeInfoUI;

    Form.productTypeTab=productTypeTab;

    Form.productTypeUI=productTypeUI;

    Form.supplierSelector=supplierSelector;

    Form.mserviceTypeUI=mserviceTypeUI;

    Form.orgNameUI=orgNameUI;

    Form.searchbtn=searchbtn;

    Form.orgInfoTable=orgInfoTable;

    Form.chatbtn=chatbtn;

    Form.cancelbtn=cancelbtn;

    Form.citySelector=citySelector;

    Form.fieldPanel=fieldPanel;

    Form.orderproductTypeUI=orderproductTypeUI;

    Form.ordeInfoUI=ordeInfoUI;

    Form.productTypeTab=productTypeTab;

    Form.productTypeUI=productTypeUI;

    Form.supplierSelector=supplierSelector;

    Form.moreConditionPanel=moreConditionPanel;

    Form.citySelector=citySelector;

    Form.mserviceTypeUI=mserviceTypeUI;

    Form.orgNameUI=orgNameUI;

    Form.searchbtn=searchbtn;

    Form.moreConditionPanel=moreConditionPanel;

    Form.citySelector=citySelector;

    Form.mserviceTypeUI=mserviceTypeUI;

    Form.orgNameUI=orgNameUI;

    Form.fieldPanel1=fieldPanel1;

    Form.orgInfoTable=orgInfoTable;

    Form.actionPanel=actionPanel;

    Form.chatbtn=chatbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_OrderPromotion */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_OrderPromotion */
    };

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_OrderPromotion_Cancel;

    Form.searchCustomer = org_shaolin_vogerp_ecommercial_form_OrderPromotion_searchCustomer;

    Form.promote = org_shaolin_vogerp_ecommercial_form_OrderPromotion_promote;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_OrderPromotion_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.OrderPromotion";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_OrderPromotion */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_OrderPromotion */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPromotion_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPromotion_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160325-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPromotion_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPromotion_searchCustomer(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPromotion_searchCustomer */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"searchCustomer-20160325-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPromotion_searchCustomer */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPromotion_promote(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPromotion_promote */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"promote-20160325-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPromotion_promote */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPromotion_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPromotion_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPromotion_invokeDynamicFunction */



