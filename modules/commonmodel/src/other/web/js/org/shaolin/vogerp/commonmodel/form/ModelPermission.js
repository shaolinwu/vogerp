/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ModelPermission(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var moduleIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "moduleIdUILabel"]
    });

    var moduleIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "moduleIdUI"]
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
        ,subComponents: [prefix + "moduleIdUILabel",prefix + "moduleIdUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [moduleIdUILabel,moduleIdUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.moduleIdUILabel=moduleIdUILabel;

    Form.moduleIdUI=moduleIdUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ModelPermission */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ModelPermission */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_ModelPermission_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_ModelPermission_Cancel;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ModelPermission";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ModelPermission */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ModelPermission */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ModelPermission_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ModelPermission_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail824426062",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ModelPermission_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ModelPermission_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ModelPermission_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-1385217932",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ModelPermission_Cancel */



