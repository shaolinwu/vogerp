/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_DateRangeSelector(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var dateTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "dateTypeUI"]
    });

    var amountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "amountUI"]
        ,validators:[
        {
            func: function() {
                
              {
                  if (this.value.length > 0) {
                      if (isNaN(this.value)) {
                        return false;
                      } else {
                        return true;
                      }
                  }
                  return true;
              }
              
            }
            ,msg: ""
        }
]    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "dateTypeUI",prefix + "amountUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [dateTypeUI,amountUI,fieldPanel]
    });

    Form.dateTypeUI=dateTypeUI;

    Form.amountUI=amountUI;

    Form.fieldPanel=fieldPanel;

    Form.dateTypeUI=dateTypeUI;

    Form.amountUI=amountUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_DateRangeSelector */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_DateRangeSelector */
    };

    Form.selectItem = org_shaolin_vogerp_commonmodel_form_DateRangeSelector_selectItem;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_DateRangeSelector_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.DateRangeSelector";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_DateRangeSelector */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_DateRangeSelector */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_DateRangeSelector_selectItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_DateRangeSelector_selectItem */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_DateRangeSelector_selectItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_DateRangeSelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_DateRangeSelector_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_DateRangeSelector_invokeDynamicFunction */



