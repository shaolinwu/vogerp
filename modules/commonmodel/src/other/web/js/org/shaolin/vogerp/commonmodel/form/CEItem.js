/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEItem(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var ceNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "ceNameUILabel"]
    });

    var ceNameUI = new UIMaster.ui.label
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

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var intValueUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "intValueUILabel"]
    });

    var intValueUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "intValueUI"]
    });

    var strValueUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "strValueUILabel"]
    });

    var strValueUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "strValueUI"]
    });

    var iconUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "iconUILabel"]
    });

    var iconUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "iconUI"]
    });

    var bigIconUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bigIconUILabel"]
    });

    var bigIconUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "bigIconUI"]
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
        ,subComponents: [prefix + "ceNameUILabel",prefix + "ceNameUI",prefix + "i18nKeyUILabel",prefix + "i18nKeyUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "intValueUILabel",prefix + "intValueUI",prefix + "strValueUILabel",prefix + "strValueUI",prefix + "iconUILabel",prefix + "iconUI",prefix + "bigIconUILabel",prefix + "bigIconUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [ceNameUILabel,ceNameUI,i18nKeyUILabel,i18nKeyUI,descriptionUILabel,descriptionUI,intValueUILabel,intValueUI,strValueUILabel,strValueUI,iconUILabel,iconUI,bigIconUILabel,bigIconUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.ceNameUILabel=ceNameUILabel;

    Form.ceNameUI=ceNameUI;

    Form.i18nKeyUILabel=i18nKeyUILabel;

    Form.i18nKeyUI=i18nKeyUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.intValueUILabel=intValueUILabel;

    Form.intValueUI=intValueUI;

    Form.strValueUILabel=strValueUILabel;

    Form.strValueUI=strValueUI;

    Form.iconUILabel=iconUILabel;

    Form.iconUI=iconUI;

    Form.bigIconUILabel=bigIconUILabel;

    Form.bigIconUI=bigIconUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.ceNameUILabel=ceNameUILabel;

    Form.ceNameUI=ceNameUI;

    Form.i18nKeyUILabel=i18nKeyUILabel;

    Form.i18nKeyUI=i18nKeyUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.intValueUILabel=intValueUILabel;

    Form.intValueUI=intValueUI;

    Form.strValueUILabel=strValueUILabel;

    Form.strValueUI=strValueUI;

    Form.iconUILabel=iconUILabel;

    Form.iconUI=iconUI;

    Form.bigIconUILabel=bigIconUILabel;

    Form.bigIconUI=bigIconUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEItem */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEItem */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_CEItem_Save;

    Form.selectImage = org_shaolin_vogerp_commonmodel_form_CEItem_selectImage;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_CEItem_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CEItem_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEItem";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEItem */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEItem */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEItem_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEItem_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1988586262",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEItem_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEItem_selectImage(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEItem_selectImage */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectImage-1317628417",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEItem_selectImage */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEItem_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEItem_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1317628417",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEItem_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEItem_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEItem_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEItem_invokeDynamicFunction */



