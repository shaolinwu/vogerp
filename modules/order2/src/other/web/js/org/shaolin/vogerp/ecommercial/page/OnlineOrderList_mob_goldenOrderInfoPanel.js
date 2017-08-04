
    var goldenOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["goldenOrderTable"]
    });

    var goldenOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["goldenOrderInfoPanel"]
        ,items: [goldenOrderTable]
    });

    defaultname.goldenOrderTable=goldenOrderTable;
defaultname.goldenOrderInfoPanel = goldenOrderInfoPanel;
defaultname.goldenOrderInfoPanel.init();

defaultname.goldenOrderInfoPanel.Form.items.push(elementList['goldenOrderInfoPanel']);

