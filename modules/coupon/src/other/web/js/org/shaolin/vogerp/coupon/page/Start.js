/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_Start(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var code = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "code"]
    });

    var curtainImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "curtainImage"]
    });

    var startMsg = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "startMsg"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [code,curtainImage,startMsg]
    });

    Form.code=code;

    Form.curtainImage=curtainImage;

    Form.startMsg=startMsg;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_Start */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_Start */
    };

    Form.start = org_shaolin_vogerp_coupon_page_Start_start;

    Form.StartLotteryLogic = org_shaolin_vogerp_coupon_page_Start_StartLotteryLogic;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_Start_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_Start_finalizePageJs;

    Form.StartLotteryLogic_OutFunctionName = org_shaolin_vogerp_coupon_page_Start_StartLotteryLogic_OutFunctionName;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.Start";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_Start */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_Start */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_Start_start(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_Start_start */
        var o = this;
        var UIEntity = this;

					{
						$("#div-Form-0_0").animate({"left" : "-100%"}, 1000);
					}
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"start-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_Start_start */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_Start_StartLotteryLogic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_Start_StartLotteryLogic */
        var o = this;
        var UIEntity = this;

        o.StartLotteryLogic_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_Start_StartLotteryLogic */


    function org_shaolin_vogerp_coupon_page_Start_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_Start_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			}
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_Start_initPageJs */


    function org_shaolin_vogerp_coupon_page_Start_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_Start_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_Start_finalizePageJs */


    function org_shaolin_vogerp_coupon_page_Start_StartLotteryLogic_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_vogerp_coupon_page_Start_StartLotteryLogic_OutFunctionName */
        var constraint_result = true;
        var myForm;
        if (this.formName != undefined)
        {
            myForm = document.forms[this.formName];
        }
        else
        {
            var p = this.Form.parentNode;
            while(p.tagName != "FORM")
                p = p.parentNode;
            myForm = p;//document.forms[0];
        }

        var UIEntity = this;

        constraint_result = this.Form.validate();
{
			// hello, my first js.
			}        
        myForm._outname.value = "StartLotteryLogic";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_Start_StartLotteryLogic_OutFunctionName */


