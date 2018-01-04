
    var indiviualInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["indiviualInfoTable"]
    });

    var indiviualInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["indiviualInfoPanel"]
        ,items: [indiviualInfoTable]
    });

    defaultname.indiviualInfoTable=indiviualInfoTable;
defaultname.indiviualInfoPanel = indiviualInfoPanel;
defaultname.indiviualInfoPanel.init();

defaultname.Form.items.push(elementList['indiviualInfoPanel']);

