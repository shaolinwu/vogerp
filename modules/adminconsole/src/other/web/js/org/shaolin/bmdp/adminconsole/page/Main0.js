/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_Main0(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var userIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "userIcon"]
    });

    var taskIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "taskIcon"]
    });

    var notificationIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "notificationIcon"]
    });

    var userLogout = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "userLogout"]
    });

    var vogerplogo = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "vogerplogo"]
    });

    var searchContext = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "searchContext"]
    });

    var searchButton = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "searchButton"]
    });

    var userForm = new org_shaolin_vogerp_commonmodel_form_UserAccount({"prefix":prefix + "userForm."});

    var searchPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "searchPanel"]
        ,items: []
        ,subComponents: [prefix + "vogerplogo",prefix + "searchContext",prefix + "searchButton"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,items: []
        ,subComponents: [prefix + "userIcon",prefix + "userForm",prefix + "taskIcon",prefix + "notificationIcon",prefix + "userLogout"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [userIcon,taskIcon,notificationIcon,userLogout,vogerplogo,searchContext,searchButton,userForm,topPanel,searchPanel]
    });

    Form.userIcon=userIcon;

    Form.taskIcon=taskIcon;

    Form.notificationIcon=notificationIcon;

    Form.userLogout=userLogout;

    Form.vogerplogo=vogerplogo;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.userForm=userForm;

    Form.topPanel=topPanel;

    Form.userIcon=userIcon;

    Form.userForm=userForm;

    Form.taskIcon=taskIcon;

    Form.notificationIcon=notificationIcon;

    Form.userLogout=userLogout;

    Form.searchPanel=searchPanel;

    Form.vogerplogo=vogerplogo;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_Main0 */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_Main0 */
    };

    Form.Submit = org_shaolin_bmdp_adminconsole_page_Main0_Submit;

    Form.logout = org_shaolin_bmdp_adminconsole_page_Main0_logout;

    Form.showUserInfo = org_shaolin_bmdp_adminconsole_page_Main0_showUserInfo;

    Form.search = org_shaolin_bmdp_adminconsole_page_Main0_search;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_Main0_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_Main0_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.bmdp.adminconsole.page.Main0";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_page_Main0 */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_page_Main0 */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main0_Submit(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main0_Submit */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main0_Submit */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main0_logout(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main0_logout */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"logout-945221342",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main0_logout */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main0_showUserInfo(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main0_showUserInfo */
        var o = this;
        var UIEntity = this;

      {
          var value = $("#topPanel").width();
								  var self = $("#div-topRightPanel-1_0").width();
								  $("#div-topRightPanel-1_0").css("left", (value - self + 5) + "px");
          if ($("#div-topRightPanel-1_0").css("display") == "none") {
              $("#div-topRightPanel-1_0").slideDown();
          } else {
              $("#div-topRightPanel-1_0").slideUp();
          }
      }
          }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main0_showUserInfo */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main0_search(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main0_search */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"search-201506102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main0_search */


    function org_shaolin_bmdp_adminconsole_page_Main0_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main0_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main0_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_Main0_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main0_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main0_finalizePageJs */



