/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_Main_mob(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var vogerplogo = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "vogerplogo"]
    });

    var userIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "userIcon"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "currentStatusPanel"]
    });
    var currentStatusPanel = new org_shaolin_bmdp_adminconsole_form_CurrentStatus({"prefix":prefix + "currentStatusPanel."});


    var collapseLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "collapseLabel"]
    });

    var functionTree = new UIMaster.ui.webtree
    ({
        ui: elementList[prefix + "functionTree"]
    });

    var collapseLabel1 = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "collapseLabel1"]
    });

    var userLogout = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "userLogout"]
    });

    var userFormContent = new org_shaolin_vogerp_commonmodel_form_UserAccount({"prefix":prefix + "userFormContent."});

    var userForm = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "userForm"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "collapseLabel1",prefix + "userFormContent",prefix + "userLogout"]
    });

    var treePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "treePanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "collapseLabel",prefix + "functionTree"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "treePanel",prefix + "userForm"]
    });

    var pagePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "pagePanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "functionsTab"]
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
        ,subComponents: [prefix + "vogerplogo",prefix + "userIcon"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [vogerplogo,userIcon,functionsTab,collapseLabel,functionTree,collapseLabel1,userLogout,userFormContent,topPanel,middlePanel,pagePanel,bottomPanel,treePanel,userForm]
    });

    Form.vogerplogo=vogerplogo;

    Form.userIcon=userIcon;

    Form.functionsTab=functionsTab;

    Form.currentStatusPanel=currentStatusPanel;

    Form.collapseLabel=collapseLabel;

    Form.functionTree=functionTree;

    Form.collapseLabel1=collapseLabel1;

    Form.userLogout=userLogout;

    Form.userFormContent=userFormContent;

    Form.topPanel=topPanel;

    Form.vogerplogo=vogerplogo;

    Form.userIcon=userIcon;

    Form.middlePanel=middlePanel;

    Form.pagePanel=pagePanel;

    Form.functionsTab=functionsTab;

    Form.currentStatusPanel=currentStatusPanel;

    Form.pagePanel=pagePanel;

    Form.functionsTab=functionsTab;

    Form.currentStatusPanel=currentStatusPanel;

    Form.bottomPanel=bottomPanel;

    Form.treePanel=treePanel;

    Form.collapseLabel=collapseLabel;

    Form.functionTree=functionTree;

    Form.userForm=userForm;

    Form.collapseLabel1=collapseLabel1;

    Form.userFormContent=userFormContent;

    Form.userLogout=userLogout;

    Form.treePanel=treePanel;

    Form.collapseLabel=collapseLabel;

    Form.functionTree=functionTree;

    Form.userForm=userForm;

    Form.collapseLabel1=collapseLabel1;

    Form.userFormContent=userFormContent;

    Form.userLogout=userLogout;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_Main_mob */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_Main_mob */
    };

    Form.Submit = org_shaolin_bmdp_adminconsole_page_Main_mob_Submit;

    Form.logout = org_shaolin_bmdp_adminconsole_page_Main_mob_logout;

    Form.clickTreeNode = org_shaolin_bmdp_adminconsole_page_Main_mob_clickTreeNode;

    Form.showUserInfo = org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo;

    Form.showStartMenu = org_shaolin_bmdp_adminconsole_page_Main_mob_showStartMenu;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.bmdp.adminconsole.page.Main_mob";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_page_Main_mob */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_page_Main_mob */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_Submit(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_Submit */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_Submit */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_logout(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_logout */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"logout-945221342",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_logout */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_clickTreeNode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_clickTreeNode */

				{
				    var tree = $(eventsource).jstree(true);
                    var selectedId = tree.get_selected();
                    var node = tree.get_node(selectedId);
                    if (node && node.a_attr.href != "#") {
                        //TODO the maximum tabs allowed to be opened.
                        if (this.tabCounter >= 4) {
                           //close the second one.
                           this.functionsTab.removeTab(1);
                        }
                        var menuCell = "#div-bottomPanel-0_1";
                        $(menuCell).hide('slide', {direction: 'left'}, 500);
	                    this.functionsTab.addFrameTab(node.text, node.a_attr.href);
                        this.tabCounter = this.functionsTab.getTabLength();
                        sideBar("middlePanel", "treePanel", "pagePanel");
                    }
				}
				
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_clickTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo */

                {
                    var userInfoCell = "#div-bottomPanel-0_0";
                    $(userInfoCell).css("left", $(this.middlePanel).offset().left);
                    $(userInfoCell).css("top", $(this.middlePanel).offset().top);
					
                    if ($(userInfoCell).css("display") == "none") {
                        $(userInfoCell).show('slide', {direction: 'left'}, 500);
                    } else {
                        $(userInfoCell).hide('slide', {direction: 'left'}, 500);
                    }
                }
                
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_showStartMenu(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_showStartMenu */

                {
                    var menuCell = "#div-bottomPanel-0_1";
                    $(menuCell).css("left", $(this.middlePanel).offset().left);
					$(menuCell).css("top", $(this.middlePanel).offset().top);
				
                    if ($(menuCell).css("display") == "none") {
                        $(menuCell).show('slide', {direction: 'left'}, 500);
                    } else {
                        $(menuCell).hide('slide', {direction: 'left'}, 500);
                    }
                }
                
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_showStartMenu */


    function org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			  this.tabCounter = this.functionsTab.getTabLength(); // performance counter
			  //$('#functionTree').on('select_node.jstree', function (e, data) {
			    //alert(data.selected.length);
			  //});
			}
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs */



