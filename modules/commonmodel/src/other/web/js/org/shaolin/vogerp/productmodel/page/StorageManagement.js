/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_page_StorageManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var storageTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "storageTable"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [storageTable,functionsTab]
    });

    Form.storageTable=storageTable;

    Form.functionsTab=functionsTab;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_page_StorageManagement */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_page_StorageManagement */
    };

    Form.createWarehouse = org_shaolin_vogerp_productmodel_page_StorageManagement_createWarehouse;

    Form.openWarehouse = org_shaolin_vogerp_productmodel_page_StorageManagement_openWarehouse;

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

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createWarehouse324324",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_StorageManagement_createWarehouse */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_StorageManagement_openWarehouse(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_StorageManagement_openWarehouse */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openWarehouse45332",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_StorageManagement_openWarehouse */


    function org_shaolin_vogerp_productmodel_page_StorageManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_productmodel_page_StorageManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_StorageManagement_initPageJs */


    function org_shaolin_vogerp_productmodel_page_StorageManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_productmodel_page_StorageManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_StorageManagement_finalizePageJs */



