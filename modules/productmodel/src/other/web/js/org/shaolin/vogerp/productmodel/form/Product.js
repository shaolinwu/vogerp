/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_Product(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var photoPathUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "photoPathUI"]
    });

    var photoUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "photoUI"]
    });

    var photoUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "photoUILabel"]
    });

    var uploadFile = new UIMaster.ui.file
    ({
        ui: elementList[prefix + "uploadFile"]
    });

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

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var onSaleDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "onSaleDateUILabel"]
    });

    var onSaleDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "onSaleDateUI"]
    });

    var saleEndDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "saleEndDateUILabel"]
    });

    var saleEndDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "saleEndDateUI"]
    });

    var htmlDescLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "htmlDescLabel"]
    });

    var htmlDescUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "htmlDescUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var typeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox({"prefix":prefix + "typeUI."});

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
        ,subComponents: [prefix + "idUI",prefix + "photoPathUI",prefix + "photoUI",prefix + "photoUILabel",prefix + "uploadFile",prefix + "nameUILabel",prefix + "nameUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "onSaleDateUILabel",prefix + "onSaleDateUI",prefix + "saleEndDateUILabel",prefix + "saleEndDateUI",prefix + "htmlDescLabel",prefix + "htmlDescUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,photoPathUI,photoUI,photoUILabel,uploadFile,nameUILabel,nameUI,descriptionUILabel,descriptionUI,typeUILabel,onSaleDateUILabel,onSaleDateUI,saleEndDateUILabel,saleEndDateUI,htmlDescLabel,htmlDescUI,okbtn,cancelbtn,typeUI,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.photoPathUI=photoPathUI;

    Form.photoUI=photoUI;

    Form.photoUILabel=photoUILabel;

    Form.uploadFile=uploadFile;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.typeUILabel=typeUILabel;

    Form.onSaleDateUILabel=onSaleDateUILabel;

    Form.onSaleDateUI=onSaleDateUI;

    Form.saleEndDateUILabel=saleEndDateUILabel;

    Form.saleEndDateUI=saleEndDateUI;

    Form.htmlDescLabel=htmlDescLabel;

    Form.htmlDescUI=htmlDescUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.typeUI=typeUI;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_Product */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_Product */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_Product_Save;

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



