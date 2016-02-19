/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_BEPermission(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var beNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "beNameUILabel"]
    });

    var beNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "beNameUI"]
    });

    var fieldUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "fieldUILabel"]
    });

    var fieldUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "fieldUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "beNameUILabel",prefix + "beNameUI",prefix + "fieldUILabel",prefix + "fieldUI",prefix + "typeUILabel",prefix + "typeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,beNameUILabel,beNameUI,fieldUILabel,fieldUI,typeUILabel,typeUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.beNameUILabel=beNameUILabel;

    Form.beNameUI=beNameUI;

    Form.fieldUILabel=fieldUILabel;

    Form.fieldUI=fieldUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.beNameUILabel=beNameUILabel;

    Form.beNameUI=beNameUI;

    Form.fieldUILabel=fieldUILabel;

    Form.fieldUI=fieldUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_BEPermission */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_BEPermission */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_BEPermission_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_BEPermission_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_BEPermission_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.BEPermission";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_BEPermission */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_BEPermission */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_BEPermission_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_BEPermission_Save */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-841078004",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_BEPermission_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_BEPermission_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_BEPermission_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-783457331",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_BEPermission_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_BEPermission_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_BEPermission_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'????',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_BEPermission_invokeDynamicFunction */



