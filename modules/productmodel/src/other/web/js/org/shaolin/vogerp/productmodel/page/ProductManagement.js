/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_page_ProductManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "productInfoPanel",prefix + "storageItemPanel"]
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
    var storageItemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "storageItemTable"]
    });

    var storageItemPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "storageItemPanel"]
        ,items: []
        ,subComponents: [prefix + "storageItemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.productInfoPanel=productInfoPanel;

    Form.productInfoTable=productInfoTable;

    Form.storageItemPanel=storageItemPanel;

    Form.storageItemTable=storageItemTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_page_ProductManagement */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_page_ProductManagement */
    };

    Form.createProduct = org_shaolin_vogerp_productmodel_page_ProductManagement_createProduct;

    Form.openProductDetail = org_shaolin_vogerp_productmodel_page_ProductManagement_openProductDetail;

    Form.deleteProduct = org_shaolin_vogerp_productmodel_page_ProductManagement_deleteProduct;

    Form.openProductPrice = org_shaolin_vogerp_productmodel_page_ProductManagement_openProductPrice;

    Form.expandTreeNode = org_shaolin_vogerp_productmodel_page_ProductManagement_expandTreeNode;

    Form.openProductOverview = org_shaolin_vogerp_productmodel_page_ProductManagement_openProductOverview;

    Form.importProductFrom = org_shaolin_vogerp_productmodel_page_ProductManagement_importProductFrom;

    Form.createStorageItem = org_shaolin_vogerp_productmodel_page_ProductManagement_createStorageItem;

    Form.openStorageItem = org_shaolin_vogerp_productmodel_page_ProductManagement_openStorageItem;

    Form.disableStorageItem = org_shaolin_vogerp_productmodel_page_ProductManagement_disableStorageItem;

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

		         {
		          new UIMaster.ui.dialog({
		              dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,
		              message:'Are you sure delete this product?',
		              messageType:UIMaster.ui.dialog.Warning,
		              optionType:UIMaster.ui.dialog.YES_NO_OPTION,
		              title:'\u5220\u9664\u8282\u70B9?',
		              height:150,
		              width:300,
		              handler: function() {
		                 UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteProduct-20160502-1824",UIMaster.getValue(eventsource),o.__entityName);
		              }
		          }).open();
		          return;
		         }
		         
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteProduct-20160502-1824",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_deleteProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_openProductPrice(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_openProductPrice */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductPrice5673456",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_openProductPrice */


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


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_importProductFrom(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_importProductFrom */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"importProductFrom-20160817",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_importProductFrom */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_createStorageItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_createStorageItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createStorageItem-45332",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_createStorageItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_openStorageItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_openStorageItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openStorageItem-45332",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_openStorageItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductManagement_disableStorageItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_disableStorageItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"disableStorageItem-20160904-2344",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_disableStorageItem */


    function org_shaolin_vogerp_productmodel_page_ProductManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_initPageJs */


    function org_shaolin_vogerp_productmodel_page_ProductManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductManagement_finalizePageJs */



