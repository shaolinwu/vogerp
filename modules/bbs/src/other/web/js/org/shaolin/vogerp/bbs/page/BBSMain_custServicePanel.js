
    var custServiceTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["custServiceTable"]
    });

    var custServicePanel = new UIMaster.ui.panel
    ({
        ui: elementList["custServicePanel"]
        ,items: [custServiceTable]
    });

    defaultname.custServiceTable=custServiceTable;
defaultname.custServicePanel = custServicePanel;
defaultname.custServicePanel.init();

defaultname.Form.items.push(elementList['custServicePanel']);

