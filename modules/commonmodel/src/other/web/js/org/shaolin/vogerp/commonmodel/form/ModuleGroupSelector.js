/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var orgListUI = new UIMaster.ui.list
    ({
        ui: elementList[prefix + "orgListUI"]
    });

    var moduleListUI = new UIMaster.ui.list
    ({
        ui: elementList[prefix + "moduleListUI"]
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
        ,subComponents: [prefix + "orgListUI",prefix + "moduleListUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [orgListUI,moduleListUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.orgListUI=orgListUI;

    Form.moduleListUI=moduleListUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.orgListUI=orgListUI;

    Form.moduleListUI=moduleListUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector */
    };

    Form.selectOrgItem = org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector_selectOrgItem;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ModuleGroupSelector";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector_selectOrgItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector_selectOrgItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectOrgItem-201601311310",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector_selectOrgItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cance-201601311310",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ModuleGroupSelector_invokeDynamicFunction */



