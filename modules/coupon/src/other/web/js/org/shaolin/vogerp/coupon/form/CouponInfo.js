/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_CouponInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var logoImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "logoImage"]
    });

    var serialLabeText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialLabeText"]
    });

    var serialNumText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumText"]
    });

    var orderLabelText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderLabelText"]
    });

    var orderNumText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderNumText"]
    });

    var couponImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "couponImage"]
    });

    var couponNameText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "couponNameText"]
    });

    var couponMsgText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "couponMsgText"]
    });

    var advertImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advertImage"]
    });

    var bottom1Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom1Text"]
    });

    var bottom2Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom2Text"]
    });

    var bottom3Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom3Text"]
    });

    var bottom5Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom5Text"]
    });

    var bottom4Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom4Text"]
    });

    var fingerImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "fingerImage"]
    });

    var fingerPrintImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "fingerPrintImage"]
    });

    var bottom3Panel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottom3Panel"]
        ,items: []
        ,subComponents: [prefix + "bottom4Text",prefix + "fingerImage"]
    });

    var bottomLeftPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomLeftPanel"]
        ,items: []
        ,subComponents: [prefix + "bottom1Text",prefix + "bottom2Text",prefix + "bottom3Text",prefix + "bottom5Text",prefix + "bottom3Panel"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "bottomLeftPanel",prefix + "fingerPrintImage"]
    });

    var couponImageRightPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponImageRightPanel"]
        ,items: []
        ,subComponents: [prefix + "couponNameText",prefix + "couponMsgText"]
    });

    var couponImagePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponImagePanel"]
        ,items: []
        ,subComponents: [prefix + "couponImage",prefix + "couponImageRightPanel"]
    });

    var serialNumPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "serialNumPanel"]
        ,items: []
        ,subComponents: [prefix + "serialLabeText",prefix + "serialNumText",prefix + "orderLabelText",prefix + "orderNumText"]
    });

    var couponPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponPanel"]
        ,items: []
        ,subComponents: [prefix + "serialNumPanel",prefix + "couponImagePanel",prefix + "advertImage",prefix + "bottomPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [logoImage,serialLabeText,serialNumText,orderLabelText,orderNumText,couponImage,couponNameText,couponMsgText,advertImage,bottom1Text,bottom2Text,bottom3Text,bottom5Text,bottom4Text,fingerImage,fingerPrintImage,couponPanel,serialNumPanel,couponImagePanel,couponImageRightPanel,bottomPanel,bottomLeftPanel,bottom3Panel]
    });

    Form.logoImage=logoImage;

    Form.serialLabeText=serialLabeText;

    Form.serialNumText=serialNumText;

    Form.orderLabelText=orderLabelText;

    Form.orderNumText=orderNumText;

    Form.couponImage=couponImage;

    Form.couponNameText=couponNameText;

    Form.couponMsgText=couponMsgText;

    Form.advertImage=advertImage;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Text=bottom3Text;

    Form.bottom5Text=bottom5Text;

    Form.bottom4Text=bottom4Text;

    Form.fingerImage=fingerImage;

    Form.fingerPrintImage=fingerPrintImage;

    Form.couponPanel=couponPanel;

    Form.serialNumPanel=serialNumPanel;

    Form.serialLabeText=serialLabeText;

    Form.serialNumText=serialNumText;

    Form.orderLabelText=orderLabelText;

    Form.orderNumText=orderNumText;

    Form.couponImagePanel=couponImagePanel;

    Form.couponImage=couponImage;

    Form.couponImageRightPanel=couponImageRightPanel;

    Form.couponNameText=couponNameText;

    Form.couponMsgText=couponMsgText;

    Form.advertImage=advertImage;

    Form.bottomPanel=bottomPanel;

    Form.bottomLeftPanel=bottomLeftPanel;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Text=bottom3Text;

    Form.bottom5Text=bottom5Text;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom4Text=bottom4Text;

    Form.fingerImage=fingerImage;

    Form.fingerPrintImage=fingerPrintImage;

    Form.serialNumPanel=serialNumPanel;

    Form.serialLabeText=serialLabeText;

    Form.serialNumText=serialNumText;

    Form.orderLabelText=orderLabelText;

    Form.orderNumText=orderNumText;

    Form.couponImagePanel=couponImagePanel;

    Form.couponImage=couponImage;

    Form.couponImageRightPanel=couponImageRightPanel;

    Form.couponNameText=couponNameText;

    Form.couponMsgText=couponMsgText;

    Form.couponImageRightPanel=couponImageRightPanel;

    Form.couponNameText=couponNameText;

    Form.couponMsgText=couponMsgText;

    Form.bottomPanel=bottomPanel;

    Form.bottomLeftPanel=bottomLeftPanel;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Text=bottom3Text;

    Form.bottom5Text=bottom5Text;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom4Text=bottom4Text;

    Form.fingerImage=fingerImage;

    Form.fingerPrintImage=fingerPrintImage;

    Form.bottomLeftPanel=bottomLeftPanel;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Text=bottom3Text;

    Form.bottom5Text=bottom5Text;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom4Text=bottom4Text;

    Form.fingerImage=fingerImage;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom4Text=bottom4Text;

    Form.fingerImage=fingerImage;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_CouponInfo */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_CouponInfo */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_CouponInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.CouponInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_CouponInfo */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_CouponInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponInfo_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponInfo_invokeDynamicFunction */



