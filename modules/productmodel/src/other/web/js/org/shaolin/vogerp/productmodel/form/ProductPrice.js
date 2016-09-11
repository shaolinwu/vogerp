/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductPrice(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var packagesValueUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "packagesValueUI"]
    });

    var productTypeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "productTypeUI"]
    });

    var costUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "costUILabel"]
    });

    var costUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "costUI"]
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

    var packagesUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "packagesUILabel"]
    });

    var packagesUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "packagesUI"]
    });

    var commentUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "commentUILabel"]
    });

    var commentUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "commentUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "packagesValueUI",prefix + "productTypeUI",prefix + "costUILabel",prefix + "costUI",prefix + "priceUILabel",prefix + "priceUI",prefix + "exceedAmountUILabel",prefix + "exceedAmountUI",prefix + "discountUILabel",prefix + "discountUI",prefix + "packagesUILabel",prefix + "packagesUI",prefix + "commentUILabel",prefix + "commentUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,packagesValueUI,productTypeUI,costUILabel,costUI,priceUILabel,priceUI,exceedAmountUILabel,exceedAmountUI,discountUILabel,discountUI,packagesUILabel,packagesUI,commentUILabel,commentUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.packagesValueUI=packagesValueUI;

    Form.productTypeUI=productTypeUI;

    Form.costUILabel=costUILabel;

    Form.costUI=costUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.exceedAmountUILabel=exceedAmountUILabel;

    Form.exceedAmountUI=exceedAmountUI;

    Form.discountUILabel=discountUILabel;

    Form.discountUI=discountUI;

    Form.packagesUILabel=packagesUILabel;

    Form.packagesUI=packagesUI;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.packagesValueUI=packagesValueUI;

    Form.productTypeUI=productTypeUI;

    Form.costUILabel=costUILabel;

    Form.costUI=costUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.exceedAmountUILabel=exceedAmountUILabel;

    Form.exceedAmountUI=exceedAmountUI;

    Form.discountUILabel=discountUILabel;

    Form.discountUI=discountUI;

    Form.packagesUILabel=packagesUILabel;

    Form.packagesUI=packagesUI;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductPrice */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductPrice */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_ProductPrice_Save;

    Form.selectPricePackage = org_shaolin_vogerp_productmodel_form_ProductPrice_selectPricePackage;

    Form.createItem0 = org_shaolin_vogerp_productmodel_form_ProductPrice_createItem0;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductPrice_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductPrice_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductPrice";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductPrice */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductPrice */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPrice_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPrice_Save */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
            }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPrice_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPrice_selectPricePackage(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPrice_selectPricePackage */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectPricePackage-201603142210",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPrice_selectPricePackage */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPrice_createItem0(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPrice_createItem0 */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem0-201603142211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPrice_createItem0 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPrice_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPrice_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160828-213158",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPrice_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPrice_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPrice_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPrice_invokeDynamicFunction */



