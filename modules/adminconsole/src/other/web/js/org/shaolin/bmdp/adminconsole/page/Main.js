/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_Main(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
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

    var userIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "userIcon"]
    });

    var userLogout = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "userLogout"]
    });

    var taskIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "taskIcon"]
    });

    var notificationIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "notificationIcon"]
    });

    var functionTree = new UIMaster.ui.webtree
    ({
        ui: elementList[prefix + "functionTree"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "currentStatusPanel"]
    });
    var currentStatusPanel = new org_shaolin_bmdp_adminconsole_form_CurrentStatus({"prefix":prefix + "currentStatusPanel."});


    var userFormContent = new org_shaolin_bmdp_adminconsole_form_UserAccount({"prefix":prefix + "userFormContent."});

    var notificationFormContent = new org_shaolin_bmdp_workflow_form_NotificationBoard({"prefix":prefix + "notificationFormContent."});

    var pagePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "pagePanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "functionsTab"]
    });

    var treePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "treePanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "functionTree"]
    });

    var middlePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "middlePanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.SlidePanel"
        ,items: []
        ,subComponents: [prefix + "treePanel",prefix + "pagePanel"]
    });

    var notificationForm = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "notificationForm"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "notificationFormContent"]
    });

    var userForm = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "userForm"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "userFormContent",prefix + "userLogout"]
    });

    var topRightPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topRightPanel"]
        ,items: []
        ,subComponents: [prefix + "userIcon",prefix + "userForm",prefix + "taskIcon",prefix + "notificationIcon",prefix + "notificationForm"]
    });

    var topMiddlePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topMiddlePanel"]
        ,items: []
        ,subComponents: [prefix + "searchContext",prefix + "searchButton"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "vogerplogo",prefix + "topMiddlePanel",prefix + "topRightPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [vogerplogo,searchContext,searchButton,userIcon,userLogout,taskIcon,notificationIcon,functionTree,functionsTab,userFormContent,notificationFormContent,topPanel,topMiddlePanel,topRightPanel,userForm,notificationForm,middlePanel,treePanel,pagePanel]
    });

    Form.vogerplogo=vogerplogo;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.userIcon=userIcon;

    Form.userLogout=userLogout;

    Form.taskIcon=taskIcon;

    Form.notificationIcon=notificationIcon;

    Form.functionTree=functionTree;

    Form.functionsTab=functionsTab;

    Form.currentStatusPanel=currentStatusPanel;

    Form.userFormContent=userFormContent;

    Form.notificationFormContent=notificationFormContent;

    Form.topPanel=topPanel;

    Form.vogerplogo=vogerplogo;

    Form.topMiddlePanel=topMiddlePanel;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.topRightPanel=topRightPanel;

    Form.userIcon=userIcon;

    Form.userForm=userForm;

    Form.userFormContent=userFormContent;

    Form.userLogout=userLogout;

    Form.taskIcon=taskIcon;

    Form.notificationIcon=notificationIcon;

    Form.notificationForm=notificationForm;

    Form.notificationFormContent=notificationFormContent;

    Form.topMiddlePanel=topMiddlePanel;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.topRightPanel=topRightPanel;

    Form.userIcon=userIcon;

    Form.userForm=userForm;

    Form.userFormContent=userFormContent;

    Form.userLogout=userLogout;

    Form.taskIcon=taskIcon;

    Form.notificationIcon=notificationIcon;

    Form.notificationForm=notificationForm;

    Form.notificationFormContent=notificationFormContent;

    Form.userForm=userForm;

    Form.userFormContent=userFormContent;

    Form.userLogout=userLogout;

    Form.notificationForm=notificationForm;

    Form.notificationFormContent=notificationFormContent;

    Form.middlePanel=middlePanel;

    Form.treePanel=treePanel;

    Form.functionTree=functionTree;

    Form.pagePanel=pagePanel;

    Form.functionsTab=functionsTab;

    Form.currentStatusPanel=currentStatusPanel;

    Form.treePanel=treePanel;

    Form.functionTree=functionTree;

    Form.pagePanel=pagePanel;

    Form.functionsTab=functionsTab;

    Form.currentStatusPanel=currentStatusPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_Main */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_Main */
    };

    Form.Submit = org_shaolin_bmdp_adminconsole_page_Main_Submit;

    Form.logout = org_shaolin_bmdp_adminconsole_page_Main_logout;

    Form.clickTreeNode = org_shaolin_bmdp_adminconsole_page_Main_clickTreeNode;

    Form.showUserInfo = org_shaolin_bmdp_adminconsole_page_Main_showUserInfo;

    Form.showNotification = org_shaolin_bmdp_adminconsole_page_Main_showNotification;

    Form.search = org_shaolin_bmdp_adminconsole_page_Main_search;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_Main_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_Main_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.bmdp.adminconsole.page.Main";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_page_Main */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_page_Main */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_Submit(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_Submit */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_Submit */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_logout(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_logout */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"logout-945221342",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_logout */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_clickTreeNode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_clickTreeNode */

				{
				    var tree = $(eventsource).jstree(true);
        var selectedId = tree.get_selected();
        var node = tree.get_node(selectedId);
        if (node && node.a_attr.href != "#") {
            //TODO the maximum tabs allowed to be opened.
            if (this.tabCounter >= 11) {
               //close the second one.
               this.functionsTab.removeTab(1);
            }
            this.functionsTab.addFrameTab(node.text, node.a_attr.href);
            this.tabCounter = this.functionsTab.getTabLength();
            sideBar("middlePanel", "treePanel", "pagePanel");
        }
				}
				
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_clickTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_showUserInfo(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_showUserInfo */

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
      
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_showUserInfo */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_showNotification(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_showNotification */

      {
          var value = $("#topPanel").width();
          var self = $("#div-topRightPanel-4_0").width();
          $("#div-topRightPanel-4_0").css("left", (value - self + 5) + "px");
          if ($("#div-topRightPanel-4_0").css("display") == "none") {
              $("#div-topRightPanel-4_0").slideDown();
          } else {
              $("#div-topRightPanel-4_0").slideUp();
          }
      }
      
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_showNotification */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_search(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_search */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"search-201506102211",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_search */


    function org_shaolin_bmdp_adminconsole_page_Main_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			  this.tabCounter = this.functionsTab.getTabLength(); // performance counter
			  //$('#functionTree').on('select_node.jstree', function (e, data) {
			    //alert(data.selected.length);
			  //});
			}
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_Main_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_finalizePageJs */



