
    var loanOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["loanOrderTable"]
    });

    var loanOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["loanOrderInfoPanel"]
        ,items: [loanOrderTable]
    });

    defaultname.loanOrderTable=loanOrderTable;
defaultname.loanOrderInfoPanel = loanOrderInfoPanel;
defaultname.loanOrderInfoPanel.init();

defaultname.Form.items.push(elementList['loanOrderInfoPanel']);

