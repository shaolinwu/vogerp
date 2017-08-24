
    var interestEOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["interestEOrderTable"]
    });

    var interestEOrderPanel = new UIMaster.ui.panel
    ({
        ui: elementList["interestEOrderPanel"]
        ,items: [interestEOrderTable]
    });

    defaultname.interestEOrderTable=interestEOrderTable;
defaultname.interestEOrderPanel = interestEOrderPanel;
defaultname.interestEOrderPanel.init();

defaultname.Form.items.push(elementList['interestEOrderPanel']);

