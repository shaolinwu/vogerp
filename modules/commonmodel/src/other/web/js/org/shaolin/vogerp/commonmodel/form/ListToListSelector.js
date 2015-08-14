/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ListToListSelector(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var leftListUI = new UIMaster.ui.list
    ({
        ui: elementList[prefix + "leftListUI"]
    });

    var buttonUI = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "buttonUI"]
    });

    var rightListUI = new UIMaster.ui.list
    ({
        ui: elementList[prefix + "rightListUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "leftListUI",prefix + "buttonUI",prefix + "rightListUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [leftListUI,buttonUI,rightListUI,fieldPanel]
    });

    Form.leftListUI=leftListUI;

    Form.buttonUI=buttonUI;

    Form.rightListUI=rightListUI;

    Form.fieldPanel=fieldPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ListToListSelector */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ListToListSelector */
    };

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ListToListSelector";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ListToListSelector */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ListToListSelector */


