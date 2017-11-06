
    var chargeServiceTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["chargeServiceTable"]
    });

    var chargeServiceInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["chargeServiceInfoPanel"]
        ,items: [chargeServiceTable]
    });

    defaultname.chargeServiceTable=chargeServiceTable;
defaultname.chargeServiceInfoPanel = chargeServiceInfoPanel;
defaultname.chargeServiceInfoPanel.init();

defaultname.Form.items.push(elementList['chargeServiceInfoPanel']);

