/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_CouponSystem(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var orgUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgUILabel"]
    });

    var orgUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "orgUI"]
    });

    var isDevelopTestUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "isDevelopTestUILabel"]
    });

    var isDevelopTestUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "isDevelopTestUI"]
    });

    var isValidateOpenIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "isValidateOpenIdUILabel"]
    });

    var isValidateOpenIdUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "isValidateOpenIdUI"]
    });

    var isMaintainUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "isMaintainUILabel"]
    });

    var isMaintainUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "isMaintainUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "orgUILabel",prefix + "orgUI",prefix + "isDevelopTestUILabel",prefix + "isDevelopTestUI",prefix + "isValidateOpenIdUILabel",prefix + "isValidateOpenIdUI",prefix + "isMaintainUILabel",prefix + "isMaintainUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,orgUILabel,orgUI,isDevelopTestUILabel,isDevelopTestUI,isValidateOpenIdUILabel,isValidateOpenIdUI,isMaintainUILabel,isMaintainUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.orgUILabel=orgUILabel;

    Form.orgUI=orgUI;

    Form.isDevelopTestUILabel=isDevelopTestUILabel;

    Form.isDevelopTestUI=isDevelopTestUI;

    Form.isValidateOpenIdUILabel=isValidateOpenIdUILabel;

    Form.isValidateOpenIdUI=isValidateOpenIdUI;

    Form.isMaintainUILabel=isMaintainUILabel;

    Form.isMaintainUI=isMaintainUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.orgUILabel=orgUILabel;

    Form.orgUI=orgUI;

    Form.isDevelopTestUILabel=isDevelopTestUILabel;

    Form.isDevelopTestUI=isDevelopTestUI;

    Form.isValidateOpenIdUILabel=isValidateOpenIdUILabel;

    Form.isValidateOpenIdUI=isValidateOpenIdUI;

    Form.isMaintainUILabel=isMaintainUILabel;

    Form.isMaintainUI=isMaintainUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_CouponSystem */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_CouponSystem */
    };

    Form.Save = org_shaolin_vogerp_coupon_form_CouponSystem_Save;

    Form.Cancel = org_shaolin_vogerp_coupon_form_CouponSystem_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_CouponSystem_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.CouponSystem";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_CouponSystem */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_CouponSystem */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponSystem_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponSystem_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160412-000135",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponSystem_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponSystem_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponSystem_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160412-000135",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponSystem_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponSystem_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponSystem_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponSystem_invokeDynamicFunction */



