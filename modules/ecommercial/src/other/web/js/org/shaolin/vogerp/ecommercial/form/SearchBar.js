/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_SearchBar(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var citiesCbx = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "citiesCbx"]
    });

    var searchContext = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "searchContext"]
    });

    var searchButton = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "searchButton"]
    });

    var moreConditionsUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "moreConditionsUI"]
    });

    var root = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "root"]
        ,items: []
        ,subComponents: [prefix + "citiesCbx",prefix + "searchContext",prefix + "searchButton",prefix + "moreConditionsUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [citiesCbx,searchContext,searchButton,moreConditionsUI,root]
    });

    Form.citiesCbx=citiesCbx;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.moreConditionsUI=moreConditionsUI;

    Form.root=root;

    Form.citiesCbx=citiesCbx;

    Form.searchContext=searchContext;

    Form.searchButton=searchButton;

    Form.moreConditionsUI=moreConditionsUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_SearchBar */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_SearchBar */
    };

    Form.selectCity = org_shaolin_vogerp_ecommercial_form_SearchBar_selectCity;

    Form.openMoreConditions = org_shaolin_vogerp_ecommercial_form_SearchBar_openMoreConditions;

    Form.search = org_shaolin_vogerp_ecommercial_form_SearchBar_search;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_SearchBar_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.SearchBar";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_SearchBar */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_SearchBar */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_SearchBar_selectCity(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_selectCity */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectCity-201604102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_selectCity */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_SearchBar_openMoreConditions(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_openMoreConditions */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openMoreConditions-201604102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_openMoreConditions */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_SearchBar_search(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_search */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"search-201506102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_search */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_SearchBar_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_invokeDynamicFunction */



