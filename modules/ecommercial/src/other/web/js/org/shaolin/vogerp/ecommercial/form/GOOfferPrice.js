/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GOOfferPrice(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var currPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "currPriceUILabel"]
    });

    var currPriceUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "currPriceUI"]
    });

    var priceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "priceUILabel"]
    });

    var priceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "priceUI"]
    });

    var priceDescriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "priceDescriptionUILabel"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "currPriceUILabel",prefix + "currPriceUI",prefix + "priceUILabel",prefix + "priceUI",prefix + "priceDescriptionUILabel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [currPriceUILabel,currPriceUI,priceUILabel,priceUI,priceDescriptionUILabel,cancelbtn,fieldPanel,actionPanel]
    });

    Form.currPriceUILabel=currPriceUILabel;

    Form.currPriceUI=currPriceUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.priceDescriptionUILabel=priceDescriptionUILabel;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.currPriceUILabel=currPriceUILabel;

    Form.currPriceUI=currPriceUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.priceDescriptionUILabel=priceDescriptionUILabel;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GOOfferPrice */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GOOfferPrice */
    };

    Form.offerPrice = org_shaolin_vogerp_ecommercial_form_GOOfferPrice_offerPrice;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_GOOfferPrice_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GOOfferPrice_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GOOfferPrice";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GOOfferPrice */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GOOfferPrice */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPrice_offerPrice(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_offerPrice */

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"offerPrice-20160124-175742",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_offerPrice */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPrice_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160124-175742",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPrice_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_invokeDynamicFunction */



