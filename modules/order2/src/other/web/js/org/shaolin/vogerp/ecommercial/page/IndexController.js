/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_IndexController(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var refreshBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "refreshBtn"]
    });

    var generateBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "generateBtn"]
    });

    var main = new UIMaster.ui.frame
    ({
        ui: elementList[prefix + "main"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "refreshBtn",prefix + "generateBtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [refreshBtn,generateBtn,main,actionPanel]
    });

    Form.refreshBtn=refreshBtn;

    Form.generateBtn=generateBtn;

    Form.main=main;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_IndexController */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_IndexController */
    };

    Form.initPageJs = org_shaolin_vogerp_ecommercial_page_IndexController_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_ecommercial_page_IndexController_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.ecommercial.page.IndexController";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_page_IndexController */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_page_IndexController */

    function org_shaolin_vogerp_ecommercial_page_IndexController_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_IndexController_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_IndexController_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_IndexController_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_IndexController_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_IndexController_finalizePageJs */



