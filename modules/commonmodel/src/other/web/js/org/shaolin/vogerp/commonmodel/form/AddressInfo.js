/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_AddressInfo(json)
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
    });

    var cityUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "cityUILabel"]
    });

    var cityUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "cityUI"]
    });

    var districtUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "districtUILabel"]
    });

    var districtUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "districtUI"]
    });

    var streetUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "streetUILabel"]
    });

    var streetUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "streetUI"]
    });

    var blockUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "blockUILabel"]
    });

    var blockUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "blockUI"]
    });

    var zipcodeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "zipcodeUILabel"]
    });

    var zipcodeUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "zipcodeUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
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

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "parentIdUI",prefix + "countryUILabel",prefix + "countryUI",prefix + "provinceUILabel",prefix + "provinceUI",prefix + "cityUILabel",prefix + "cityUI",prefix + "districtUILabel",prefix + "districtUI",prefix + "streetUILabel",prefix + "streetUI",prefix + "blockUILabel",prefix + "blockUI",prefix + "zipcodeUILabel",prefix + "zipcodeUI",prefix + "descriptionUILabel",prefix + "descriptionUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,parentIdUI,countryUILabel,countryUI,provinceUILabel,provinceUI,cityUILabel,cityUI,districtUILabel,districtUI,streetUILabel,streetUI,blockUILabel,blockUI,zipcodeUILabel,zipcodeUI,descriptionUILabel,descriptionUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.parentIdUI=parentIdUI;

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

    Form.blockUILabel=blockUILabel;

    Form.blockUI=blockUI;

    Form.zipcodeUILabel=zipcodeUILabel;

    Form.zipcodeUI=zipcodeUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.parentIdUI=parentIdUI;

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

    Form.blockUILabel=blockUILabel;

    Form.blockUI=blockUI;

    Form.zipcodeUILabel=zipcodeUILabel;

    Form.zipcodeUI=zipcodeUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_AddressInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_AddressInfo */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_AddressInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_AddressInfo_Cancel;

    Form.selectProvince = org_shaolin_vogerp_commonmodel_form_AddressInfo_selectProvince;

    Form.selectCity = org_shaolin_vogerp_commonmodel_form_AddressInfo_selectCity;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_AddressInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.AddressInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_AddressInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_AddressInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfo_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160615-215501",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfo_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160615-215501",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfo_selectProvince(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfo_selectProvince */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectProvince-201604102211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfo_selectProvince */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfo_selectCity(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfo_selectCity */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectCity-201604152311",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfo_selectCity */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfo_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfo_invokeDynamicFunction */



