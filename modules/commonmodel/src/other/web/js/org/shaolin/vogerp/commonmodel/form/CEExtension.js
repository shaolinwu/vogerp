/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEExtension(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var ceNameUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "ceNameUI"]
    });

    var ceListUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "ceListUI"]
    });

    var ceItemsUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "ceItemsUI"]
    });

    var constantItemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "constantItemTable"]
        ,editable: true
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

    var attributePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel"]
        ,items: []
        ,subComponents: [prefix + "ceNameUI",prefix + "ceListUI",prefix + "ceItemsUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "attributePanel",prefix + "constantItemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [ceNameUI,ceListUI,ceItemsUI,constantItemTable,okbtn,cancelbtn,fieldPanel,attributePanel,actionPanel]
    });

    Form.ceNameUI=ceNameUI;

    Form.ceListUI=ceListUI;

    Form.ceItemsUI=ceItemsUI;

    Form.constantItemTable=constantItemTable;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.attributePanel=attributePanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEExtension */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEExtension */
    };

    Form.createItem = org_shaolin_vogerp_commonmodel_form_CEExtension_createItem;

    Form.deleteItem = org_shaolin_vogerp_commonmodel_form_CEExtension_deleteItem;

    Form.Save = org_shaolin_vogerp_commonmodel_form_CEExtension_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_CEExtension_Cancel;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEExtension";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEExtension */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEExtension */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtension_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtension_createItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_tretrqew",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtension_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtension_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtension_deleteItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"delete_fqw23423",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtension_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtension_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtension_Save */

        {
            this.constantItemTable.syncBodyDataToServer();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveItem_2040990210",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtension_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtension_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtension_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1358686533",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtension_Cancel */



