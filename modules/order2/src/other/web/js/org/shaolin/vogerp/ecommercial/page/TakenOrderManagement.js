/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_TakenOrderManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "takenMOrderInfoPanel",prefix + "takenROrderInfoPanel"]
    });
    var takenMOrderInfoPanel = new org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack({"prefix":prefix + "takenMOrderInfoPanel."});

    var takenROrderInfoPanel = new org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderTrack({"prefix":prefix + "takenROrderInfoPanel."});


    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.takenMOrderInfoPanel=takenMOrderInfoPanel;

    Form.takenROrderInfoPanel=takenROrderInfoPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_TakenOrderManagement */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_TakenOrderManagement */
    };

    Form.initPageJs = org_shaolin_vogerp_ecommercial_page_TakenOrderManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_ecommercial_page_TakenOrderManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.ecommercial.page.TakenOrderManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_page_TakenOrderManagement */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_page_TakenOrderManagement */

    function org_shaolin_vogerp_ecommercial_page_TakenOrderManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_TakenOrderManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_TakenOrderManagement_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_TakenOrderManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_TakenOrderManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_TakenOrderManagement_finalizePageJs */



