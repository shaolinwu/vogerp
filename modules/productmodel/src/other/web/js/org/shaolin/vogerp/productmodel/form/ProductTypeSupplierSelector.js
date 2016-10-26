/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductTypeSupplierSelector(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var pTypeIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "pTypeIdUI"]
    });

    var pTypeName0UI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "pTypeName0UI"]
    });

    var pTypeNameUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "pTypeNameUI"]
    });

    var selectConsumersTypeUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "selectConsumersTypeUI"]
        ,checked: true
        ,selected: true
    });

    var pTypeConsumersUI = new UIMaster.ui.list
    ({
        ui: elementList[prefix + "pTypeConsumersUI"]
    });

    var pTypeSuppliersUI = new UIMaster.ui.list
    ({
        ui: elementList[prefix + "pTypeSuppliersUI"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: []
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "pTypeIdUI",prefix + "pTypeName0UI",prefix + "pTypeNameUI",prefix + "selectConsumersTypeUI",prefix + "pTypeConsumersUI",prefix + "pTypeSuppliersUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [pTypeIdUI,pTypeName0UI,pTypeNameUI,selectConsumersTypeUI,pTypeConsumersUI,pTypeSuppliersUI,fieldPanel,actionPanel]
    });

    Form.pTypeIdUI=pTypeIdUI;

    Form.pTypeName0UI=pTypeName0UI;

    Form.pTypeNameUI=pTypeNameUI;

    Form.selectConsumersTypeUI=selectConsumersTypeUI;

    Form.pTypeConsumersUI=pTypeConsumersUI;

    Form.pTypeSuppliersUI=pTypeSuppliersUI;

    Form.fieldPanel=fieldPanel;

    Form.pTypeIdUI=pTypeIdUI;

    Form.pTypeName0UI=pTypeName0UI;

    Form.pTypeNameUI=pTypeNameUI;

    Form.selectConsumersTypeUI=selectConsumersTypeUI;

    Form.pTypeConsumersUI=pTypeConsumersUI;

    Form.pTypeSuppliersUI=pTypeSuppliersUI;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductTypeSupplierSelector */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductTypeSupplierSelector */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductTypeSupplierSelector_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductTypeSupplierSelector";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductTypeSupplierSelector */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductTypeSupplierSelector */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeSupplierSelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeSupplierSelector_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeSupplierSelector_invokeDynamicFunction */



