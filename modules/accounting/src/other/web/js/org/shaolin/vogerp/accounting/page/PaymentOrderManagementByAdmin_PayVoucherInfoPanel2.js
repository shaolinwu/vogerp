
    var payOrderRefundTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["payOrderRefundTable"]
    });

    var PayVoucherInfoPanel2 = new UIMaster.ui.panel
    ({
        ui: elementList["PayVoucherInfoPanel2"]
        ,items: [payOrderRefundTable]
    });

    defaultname.payOrderRefundTable=payOrderRefundTable;
defaultname.PayVoucherInfoPanel2 = PayVoucherInfoPanel2;
defaultname.PayVoucherInfoPanel2.init();

defaultname.Form.items.push(elementList['PayVoucherInfoPanel2']);

