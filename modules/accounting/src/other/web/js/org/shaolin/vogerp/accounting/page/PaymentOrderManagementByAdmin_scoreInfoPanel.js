
    var scoreTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["scoreTable"]
    });

    var scoreInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["scoreInfoPanel"]
        ,items: [scoreTable]
    });

    defaultname.scoreTable=scoreTable;
defaultname.scoreInfoPanel = scoreInfoPanel;
defaultname.scoreInfoPanel.init();

defaultname.Form.items.push(elementList['scoreInfoPanel']);

