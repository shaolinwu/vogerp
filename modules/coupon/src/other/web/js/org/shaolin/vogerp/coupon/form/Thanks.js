/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_Thanks(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var logoImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "logoImage"]
    });

    var thanksImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "thanksImage"]
    });

    var thanks1Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "thanks1Text"]
    });

    var thanks2Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "thanks2Text"]
    });

    var couponImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "couponImage"]
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

    var bottomRight1Image = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "bottomRight1Image"]
    });

    var bottomRightImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "bottomRightImage"]
    });

    var bottom3Panel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottom3Panel"]
        ,items: []
        ,subComponents: [prefix + "bottom3Text",prefix + "bottomRight1Image"]
    });

    var bottomTextPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomTextPanel"]
        ,items: []
        ,subComponents: [prefix + "bottom1Text",prefix + "bottom2Text",prefix + "bottom3Panel"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "bottomTextPanel",prefix + "bottomRightImage"]
    });

    var thanksTextPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "thanksTextPanel"]
        ,items: []
        ,subComponents: [prefix + "thanks1Text",prefix + "thanks2Text"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,items: []
        ,subComponents: [prefix + "thanksImage",prefix + "thanksTextPanel"]
    });

    var thanksPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "thanksPanel"]
        ,items: []
        ,subComponents: [prefix + "topPanel",prefix + "couponImage",prefix + "bottomPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [logoImage,thanksImage,thanks1Text,thanks2Text,couponImage,bottom1Text,bottom2Text,bottom3Text,bottomRight1Image,bottomRightImage,thanksPanel,topPanel,thanksTextPanel,bottomPanel,bottomTextPanel,bottom3Panel]
    });

    Form.logoImage=logoImage;

    Form.thanksImage=thanksImage;

    Form.thanks1Text=thanks1Text;

    Form.thanks2Text=thanks2Text;

    Form.couponImage=couponImage;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Text=bottom3Text;

    Form.bottomRight1Image=bottomRight1Image;

    Form.bottomRightImage=bottomRightImage;

    Form.thanksPanel=thanksPanel;

    Form.topPanel=topPanel;

    Form.thanksImage=thanksImage;

    Form.thanksTextPanel=thanksTextPanel;

    Form.thanks1Text=thanks1Text;

    Form.thanks2Text=thanks2Text;

    Form.couponImage=couponImage;

    Form.bottomPanel=bottomPanel;

    Form.bottomTextPanel=bottomTextPanel;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom3Text=bottom3Text;

    Form.bottomRight1Image=bottomRight1Image;

    Form.bottomRightImage=bottomRightImage;

    Form.topPanel=topPanel;

    Form.thanksImage=thanksImage;

    Form.thanksTextPanel=thanksTextPanel;

    Form.thanks1Text=thanks1Text;

    Form.thanks2Text=thanks2Text;

    Form.thanksTextPanel=thanksTextPanel;

    Form.thanks1Text=thanks1Text;

    Form.thanks2Text=thanks2Text;

    Form.bottomPanel=bottomPanel;

    Form.bottomTextPanel=bottomTextPanel;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom3Text=bottom3Text;

    Form.bottomRight1Image=bottomRight1Image;

    Form.bottomRightImage=bottomRightImage;

    Form.bottomTextPanel=bottomTextPanel;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom3Text=bottom3Text;

    Form.bottomRight1Image=bottomRight1Image;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom3Text=bottom3Text;

    Form.bottomRight1Image=bottomRight1Image;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_Thanks */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_Thanks */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_Thanks_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.Thanks";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_Thanks */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_Thanks */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_Thanks_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_Thanks_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_Thanks_invokeDynamicFunction */



