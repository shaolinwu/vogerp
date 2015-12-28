/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_form_CurrentStatus(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var MainTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "MainTab"]
        ,items: []
        ,subComponents: [prefix + "tasksAnalysisPanel",prefix + "notiPanel",prefix + "orderPanel"]
    });
    var currentTasksPie = new UIMaster.ui.chart
    ({
        ui: elementList[prefix + "currentTasksPie"]
    });

    var tasksAnalysisPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "tasksAnalysisPanel"]
        ,items: []
        ,subComponents: [prefix + "currentTasksPie"]
    });
    var notiPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "notiPanel"]
        ,items: []
        ,subComponents: []
    });
    var orderPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "orderPanel"]
        ,items: []
        ,subComponents: []
    });

    var TaskPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "TaskPanel"]
        ,items: []
        ,subComponents: [prefix + "MainTab"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [MainTab,TaskPanel]
    });

    Form.MainTab=MainTab;

    Form.tasksAnalysisPanel=tasksAnalysisPanel;

    Form.currentTasksPie=currentTasksPie;

    Form.notiPanel=notiPanel;

    Form.orderPanel=orderPanel;

    Form.TaskPanel=TaskPanel;

    Form.MainTab=MainTab;

    Form.tasksAnalysisPanel=tasksAnalysisPanel;

    Form.currentTasksPie=currentTasksPie;

    Form.notiPanel=notiPanel;

    Form.orderPanel=orderPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_form_CurrentStatus */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_form_CurrentStatus */
    };

    Form.invokeDynamicFunction = org_shaolin_bmdp_adminconsole_form_CurrentStatus_invokeDynamicFunction;

    Form.__entityName="org.shaolin.bmdp.adminconsole.form.CurrentStatus";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_form_CurrentStatus */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_form_CurrentStatus */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_CurrentStatus_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_CurrentStatus_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_CurrentStatus_invokeDynamicFunction */



