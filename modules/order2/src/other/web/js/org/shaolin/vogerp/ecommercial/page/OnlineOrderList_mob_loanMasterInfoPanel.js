
    var loanMasterTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["loanMasterTable"]
    });

    var loanMasterInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["loanMasterInfoPanel"]
        ,items: [loanMasterTable]
    });

    defaultname.loanMasterTable=loanMasterTable;
defaultname.loanMasterInfoPanel = loanMasterInfoPanel;
defaultname.loanMasterInfoPanel.init();

defaultname.Form.items.push(elementList['loanMasterInfoPanel']);

