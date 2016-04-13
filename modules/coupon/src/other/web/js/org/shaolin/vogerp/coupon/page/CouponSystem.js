/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_CouponSystem(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var systemStatusText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "systemStatusText"]
    });

    var maintainBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "maintainBtn"]
    });

    var coupouSystemPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "coupouSystemPanel"]
        ,items: []
        ,subComponents: [prefix + "systemStatusText",prefix + "maintainBtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [systemStatusText,maintainBtn,coupouSystemPanel]
    });

    Form.systemStatusText=systemStatusText;

    Form.maintainBtn=maintainBtn;

    Form.coupouSystemPanel=coupouSystemPanel;

    Form.systemStatusText=systemStatusText;

    Form.maintainBtn=maintainBtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_CouponSystem */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_CouponSystem */
    };

    Form.maintainSystem = org_shaolin_vogerp_coupon_page_CouponSystem_maintainSystem;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_CouponSystem_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_CouponSystem_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.CouponSystem";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_CouponSystem */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_CouponSystem */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponSystem_maintainSystem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSystem_maintainSystem */
        var o = this;
        var UIEntity = this;

					{
						if ("维护系统" == $("input[name='maintainBtn']").val()) {
							$("input[name='maintainBtn']").val("恢复系统");
						} else {
							$("input[name='maintainBtn']").val("维护系统");
						}
					}
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"maintainSystem-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSystem_maintainSystem */


    function org_shaolin_vogerp_coupon_page_CouponSystem_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSystem_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSystem_initPageJs */


    function org_shaolin_vogerp_coupon_page_CouponSystem_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSystem_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSystem_finalizePageJs */



