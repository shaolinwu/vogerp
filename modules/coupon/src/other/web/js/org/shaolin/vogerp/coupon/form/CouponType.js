/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_CouponType(json)
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

    var totalNumUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "totalNumUILabel"]
    });

    var totalNumUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "totalNumUI"]
    });

    var percentUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "percentUILabel"]
    });

    var percentUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "percentUI"]
    });

    var iconUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "iconUILabel"]
    });

    var iconUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "iconUI"]
    });

    var resetIntervalUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "resetIntervalUILabel"]
    });

    var resetIntervalUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "resetIntervalUI"]
    });

    var isImmediateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "isImmediateUILabel"]
    });

    var isImmediateUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "isImmediateUI"]
    });

    var isThanksUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "isThanksUILabel"]
    });

    var isThanksUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "isThanksUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "totalNumUILabel",prefix + "totalNumUI",prefix + "percentUILabel",prefix + "percentUI",prefix + "iconUILabel",prefix + "iconUI",prefix + "resetIntervalUILabel",prefix + "resetIntervalUI",prefix + "isImmediateUILabel",prefix + "isImmediateUI",prefix + "isThanksUILabel",prefix + "isThanksUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,nameUILabel,nameUI,totalNumUILabel,totalNumUI,percentUILabel,percentUI,iconUILabel,iconUI,resetIntervalUILabel,resetIntervalUI,isImmediateUILabel,isImmediateUI,isThanksUILabel,isThanksUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.totalNumUILabel=totalNumUILabel;

    Form.totalNumUI=totalNumUI;

    Form.percentUILabel=percentUILabel;

    Form.percentUI=percentUI;

    Form.iconUILabel=iconUILabel;

    Form.iconUI=iconUI;

    Form.resetIntervalUILabel=resetIntervalUILabel;

    Form.resetIntervalUI=resetIntervalUI;

    Form.isImmediateUILabel=isImmediateUILabel;

    Form.isImmediateUI=isImmediateUI;

    Form.isThanksUILabel=isThanksUILabel;

    Form.isThanksUI=isThanksUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.totalNumUILabel=totalNumUILabel;

    Form.totalNumUI=totalNumUI;

    Form.percentUILabel=percentUILabel;

    Form.percentUI=percentUI;

    Form.iconUILabel=iconUILabel;

    Form.iconUI=iconUI;

    Form.resetIntervalUILabel=resetIntervalUILabel;

    Form.resetIntervalUI=resetIntervalUI;

    Form.isImmediateUILabel=isImmediateUILabel;

    Form.isImmediateUI=isImmediateUI;

    Form.isThanksUILabel=isThanksUILabel;

    Form.isThanksUI=isThanksUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_CouponType */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_CouponType */
    };

    Form.Save = org_shaolin_vogerp_coupon_form_CouponType_Save;

    Form.Cancel = org_shaolin_vogerp_coupon_form_CouponType_Cancel;

    Form.selectImage = org_shaolin_vogerp_coupon_form_CouponType_selectImage;

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_CouponType_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.CouponType";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_CouponType */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_CouponType */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponType_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponType_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160305-201445",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponType_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponType_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponType_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160305-201445",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponType_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponType_selectImage(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponType_selectImage */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectImage-1317628417",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponType_selectImage */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponType_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponType_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponType_invokeDynamicFunction */



