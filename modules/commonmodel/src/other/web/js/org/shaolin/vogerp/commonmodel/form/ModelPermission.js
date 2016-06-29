/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ModelPermission(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var modulesUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "modulesUILabel"]
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

    var modulesUI = new org_shaolin_vogerp_commonmodel_form_ListToListSelector({"prefix":prefix + "modulesUI."});

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
        ,subComponents: [prefix + "typeUILabel",prefix + "typeUI",prefix + "modulesUILabel",prefix + "modulesUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [typeUILabel,modulesUILabel,okbtn,cancelbtn,typeUI,modulesUI,fieldPanel,actionPanel]
    });

    Form.typeUILabel=typeUILabel;

    Form.modulesUILabel=modulesUILabel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.typeUI=typeUI;

    Form.modulesUI=modulesUI;

    Form.fieldPanel=fieldPanel;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.modulesUILabel=modulesUILabel;

    Form.modulesUI=modulesUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ModelPermission */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ModelPermission */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_ModelPermission_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_ModelPermission_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_ModelPermission_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ModelPermission";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ModelPermission */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ModelPermission */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ModelPermission_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ModelPermission_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150815-0648",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ModelPermission_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ModelPermission_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ModelPermission_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150815-0648",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ModelPermission_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ModelPermission_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ModelPermission_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ModelPermission_invokeDynamicFunction */



