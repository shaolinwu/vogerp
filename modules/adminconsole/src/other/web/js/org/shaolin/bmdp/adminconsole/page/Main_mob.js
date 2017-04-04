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

    var partyIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "partyIdUI"]
    });

    var serverURLUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "serverURLUI"]
    });

    var isVerifiedUserUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "isVerifiedUserUI"]
    });

    var advImagesUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advImagesUI"]
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

    var mainIcon = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "mainIcon"]
    });

    var orderIcon = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderIcon"]
    });

    var userIcon = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "userIcon"]
    });

    var collapseLabel1 = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "collapseLabel1"]
    });

    var userLogout = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "userLogout"]
    });

    var citySelector = new org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor({"prefix":prefix + "citySelector."});

    var userFormContent = new org_shaolin_bmdp_adminconsole_form_UserAccount({"prefix":prefix + "userFormContent."});

    var userForm = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "userForm"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "collapseLabel1",prefix + "userFormContent",prefix + "userLogout"]
    });

    var bottomPanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel1"]
        ,items: []
        ,subComponents: [prefix + "userForm"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "mainIcon",prefix + "orderIcon",prefix + "userIcon"]
    });

    var pagePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "pagePanel"]
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
        ,subComponents: [prefix + "citySelector"]
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
        ,items: [tempSentPartyIdUI,tempSessionIdUI,partyIdUI,serverURLUI,isVerifiedUserUI,advImagesUI,matrixUI,mainIcon,orderIcon,userIcon,collapseLabel1,userLogout,citySelector,userFormContent,topPanel,searchPanel,middlePanel,pagePanel,bottomPanel,bottomPanel1,userForm]
    });

    Form.tempSentPartyIdUI=tempSentPartyIdUI;

    Form.tempSessionIdUI=tempSessionIdUI;

    Form.partyIdUI=partyIdUI;

    Form.serverURLUI=serverURLUI;

    Form.isVerifiedUserUI=isVerifiedUserUI;

    Form.advImagesUI=advImagesUI;

    Form.matrixUI=matrixUI;

    Form.mainIcon=mainIcon;

    Form.orderIcon=orderIcon;

    Form.userIcon=userIcon;

    Form.collapseLabel1=collapseLabel1;

    Form.userLogout=userLogout;

    Form.citySelector=citySelector;

    Form.userFormContent=userFormContent;

    Form.topPanel=topPanel;

    Form.searchPanel=searchPanel;

    Form.citySelector=citySelector;

    Form.advImagesUI=advImagesUI;

    Form.searchPanel=searchPanel;

    Form.citySelector=citySelector;

    Form.middlePanel=middlePanel;

    Form.pagePanel=pagePanel;

    Form.matrixUI=matrixUI;

    Form.pagePanel=pagePanel;

    Form.matrixUI=matrixUI;

    Form.bottomPanel=bottomPanel;

    Form.mainIcon=mainIcon;

    Form.orderIcon=orderIcon;

    Form.userIcon=userIcon;

    Form.bottomPanel1=bottomPanel1;

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
			    
			     var o = this;
			     o.clearSelectedTab = function() {
			        $(o.bottomPanel).children().each(function(){
				        $(this).css("color","black");
				     });
			     } 
			     $(this.bottomPanel).children().each(function(){
			        $(this).click(function(){ o.clearSelectedTab(); $(this).css("color","blue"); });
			     });
			     
			     UIMaster.pageInitFunctions.push(function() {
			        // clean all cached page for going back support.
			        // check whether is read or not.
			        if (UIMaster.getCookie("/html/hints/userguide.html") == null) {
			            UIMaster.setCookie("/html/hints/userguide.html", "read");
				        $.ajax({url:AJAX_SERVICE_URL,async:true,data:{_ajaxUserEvent:"tabpane",_uiid:"Form",_valueName:"removeExcludedPage",_value:"#GLOBAL#", _framePrefix:UIMaster.getFramePrefix(), r:Math.random()}});
				        if (o.isVerifiedUserUI.value == "false") {
					        window.setTimeout(function(){
						        UIMaster.ui.mask.openHtml("/html/hints/userguide.html");
						    }, 1000);
					    }
				    }
			     });
			     this.realCounter = $("<span style='color:blue;font-weight:bold;position:absolute;'></span>");
			     $(this.matrixUI).find("[class=messageIcon]").append(this.realCounter);
			     this.nodesocket = io.connect(this.serverURLUI.value);
			     this.nodesocket.on('connect', function(e) {
		            var msg = {partyId: o.partyIdUI.value};
		            o.nodesocket.emit('register', msg);
		         });
		         this.nodesocket.on('loginSuccess', function(e) {
		            var msg = {partyId: o.partyIdUI.value};
		            o.nodesocket.emit('notifyCountHistory', msg);
		         });
		         o.nodesocket.on('notifyCount', function(e) {
		            o.realCounter.text("("+e+")");
		            o.realCounter.c = e;
		         });
		         o.nodesocket.on('notifyFrom', function(e) {
		            o.realCounter.text("("+(++o.realCounter.c)+")");
		         });
			   }
			
            /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_Main_mob */
    };

    Form.Submit = org_shaolin_bmdp_adminconsole_page_Main_mob_Submit;

    Form.Logout = org_shaolin_bmdp_adminconsole_page_Main_mob_Logout;

    Form.clickFunctionNode = org_shaolin_bmdp_adminconsole_page_Main_mob_clickFunctionNode;

    Form.showMainInfo = org_shaolin_bmdp_adminconsole_page_Main_mob_showMainInfo;

    Form.showOrderInfo = org_shaolin_bmdp_adminconsole_page_Main_mob_showOrderInfo;

    Form.showUserInfo = org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo;

    Form.showStartMenu = org_shaolin_bmdp_adminconsole_page_Main_mob_showStartMenu;

    Form.showNotification = org_shaolin_bmdp_adminconsole_page_Main_mob_showNotification;

    Form.showCityList = org_shaolin_bmdp_adminconsole_page_Main_mob_showCityList;

    Form.showHelp = org_shaolin_bmdp_adminconsole_page_Main_mob_showHelp;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs;

    Form.Logout_OutFunctionName = org_shaolin_bmdp_adminconsole_page_Main_mob_Logout_OutFunctionName;

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
    function org_shaolin_bmdp_adminconsole_page_Main_mob_Logout(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_Logout */
        var o = this;
        var UIEntity = this;

        o.Logout_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_Logout */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_clickFunctionNode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_clickFunctionNode */
        var o = this;
        var UIEntity = this;

				{
				    var link = eventsource;
				    var name = event;
				    window.location.href=link;
				    //showMobileFrame(link, name);
				}
				    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_clickFunctionNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_showMainInfo(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_showMainInfo */
        var o = this;
        var UIEntity = this;

                {
                   var link = "webflow.do?_chunkname=org.shaolin.vogerp.commonmodel.diagram.ModularityModel&_nodename=OnlineOrderList&_page=org.shaolin.vogerp.ecommercial.page.OnlineOrderList&_framename=onlineOrderList&_framePrefix=";
                   this.clickFunctionNode(link,'\u5728\u7EBF\u62A2\u5355','null');
                }
                    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_showMainInfo */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_showOrderInfo(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_showOrderInfo */
        var o = this;
        var UIEntity = this;

                {
                   var link = "webflow.do?_chunkname=org.shaolin.vogerp.commonmodel.diagram.ModularityModel&_nodename=OrderManagement&_page=org.shaolin.vogerp.ecommercial.page.OrderManagement&_framename=goldenOrderManager&_framePrefix=";
                   this.clickFunctionNode(link,'\u6211\u7684\u62A2\u5355','null');
                }
                    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_showOrderInfo */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo */
        var o = this;
        var UIEntity = this;

                {
                    var userInfoCell = "#div-bottomPanel1-0_0";
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
                    var menuCell = "#div-bottomPanel1-0_1";
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
                var userInfoCell = "#div-bottomPanel1-0_1";
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
    function org_shaolin_bmdp_adminconsole_page_Main_mob_showCityList(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_showCityList */
        var o = this;
        var UIEntity = this;

                {
                    //TODO: show city list panel.
                }
                    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_showCityList */


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
                //this.showNotification();
                
                window.open("http://120.25.197.58:8080/xwiki");
              }
                  }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_showHelp */


    function org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			   /**
			   $("#pagePanel").height($(document.body).height()-180);
			   $("#pagePanel").css("overflow", "scroll");
			   
			   window.setTimeout(function(){
			      $("#pagePanel").height($(document.body).height()-180);
                  $("#pagePanel").css("overflow", "scroll");
			   }, 800);
			   */
			}
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs */


    function org_shaolin_bmdp_adminconsole_page_Main_mob_Logout_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_Logout_OutFunctionName */
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
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_Logout_OutFunctionName */


