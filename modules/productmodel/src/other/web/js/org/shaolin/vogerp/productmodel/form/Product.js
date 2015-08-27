/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_Product(json)
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

    var interestedPartyTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "interestedPartyTypeUILabel"]
    });

    var interestedPartyTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "interestedPartyTypeUI"]
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

    var photoUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "photoUILabel"]
    });

    var uploadFile = new UIMaster.ui.file
    ({
        ui: elementList[prefix + "uploadFile"]
    });

    var photoPathUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "photoPathUI"]
    });

    var photoUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "photoUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "interestedPartyTypeUILabel",prefix + "interestedPartyTypeUI",prefix + "onSaleDateUILabel",prefix + "onSaleDateUI",prefix + "saleEndDateUILabel",prefix + "saleEndDateUI",prefix + "photoUILabel",prefix + "uploadFile",prefix + "photoPathUI",prefix + "photoUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,nameUILabel,nameUI,descriptionUILabel,descriptionUI,typeUILabel,interestedPartyTypeUILabel,interestedPartyTypeUI,onSaleDateUILabel,onSaleDateUI,saleEndDateUILabel,saleEndDateUI,photoUILabel,uploadFile,photoPathUI,photoUI,okbtn,cancelbtn,typeUI,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.typeUILabel=typeUILabel;

    Form.interestedPartyTypeUILabel=interestedPartyTypeUILabel;

    Form.interestedPartyTypeUI=interestedPartyTypeUI;

    Form.onSaleDateUILabel=onSaleDateUILabel;

    Form.onSaleDateUI=onSaleDateUI;

    Form.saleEndDateUILabel=saleEndDateUILabel;

    Form.saleEndDateUI=saleEndDateUI;

    Form.photoUILabel=photoUILabel;

    Form.uploadFile=uploadFile;

    Form.photoPathUI=photoPathUI;

    Form.photoUI=photoUI;

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



