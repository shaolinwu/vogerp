/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_SearchBar_mob(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var citiesCbx = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "citiesCbx"]
    });

    var moreLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "moreLabel"]
    });

    var searchContext = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "searchContext"]
    });

    var firstRow = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "firstRow"]
        ,items: []
        ,subComponents: [prefix + "citiesCbx",prefix + "moreLabel"]
    });

    var root = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "root"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "firstRow",prefix + "searchContext"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [citiesCbx,moreLabel,searchContext,root,firstRow]
    });

    Form.citiesCbx=citiesCbx;

    Form.moreLabel=moreLabel;

    Form.searchContext=searchContext;

    Form.root=root;

    Form.firstRow=firstRow;

    Form.citiesCbx=citiesCbx;

    Form.moreLabel=moreLabel;

    Form.searchContext=searchContext;

    Form.firstRow=firstRow;

    Form.citiesCbx=citiesCbx;

    Form.moreLabel=moreLabel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_SearchBar_mob */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_SearchBar_mob */
    };

    Form.selectCity = org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectCity;

    Form.search = org_shaolin_vogerp_ecommercial_form_SearchBar_mob_search;

    Form.moreCondition = org_shaolin_vogerp_ecommercial_form_SearchBar_mob_moreCondition;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_SearchBar_mob_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.SearchBar_mob";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_SearchBar_mob */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_SearchBar_mob */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectCity(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectCity */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectCity-201604102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectCity */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_SearchBar_mob_search(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_search */
        var o = this;
        var UIEntity = this;

        {   
        if (event.keyCode != 13) {
          return;
        }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"search-20160410-2211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_search */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_SearchBar_mob_moreCondition(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_moreCondition */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"moreCondition-20160410-2211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_moreCondition */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_SearchBar_mob_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_invokeDynamicFunction */



