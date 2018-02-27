/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_OrderManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var verifyHintUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "verifyHintUI"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "machiningInfoPanel",prefix + "goldenOrderInfoPanel",prefix + "rentOrderInfoPanel",prefix + "interestEOrderPanel"]
    });
    var machiningTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "machiningTable"]
    });

    var machiningInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "machiningInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "machiningTable"]
    });
    var goldenOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "goldenOrderTable"]
    });

    var goldenOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "goldenOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "goldenOrderTable"]
    });
    var rentOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "rentOrderTable"]
    });

    var rentOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "rentOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "rentOrderTable"]
    });
    var interestEOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "interestEOrderTable"]
    });

    var interestEOrderPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "interestEOrderPanel"]
        ,items: []
        ,subComponents: [prefix + "interestEOrderTable"]
    });

    var purchaseOrderLabel = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "purchaseOrderLabel"]
    });

    var saleOrderLabel = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "saleOrderLabel"]
    });

    var hintsLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "hintsLabel"]
        ,htmlValue: "您可以创建批量机械产品的采购或销售。加工零件请到“我的加工单”里添加订单。"
    });

    var loanOrderLabel = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "loanOrderLabel"]
    });

    var rentOrderLabel = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "rentOrderLabel"]
    });

    var selectRentOrderTypePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "selectRentOrderTypePanel"]
        ,style: "display:none"
        ,items: []
        ,subComponents: [prefix + "loanOrderLabel",prefix + "rentOrderLabel"]
    });

    var selectGTypePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "selectGTypePanel"]
        ,style: "display:none"
        ,items: []
        ,subComponents: [prefix + "purchaseOrderLabel",prefix + "saleOrderLabel",prefix + "hintsLabel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [verifyHintUI,functionsTab,purchaseOrderLabel,saleOrderLabel,hintsLabel,loanOrderLabel,rentOrderLabel,selectGTypePanel,selectRentOrderTypePanel]
    });

    Form.verifyHintUI=verifyHintUI;

    Form.functionsTab=functionsTab;

    Form.machiningInfoPanel=machiningInfoPanel;

    Form.machiningTable=machiningTable;

    Form.goldenOrderInfoPanel=goldenOrderInfoPanel;

    Form.goldenOrderTable=goldenOrderTable;

    Form.rentOrderInfoPanel=rentOrderInfoPanel;

    Form.rentOrderTable=rentOrderTable;

    Form.interestEOrderPanel=interestEOrderPanel;

    Form.interestEOrderTable=interestEOrderTable;

    Form.purchaseOrderLabel=purchaseOrderLabel;

    Form.saleOrderLabel=saleOrderLabel;

    Form.hintsLabel=hintsLabel;

    Form.loanOrderLabel=loanOrderLabel;

    Form.rentOrderLabel=rentOrderLabel;

    Form.selectGTypePanel=selectGTypePanel;

    Form.purchaseOrderLabel=purchaseOrderLabel;

    Form.saleOrderLabel=saleOrderLabel;

    Form.hintsLabel=hintsLabel;

    Form.selectRentOrderTypePanel=selectRentOrderTypePanel;

    Form.loanOrderLabel=loanOrderLabel;

    Form.rentOrderLabel=rentOrderLabel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_OrderManagement */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_OrderManagement */
    };

    Form.createGOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_createGOrder;

    Form.selectedPurchaseOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedPurchaseOrder;

    Form.selectedSaleOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedSaleOrder;

    Form.createCopyGOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_createCopyGOrder;

    Form.openGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder;

    Form.acceptGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptGoldenOrder;

    Form.acceptRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptRentOrder;

    Form.acceptMachiningOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptMachiningOrder;

    Form.createRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_createRentOrder;

    Form.selectedLoanOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedLoanOrder;

    Form.loanMasterOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_loanMasterOrder;

    Form.selectedRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedRentOrder;

    Form.openRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrder;

    Form.createMachiningOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_createMachiningOrder;

    Form.createCopyMachiningOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_createCopyMachiningOrder;

    Form.openMachiningOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_openMachiningOrder;

    Form.responseOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_responseOrder;

    Form.capSettings = org_shaolin_vogerp_ecommercial_page_OrderManagement_capSettings;

    Form.initPageJs = org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.ecommercial.page.OrderManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_page_OrderManagement */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_page_OrderManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_createGOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_createGOrder */
        var o = this;
        var UIEntity = this;

	        {   
	          var o = this;
	          if (this.goldenOrderTable.selectedIndex >= 0) {
		          new UIMaster.ui.dialog({
		              dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,
		              message:'\u662F\u5426\u6309\u7167\u9009\u4E2D\u8BA2\u5355\u590D\u5236\u4E00\u6761\u5417?',
		              messageType:UIMaster.ui.dialog.Information,
		              optionType:UIMaster.ui.dialog.YES_NO_OPTION,
		              title:'',
		              height:150,
		              width:300,
		              handler: function() {
		                  UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCopyGOrder-20160602",UIMaster.getValue(eventsource),o.__entityName);
		              },
		              noHandler: function() {
		                  $(o.selectGTypePanel).css("display", "block");
	                      $(o.selectGTypePanel).dialog();
		              },
		          }).open();
		          return;
	          } else {
	              $(this.selectGTypePanel).css("display", "block");
	              $(this.selectGTypePanel).dialog();
	          }
	        }
	            }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_createGOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedPurchaseOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedPurchaseOrder */
        var o = this;
        var UIEntity = this;

		        {   
		           $(this.selectGTypePanel).dialog("close");
		        }
		        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedPurchaseOrder-20170106-214008",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedPurchaseOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedSaleOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedSaleOrder */
        var o = this;
        var UIEntity = this;

		        {   
		           $(this.selectGTypePanel).dialog("close");
		        }
		        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedSaleOrder-20170106-214008",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedSaleOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_createCopyGOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_createCopyGOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCopyGOrder-20160602",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_createCopyGOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openGoldenOrder-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"acceptGoldenOrder-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"acceptRentOrder-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptMachiningOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptMachiningOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"acceptMachiningOrder-2017-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptMachiningOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_createRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_createRentOrder */
        var o = this;
        var UIEntity = this;

	        {   
	           $(this.selectRentOrderTypePanel).css("display", "block");
	           $(this.selectRentOrderTypePanel).dialog();
	        }
	            }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_createRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedLoanOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedLoanOrder */
        var o = this;
        var UIEntity = this;

	        {   
	           $(this.selectRentOrderTypePanel).dialog("close");
	        }
	        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedLoanOrder-20160602",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedLoanOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_loanMasterOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_loanMasterOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"loanMasterOrder-20170613-234",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_loanMasterOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedRentOrder */
        var o = this;
        var UIEntity = this;

	        {   
	           $(this.selectRentOrderTypePanel).dialog("close");
	        }
	        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedRentOrder-20160602",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_selectedRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openRentOrder-201606023543",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_createMachiningOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_createMachiningOrder */
        var o = this;
        var UIEntity = this;

	        {   
	          var o = this;
	          if (this.machiningTable.selectedIndex >= 0) {
		          new UIMaster.ui.dialog({
		              dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,
		              message:'\u662F\u5426\u6309\u7167\u9009\u4E2D\u8BA2\u5355\u590D\u5236\u4E00\u6761\u5417?',
		              messageType:UIMaster.ui.dialog.Information,
		              optionType:UIMaster.ui.dialog.YES_NO_OPTION,
		              title:'',
		              height:150,
		              width:300,
		              handler: function() {
		                  UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCopyMachiningOrder-20170125",UIMaster.getValue(eventsource),o.__entityName);
		              },
		              noHandler: function() {
		                  UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createMachiningOrder-20170125",UIMaster.getValue(eventsource),o.__entityName);
		              },
		          }).open();
		          return;
	          } 
	        }
	        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createMachiningOrder-20170125",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_createMachiningOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_createCopyMachiningOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_createCopyMachiningOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCopyMachiningOrder-20170125",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_createCopyMachiningOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_openMachiningOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_openMachiningOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openMachiningOrder-20170125",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_openMachiningOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_responseOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_responseOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"responseOrder-20160618-2044",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_responseOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_capSettings(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_capSettings */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"capSettings-20170404-1029",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_capSettings */


    function org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs */



