/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_AddressInfoMap(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var uiCountry = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "uiCountry"]
    });

    var uiCity = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "uiCity"]
    });

    var uiStreet = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "uiStreet"]
    });

    var searchBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "searchBtn"]
    });

    var uiMap = new UIMaster.ui.map
    ({
        ui: elementList[prefix + "uiMap"]
        ,width: "300px"
        ,height: "240px"
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var addressPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "addressPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "uiCountry",prefix + "uiCity",prefix + "uiStreet",prefix + "searchBtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "addressPanel",prefix + "uiMap"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [uiCountry,uiCity,uiStreet,searchBtn,uiMap,okbtn,cancelbtn,fieldPanel,addressPanel,actionPanel]
    });

    Form.uiCountry=uiCountry;

    Form.uiCity=uiCity;

    Form.uiStreet=uiStreet;

    Form.searchBtn=searchBtn;

    Form.uiMap=uiMap;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.addressPanel=addressPanel;

    Form.uiCountry=uiCountry;

    Form.uiCity=uiCity;

    Form.uiStreet=uiStreet;

    Form.searchBtn=searchBtn;

    Form.uiMap=uiMap;

    Form.addressPanel=addressPanel;

    Form.uiCountry=uiCountry;

    Form.uiCity=uiCity;

    Form.uiStreet=uiStreet;

    Form.searchBtn=searchBtn;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_AddressInfoMap */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_AddressInfoMap */
    };

    Form.Search = org_shaolin_vogerp_commonmodel_form_AddressInfoMap_Search;

    Form.Save = org_shaolin_vogerp_commonmodel_form_AddressInfoMap_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_AddressInfoMap_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_AddressInfoMap_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.AddressInfoMap";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_AddressInfoMap */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_AddressInfoMap */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfoMap_Search(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfoMap_Search */
        var o = this;
        var UIEntity = this;

        {
           var criteria = this.uiCountry.getValue() + this.uiCity.getValue() + this.uiStreet.getValue()
           this.uiMap.search(criteria);
        }
            }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfoMap_Search */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfoMap_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfoMap_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail946006518",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfoMap_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfoMap_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfoMap_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1136099838",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfoMap_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfoMap_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfoMap_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfoMap_invokeDynamicFunction */



