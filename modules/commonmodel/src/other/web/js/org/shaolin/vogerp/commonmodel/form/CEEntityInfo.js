/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEEntityInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var ceNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "ceNameUILabel"]
    });

    var ceNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "ceNameUI"]
    });

    var i18nKeyUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "i18nKeyUILabel"]
    });

    var i18nKeyUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "i18nKeyUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var iconUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "iconUILabel"]
    });

    var iconUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "iconUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "ceNameUILabel",prefix + "ceNameUI",prefix + "i18nKeyUILabel",prefix + "i18nKeyUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "iconUILabel",prefix + "iconUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,ceNameUILabel,ceNameUI,i18nKeyUILabel,i18nKeyUI,descriptionUILabel,descriptionUI,iconUILabel,iconUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.ceNameUILabel=ceNameUILabel;

    Form.ceNameUI=ceNameUI;

    Form.i18nKeyUILabel=i18nKeyUILabel;

    Form.i18nKeyUI=i18nKeyUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.iconUILabel=iconUILabel;

    Form.iconUI=iconUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.ceNameUILabel=ceNameUILabel;

    Form.ceNameUI=ceNameUI;

    Form.i18nKeyUILabel=i18nKeyUILabel;

    Form.i18nKeyUI=i18nKeyUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.iconUILabel=iconUILabel;

    Form.iconUI=iconUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEEntityInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEEntityInfo */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_CEEntityInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_CEEntityInfo_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CEEntityInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEEntityInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEEntityInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEEntityInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEEntityInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEEntityInfo_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1988586262",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEEntityInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEEntityInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEEntityInfo_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1317628417",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEEntityInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEEntityInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEEntityInfo_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEEntityInfo_invokeDynamicFunction */



