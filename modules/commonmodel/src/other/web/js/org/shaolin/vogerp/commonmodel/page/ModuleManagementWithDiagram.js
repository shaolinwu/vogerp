/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "moduleInfoPanel",prefix + "topPanel"]
    });
    var allOrgsUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "allOrgsUI"]
    });

    var moduleInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "moduleInfoTable"]
    });

    var moduleInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "moduleInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "allOrgsUI",prefix + "moduleInfoTable"]
    });
    var groupFlow = new UIMaster.ui.flow
    ({
        ui: elementList[prefix + "groupFlow"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,items: []
        ,subComponents: [prefix + "groupFlow"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.moduleInfoPanel=moduleInfoPanel;

    Form.allOrgsUI=allOrgsUI;

    Form.moduleInfoTable=moduleInfoTable;

    Form.topPanel=topPanel;

    Form.groupFlow=groupFlow;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram */
    };

    Form.selectOrg = org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_selectOrg;

    Form.newModuleGroup = org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_newModuleGroup;

    Form.newModuleGroup1 = org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_newModuleGroup1;

    Form.openModuleDetail = org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_openModuleDetail;

    Form.openModuleDetail1 = org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_openModuleDetail1;

    Form.deleteModule1 = org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_deleteModule1;

    Form.deleteModuleGroup = org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_deleteModuleGroup;

    Form.saveModuleGroup = org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_saveModuleGroup;

    Form.refreshModuleGroup = org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_refreshModuleGroup;

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.ModuleManagementWithDiagram";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_selectOrg(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_selectOrg */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectOrg-201508111433",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_selectOrg */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_newModuleGroup(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_newModuleGroup */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"newModuleGroup35433",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_newModuleGroup */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_newModuleGroup1(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_newModuleGroup1 */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"newModuleGroup1-35433",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_newModuleGroup1 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_openModuleDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_openModuleDetail */

                {   
                    var constraint_result = this.groupFlow.checkSelection();
                    if (constraint_result != true && constraint_result != null) {
                        return false;
                    }
                }
                
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openModuleDetail543543",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_openModuleDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_openModuleDetail1(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_openModuleDetail1 */

                
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openModuleDetail1-543543",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_openModuleDetail1 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_deleteModule1(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_deleteModule1 */

                
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteModule1-201511-2224",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_deleteModule1 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_deleteModuleGroup(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_deleteModuleGroup */

		        {   
		            var constraint_result = this.groupFlow.checkSelection();
		            if (constraint_result != true && constraint_result != null) {
		                return false;
		            }
		        }
		        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteModule23423",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_deleteModuleGroup */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_saveModuleGroup(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_saveModuleGroup */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveModuleGroup432423",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_saveModuleGroup */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_refreshModuleGroup(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_refreshModuleGroup */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refreshModuleGroup432423",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_refreshModuleGroup */


    function org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagementWithDiagram_finalizePageJs */



