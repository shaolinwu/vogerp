/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_Main_mob(json)
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

    var searchContext = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "searchContext"]
    });

    var userIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "userIcon"]
    });

    var notificationIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "notificationIcon"]
        ,text: ""
    });

    var advImagesUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advImagesUI"]
        ,value: "/images/adv/mainpage"
        ,thumbnails: false
        ,height: 150
        ,mobheight: 150
        ,width: "100%"
        ,mode: "slider"
        ,slideshowAutostart: "true"
        ,thumbnailsFullScreen: false
        ,enableSelectSync: false
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

    var notificationFormContent = new org_shaolin_bmdp_workflow_form_NotificationBoard({"prefix":prefix + "notificationFormContent."});

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
        ,subComponents: [prefix + "collapseLabel1",prefix + "userFormContent",prefix + "userLogout"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "userForm",prefix + "notificationForm"]
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

    var searchPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "searchPanel"]
        ,items: []
        ,subComponents: [prefix + "searchContext",prefix + "userIcon",prefix + "notificationIcon"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "searchPanel",prefix + "advImagesUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [tempSentPartyIdUI,tempSessionIdUI,searchContext,userIcon,notificationIcon,advImagesUI,matrixUI,collapseLabel1,userLogout,userFormContent,notificationFormContent,topPanel,searchPanel,middlePanel,pagePanel,bottomPanel,userForm,notificationForm]
    });

    Form.tempSentPartyIdUI=tempSentPartyIdUI;

    Form.tempSessionIdUI=tempSessionIdUI;

    Form.searchContext=searchContext;

    Form.userIcon=userIcon;

    Form.notificationIcon=notificationIcon;

    Form.advImagesUI=advImagesUI;

    Form.matrixUI=matrixUI;

    Form.collapseLabel1=collapseLabel1;

    Form.userLogout=userLogout;

    Form.userFormContent=userFormContent;

    Form.notificationFormContent=notificationFormContent;

    Form.topPanel=topPanel;

    Form.searchPanel=searchPanel;

    Form.searchContext=searchContext;

    Form.userIcon=userIcon;

    Form.notificationIcon=notificationIcon;

    Form.advImagesUI=advImagesUI;

    Form.searchPanel=searchPanel;

    Form.searchContext=searchContext;

    Form.userIcon=userIcon;

    Form.notificationIcon=notificationIcon;

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

    Form.notificationForm=notificationForm;

    Form.notificationFormContent=notificationFormContent;

    Form.userForm=userForm;

    Form.collapseLabel1=collapseLabel1;

    Form.userFormContent=userFormContent;

    Form.userLogout=userLogout;

    Form.notificationForm=notificationForm;

    Form.notificationFormContent=notificationFormContent;

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

    Form.showNotification = org_shaolin_bmdp_adminconsole_page_Main_mob_showNotification;

    Form.showHelp = org_shaolin_bmdp_adminconsole_page_Main_mob_showHelp;

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


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_showNotification(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_showNotification */
        var o = this;
        var UIEntity = this;

               {
                var userInfoCell = "#div-bottomPanel-0_1";
                $(userInfoCell).css("left", $(this.middlePanel).offset().left);
                $(userInfoCell).css("top", $(this.middlePanel).offset().top);
                
                if ($(userInfoCell).css("display") == "none") {
                    $(userInfoCell).show('slide', {direction: 'left'}, 500);
                } else {
                    $(userInfoCell).hide('slide', {direction: 'left'}, 500);
                }
               }
                 }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_showNotification */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_showHelp(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_showHelp */
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
              }
              
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showHelp-201506102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_showHelp */


    function org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			   $("#pagePanel").height($(document.body).height()-180);
			   $("#pagePanel").css("overflow", "scroll");
			   
			   window.setTimeout(function(){
			      $("#pagePanel").height($(document.body).height()-180);
                  $("#pagePanel").css("overflow", "scroll");
			   }, 800);
			   
			}
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs */



