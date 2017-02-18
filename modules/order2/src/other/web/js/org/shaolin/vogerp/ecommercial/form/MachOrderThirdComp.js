/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var estiWeightUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "estiWeightUILabel"]
    });

    var estiWeightUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "estiWeightUI"]
    });

    var estiMakingHourUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "estiMakingHourUILabel"]
    });

    var estiMakingHourUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "estiMakingHourUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var parentComponent = new org_shaolin_vogerp_ecommercial_form_MachiCompThirdComp({"prefix":prefix + "parentComponent."});

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
        ,subComponents: [prefix + "estiWeightUILabel",prefix + "estiWeightUI",prefix + "estiMakingHourUILabel",prefix + "estiMakingHourUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [estiWeightUILabel,estiWeightUI,estiMakingHourUILabel,estiMakingHourUI,okbtn,cancelbtn,parentComponent,fieldPanel,actionPanel]
    });

    Form.estiWeightUILabel=estiWeightUILabel;

    Form.estiWeightUI=estiWeightUI;

    Form.estiMakingHourUILabel=estiMakingHourUILabel;

    Form.estiMakingHourUI=estiMakingHourUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.parentComponent=parentComponent;

    Form.fieldPanel=fieldPanel;

    Form.estiWeightUILabel=estiWeightUILabel;

    Form.estiWeightUI=estiWeightUI;

    Form.estiMakingHourUILabel=estiMakingHourUILabel;

    Form.estiMakingHourUI=estiMakingHourUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp_Save;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.MachOrderThirdComp";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20170211-201326",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170211-201346",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderThirdComp_invokeDynamicFunction */



