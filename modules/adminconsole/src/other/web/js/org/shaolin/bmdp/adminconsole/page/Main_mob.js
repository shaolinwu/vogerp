/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_Main_mob(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var userIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "userIcon"]
    });
	var startMenuIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "startMenuIcon"]
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
    });

    var vogerplogo = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "vogerplogo"]
    });

    var userForm = new org_shaolin_vogerp_commonmodel_form_UserAccount({"prefix":prefix + "userForm."});

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "vogerplogo"]
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
        ,items: []
        ,subComponents: [prefix + "treePanel",prefix + "pagePanel"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "userIcon",prefix + "userForm",prefix + "userLogout"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [userIcon,startMenuIcon,userLogout,functionTree,functionsTab,vogerplogo,userForm,topPanel,middlePanel,treePanel,pagePanel,bottomPanel]
    });

    Form.userIcon=userIcon;
	
    Form.startMenuIcon=startMenuIcon;

    Form.userLogout=userLogout;

    Form.functionTree=functionTree;

    Form.functionsTab=functionsTab;

    Form.vogerplogo=vogerplogo;

    Form.userForm=userForm;

    Form.topPanel=topPanel;

    Form.middlePanel=middlePanel;

    Form.treePanel=treePanel;

    Form.pagePanel=pagePanel;

    Form.bottomPanel=bottomPanel;

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
    
    Form.__entityName="org.shaolin.bmdp.adminconsole.page.Main";

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
                    if (node && node.a_attr.href != window.location.href+"#") {
                        //TODO the maximum tabs allowed to be opened.
                        if (this.tabCounter >= 10) {
                           alert("?????????????????????????");
                        }
						$("#div-bottomPanel-2_1").hide('slide', {direction: 'left'}, 500);
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
				    $("#div-bottomPanel-0_1").css("left", $(this.middlePanel).offset().left);
					$("#div-bottomPanel-0_1").css("top", $(this.middlePanel).offset().top);
					
                    if ($("#div-bottomPanel-0_1").css("display") == "none") {
                        $("#div-bottomPanel-0_1").show('slide', {direction: 'left'}, 1000);
                    } else {
                        $("#div-bottomPanel-0_1").hide('slide', {direction: 'left'}, 1000);
                    }
                }
                
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_showStartMenu(eventsource,event) {/* org_shaolin_bmdp_adminconsole_page_Main_mob_startMenuIcon */

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
    }/* org_shaolin_bmdp_adminconsole_page_Main_mob_startMenuIcon */

    
    function org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
				//_chunkname=org.shaolin.vogerp.commonmodel.diagram.ModularityModel&_nodename=CustomerManagement&_framename=customerManager&_framePrefix=&anchor=null
				  dPageLink = function(link){
				  	  alert(link);
				  }; 
			
			  this.tabCounter = this.functionsTab.getTabLength(); // performance counter
			  //$('#functionTree').on('select_node.jstree', function (e, data) {
			    //alert(data.selected.length);
			  //});
			}
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs */



