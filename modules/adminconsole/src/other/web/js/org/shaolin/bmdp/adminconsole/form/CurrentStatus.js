/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_form_CurrentStatus(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var MainTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "MainTab"]
        ,items: []
        ,subComponents: [prefix + "tasksAnalysisPanel"]
    });
    var currentTasksPie = new UIMaster.ui.chart
    ({
        ui: elementList[prefix + "currentTasksPie"]
        ,width: 400
        ,height: 400
    });

    var purchaseOrderInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "purchaseOrderInfoTable"]
    });

    var dlinkPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "dlinkPanel"]
        ,items: []
        ,subComponents: []
    });
    var tasksAnalysisPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "tasksAnalysisPanel"]
        ,items: []
        ,subComponents: [prefix + "currentTasksPie",prefix + "purchaseOrderInfoTable",prefix + "dlinkPanel"]
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

    Form.purchaseOrderInfoTable=purchaseOrderInfoTable;

    Form.dlinkPanel=dlinkPanel;

    Form.TaskPanel=TaskPanel;

    Form.MainTab=MainTab;

    Form.tasksAnalysisPanel=tasksAnalysisPanel;

    Form.currentTasksPie=currentTasksPie;

    Form.purchaseOrderInfoTable=purchaseOrderInfoTable;

    Form.dlinkPanel=dlinkPanel;

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
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_CurrentStatus_invokeDynamicFunction */



