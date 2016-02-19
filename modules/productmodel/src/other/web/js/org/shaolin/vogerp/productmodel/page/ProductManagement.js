/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_page_ProductManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "productInfoPanel",prefix + "productListPanel",prefix + "productTreePanel"]
    });
    var productInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "productInfoTable"]
    });

    var productInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "productInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "productInfoTable"]
    });
    var productListPanel = new org_shaolin_vogerp_productmodel_form_ProductListOverview({"prefix":prefix + "productListPanel."});

    var productTreePanel = new org_shaolin_vogerp_commonmodel_form_CEHierarchy({"prefix":prefix + "productTreePanel."});


    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.productInfoPanel=productInfoPanel;

    Form.productInfoTable=productInfoTable;

    Form.productListPanel=productListPanel;

    Form.productTreePanel=productTreePanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_page_ProductManagement */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_page_ProductManagement */
    };

    Form.createProduct = org_shaolin_vogerp_productmodel_page_ProductManagement_createProduct;

    Form.openProductDetail = org_shaolin_vogerp_productmodel_page_ProductManagement_openProductDetail;

    Form.deleteProduct = org_shaolin_vogerp_productmodel_page_ProductManagement_deleteProduct;

    Form.openProductSupplier = org_shaolin_vogerp_productmodel_page_ProductManagement_openProductSupplier;

    Form.openProductPrice = org_shaolin_vogerp_productmodel_page_ProductManagement_openProductPrice;

    Form.openProductCost = org_shaolin_vogerp_productmodel_page_ProductManagement_openProductCost;

    Form.expandTreeNode = org_shaolin_vogerp_productmodel_page_ProductManagement_expandTreeNode;

    Form.openProductOverview = org_shaolin_vogerp_productmodel_page_ProductManagement_openProductOverview;

    Form.initPageJs = org_shaolin_vogerp_productmodel_page_ProductManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_productmodel_page_ProductManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.productmodel.page.ProductManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_page_ProductManagement */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_page_ProductManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_createProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_createProduct */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankproductInfoPanel3413",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_createProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_openProductDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_openProductDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showproductInfoPanel543542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_openProductDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_deleteProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_deleteProduct */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_deleteProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_openProductSupplier(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_openProductSupplier */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductSupplier5673456",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_openProductSupplier */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_openProductPrice(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_openProductPrice */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductPrice5673456",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_openProductPrice */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_openProductCost(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_openProductCost */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductCost5673456",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_openProductCost */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_expandTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_expandTreeNode */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"expandTreeNode3534543",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_expandTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_openProductOverview(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_openProductOverview */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductOverview-20151117",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_openProductOverview */


    function org_shaolin_vogerp_productmodel_page_ProductManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_initPageJs */


    function org_shaolin_vogerp_productmodel_page_ProductManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_finalizePageJs */



