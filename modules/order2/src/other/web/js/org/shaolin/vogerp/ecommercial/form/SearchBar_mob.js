/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_SearchBar_mob(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var selectFilterUI = new UIMaster.ui.radiobuttongroup
    ({
        ui: elementList[prefix + "selectFilterUI"]
        ,horizontalLayout: true
        ,colCount: 3
        ,value: "1"
    });

    var citiesCbxUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "citiesCbxUI"]
    });

    var productTypeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "productTypeUI"]
    });

    var productType1UI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "productType1UI"]
    });

    var root = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "root"]
        ,items: []
        ,subComponents: [prefix + "selectFilterUI",prefix + "citiesCbxUI",prefix + "productTypeUI",prefix + "productType1UI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [selectFilterUI,citiesCbxUI,productTypeUI,productType1UI,root]
    });

    Form.selectFilterUI=selectFilterUI;

    Form.citiesCbxUI=citiesCbxUI;

    Form.productTypeUI=productTypeUI;

    Form.productType1UI=productType1UI;

    Form.root=root;

    Form.selectFilterUI=selectFilterUI;

    Form.citiesCbxUI=citiesCbxUI;

    Form.productTypeUI=productTypeUI;

    Form.productType1UI=productType1UI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_SearchBar_mob */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_SearchBar_mob */
    };

    Form.selectFilterCondition = org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectFilterCondition;

    Form.selectedCity = org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectedCity;

    Form.selectedProductType = org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectedProductType;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_SearchBar_mob_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.SearchBar_mob";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_SearchBar_mob */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_SearchBar_mob */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectFilterCondition(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectFilterCondition */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectFilterCondition-20170409-1411",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectFilterCondition */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectedCity(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectedCity */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedCity-201604102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectedCity */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectedProductType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectedProductType */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedProductType-201604102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_SearchBar_mob_selectedProductType */


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



