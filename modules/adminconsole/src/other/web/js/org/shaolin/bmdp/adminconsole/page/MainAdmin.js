/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_MainAdmin(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var frame1 = new UIMaster.ui.frame
    ({
        ui: elementList[prefix + "frame1"]
    });

    var frame2 = new UIMaster.ui.frame
    ({
        ui: elementList[prefix + "frame2"]
    });

    var topPanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel1"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "frame2"]
    });

    var topPanel0 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel0"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "frame1"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,items: []
        ,subComponents: [prefix + "topPanel0",prefix + "topPanel1"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [frame1,frame2,topPanel,topPanel0,topPanel1]
    });

    Form.frame1=frame1;

    Form.frame2=frame2;

    Form.topPanel=topPanel;

    Form.topPanel0=topPanel0;

    Form.frame1=frame1;

    Form.topPanel1=topPanel1;

    Form.frame2=frame2;

    Form.topPanel0=topPanel0;

    Form.frame1=frame1;

    Form.topPanel1=topPanel1;

    Form.frame2=frame2;

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



