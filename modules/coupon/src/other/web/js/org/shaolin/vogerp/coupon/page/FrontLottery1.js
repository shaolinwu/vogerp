/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_FrontLottery1(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var luckyImageUrlText = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "luckyImageUrlText"]
    });

    var showImages = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "showImages"]
    });

    var openId = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "openId"]
    });

    var advertTopImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advertTopImage"]
    });

    var advertBottomImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advertBottomImage"]
    });

    var rollPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "rollPanel"]
        ,items: []
        ,subComponents: []
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [luckyImageUrlText,showImages,openId,advertTopImage,advertBottomImage,rollPanel]
    });

    Form.luckyImageUrlText=luckyImageUrlText;

    Form.showImages=showImages;

    Form.openId=openId;

    Form.advertTopImage=advertTopImage;

    Form.advertBottomImage=advertBottomImage;

    Form.rollPanel=rollPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_FrontLottery1 */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_FrontLottery1 */
    };

    Form.genCoupon = org_shaolin_vogerp_coupon_page_FrontLottery1_genCoupon;

    Form.ChoiceDiscountProductLogic = org_shaolin_vogerp_coupon_page_FrontLottery1_ChoiceDiscountProductLogic;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_FrontLottery1_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_FrontLottery1_finalizePageJs;

    Form.ChoiceDiscountProductLogic_OutFunctionName = org_shaolin_vogerp_coupon_page_FrontLottery1_ChoiceDiscountProductLogic_OutFunctionName;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.FrontLottery1";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_FrontLottery1 */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_FrontLottery1 */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_FrontLottery1_genCoupon(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_FrontLottery1_genCoupon */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"genCoupon-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery1_genCoupon */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_FrontLottery1_ChoiceDiscountProductLogic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_FrontLottery1_ChoiceDiscountProductLogic */
        var o = this;
        var UIEntity = this;

        o.ChoiceDiscountProductLogic_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery1_ChoiceDiscountProductLogic */


    function org_shaolin_vogerp_coupon_page_FrontLottery1_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_FrontLottery1_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
				var windowHeight = $(window).height();
				var showImages = $("input[name='showImages']").val();
				$("#div-Form-0_0").height(windowHeight * 0.6353).show();
	        	$("#div-Form-0_2").height(windowHeight * 0.2118).show();
				$("#rollPanel").append("<img id=\"rollImage1\" src=\"/uimaster/images/coupon/front/lotteryRoll_a.gif\" /><img id=\"rollImage2\"  src=\"/uimaster/images/coupon/front/lotteryRoll_b.gif\" /><img id=\"rollImage3\"  src=\"/uimaster/images/coupon/front/lotteryRoll_c.gif\" />");
				$("#div-Form-0_1").height(windowHeight * 0.1529).css("top" , windowHeight * 0.6353 + "px").show();
				$("#div-Form-0_1 img").css({"height":windowHeight * 0.1329 + "px", "margin-top":windowHeight * 0.01 + "px"});
				
				var showIcons = showImages.split(",");
				
				setTimeout(function(){
					$("#rollImage1").attr("src", showIcons[0]);
				}, 7800);
				setTimeout(function(){
					$("#rollImage2").attr("src", showIcons[1]);
				}, 9000);
				setTimeout(function(){
					$("#rollImage3").attr("src", showIcons[2]);
				}, 10200);
				
				var othis = this;
				var eventsource = $("#rollPanel");
				setTimeout(function(){
       				UIMaster.triggerServerEvent("rollPanel","genCoupon-20160112-232035",UIMaster.getValue(eventsource),othis.__entityName);
       			}, 13000);
			}
			
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery1_initPageJs */


    function org_shaolin_vogerp_coupon_page_FrontLottery1_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_FrontLottery1_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery1_finalizePageJs */


    function org_shaolin_vogerp_coupon_page_FrontLottery1_ChoiceDiscountProductLogic_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_vogerp_coupon_page_FrontLottery1_ChoiceDiscountProductLogic_OutFunctionName */
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
        myForm._outname.value = "ChoiceDiscountProductLogic";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery1_ChoiceDiscountProductLogic_OutFunctionName */


