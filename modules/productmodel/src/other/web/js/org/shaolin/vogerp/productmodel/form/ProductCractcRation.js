/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductCractcRation(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
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
        ,subComponents: [prefix + "nameUILabel",prefix + "nameUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [nameUILabel,nameUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductCractcRation */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductCractcRation */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_ProductCractcRation_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductCractcRation_Cancel;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductCractcRation";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductCractcRation */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductCractcRation */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCractcRation_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCractcRation_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1999523494",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCractcRation_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCractcRation_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCractcRation_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-625028758",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCractcRation_Cancel */



