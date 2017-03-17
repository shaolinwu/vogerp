/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_CouponSettingForm2(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var discountProductTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "discountProductTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [discountProductTable]
    });

    Form.discountProductTable=discountProductTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_CouponSettingForm2 */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_CouponSettingForm2 */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_CouponSettingForm2_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.CouponSettingForm2";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_CouponSettingForm2 */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_CouponSettingForm2 */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponSettingForm2_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponSettingForm2_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        var constraint_result = this.Form.validate();
        if (constraint_result != true && constraint_result != null) {
            return false;
        }

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponSettingForm2_invokeDynamicFunction */



