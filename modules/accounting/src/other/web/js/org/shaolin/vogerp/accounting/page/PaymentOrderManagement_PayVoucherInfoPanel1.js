
    var hintUILabel = new UIMaster.ui.label
    ({
        ui: elementList["hintUILabel"]
    });

    var payOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["payOrderTable"]
    });

    var PayVoucherInfoPanel1 = new UIMaster.ui.panel
    ({
        ui: elementList["PayVoucherInfoPanel1"]
        ,items: [hintUILabel,payOrderTable]
    });

    defaultname.hintUILabel=hintUILabel;

    defaultname.payOrderTable=payOrderTable;
defaultname.PayVoucherInfoPanel1 = PayVoucherInfoPanel1;
defaultname.PayVoucherInfoPanel1.init();

defaultname.Form.items.push(elementList['PayVoucherInfoPanel1']);

