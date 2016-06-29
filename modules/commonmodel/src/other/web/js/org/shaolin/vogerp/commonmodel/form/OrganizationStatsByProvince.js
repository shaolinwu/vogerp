/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var mapUI = new UIMaster.ui.map
    ({
        ui: elementList[prefix + "mapUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "mapUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [mapUI,fieldPanel]
    });

    Form.mapUI=mapUI;

    Form.fieldPanel=fieldPanel;

    Form.mapUI=mapUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince */
    };

    Form.showCityStats = org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince_showCityStats;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.OrganizationStatsByProvince";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince_showCityStats(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince_showCityStats */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showCityStats-20160626-1139",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince_showCityStats */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince_invokeDynamicFunction */



