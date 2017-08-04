
    var inStoreOrderInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["inStoreOrderInfoTable"]
    });

    var inStoreOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["inStoreOrderInfoPanel"]
        ,items: [inStoreOrderInfoTable]
    });

    defaultname.inStoreOrderInfoTable=inStoreOrderInfoTable;
defaultname.inStoreOrderInfoPanel = inStoreOrderInfoPanel;
defaultname.inStoreOrderInfoPanel.init();

defaultname.inStoreOrderInfoPanel.Form.items.push(elementList['inStoreOrderInfoPanel']);

