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


    var userForm = new org_shaolin_vogerp_commonmodel_form_UserAccount({"prefix":prefix + "userForm."});

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

    var topRightPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topRightPanel"]
        ,items: []
        ,subComponents: [prefix + "userIcon",prefix + "userForm",prefix + "taskIcon",prefix + "notificationIcon",prefix + "userLogout"]
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
        ,items: [vogerplogo,searchContext,searchButton,userIcon,taskIcon,notificationIcon,userLogout,functionTree,functionsTab,userForm,topPanel,topMiddlePanel,topRightPanel,middlePanel,treePanel,pagePanel]
    });

    Form.vogerplogo=vogerplogo;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.userIcon=userIcon;

    Form.taskIcon=taskIcon;

    Form.notificationIcon=notificationIcon;

    Form.userLogout=userLogout;

    Form.functionTree=functionTree;

    Form.functionsTab=functionsTab;

    Form.currentStatusPanel=currentStatusPanel;

    Form.userForm=userForm;

    Form.topPanel=topPanel;

    Form.vogerplogo=vogerplogo;

    Form.topMiddlePanel=topMiddlePanel;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.topRightPanel=topRightPanel;

    Form.userIcon=userIcon;

    Form.userForm=userForm;

    Form.taskIcon=taskIcon;

    Form.notificationIcon=notificationIcon;

    Form.userLogout=userLogout;

    Form.topMiddlePanel=topMiddlePanel;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.topRightPanel=topRightPanel;

    Form.userIcon=userIcon;

    Form.userForm=userForm;

    Form.taskIcon=taskIcon;

    Form.notificationIcon=notificationIcon;

    Form.userLogout=userLogout;

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
        if (node && node.a_attr.href != window.location.href+"#") {
            //TODO the maximum tabs allowed to be opened.
            if (this.tabCounter >= 10) {
               alert("Please close some of unused tab pages. the maximum pages is 10.");
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
			  var value = $("#topPanel").width();
			  var self = $("#div-topPanel-1_0").width();
			  $("#div-topPanel-1_0").css("margin-left", (value/2 - self/1.5) + "px");
			}
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_Main_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_finalizePageJs */



