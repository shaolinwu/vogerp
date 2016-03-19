/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_ChoiceDiscountProduct(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var logoImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "logoImage"]
    });

    var topImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "topImage"]
    });

    var topSignImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "topSignImage"]
    });

    var choiceDiscountTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "choiceDiscountTable"]
    });

    var advertImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advertImage"]
    });

    var ChoiceDiscountPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "ChoiceDiscountPanel"]
        ,items: []
        ,subComponents: [prefix + "choiceDiscountTable"]
    });

    var topTextPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topTextPanel"]
        ,items: []
        ,subComponents: [prefix + "topImage",prefix + "topSignImage"]
    });

    var ProductPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "ProductPanel"]
        ,items: []
        ,subComponents: [prefix + "topTextPanel",prefix + "ChoiceDiscountPanel",prefix + "advertImage"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [logoImage,topImage,topSignImage,choiceDiscountTable,advertImage,ProductPanel,topTextPanel,ChoiceDiscountPanel]
    });

    Form.logoImage=logoImage;

    Form.topImage=topImage;

    Form.topSignImage=topSignImage;

    Form.choiceDiscountTable=choiceDiscountTable;

    Form.advertImage=advertImage;

    Form.ProductPanel=ProductPanel;

    Form.topTextPanel=topTextPanel;

    Form.topImage=topImage;

    Form.topSignImage=topSignImage;

    Form.ChoiceDiscountPanel=ChoiceDiscountPanel;

    Form.choiceDiscountTable=choiceDiscountTable;

    Form.advertImage=advertImage;

    Form.topTextPanel=topTextPanel;

    Form.topImage=topImage;

    Form.topSignImage=topSignImage;

    Form.ChoiceDiscountPanel=ChoiceDiscountPanel;

    Form.choiceDiscountTable=choiceDiscountTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_ChoiceDiscountProduct */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_ChoiceDiscountProduct */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_ChoiceDiscountProduct_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.ChoiceDiscountProduct";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_ChoiceDiscountProduct */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_ChoiceDiscountProduct */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_ChoiceDiscountProduct_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_ChoiceDiscountProduct_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_ChoiceDiscountProduct_invokeDynamicFunction */



