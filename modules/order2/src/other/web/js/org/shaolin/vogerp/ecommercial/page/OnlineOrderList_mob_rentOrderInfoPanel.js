
    var rentOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["rentOrderTable"]
    });

    var rentOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["rentOrderInfoPanel"]
        ,items: [rentOrderTable]
    });

    defaultname.rentOrderTable=rentOrderTable;
defaultname.rentOrderInfoPanel = rentOrderInfoPanel;
defaultname.rentOrderInfoPanel.init();

defaultname.rentOrderInfoPanel.Form.items.push(elementList['rentOrderInfoPanel']);

