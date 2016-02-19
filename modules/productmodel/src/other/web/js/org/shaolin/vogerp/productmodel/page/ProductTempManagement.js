/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_page_ProductTempManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "productInfoPanel",prefix + "productTreePanel"]
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

    Form.productTreePanel=productTreePanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_page_ProductTempManagement */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_page_ProductTempManagement */
    };

    Form.createProduct = org_shaolin_vogerp_productmodel_page_ProductTempManagement_createProduct;

    Form.openProductDetail = org_shaolin_vogerp_productmodel_page_ProductTempManagement_openProductDetail;

    Form.deleteProduct = org_shaolin_vogerp_productmodel_page_ProductTempManagement_deleteProduct;

    Form.expandTreeNode = org_shaolin_vogerp_productmodel_page_ProductTempManagement_expandTreeNode;

    Form.openProductOverview = org_shaolin_vogerp_productmodel_page_ProductTempManagement_openProductOverview;

    Form.initPageJs = org_shaolin_vogerp_productmodel_page_ProductTempManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_productmodel_page_ProductTempManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.productmodel.page.ProductTempManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_page_ProductTempManagement */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_page_ProductTempManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductTempManagement_createProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductTempManagement_createProduct */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankproductInfoPanel3413",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductTempManagement_createProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductTempManagement_openProductDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductTempManagement_openProductDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showproductInfoPanel543542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductTempManagement_openProductDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductTempManagement_deleteProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductTempManagement_deleteProduct */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductTempManagement_deleteProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductTempManagement_expandTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductTempManagement_expandTreeNode */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"expandTreeNode3534543",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductTempManagement_expandTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductTempManagement_openProductOverview(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductTempManagement_openProductOverview */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductOverview-20151117",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductTempManagement_openProductOverview */


    function org_shaolin_vogerp_productmodel_page_ProductTempManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductTempManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductTempManagement_initPageJs */


    function org_shaolin_vogerp_productmodel_page_ProductTempManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductTempManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductTempManagement_finalizePageJs */



