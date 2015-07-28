/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductPrice(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var productIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "productIdUILabel"]
    });

    var productIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "productIdUI"]
    });

    var productUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "productUILabel"]
    });

    var productUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "productUI"]
    });

    var packagesUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "packagesUILabel"]
    });

    var packagesUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "packagesUI"]
    });

    var partyIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "partyIdUILabel"]
    });

    var partyIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "partyIdUI"]
    });

    var priceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "priceUILabel"]
    });

    var priceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "priceUI"]
    });

    var exceedAmountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "exceedAmountUILabel"]
    });

    var exceedAmountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "exceedAmountUI"]
    });

    var discountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "discountUILabel"]
    });

    var discountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "discountUI"]
    });

    var commentsUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "commentsUILabel"]
    });

    var commentsUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "commentsUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "productIdUILabel",prefix + "productIdUI",prefix + "productUILabel",prefix + "productUI",prefix + "packagesUILabel",prefix + "packagesUI",prefix + "partyIdUILabel",prefix + "partyIdUI",prefix + "priceUILabel",prefix + "priceUI",prefix + "exceedAmountUILabel",prefix + "exceedAmountUI",prefix + "discountUILabel",prefix + "discountUI",prefix + "commentsUILabel",prefix + "commentsUI",prefix + "typeUILabel",prefix + "typeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,productIdUILabel,productIdUI,productUILabel,productUI,packagesUILabel,packagesUI,partyIdUILabel,partyIdUI,priceUILabel,priceUI,exceedAmountUILabel,exceedAmountUI,discountUILabel,discountUI,commentsUILabel,commentsUI,typeUILabel,typeUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.productIdUILabel=productIdUILabel;

    Form.productIdUI=productIdUI;

    Form.productUILabel=productUILabel;

    Form.productUI=productUI;

    Form.packagesUILabel=packagesUILabel;

    Form.packagesUI=packagesUI;

    Form.partyIdUILabel=partyIdUILabel;

    Form.partyIdUI=partyIdUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.exceedAmountUILabel=exceedAmountUILabel;

    Form.exceedAmountUI=exceedAmountUI;

    Form.discountUILabel=discountUILabel;

    Form.discountUI=discountUI;

    Form.commentsUILabel=commentsUILabel;

    Form.commentsUI=commentsUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductPrice */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductPrice */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_ProductPrice_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductPrice_Cancel;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductPrice";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductPrice */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductPrice */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPrice_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPrice_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-1031867168",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPrice_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPrice_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPrice_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-1144004672",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPrice_Cancel */



