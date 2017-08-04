
    var payVoucherTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["payVoucherTable"]
    });

    var PayVoucherInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["PayVoucherInfoPanel"]
        ,items: [payVoucherTable]
    });

    defaultname.payVoucherTable=payVoucherTable;
defaultname.PayVoucherInfoPanel = PayVoucherInfoPanel;
defaultname.PayVoucherInfoPanel.init();

defaultname.PayVoucherInfoPanel.Form.items.push(elementList['PayVoucherInfoPanel']);

