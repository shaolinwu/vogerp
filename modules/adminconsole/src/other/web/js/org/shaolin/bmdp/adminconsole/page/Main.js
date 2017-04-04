/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_Main(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var tempSentPartyIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "tempSentPartyIdUI"]
    });

    var tempSessionIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "tempSessionIdUI"]
    });

    var vogerplogo = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "vogerplogo"]
        ,captureScreen: true
    });

    var searchContext = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "searchContext"]
        ,placeholder: "?????????"
    });

    var searchButton = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "searchButton"]
    });

    var userIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "userIcon"]
        ,text: "????"
    });

    var userLogout = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "userLogout"]
    });

    var taskIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "taskIcon"]
        ,text: "??"
    });

    var notificationIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "notificationIcon"]
        ,text: "??"
    });

    var helpIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "helpIcon"]
        ,text: "??"
    });

    var functionTree = new UIMaster.ui.webtree
    ({
        ui: elementList[prefix + "functionTree"]
        ,editable: false
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "currentStatusPanel"]
    });

    var bottomPanelInfo = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottomPanelInfo"]
    });

    var citySelector = new org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor({"prefix":prefix + "citySelector."});

    var userFormContent = new org_shaolin_bmdp_adminconsole_form_UserAccount({"prefix":prefix + "userFormContent."});

    var notificationFormContent = new org_shaolin_bmdp_workflow_form_NotificationBoard({"prefix":prefix + "notificationFormContent."});

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "bottomPanelInfo"]
    });

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
        ,subComponents: [prefix + "citySelector",prefix + "userIcon",prefix + "userForm",prefix + "taskIcon",prefix + "notificationIcon",prefix + "helpIcon",prefix + "notificationForm"]
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
        ,items: [tempSentPartyIdUI,tempSessionIdUI,vogerplogo,searchContext,searchButton,userIcon,userLogout,taskIcon,notificationIcon,helpIcon,functionTree,functionsTab,bottomPanelInfo,citySelector,userFormContent,notificationFormContent,topPanel,topMiddlePanel,topRightPanel,userForm,notificationForm,middlePanel,treePanel,pagePanel,bottomPanel]
    });

    Form.tempSentPartyIdUI=tempSentPartyIdUI;

    Form.tempSessionIdUI=tempSessionIdUI;

    Form.vogerplogo=vogerplogo;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.userIcon=userIcon;

    Form.userLogout=userLogout;

    Form.taskIcon=taskIcon;

    Form.notificationIcon=notificationIcon;

    Form.helpIcon=helpIcon;

    Form.functionTree=functionTree;

    Form.functionsTab=functionsTab;

    Form.bottomPanelInfo=bottomPanelInfo;

    Form.citySelector=citySelector;

    Form.userFormContent=userFormContent;

    Form.notificationFormContent=notificationFormContent;

    Form.topPanel=topPanel;

    Form.vogerplogo=vogerplogo;

    Form.topMiddlePanel=topMiddlePanel;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.topRightPanel=topRightPanel;

    Form.citySelector=citySelector;

    Form.userIcon=userIcon;

    Form.userForm=userForm;

    Form.userFormContent=userFormContent;

    Form.userLogout=userLogout;

    Form.taskIcon=taskIcon;

    Form.notificationIcon=notificationIcon;

    Form.helpIcon=helpIcon;

    Form.notificationForm=notificationForm;

    Form.notificationFormContent=notificationFormContent;

    Form.topMiddlePanel=topMiddlePanel;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.topRightPanel=topRightPanel;

    Form.citySelector=citySelector;

    Form.userIcon=userIcon;

    Form.userForm=userForm;

    Form.userFormContent=userFormContent;

    Form.userLogout=userLogout;

    Form.taskIcon=taskIcon;

    Form.notificationIcon=notificationIcon;

    Form.helpIcon=helpIcon;

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

    Form.treePanel=treePanel;

    Form.functionTree=functionTree;

    Form.pagePanel=pagePanel;

    Form.functionsTab=functionsTab;

    Form.bottomPanel=bottomPanel;

    Form.bottomPanelInfo=bottomPanelInfo;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_Main */

        
		        { 
		            // notify user open up the GPS.
		            if(navigator.geolocation){
				        navigator.geolocation.getCurrentPosition(
			                function(p){
			                },
			                function(e){
			                }
				        );
				    }
		        }
		    
            /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_Main */
    };

    Form.Submit = org_shaolin_bmdp_adminconsole_page_Main_Submit;

    Form.Logout = org_shaolin_bmdp_adminconsole_page_Main_Logout;

    Form.clickTreeNode = org_shaolin_bmdp_adminconsole_page_Main_clickTreeNode;

    Form.dblclickTreeNode = org_shaolin_bmdp_adminconsole_page_Main_dblclickTreeNode;

    Form.showUserInfo = org_shaolin_bmdp_adminconsole_page_Main_showUserInfo;

    Form.showNotification = org_shaolin_bmdp_adminconsole_page_Main_showNotification;

    Form.search = org_shaolin_bmdp_adminconsole_page_Main_search;

    Form.showHelp = org_shaolin_bmdp_adminconsole_page_Main_showHelp;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_Main_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_Main_finalizePageJs;

    Form.Logout_OutFunctionName = org_shaolin_bmdp_adminconsole_page_Main_Logout_OutFunctionName;

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
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_Submit */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_Logout(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_Logout */
        var o = this;
        var UIEntity = this;

        o.Logout_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_Logout */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_clickTreeNode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_clickTreeNode */
        var o = this;
        var UIEntity = this;

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
            if (this.functionTree.clickUiPanel && this.functionTree.clickUiPanel != null && this.functionTree.clickUiPanel != "") {
               this.functionsTab.addFrameTab(node.text, node.a_attr.href+"&_clickRemembered="+this.functionTree.clickUiPanel);
            } else {
               this.functionsTab.addFrameTab(node.text, node.a_attr.href);
            }
            this.tabCounter = this.functionsTab.getTabLength();
            sideBar("middlePanel", "treePanel", "pagePanel");
        }
				}
				    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_clickTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_dblclickTreeNode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_dblclickTreeNode */
        var o = this;
        var UIEntity = this;

		        {   
		            this.clickTreeNode(eventsource,event);
		        }
		            }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_dblclickTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_showUserInfo(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_showUserInfo */
        var o = this;
        var UIEntity = this;

      {
          var userPanelId = $("#div-topRightPanel-2_0");
          var value = $("#topPanel").width();
          var self = userPanelId.width();
          userPanelId.css("left", (value - self + 5) + "px");
          if (userPanelId.css("display") == "none") {
              userPanelId.slideDown("fast");
          } else {
              userPanelId.slideUp("fast");
          }
      }
          }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_showUserInfo */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_showNotification(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_showNotification */
        var o = this;
        var UIEntity = this;

      {
          var notifiPanelId = $("#div-topRightPanel-5_0");
          var value = $("#topPanel").width();
          var self = notifiPanelId.width();
          notifiPanelId.css("left", (value - self + 5) + "px");
          if (notifiPanelId.css("display") == "none") {
              notifiPanelId.slideDown("fast");
          } else {
              notifiPanelId.slideUp("fast");
          }
      }
          }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_showNotification */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_search(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_search */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"search-201506102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_search */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_showHelp(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_showHelp */
        var o = this;
        var UIEntity = this;

		      {
		        var toPartyId = parseInt(event);
		        if (!isNaN(toPartyId)) {
		           this.tempSentPartyIdUI.setValue(toPartyId);
		        }
		        if (arguments.length > 2) {
                   this.tempSessionIdUI.setValue(arguments[2]);
                }
		        if ($("#div-topRightPanel-5_0").css("display") == "block") {
		            $("#div-topRightPanel-5_0").slideUp("fast");
		        }
		        
		        window.open("http://120.25.197.58:8080/xwiki");
		      }
		          }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_showHelp */


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


    function org_shaolin_bmdp_adminconsole_page_Main_Logout_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_Logout_OutFunctionName */
        var constraint_result = true;
        var myForm;
        if (this.formName != undefined)
        {
            myForm = document.forms[this.formName];
        }
        else
        {
            var p = this.Form.parentNode;
            while(p.tagName != "FORM")
                p = p.parentNode;
            myForm = p;//document.forms[0];
        }

        var UIEntity = this;
{
            // hello, my first js.
            }        
        myForm._outname.value = "Logout";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_Logout_OutFunctionName */


