/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_AboutTeam(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var textUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "textUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [textUI]
    });

    Form.textUI=textUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_AboutTeam */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_AboutTeam */
    };

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_AboutTeam_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_AboutTeam_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.AboutTeam";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_AboutTeam */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_AboutTeam */

    function org_shaolin_vogerp_commonmodel_page_AboutTeam_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_AboutTeam_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_AboutTeam_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_AboutTeam_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_AboutTeam_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_AboutTeam_finalizePageJs */



