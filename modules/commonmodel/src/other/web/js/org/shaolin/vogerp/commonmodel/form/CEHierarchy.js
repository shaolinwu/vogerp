/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEHierarchy(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var selectCENameUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectCENameUI"]
    });

    var ceTree = new UIMaster.ui.webtree
    ({
        ui: elementList[prefix + "ceTree"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: []
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "selectCENameUI",prefix + "ceTree"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [selectCENameUI,ceTree,fieldPanel,actionPanel]
    });

    Form.selectCENameUI=selectCENameUI;

    Form.ceTree=ceTree;

    Form.fieldPanel=fieldPanel;

    Form.selectCENameUI=selectCENameUI;

    Form.ceTree=ceTree;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchy */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchy */
    };

    Form.createItem = org_shaolin_vogerp_commonmodel_form_CEHierarchy_createItem;

    Form.addChild = org_shaolin_vogerp_commonmodel_form_CEHierarchy_addChild;

    Form.selectFreeCE = org_shaolin_vogerp_commonmodel_form_CEHierarchy_selectFreeCE;

    Form.openItem = org_shaolin_vogerp_commonmodel_form_CEHierarchy_openItem;

    Form.deleteItem = org_shaolin_vogerp_commonmodel_form_CEHierarchy_deleteItem;

    Form.refreshItem = org_shaolin_vogerp_commonmodel_form_CEHierarchy_refreshItem;

    Form.dblclickTreeNode = org_shaolin_vogerp_commonmodel_form_CEHierarchy_dblclickTreeNode;

    Form.clickTreeNode = org_shaolin_vogerp_commonmodel_form_CEHierarchy_clickTreeNode;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CEHierarchy_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEHierarchy";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchy */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchy */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_createItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_20151104",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_addChild(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_addChild */
        var o = this;
        var UIEntity = this;

         {
          var o = this;
	      if (o.ceTree._selectedNodeName == null || o.ceTree._selectedNodeName == "") {
	          return;
	      }
          new UIMaster.ui.dialog({
              dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,
              message:'\u662F\u5426\u6DFB\u52A0\u5B50\u8282\u70B9\u5230: ' + this.ceTree._selectedNodeName,
              messageType:UIMaster.ui.dialog.Information,
              optionType:UIMaster.ui.dialog.YES_NO_OPTION,
              title:'',
              height:150,
              width:300,
              handler: function() {
                 if (o.ceTree._selectedNodeName == null || o.ceTree._selectedNodeName == "") {
                     return;
                 }
                 o.ceTree.sync();
                 UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"addChild_20151104",UIMaster.getValue(eventsource),o.__entityName);
              }
          }).open();
          return;
         }
         
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"addChild_20151104",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_addChild */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_selectFreeCE(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_selectFreeCE */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectFreeCE_20151104",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_selectFreeCE */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_openItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_openItem */
        var o = this;
        var UIEntity = this;

	        {
	           this.ceTree.sync();
	        }
	        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openItem_20151104",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_openItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_deleteItem */
        var o = this;
        var UIEntity = this;

         {
          var o = this;
          if (o.ceTree._selectedNodeName == null || o.ceTree._selectedNodeName == "") {
              return;
          }
          new UIMaster.ui.dialog({
              dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,
              message:'Are you sure delete this node?',
              messageType:UIMaster.ui.dialog.Warning,
              optionType:UIMaster.ui.dialog.YES_NO_OPTION,
              title:'\u5220\u9664\u8282\u70B9?',
              height:150,
              width:300,
              handler: function() {
                 if (o.ceTree._selectedNodeName == null || o.ceTree._selectedNodeName == "") {
		             return;
		         }
		         o.ceTree.sync();
                 UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_2040990210",UIMaster.getValue(eventsource),o.__entityName);
              }
          }).open();
          return;
         }
         
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_2040990210",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_refreshItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_refreshItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refreshItem_20151108",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_refreshItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_dblclickTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_dblclickTreeNode */
        var o = this;
        var UIEntity = this;

        {   
            this.openItem(this.ceTree, event);
        }
            }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_dblclickTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_clickTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_clickTreeNode */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_clickTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_invokeDynamicFunction */



