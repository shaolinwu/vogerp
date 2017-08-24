
    var receivePayOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["receivePayOrderTable"]
    });

    var PayVoucherInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["PayVoucherInfoPanel"]
        ,items: [receivePayOrderTable]
    });

    defaultname.receivePayOrderTable=receivePayOrderTable;
defaultname.PayVoucherInfoPanel = PayVoucherInfoPanel;
defaultname.PayVoucherInfoPanel.init();

defaultname.Form.items.push(elementList['PayVoucherInfoPanel']);

