/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_DiscountProductWithCoupon(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var iconUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "iconUILabel"]
    });

    var iconUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "iconUI"]
    });

    var couponTypeField = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponTypeField"]
        ,items: [idUI,nameUILabel,nameUI,iconUILabel,iconUI]
    });

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.iconUILabel=iconUILabel;

    Form.iconUI=iconUI;

    couponTypeField.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_DiscountProductWithCoupon */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_DiscountProductWithCoupon */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_DiscountProductWithCoupon_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.DiscountProductWithCoupon";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_DiscountProductWithCoupon */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_DiscountProductWithCoupon */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_DiscountProductWithCoupon_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_DiscountProductWithCoupon_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_DiscountProductWithCoupon_invokeDynamicFunction */



