/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_Login_mob(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var vogerplogo = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "vogerplogo"]
    });

    var latitudeInfo = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "latitudeInfo"]
    });

    var longitudeInfo = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "longitudeInfo"]
    });

    var errorInfo = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "errorInfo"]
        ,needAjaxSupport: true
    });

    var userName = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "userName"]
    });

    var password = new UIMaster.ui.passwordfield
    ({
        ui: elementList[prefix + "password"]
    });

    var veriCodeQuestion = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "veriCodeQuestion"]
        ,needAjaxSupport: true
    });

    var veriCode = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "veriCode"]
    });

    var loginBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "loginBtn"]
    });

    var registerBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "registerBtn"]
    });

    var forgetPwdBtn = new UIMaster.ui.link
    ({
        ui: elementList[prefix + "forgetPwdBtn"]
    });

    var bottomPanelInfo = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottomPanelInfo"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "bottomPanelInfo"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "loginBtn",prefix + "registerBtn",prefix + "forgetPwdBtn"]
    });

    var loginPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "loginPanel"]
        ,items: []
        ,subComponents: [prefix + "latitudeInfo",prefix + "longitudeInfo",prefix + "errorInfo",prefix + "userName",prefix + "password",prefix + "veriCodeQuestion",prefix + "veriCode",prefix + "actionPanel"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,items: []
        ,subComponents: [prefix + "vogerplogo"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [vogerplogo,latitudeInfo,longitudeInfo,errorInfo,userName,password,veriCodeQuestion,veriCode,loginBtn,registerBtn,forgetPwdBtn,bottomPanelInfo,topPanel,loginPanel,actionPanel,bottomPanel]
    });

    Form.vogerplogo=vogerplogo;

    Form.latitudeInfo=latitudeInfo;

    Form.longitudeInfo=longitudeInfo;

    Form.errorInfo=errorInfo;

    Form.userName=userName;

    Form.password=password;

    Form.veriCodeQuestion=veriCodeQuestion;

    Form.veriCode=veriCode;

    Form.loginBtn=loginBtn;

    Form.registerBtn=registerBtn;

    Form.forgetPwdBtn=forgetPwdBtn;

    Form.bottomPanelInfo=bottomPanelInfo;

    Form.topPanel=topPanel;

    Form.vogerplogo=vogerplogo;

    Form.loginPanel=loginPanel;

    Form.latitudeInfo=latitudeInfo;

    Form.longitudeInfo=longitudeInfo;

    Form.errorInfo=errorInfo;

    Form.userName=userName;

    Form.password=password;

    Form.veriCodeQuestion=veriCodeQuestion;

    Form.veriCode=veriCode;

    Form.actionPanel=actionPanel;

    Form.loginBtn=loginBtn;

    Form.registerBtn=registerBtn;

    Form.forgetPwdBtn=forgetPwdBtn;

    Form.actionPanel=actionPanel;

    Form.loginBtn=loginBtn;

    Form.registerBtn=registerBtn;

    Form.forgetPwdBtn=forgetPwdBtn;

    Form.bottomPanel=bottomPanel;

    Form.bottomPanelInfo=bottomPanelInfo;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_Login_mob */

        
		        { 
		            // get user cookie.
		            if (this.errorInfo.value == "") {
		               this.veriCode.setValue("a");
		               $(this.veriCode).parent().parent().css("display", "none");
		               $(this.veriCodeQuestion).parent().parent().parent().css("display", "none");
		            }
		            var tempUserName = UIMaster.getCookie("userName");
		            if (tempUserName != null) {
		               this.userName.setValue(tempUserName);
		            }
		            var tempUserPda = UIMaster.getCookie("userPDA");
                    if (tempUserPda != null) {
                       this.password.setValue(tempUserPda);
                    }
		            // notify user open up the GPS.
		            $("<div style='display:none;' id='mapcontainer'><div>").appendTo($(document.forms[0]));
				    var map = new AMap.Map('mapcontainer');
				    map.plugin('AMap.Geolocation', function() {
				        var geolocation = new AMap.Geolocation({
				            enableHighAccuracy: true,
				            timeout: 10000,
				            buttonOffset: new AMap.Pixel(10, 20),
				            zoomToAccuracy: false,
				            buttonPosition:'RB'
				        });
				        map.addControl(geolocation);
				        geolocation.getCurrentPosition();
				        AMap.event.addListener(geolocation, 'complete', onComplete);
				        AMap.event.addListener(geolocation, 'error', onError);
				    });
				    function onComplete(data) {
				        longitudeInfo.setValue(data.position.getLng());
			            latitudeInfo.setValue(data.position.getLat());
			            console.log("latitudeInfo: " + data.position.getLng() + ", longitudeInfo: " + data.position.getLat());
				    }
				    function onError(data) {
				        console.log("geolocation fails: " + data.message);
				    }
		        }
		    
            /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_Login_mob */
    };

    Form.genVerifiCode = org_shaolin_bmdp_adminconsole_page_Login_mob_genVerifiCode;

    Form.verifiCode = org_shaolin_bmdp_adminconsole_page_Login_mob_verifiCode;

    Form.showVerficationCode = org_shaolin_bmdp_adminconsole_page_Login_mob_showVerficationCode;

    Form.forgetPassword = org_shaolin_bmdp_adminconsole_page_Login_mob_forgetPassword;

    Form.Login = org_shaolin_bmdp_adminconsole_page_Login_mob_Login;

    Form.Register = org_shaolin_bmdp_adminconsole_page_Login_mob_Register;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_Login_mob_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_Login_mob_finalizePageJs;

    Form.Submit_OutFunctionName = org_shaolin_bmdp_adminconsole_page_Login_mob_Submit_OutFunctionName;

    Form.Register_OutFunctionName = org_shaolin_bmdp_adminconsole_page_Login_mob_Register_OutFunctionName;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.bmdp.adminconsole.page.Login_mob";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_page_Login_mob */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_page_Login_mob */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Login_mob_genVerifiCode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_genVerifiCode */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"genVerifiCode-20151227-1839",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_genVerifiCode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Login_mob_verifiCode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_verifiCode */
        var o = this;
        var UIEntity = this;

		        {   
		            var constraint_result = this.Form.validate();
		            if (constraint_result != true && constraint_result != null) {
		                return false;
		            }
		        }
		        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"verifiCode-20151227-1839",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_verifiCode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Login_mob_showVerficationCode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_showVerficationCode */
        var o = this;
        var UIEntity = this;

		      {
		         $(this.veriCode).parent().parent().css("display", "block");
		         $(this.veriCodeQuestion).parent().parent().parent().css("display", "block");
		      }
		          }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_showVerficationCode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Login_mob_forgetPassword(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_forgetPassword */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"forgetPassword-20170125-1849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_forgetPassword */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Login_mob_Login(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_Login */
        var o = this;
        var UIEntity = this;

		      {
		        UIMaster.setCookie("userPDA", this.password.getValue());
		        UIMaster.setCookie("userName", this.userName.getValue());
		        
		        this.password.setValue(md5(this.password.getValue()).toUpperCase());
		      }
		      
        o.Submit_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_Login */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Login_mob_Register(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_Register */
        var o = this;
        var UIEntity = this;

        o.Register_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_Register */


    function org_shaolin_bmdp_adminconsole_page_Login_mob_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_initPageJs */
        var constraint_result = true;
        var UIEntity = this;
{
			// hello, my first js.
			}
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_Login_mob_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_finalizePageJs */


    function org_shaolin_bmdp_adminconsole_page_Login_mob_Submit_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_Submit_OutFunctionName */
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

        constraint_result = this.Form.validate();
{
			// hello, my first js.
			}        
        myForm._outname.value = "Submit";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_Submit_OutFunctionName */

    function org_shaolin_bmdp_adminconsole_page_Login_mob_Register_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Login_mob_Register_OutFunctionName */
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
            if (true) {
              window.location.href="/uimaster/webflow.do?_chunkname=org.shaolin.bmdp.adminconsole.diagram.LoginAuthentication&_nodename=Registration";
              return;
            }
            }        
        myForm._outname.value = "Register";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Login_mob_Register_OutFunctionName */


