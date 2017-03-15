/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_form_AddressInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var mobileUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "mobileUILabel"]
    });

    var mobileUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "mobileUI"]
    });

    var countryUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "countryUILabel"]
    });

    var countryUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "countryUI"]
    });

    var provinceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "provinceUILabel"]
    });

    var provinceUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "provinceUI"]
      ,allowBlank:false
    });

    var cityUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "cityUILabel"]
    });

    var cityUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "cityUI"]
      ,allowBlank:false
    });

    var districtUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "districtUILabel"]
    });

    var districtUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "districtUI"]
      ,allowBlank:false
    });

    var streetUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "streetUILabel"]
    });

    var streetUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "streetUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "parentIdUI",prefix + "mobileUILabel",prefix + "mobileUI",prefix + "countryUILabel",prefix + "countryUI",prefix + "provinceUILabel",prefix + "provinceUI",prefix + "cityUILabel",prefix + "cityUI",prefix + "districtUILabel",prefix + "districtUI",prefix + "streetUILabel",prefix + "streetUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,parentIdUI,mobileUILabel,mobileUI,countryUILabel,countryUI,provinceUILabel,provinceUI,cityUILabel,cityUI,districtUILabel,districtUI,streetUILabel,streetUI,fieldPanel]
    });

    Form.idUI=idUI;

    Form.parentIdUI=parentIdUI;

    Form.mobileUILabel=mobileUILabel;

    Form.mobileUI=mobileUI;

    Form.countryUILabel=countryUILabel;

    Form.countryUI=countryUI;

    Form.provinceUILabel=provinceUILabel;

    Form.provinceUI=provinceUI;

    Form.cityUILabel=cityUILabel;

    Form.cityUI=cityUI;

    Form.districtUILabel=districtUILabel;

    Form.districtUI=districtUI;

    Form.streetUILabel=streetUILabel;

    Form.streetUI=streetUI;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.parentIdUI=parentIdUI;

    Form.mobileUILabel=mobileUILabel;

    Form.mobileUI=mobileUI;

    Form.countryUILabel=countryUILabel;

    Form.countryUI=countryUI;

    Form.provinceUILabel=provinceUILabel;

    Form.provinceUI=provinceUI;

    Form.cityUILabel=cityUILabel;

    Form.cityUI=cityUI;

    Form.districtUILabel=districtUILabel;

    Form.districtUI=districtUI;

    Form.streetUILabel=streetUILabel;

    Form.streetUI=streetUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_form_AddressInfo */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_form_AddressInfo */
    };

    Form.Save = org_shaolin_bmdp_adminconsole_form_AddressInfo_Save;

    Form.Cancel = org_shaolin_bmdp_adminconsole_form_AddressInfo_Cancel;

    Form.selectProvince = org_shaolin_bmdp_adminconsole_form_AddressInfo_selectProvince;

    Form.selectCity = org_shaolin_bmdp_adminconsole_form_AddressInfo_selectCity;

    Form.invokeDynamicFunction = org_shaolin_bmdp_adminconsole_form_AddressInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.bmdp.adminconsole.form.AddressInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_form_AddressInfo */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_form_AddressInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_AddressInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_AddressInfo_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160615-215501",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_AddressInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_AddressInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_AddressInfo_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160615-215501",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_AddressInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_AddressInfo_selectProvince(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_AddressInfo_selectProvince */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectProvince-201604102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_AddressInfo_selectProvince */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_AddressInfo_selectCity(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_AddressInfo_selectCity */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectCity-201604152311",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_AddressInfo_selectCity */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_AddressInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_AddressInfo_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_AddressInfo_invokeDynamicFunction */



