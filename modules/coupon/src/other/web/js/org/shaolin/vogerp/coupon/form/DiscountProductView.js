/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_DiscountProductView(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var bottom1Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom1Text"]
    });

    var discountProductsPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "discountProductsPanel"]
        ,items: []
        ,subComponents: []
    });

    var couponTypePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponTypePanel"]
        ,items: []
        ,subComponents: [prefix + "bottom1Text"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [bottom1Text,couponTypePanel,discountProductsPanel]
    });

    Form.bottom1Text=bottom1Text;

    Form.couponTypePanel=couponTypePanel;

    Form.bottom1Text=bottom1Text;

    Form.discountProductsPanel=discountProductsPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_DiscountProductView */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_DiscountProductView */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_DiscountProductView_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.DiscountProductView";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_DiscountProductView */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_DiscountProductView */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_DiscountProductView_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_DiscountProductView_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_DiscountProductView_invokeDynamicFunction */



