/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductRelationShip(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var organizationTree = new UIMaster.ui.webtree
    ({
        ui: elementList[prefix + "organizationTree"]
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

    var detailPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "detailPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: []
    });

    var treePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "treePanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "parentIdUI",prefix + "organizationTree"]
    });

    var rootPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "rootPanel"]
        ,items: []
        ,subComponents: [prefix + "treePanel",prefix + "detailPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,organizationTree,okbtn,cancelbtn,rootPanel,treePanel,detailPanel,actionPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.organizationTree=organizationTree;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.rootPanel=rootPanel;

    Form.treePanel=treePanel;

    Form.detailPanel=detailPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductRelationShip */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductRelationShip */
    };

    Form.clickTreeNode = org_shaolin_vogerp_productmodel_form_ProductRelationShip_clickTreeNode;

    Form.createSubOrg = org_shaolin_vogerp_productmodel_form_ProductRelationShip_createSubOrg;

    Form.expandTree = org_shaolin_vogerp_productmodel_form_ProductRelationShip_expandTree;

    Form.deleteNode = org_shaolin_vogerp_productmodel_form_ProductRelationShip_deleteNode;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductRelationShip_Cancel;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductRelationShip";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductRelationShip */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductRelationShip */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductRelationShip_clickTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductRelationShip_clickTreeNode */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showSubOrgInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        {   
            $(elementList["organizationTreeForm.detailPanel"]).css("height","270px");
            $(elementList["organizationTreeForm.newOrgForm.okbtn"]).addClass("ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only");
            $(elementList["organizationTreeForm.newOrgForm.cancelbtn"]).addClass("ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only");
            $(elementList["organizationTreeForm.newOrgForm.okbtn"]).parent().css("text-align","right");
            $(elementList["organizationTreeForm.newOrgForm.cancelbtn"]).parent().css("text-align","right");
        }
        
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductRelationShip_clickTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductRelationShip_createSubOrg(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductRelationShip_createSubOrg */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createSubOrgInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductRelationShip_createSubOrg */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductRelationShip_expandTree(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductRelationShip_expandTree */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"expandTreeNode",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductRelationShip_expandTree */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductRelationShip_deleteNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductRelationShip_deleteNode */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteTreeNode",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductRelationShip_deleteNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductRelationShip_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductRelationShip_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-1509902581",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductRelationShip_Cancel */



