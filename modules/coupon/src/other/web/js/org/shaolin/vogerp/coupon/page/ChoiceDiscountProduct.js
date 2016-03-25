/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct(json)
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

    var selectedProductId = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectedProductId"]
    });

    var choiceDiscountTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "choiceDiscountTable"]
    });

    var ChoiceDiscountPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "ChoiceDiscountPanel"]
        ,items: []
        ,subComponents: [prefix + "selectedProductId",prefix + "choiceDiscountTable"]
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
        ,subComponents: [prefix + "topTextPanel",prefix + "ChoiceDiscountPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [logoImage,topImage,topSignImage,selectedProductId,choiceDiscountTable,ProductPanel,topTextPanel,ChoiceDiscountPanel]
    });

    Form.logoImage=logoImage;

    Form.topImage=topImage;

    Form.topSignImage=topSignImage;

    Form.selectedProductId=selectedProductId;

    Form.choiceDiscountTable=choiceDiscountTable;

    Form.ProductPanel=ProductPanel;

    Form.topTextPanel=topTextPanel;

    Form.topImage=topImage;

    Form.topSignImage=topSignImage;

    Form.ChoiceDiscountPanel=ChoiceDiscountPanel;

    Form.selectedProductId=selectedProductId;

    Form.choiceDiscountTable=choiceDiscountTable;

    Form.topTextPanel=topTextPanel;

    Form.topImage=topImage;

    Form.topSignImage=topSignImage;

    Form.ChoiceDiscountPanel=ChoiceDiscountPanel;

    Form.selectedProductId=selectedProductId;

    Form.choiceDiscountTable=choiceDiscountTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct */
    };

    Form.initPageJs = org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct_finalizePageJs;

    Form.SelectedDiscountProductLogic_OutFunctionName = org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct_SelectedDiscountProductLogic_OutFunctionName;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.ChoiceDiscountProduct";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct */

    function org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct_initPageJs */


    function org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct_finalizePageJs */


    function org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct_SelectedDiscountProductLogic_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct_SelectedDiscountProductLogic_OutFunctionName */
        var constraint_result = true;
        var myForm;
        if (this.formName != undefined)
        {
            myForm = document.forms[this.formName];
        }
        else
        {
            var p = this.Form.parentNode;
            while(p.tagName != "FORM")
                p = p.parentNode;
            myForm = p;//document.forms[0];
        }

        var UIEntity = this;

        constraint_result = this.Form.validate();
{
			// hello, my first js.
			}        
        myForm._outname.value = "SelectedDiscountProductLogic";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_ChoiceDiscountProduct_SelectedDiscountProductLogic_OutFunctionName */


