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

    var restNumUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "restNumUILabel"]
    });

    var restNumUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "restNumUI"]
    });

    var iconUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "iconUILabel"]
    });

    var iconUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "iconUI"]
    });

    var superiorityMessageUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "superiorityMessageUILabel"]
    });

    var superiorityMessageUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "superiorityMessageUI"]
    });

    var limitMessageUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "limitMessageUILabel"]
    });

    var limitMessageUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "limitMessageUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "totalNumUILabel",prefix + "totalNumUI",prefix + "restNumUILabel",prefix + "restNumUI",prefix + "iconUILabel",prefix + "iconUI",prefix + "superiorityMessageUILabel",prefix + "superiorityMessageUI",prefix + "limitMessageUILabel",prefix + "limitMessageUI",prefix + "resetIntervalUILabel",prefix + "resetIntervalUI",prefix + "isImmediateUILabel",prefix + "isImmediateUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,nameUILabel,nameUI,totalNumUILabel,totalNumUI,restNumUILabel,restNumUI,iconUILabel,iconUI,superiorityMessageUILabel,superiorityMessageUI,limitMessageUILabel,limitMessageUI,resetIntervalUILabel,resetIntervalUI,isImmediateUILabel,isImmediateUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.totalNumUILabel=totalNumUILabel;

    Form.totalNumUI=totalNumUI;

    Form.restNumUILabel=restNumUILabel;

    Form.restNumUI=restNumUI;

    Form.iconUILabel=iconUILabel;

    Form.iconUI=iconUI;

    Form.superiorityMessageUILabel=superiorityMessageUILabel;

    Form.superiorityMessageUI=superiorityMessageUI;

    Form.limitMessageUILabel=limitMessageUILabel;

    Form.limitMessageUI=limitMessageUI;

    Form.resetIntervalUILabel=resetIntervalUILabel;

    Form.resetIntervalUI=resetIntervalUI;

    Form.isImmediateUILabel=isImmediateUILabel;

    Form.isImmediateUI=isImmediateUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.totalNumUILabel=totalNumUILabel;

    Form.totalNumUI=totalNumUI;

    Form.restNumUILabel=restNumUILabel;

    Form.restNumUI=restNumUI;

    Form.iconUILabel=iconUILabel;

    Form.iconUI=iconUI;

    Form.superiorityMessageUILabel=superiorityMessageUILabel;

    Form.superiorityMessageUI=superiorityMessageUI;

    Form.limitMessageUILabel=limitMessageUILabel;

    Form.limitMessageUI=limitMessageUI;

    Form.resetIntervalUILabel=resetIntervalUILabel;

    Form.resetIntervalUI=resetIntervalUI;

    Form.isImmediateUILabel=isImmediateUILabel;

    Form.isImmediateUI=isImmediateUI;

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
    function org_shaolin_vogerp_coupon_form_CouponType_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponType_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponType_invokeDynamicFunction */



