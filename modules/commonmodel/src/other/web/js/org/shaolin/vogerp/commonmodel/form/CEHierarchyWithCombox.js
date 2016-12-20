/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var ceNameUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "ceNameUI"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var filterUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "filterUI"]
        ,width: "30px"
        ,height: "30px"
        ,src: "/cefilter.png"
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "ceNameUI",prefix + "typeUI",prefix + "filterUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [ceNameUI,typeUI,filterUI,fieldPanel]
    });

    Form.ceNameUI=ceNameUI;

    Form.typeUI=typeUI;

    Form.filterUI=filterUI;

    Form.fieldPanel=fieldPanel;

    Form.ceNameUI=ceNameUI;

    Form.typeUI=typeUI;

    Form.filterUI=filterUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox */
    };

    Form.selectItem = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_selectItem;

    Form.showFilter = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_showFilter;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEHierarchyWithCombox";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_selectItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_selectItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectItem_20160804_5433",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_selectItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_showFilter(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_showFilter */
        var o = this;
        var UIEntity = this;

         {
          var o = this;
          new UIMaster.ui.dialog({
              dialogType: UIMaster.ui.dialog.INPUT_DIALOG,
              message:'\u8BF7\u8F93\u5165\u8FC7\u6EE4\u6761\u4EF6\uFF1A',
              messageType:UIMaster.ui.dialog.Information,
              optionType:UIMaster.ui.dialog.YES_NO_OPTION,
              title:'',
              height:150,
              width:300,
              handler: function(v) {
                 if (this.value == null || this.value == "") return;
                 UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showFilter_20160806_23423",UIMaster.getValue(eventsource),o.__entityName);
              }
          }).open();
          return;
         }
         
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showFilter_20160806_23423",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_showFilter */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_invokeDynamicFunction */



