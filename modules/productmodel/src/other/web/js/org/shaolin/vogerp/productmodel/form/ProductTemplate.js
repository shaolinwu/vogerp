/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductTemplate(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var funcsPanel = new UIMaster.ui.prenextpanel
    ({
        ui: elementList[prefix + "funcsPanel"]
        ,items: []
        ,subComponents: [prefix + "infoPanel0",prefix + "infoPanel1",prefix + "infoPanel2"]
    });
    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox({"prefix":prefix + "typeUI."});

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var estimatedPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "estimatedPriceUILabel"]
    });

    var estimatedPriceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "estimatedPriceUI"]
    });

    var infoPanel0 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "infoPanel0"]
        ,items: []
        ,subComponents: [prefix + "typeUILabel",prefix + "typeUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "estimatedPriceUILabel",prefix + "estimatedPriceUI"]
    });
    var photoPathUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "photoPathUI"]
    });

    var photosUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "photosUI"]
    });

    var photoUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "photoUILabel"]
    });

    var uploadFile = new UIMaster.ui.file
    ({
        ui: elementList[prefix + "uploadFile"]
    });

    var infoPanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "infoPanel1"]
        ,items: []
        ,subComponents: [prefix + "photoPathUI",prefix + "photosUI",prefix + "photoUILabel",prefix + "uploadFile"]
    });
    var htmlDescUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "htmlDescUI"]
    });

    var infoPanel2 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "infoPanel2"]
        ,items: []
        ,subComponents: [prefix + "htmlDescUI"]
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
        ,subComponents: [prefix + "funcsPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [funcsPanel,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.funcsPanel=funcsPanel;

    Form.infoPanel0=infoPanel0;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.infoPanel1=infoPanel1;

    Form.photoPathUI=photoPathUI;

    Form.photosUI=photosUI;

    Form.photoUILabel=photoUILabel;

    Form.uploadFile=uploadFile;

    Form.infoPanel2=infoPanel2;

    Form.htmlDescUI=htmlDescUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.funcsPanel=funcsPanel;

    Form.infoPanel0=infoPanel0;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.infoPanel1=infoPanel1;

    Form.photoPathUI=photoPathUI;

    Form.photosUI=photosUI;

    Form.photoUILabel=photoUILabel;

    Form.uploadFile=uploadFile;

    Form.infoPanel2=infoPanel2;

    Form.htmlDescUI=htmlDescUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductTemplate */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductTemplate */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_ProductTemplate_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductTemplate_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductTemplate_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductTemplate";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductTemplate */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductTemplate */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplate_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplate_Save */

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160104-203749",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplate_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplate_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplate_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160104-203749",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplate_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplate_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplate_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplate_invokeDynamicFunction */



