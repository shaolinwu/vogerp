/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_FrontLottery(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var lotteryLogoImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "lotteryLogoImage"]
    });

    var advertTopImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advertTopImage"]
    });

    var openId = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "openId"]
    });

    var phoneNumText = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "phoneNumText"]
    });

    var luckyImageUrlText = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "luckyImageUrlText"]
    });

    var footerText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "footerText"]
    });

    var advertBottomImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advertBottomImage"]
    });

    var lotteryForm = new org_shaolin_vogerp_coupon_form_LotteryForm({"prefix":prefix + "lotteryForm."});

    var lotteryPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "lotteryPanel"]
        ,items: []
        ,subComponents: [prefix + "openId",prefix + "phoneNumText",prefix + "luckyImageUrlText",prefix + "lotteryForm"]
    });

    var leftPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "leftPanel"]
        ,items: []
        ,subComponents: [prefix + "lotteryLogoImage",prefix + "advertTopImage",prefix + "lotteryPanel",prefix + "footerText",prefix + "advertBottomImage"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [lotteryLogoImage,advertTopImage,openId,phoneNumText,luckyImageUrlText,footerText,advertBottomImage,lotteryForm,leftPanel,lotteryPanel]
    });

    Form.lotteryLogoImage=lotteryLogoImage;

    Form.advertTopImage=advertTopImage;

    Form.openId=openId;

    Form.phoneNumText=phoneNumText;

    Form.luckyImageUrlText=luckyImageUrlText;

    Form.footerText=footerText;

    Form.advertBottomImage=advertBottomImage;

    Form.lotteryForm=lotteryForm;

    Form.leftPanel=leftPanel;

    Form.lotteryLogoImage=lotteryLogoImage;

    Form.advertTopImage=advertTopImage;

    Form.lotteryPanel=lotteryPanel;

    Form.openId=openId;

    Form.phoneNumText=phoneNumText;

    Form.luckyImageUrlText=luckyImageUrlText;

    Form.lotteryForm=lotteryForm;

    Form.footerText=footerText;

    Form.advertBottomImage=advertBottomImage;

    Form.lotteryPanel=lotteryPanel;

    Form.openId=openId;

    Form.phoneNumText=phoneNumText;

    Form.luckyImageUrlText=luckyImageUrlText;

    Form.lotteryForm=lotteryForm;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_FrontLottery */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_FrontLottery */
    };

    Form.openCurtainFunc = org_shaolin_vogerp_coupon_page_FrontLottery_openCurtainFunc;

    Form.ChoiceDiscountProductLogic = org_shaolin_vogerp_coupon_page_FrontLottery_ChoiceDiscountProductLogic;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_FrontLottery_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_FrontLottery_finalizePageJs;

    Form.ChoiceDiscountProductLogic_OutFunctionName = org_shaolin_vogerp_coupon_page_FrontLottery_ChoiceDiscountProductLogic_OutFunctionName;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.FrontLottery";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_FrontLottery */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_FrontLottery */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_FrontLottery_openCurtainFunc(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_FrontLottery_openCurtainFunc */
        var o = this;
        var UIEntity = this;

					{
						var cName = $("#div-Form-0_0").attr("class");
						$("#div-Form-0_0").attr("class", cName + " rollCurtain");
						//$("#div-Form-0_0").animate({"left" : "-100%"}, 1000);
						setTimeout(function(){
							$("#div-Form-0_0").css("display", "none");
						}, 1000);
					}    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery_openCurtainFunc */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_FrontLottery_ChoiceDiscountProductLogic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_FrontLottery_ChoiceDiscountProductLogic */
        var o = this;
        var UIEntity = this;

        o.ChoiceDiscountProductLogic_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery_ChoiceDiscountProductLogic */


    function org_shaolin_vogerp_coupon_page_FrontLottery_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_FrontLottery_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery_initPageJs */


    function org_shaolin_vogerp_coupon_page_FrontLottery_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_FrontLottery_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery_finalizePageJs */


    function org_shaolin_vogerp_coupon_page_FrontLottery_ChoiceDiscountProductLogic_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_vogerp_coupon_page_FrontLottery_ChoiceDiscountProductLogic_OutFunctionName */
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
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery_ChoiceDiscountProductLogic_OutFunctionName */


