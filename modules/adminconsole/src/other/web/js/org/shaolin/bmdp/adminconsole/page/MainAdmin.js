/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_MainAdmin(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var welcomeLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "welcomeLabel"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,items: []
        ,subComponents: [prefix + "welcomeLabel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [welcomeLabel,topPanel]
    });

    Form.welcomeLabel=welcomeLabel;

    Form.topPanel=topPanel;

    Form.welcomeLabel=welcomeLabel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_MainAdmin */

        
			   {
			     // notify user open up the GPS.
			   }
			
            /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_MainAdmin */
    };

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_MainAdmin_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_MainAdmin_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.bmdp.adminconsole.page.MainAdmin";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_page_MainAdmin */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_page_MainAdmin */

    function org_shaolin_bmdp_adminconsole_page_MainAdmin_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_MainAdmin_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			}
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_MainAdmin_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_MainAdmin_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_MainAdmin_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_MainAdmin_finalizePageJs */



