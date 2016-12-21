/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_SearchBar_mob(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var citiesCbxIU = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "citiesCbxIU"]
    });

    var productTypeUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "productTypeUI"]
    });

    var searchContext = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "searchContext"]
    });

    var firstRow = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "firstRow"]
        ,items: []
        ,subComponents: [prefix + "citiesCbxIU",prefix + "productTypeUI"]
    });

    var root = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "root"]
        ,items: []
        ,subComponents: [prefix + "firstRow",prefix + "searchContext"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [citiesCbxIU,productTypeUI,searchContext,root,firstRow]
    });

    Form.citiesCbxIU=citiesCbxIU;

    Form.productTypeUI=productTypeUI;

    Form.searchContext=searchContext;

    Form.root=root;

    Form.firstRow=firstRow;

    Form.citiesCbxIU=citiesCbxIU;

    Form.productTypeUI=productTypeUI;

    Form.searchContext=searchContext;

    Form.firstRow=firstRow;

    Form.citiesCbxIU=citiesCbxIU;

    Form.productTypeUI=productTypeUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_SearchBar_mob */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_SearchBar_mob */
    };

    Form.selectCity = org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectCity;

    Form.selectProductType = org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectProductType;

    Form.search = org_shaolin_vogerp_ecommercial_form_SearchBar_mob_search;

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
    function org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectProductType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectProductType */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectProductType-201604102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectProductType */


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
    function org_shaolin_vogerp_ecommercial_form_SearchBar_mob_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        var constraint_result = this.Form.validate();
        if (constraint_result != true && constraint_result != null) {
            return false;
        }

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_invokeDynamicFunction */



