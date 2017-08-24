
    var productOrderInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["productOrderInfoTable"]
    });

    var productOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["productOrderInfoPanel"]
        ,items: [productOrderInfoTable]
    });

    defaultname.productOrderInfoTable=productOrderInfoTable;
defaultname.productOrderInfoPanel = productOrderInfoPanel;
defaultname.productOrderInfoPanel.init();

defaultname.Form.items.push(elementList['productOrderInfoPanel']);

