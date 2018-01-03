
    var organizationInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["organizationInfoTable"]
    });

    var organizationInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["organizationInfoPanel"]
        ,items: [organizationInfoTable]
    });

    defaultname.organizationInfoTable=organizationInfoTable;
defaultname.organizationInfoPanel = organizationInfoPanel;
defaultname.organizationInfoPanel.init();

defaultname.Form.items.push(elementList['organizationInfoPanel']);

