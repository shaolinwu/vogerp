
    var outStoreOrderInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["outStoreOrderInfoTable"]
    });

    var outStoreOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["outStoreOrderInfoPanel"]
        ,items: [outStoreOrderInfoTable]
    });

    defaultname.outStoreOrderInfoTable=outStoreOrderInfoTable;
defaultname.outStoreOrderInfoPanel = outStoreOrderInfoPanel;
defaultname.outStoreOrderInfoPanel.init();

defaultname.outStoreOrderInfoPanel.Form.items.push(elementList['outStoreOrderInfoPanel']);

