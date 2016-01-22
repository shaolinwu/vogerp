/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_Product(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var funcsPanel = new UIMaster.ui.prenextpanel
    ({
        ui: elementList[prefix + "funcsPanel"]
        ,items: []
        ,subComponents: [prefix + "infoPanel0",prefix + "infoPanel1",prefix + "infoPanel2"]
    });
    var productTypeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "productTypeUI"]
    });

    var templateIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "templateIdUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var saleEndDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "saleEndDateUILabel"]
    });

    var saleEndDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "saleEndDateUI"]
    });

    var infoPanel3 = new org_shaolin_vogerp_productmodel_form_ProductCode({"prefix":prefix + "infoPanel3."});

    var infoPanel0 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "infoPanel0"]
        ,items: []
        ,subComponents: [prefix + "productTypeUI",prefix + "templateIdUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "saleEndDateUILabel",prefix + "saleEndDateUI",prefix + "infoPanel3"]
    });
    var infoPanel1 = new org_shaolin_vogerp_productmodel_form_ProductCostTable({"prefix":prefix + "infoPanel1."});

    var infoPanel2 = new org_shaolin_vogerp_productmodel_form_ProductPriceTable({"prefix":prefix + "infoPanel2."});


    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var closebtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "closebtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "closebtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "funcsPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [funcsPanel,okbtn,closebtn,fieldPanel,actionPanel]
    });

    Form.funcsPanel=funcsPanel;

    Form.infoPanel0=infoPanel0;

    Form.productTypeUI=productTypeUI;

    Form.templateIdUI=templateIdUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.saleEndDateUILabel=saleEndDateUILabel;

    Form.saleEndDateUI=saleEndDateUI;

    Form.infoPanel3=infoPanel3;

    Form.infoPanel1=infoPanel1;

    Form.infoPanel2=infoPanel2;

    Form.okbtn=okbtn;

    Form.closebtn=closebtn;

    Form.fieldPanel=fieldPanel;

    Form.funcsPanel=funcsPanel;

    Form.infoPanel0=infoPanel0;

    Form.productTypeUI=productTypeUI;

    Form.templateIdUI=templateIdUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.saleEndDateUILabel=saleEndDateUILabel;

    Form.saleEndDateUI=saleEndDateUI;

    Form.infoPanel3=infoPanel3;

    Form.infoPanel1=infoPanel1;

    Form.infoPanel2=infoPanel2;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.closebtn=closebtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_Product */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_Product */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_Product_Save;

    Form.openProductTempSelector = org_shaolin_vogerp_productmodel_form_Product_openProductTempSelector;

    Form.SaveSelectedTemplate = org_shaolin_vogerp_productmodel_form_Product_SaveSelectedTemplate;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_Product_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_Product_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.Product";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_Product */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_Product */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Product_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Product_Save */

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-201504121132",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Product_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Product_openProductTempSelector(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Product_openProductTempSelector */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductTempSelector-201601091120",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Product_openProductTempSelector */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Product_SaveSelectedTemplate(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Product_SaveSelectedTemplate */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"SaveSelectedTemplate-201504121132",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Product_SaveSelectedTemplate */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Product_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Product_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-201504121132",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Product_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Product_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Product_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Product_invokeDynamicFunction */



