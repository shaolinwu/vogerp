
    var coinPolicyTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["coinPolicyTable"]
    });

    var coinPolicyInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["coinPolicyInfoPanel"]
        ,items: [coinPolicyTable]
    });

    defaultname.coinPolicyTable=coinPolicyTable;
defaultname.coinPolicyInfoPanel = coinPolicyInfoPanel;
defaultname.coinPolicyInfoPanel.init();

defaultname.Form.items.push(elementList['coinPolicyInfoPanel']);

