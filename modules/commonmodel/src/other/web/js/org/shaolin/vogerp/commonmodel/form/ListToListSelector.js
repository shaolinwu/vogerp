/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ListToListSelector(json)
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
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ListToListSelector */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ListToListSelector */
    };

    Form.moveToRight = org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveToRight;

    Form.moveAllToRight = org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveAllToRight;

    Form.moveToLeft = org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveToLeft;

    Form.moveAllToLeft = org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveAllToLeft;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_ListToListSelector_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ListToListSelector";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ListToListSelector */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ListToListSelector */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveToRight(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveToRight */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"moveToRight-20150815-0821",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveToRight */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveAllToRight(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveAllToRight */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"moveAllToRight-20150815-0821",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveAllToRight */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveToLeft(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveToLeft */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"moveToLeft-20150815-0821",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveToLeft */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveAllToLeft(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveAllToLeft */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"moveAllToLeft-20150815-0821",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ListToListSelector_moveAllToLeft */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ListToListSelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ListToListSelector_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ListToListSelector_invokeDynamicFunction */



