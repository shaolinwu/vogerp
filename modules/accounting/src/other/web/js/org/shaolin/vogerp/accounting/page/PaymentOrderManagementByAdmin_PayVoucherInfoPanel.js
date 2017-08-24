
    var receivepayOrderRequestTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["receivepayOrderRequestTable"]
    });

    var PayVoucherInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["PayVoucherInfoPanel"]
        ,items: [receivepayOrderRequestTable]
    });

    defaultname.receivepayOrderRequestTable=receivepayOrderRequestTable;
defaultname.PayVoucherInfoPanel = PayVoucherInfoPanel;
defaultname.PayVoucherInfoPanel.init();

defaultname.Form.items.push(elementList['PayVoucherInfoPanel']);

