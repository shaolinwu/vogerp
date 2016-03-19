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

    var footerText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "footerText"]
    });

    var advertBottomImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advertBottomImage"]
    });

    var advertLeftImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advertLeftImage"]
    });

    var advertRightImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advertRightImage"]
    });

    var curtainImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "curtainImage"]
    });

    var lotteryForm = new org_shaolin_vogerp_coupon_form_LotteryForm({"prefix":prefix + "lotteryForm."});

    var curtainPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "curtainPanel"]
        ,items: []
        ,subComponents: [prefix + "curtainImage"]
    });

    var lotteryPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "lotteryPanel"]
        ,items: []
        ,subComponents: [prefix + "lotteryForm"]
    });

    var leftPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "leftPanel"]
        ,items: []
        ,subComponents: [prefix + "lotteryLogoImage",prefix + "advertTopImage",prefix + "lotteryPanel",prefix + "footerText",prefix + "advertBottomImage",prefix + "advertLeftImage",prefix + "advertRightImage"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [lotteryLogoImage,advertTopImage,footerText,advertBottomImage,advertLeftImage,advertRightImage,curtainImage,lotteryForm,leftPanel,lotteryPanel,curtainPanel]
    });

    Form.lotteryLogoImage=lotteryLogoImage;

    Form.advertTopImage=advertTopImage;

    Form.footerText=footerText;

    Form.advertBottomImage=advertBottomImage;

    Form.advertLeftImage=advertLeftImage;

    Form.advertRightImage=advertRightImage;

    Form.curtainImage=curtainImage;

    Form.lotteryForm=lotteryForm;

    Form.leftPanel=leftPanel;

    Form.lotteryLogoImage=lotteryLogoImage;

    Form.advertTopImage=advertTopImage;

    Form.lotteryPanel=lotteryPanel;

    Form.lotteryForm=lotteryForm;

    Form.footerText=footerText;

    Form.advertBottomImage=advertBottomImage;

    Form.advertLeftImage=advertLeftImage;

    Form.advertRightImage=advertRightImage;

    Form.lotteryPanel=lotteryPanel;

    Form.lotteryForm=lotteryForm;

    Form.curtainPanel=curtainPanel;

    Form.curtainImage=curtainImage;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_FrontLottery */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_FrontLottery */
    };

    Form.openCurtainFunc = org_shaolin_vogerp_coupon_page_FrontLottery_openCurtainFunc;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_FrontLottery_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_FrontLottery_finalizePageJs;

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
						$("#div-Form-0_1").animate({"left" : "-100%"}, 1000);
						setTimeout(function(){
							$("#div-Form-0_1").css("display", "none");
						}, 1000);
					}    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery_openCurtainFunc */


    function org_shaolin_vogerp_coupon_page_FrontLottery_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_FrontLottery_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery_initPageJs */


    function org_shaolin_vogerp_coupon_page_FrontLottery_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_FrontLottery_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_FrontLottery_finalizePageJs */



