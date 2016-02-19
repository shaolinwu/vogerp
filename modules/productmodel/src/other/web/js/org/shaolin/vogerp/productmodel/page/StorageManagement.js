/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_page_StorageManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "storagePanel",prefix + "storageItemPanel"]
    });
    var storageTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "storageTable"]
    });

    var storagePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "storagePanel"]
        ,items: []
        ,subComponents: [prefix + "storageTable"]
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

    Form.storagePanel=storagePanel;

    Form.storageTable=storageTable;

    Form.storageItemPanel=storageItemPanel;

    Form.storageItemTable=storageItemTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_page_StorageManagement */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_page_StorageManagement */
    };

    Form.createWarehouse = org_shaolin_vogerp_productmodel_page_StorageManagement_createWarehouse;

    Form.openWarehouse = org_shaolin_vogerp_productmodel_page_StorageManagement_openWarehouse;

    Form.createItem = org_shaolin_vogerp_productmodel_page_StorageManagement_createItem;

    Form.openItem = org_shaolin_vogerp_productmodel_page_StorageManagement_openItem;

    Form.showMatrix = org_shaolin_vogerp_productmodel_page_StorageManagement_showMatrix;

    Form.initPageJs = org_shaolin_vogerp_productmodel_page_StorageManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_productmodel_page_StorageManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.productmodel.page.StorageManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_page_StorageManagement */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_page_StorageManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_StorageManagement_createWarehouse(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_StorageManagement_createWarehouse */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createWarehouse324324",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_StorageManagement_createWarehouse */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_StorageManagement_openWarehouse(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_StorageManagement_openWarehouse */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openWarehouse45332",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_StorageManagement_openWarehouse */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_StorageManagement_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_StorageManagement_createItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem-45332",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_StorageManagement_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_StorageManagement_openItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_StorageManagement_openItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openItem-45332",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_StorageManagement_openItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_StorageManagement_showMatrix(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_StorageManagement_showMatrix */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showMatrix-45332",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_StorageManagement_showMatrix */


    function org_shaolin_vogerp_productmodel_page_StorageManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_productmodel_page_StorageManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_StorageManagement_initPageJs */


    function org_shaolin_vogerp_productmodel_page_StorageManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_productmodel_page_StorageManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_StorageManagement_finalizePageJs */



