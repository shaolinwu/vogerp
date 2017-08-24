
    var saleOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["saleOrderTable"]
    });

    var saleOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["saleOrderInfoPanel"]
        ,items: [saleOrderTable]
    });

    defaultname.saleOrderTable=saleOrderTable;
defaultname.saleOrderInfoPanel = saleOrderInfoPanel;
defaultname.saleOrderInfoPanel.init();

defaultname.Form.items.push(elementList['saleOrderInfoPanel']);

