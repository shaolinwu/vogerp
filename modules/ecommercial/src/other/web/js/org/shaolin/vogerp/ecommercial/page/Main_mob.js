/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_Main_mob(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var vogerplogo = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "vogerplogo"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: []
    });

    var pagePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "pagePanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: []
    });

    var middlePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "middlePanel"]
        ,items: []
        ,subComponents: [prefix + "pagePanel"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "vogerplogo"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [vogerplogo,topPanel,middlePanel,pagePanel,bottomPanel]
    });

    Form.vogerplogo=vogerplogo;

    Form.topPanel=topPanel;

    Form.middlePanel=middlePanel;

    Form.pagePanel=pagePanel;

    Form.bottomPanel=bottomPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_Main_mob */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_Main_mob */
    };

    Form.Submit = org_shaolin_vogerp_ecommercial_page_Main_mob_Submit;

    Form.showUserInfo = org_shaolin_vogerp_ecommercial_page_Main_mob_showUserInfo;

    Form.startMenuIcon = org_shaolin_vogerp_ecommercial_page_Main_mob_startMenuIcon;

    Form.initPageJs = org_shaolin_vogerp_ecommercial_page_Main_mob_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_ecommercial_page_Main_mob_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.ecommercial.page.Main_mob";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_page_Main_mob */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_page_Main_mob */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_Main_mob_Submit(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_Main_mob_Submit */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_Main_mob_Submit */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_Main_mob_showUserInfo(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_Main_mob_showUserInfo */

          {
              $("#div-bottomPanel-0_1").css("left", $(this.middlePanel).offset().left);
														$("#div-bottomPanel-0_1").css("top", $(this.middlePanel).offset().top);

              if ($("#div-bottomPanel-0_1").css("display") == "none") {
                  $("#div-bottomPanel-0_1").show('slide', {direction: 'left'}, 1000);
              } else {
                  $("#div-bottomPanel-0_1").hide('slide', {direction: 'left'}, 1000);
              }
          }
          
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_Main_mob_showUserInfo */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_Main_mob_startMenuIcon(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_Main_mob_startMenuIcon */

          {
              $("#div-bottomPanel-2_1").css("left", $(this.middlePanel).offset().left);
              $("#div-bottomPanel-2_1").css("top", $(this.middlePanel).offset().top);

              if ($("#div-bottomPanel-2_1").css("display") == "none") {
                  $("#div-bottomPanel-2_1").show('slide', {direction: 'left'}, 1000);
              } else {
                  $("#div-bottomPanel-2_1").hide('slide', {direction: 'left'}, 1000);
              }
          }
          
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_Main_mob_startMenuIcon */


    function org_shaolin_vogerp_ecommercial_page_Main_mob_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_Main_mob_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			  
			}
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_Main_mob_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_Main_mob_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_Main_mob_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_Main_mob_finalizePageJs */



