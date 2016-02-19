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

    var matrixUI = new UIMaster.ui.matrix
    ({
        ui: elementList[prefix + "matrixUI"]
    });

    var collapseLabel1 = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "collapseLabel1"]
    });

    var userLogout = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "userLogout"]
    });

    var userFormContent = new org_shaolin_bmdp_adminconsole_form_UserAccount({"prefix":prefix + "userFormContent."});

    var userForm = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "userForm"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "collapseLabel1",prefix + "userFormContent",prefix + "userLogout"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "userForm"]
    });

    var pagePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "pagePanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "matrixUI"]
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
        ,items: [vogerplogo,userIcon,matrixUI,collapseLabel1,userLogout,userFormContent,topPanel,middlePanel,pagePanel,bottomPanel,userForm]
    });

    Form.vogerplogo=vogerplogo;

    Form.userIcon=userIcon;

    Form.matrixUI=matrixUI;

    Form.collapseLabel1=collapseLabel1;

    Form.userLogout=userLogout;

    Form.userFormContent=userFormContent;

    Form.topPanel=topPanel;

    Form.vogerplogo=vogerplogo;

    Form.userIcon=userIcon;

    Form.middlePanel=middlePanel;

    Form.pagePanel=pagePanel;

    Form.matrixUI=matrixUI;

    Form.pagePanel=pagePanel;

    Form.matrixUI=matrixUI;

    Form.bottomPanel=bottomPanel;

    Form.userForm=userForm;

    Form.collapseLabel1=collapseLabel1;

    Form.userFormContent=userFormContent;

    Form.userLogout=userLogout;

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

    Form.clickFunctionNode = org_shaolin_bmdp_adminconsole_page_Main_mob_clickFunctionNode;

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
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_Submit */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_logout(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_logout */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"logout-945221342",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_logout */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_clickFunctionNode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_clickFunctionNode */
        var o = this;
        var UIEntity = this;

				{
				    var link = eventsource;
				    var name = event;
				    showMobileFrame(link, name);
				}
				    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_clickFunctionNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo */
        var o = this;
        var UIEntity = this;

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
                    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_showStartMenu(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_showStartMenu */
        var o = this;
        var UIEntity = this;

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
                    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_showStartMenu */


    function org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			}
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs */



