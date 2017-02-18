/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var countUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "countUILabel"]
    });

    var countUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "countUI"]
    });

    var materialTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "materialTypeUILabel"]
    });

    var materialTypeUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "materialTypeUI"]
    });

    var componentListUI = new UIMaster.ui.field
    ({
        ui: elementList[prefix + "componentListUI"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var photoUI = new org_shaolin_vogerp_ecommercial_form_CADUploader({"prefix":prefix + "photoUI."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "cancelbtn"]
    });

    var attributePanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel1"]
        ,items: []
        ,subComponents: [prefix + "componentListUI"]
    });

    var attributePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel"]
        ,items: []
        ,subComponents: [prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "countUILabel",prefix + "countUI",prefix + "materialTypeUILabel",prefix + "materialTypeUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUI",prefix + "attributePanel",prefix + "attributePanel1"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [serialNumberUILabel,serialNumberUI,descriptionUILabel,descriptionUI,countUILabel,countUI,materialTypeUILabel,materialTypeUI,componentListUI,cancelbtn,photoUI,fieldPanel,attributePanel,attributePanel1,actionPanel]
    });

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.materialTypeUILabel=materialTypeUILabel;

    Form.materialTypeUI=materialTypeUI;

    Form.componentListUI=componentListUI;

    Form.cancelbtn=cancelbtn;

    Form.photoUI=photoUI;

    Form.fieldPanel=fieldPanel;

    Form.photoUI=photoUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.materialTypeUILabel=materialTypeUILabel;

    Form.materialTypeUI=materialTypeUI;

    Form.attributePanel1=attributePanel1;

    Form.componentListUI=componentListUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.materialTypeUILabel=materialTypeUILabel;

    Form.materialTypeUI=materialTypeUI;

    Form.attributePanel1=attributePanel1;

    Form.componentListUI=componentListUI;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult */
    };

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.MachiningOrderWithResult";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170125-215225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        var constraint_result = this.Form.validate();
        if (constraint_result != true && constraint_result != null) {
            return false;
        }

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult_invokeDynamicFunction */



