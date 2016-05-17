/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_ViewOrderCoupon(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var selectedCouponId = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectedCouponId"]
    });

    var openId = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "openId"]
    });

    var bottomAdvertImage = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "bottomAdvertImage"]
    });

    var logoImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "logoImage"]
    });

    var couponTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "couponTable"]
    });

    var couponPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponPanel"]
        ,items: []
        ,subComponents: [prefix + "couponTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [selectedCouponId,openId,bottomAdvertImage,logoImage,couponTable,couponPanel]
    });

    Form.selectedCouponId=selectedCouponId;

    Form.openId=openId;

    Form.bottomAdvertImage=bottomAdvertImage;

    Form.logoImage=logoImage;

    Form.couponTable=couponTable;

    Form.couponPanel=couponPanel;

    Form.couponTable=couponTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_ViewOrderCoupon */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_ViewOrderCoupon */
    };

    Form.backViewCouponLogic = org_shaolin_vogerp_coupon_page_ViewOrderCoupon_backViewCouponLogic;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_ViewOrderCoupon_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_ViewOrderCoupon_finalizePageJs;

    Form.backViewCouponLogic_OutFunctionName = org_shaolin_vogerp_coupon_page_ViewOrderCoupon_backViewCouponLogic_OutFunctionName;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.ViewOrderCoupon";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_ViewOrderCoupon */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_ViewOrderCoupon */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_ViewOrderCoupon_backViewCouponLogic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_ViewOrderCoupon_backViewCouponLogic */
        var o = this;
        var UIEntity = this;

        o.backViewCouponLogic_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_ViewOrderCoupon_backViewCouponLogic */


    function org_shaolin_vogerp_coupon_page_ViewOrderCoupon_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_ViewOrderCoupon_initPageJs */
        var constraint_result = true;
        var UIEntity = this;
{
				/* var bottomImage = $("input[name='bottomAdvertImage']").val();
				if ($("#advertBottomImage").length < 1) {
					$("#Form").append("<div id=\"advertBottomImage\" style=\"width:100%;position:fixed;bottom:-1%;\"><img style=\"width:100%\" src=\"" + bottomImage + "\"></div>");
				} */
				
				//$("#couponPanel").height($("#couponPanel").height() + $("#advertBottomImage").height());
				var winHeight = $(window).height();
				$("#couponPanel").css("min-height", winHeight - $("#div-Form-0_0").height() + "px" );
			}
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_ViewOrderCoupon_initPageJs */


    function org_shaolin_vogerp_coupon_page_ViewOrderCoupon_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_ViewOrderCoupon_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_ViewOrderCoupon_finalizePageJs */


    function org_shaolin_vogerp_coupon_page_ViewOrderCoupon_backViewCouponLogic_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_vogerp_coupon_page_ViewOrderCoupon_backViewCouponLogic_OutFunctionName */
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
        myForm._outname.value = "backViewCouponLogic";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_ViewOrderCoupon_backViewCouponLogic_OutFunctionName */


