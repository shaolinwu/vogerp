
    var gsaleOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["gsaleOrderTable"]
    });

    var gsaleOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["gsaleOrderInfoPanel"]
        ,items: [gsaleOrderTable]
    });

    defaultname.gsaleOrderTable=gsaleOrderTable;
defaultname.gsaleOrderInfoPanel = gsaleOrderInfoPanel;
defaultname.gsaleOrderInfoPanel.init();

defaultname.gsaleOrderInfoPanel.Form.items.push(elementList['gsaleOrderInfoPanel']);

