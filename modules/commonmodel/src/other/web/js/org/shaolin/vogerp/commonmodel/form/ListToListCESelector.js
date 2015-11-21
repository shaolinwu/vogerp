/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ListToListCESelector(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var leftListUI = new UIMaster.ui.list
    ({
        ui: elementList[prefix + "leftListUI"]
    });

    var moveToRightBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "moveToRightBtn"]
    });

    var moveAllToRightBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "moveAllToRightBtn"]
    });

    var moveToLeftBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "moveToLeftBtn"]
    });

    var moveAllToLeftBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "moveAllToLeftBtn"]
    });

    var rightListUI = new UIMaster.ui.list
    ({
        ui: elementList[prefix + "rightListUI"]
    });

    var middlePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "middlePanel"]
        ,items: []
        ,subComponents: [prefix + "moveToRightBtn",prefix + "moveAllToRightBtn",prefix + "moveToLeftBtn",prefix + "moveAllToLeftBtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "leftListUI",prefix + "middlePanel",prefix + "rightListUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [leftListUI,moveToRightBtn,moveAllToRightBtn,moveToLeftBtn,moveAllToLeftBtn,rightListUI,fieldPanel,middlePanel]
    });

    Form.leftListUI=leftListUI;

    Form.moveToRightBtn=moveToRightBtn;

    Form.moveAllToRightBtn=moveAllToRightBtn;

    Form.moveToLeftBtn=moveToLeftBtn;

    Form.moveAllToLeftBtn=moveAllToLeftBtn;

    Form.rightListUI=rightListUI;

    Form.fieldPanel=fieldPanel;

    Form.leftListUI=leftListUI;

    Form.middlePanel=middlePanel;

    Form.moveToRightBtn=moveToRightBtn;

    Form.moveAllToRightBtn=moveAllToRightBtn;

    Form.moveToLeftBtn=moveToLeftBtn;

    Form.moveAllToLeftBtn=moveAllToLeftBtn;

    Form.rightListUI=rightListUI;

    Form.middlePanel=middlePanel;

    Form.moveToRightBtn=moveToRightBtn;

    Form.moveAllToRightBtn=moveAllToRightBtn;

    Form.moveToLeftBtn=moveToLeftBtn;

    Form.moveAllToLeftBtn=moveAllToLeftBtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ListToListCESelector */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ListToListCESelector */
    };

    Form.moveToRight = org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveToRight;

    Form.moveAllToRight = org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveAllToRight;

    Form.moveToLeft = org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveToLeft;

    Form.moveAllToLeft = org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveAllToLeft;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_ListToListCESelector_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ListToListCESelector";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ListToListCESelector */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ListToListCESelector */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveToRight(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveToRight */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"moveToRight-20150815-0821",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveToRight */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveAllToRight(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveAllToRight */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"moveAllToRight-20150815-0821",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveAllToRight */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveToLeft(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveToLeft */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"moveToLeft-20150815-0821",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveToLeft */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveAllToLeft(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveAllToLeft */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"moveAllToLeft-20150815-0821",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ListToListCESelector_moveAllToLeft */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ListToListCESelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ListToListCESelector_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ListToListCESelector_invokeDynamicFunction */



