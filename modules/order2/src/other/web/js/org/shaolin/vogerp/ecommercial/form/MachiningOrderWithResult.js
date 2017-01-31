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
        ,showMaxLength: 100
    });

    var makingHourUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "makingHourUILabel"]
    });

    var makingHourUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "makingHourUI"]
    });

    var makingSolutionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "makingSolutionUILabel"]
    });

    var makingSolutionUI = new UIMaster.ui.matrix
    ({
        ui: elementList[prefix + "makingSolutionUI"]
        ,ceType: "org.shaolin.vogerp.ecommercial.ce.MakingSolutionType"
        ,isMultiple: true
    });

    var countUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "countUILabel"]
    });

    var countUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "countUI"]
    });

    var priceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "priceUILabel"]
    });

    var priceUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "priceUI"]
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

    var attributePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel"]
        ,items: []
        ,subComponents: [prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "makingHourUILabel",prefix + "makingHourUI",prefix + "makingSolutionUILabel",prefix + "makingSolutionUI",prefix + "countUILabel",prefix + "countUI",prefix + "priceUILabel",prefix + "priceUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUI",prefix + "attributePanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [serialNumberUILabel,serialNumberUI,descriptionUILabel,descriptionUI,makingHourUILabel,makingHourUI,makingSolutionUILabel,makingSolutionUI,countUILabel,countUI,priceUILabel,priceUI,cancelbtn,photoUI,fieldPanel,attributePanel,actionPanel]
    });

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.makingHourUILabel=makingHourUILabel;

    Form.makingHourUI=makingHourUI;

    Form.makingSolutionUILabel=makingSolutionUILabel;

    Form.makingSolutionUI=makingSolutionUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.cancelbtn=cancelbtn;

    Form.photoUI=photoUI;

    Form.fieldPanel=fieldPanel;

    Form.photoUI=photoUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.makingHourUILabel=makingHourUILabel;

    Form.makingHourUI=makingHourUI;

    Form.makingSolutionUILabel=makingSolutionUILabel;

    Form.makingSolutionUI=makingSolutionUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.makingHourUILabel=makingHourUILabel;

    Form.makingHourUI=makingHourUI;

    Form.makingSolutionUILabel=makingSolutionUILabel;

    Form.makingSolutionUI=makingSolutionUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult_Save;

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
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20170125-215225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderWithResult_Save */


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



