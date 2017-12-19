
    var complainingTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["complainingTable"]
    });

    var complainingListPanel = new UIMaster.ui.panel
    ({
        ui: elementList["complainingListPanel"]
        ,items: [complainingTable]
    });

    defaultname.complainingTable=complainingTable;
defaultname.complainingListPanel = complainingListPanel;
defaultname.complainingListPanel.init();

defaultname.Form.items.push(elementList['complainingListPanel']);

