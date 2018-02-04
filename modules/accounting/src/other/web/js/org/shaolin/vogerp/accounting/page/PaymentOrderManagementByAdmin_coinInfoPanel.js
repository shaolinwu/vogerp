
    var coinTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["coinTable"]
    });

    var coinInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["coinInfoPanel"]
        ,items: [coinTable]
    });

    defaultname.coinTable=coinTable;
defaultname.coinInfoPanel = coinInfoPanel;
defaultname.coinInfoPanel.init();

defaultname.Form.items.push(elementList['coinInfoPanel']);

