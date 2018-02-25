
    var memberServiceTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["memberServiceTable"]
    });

    var memberServiceInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["memberServiceInfoPanel"]
        ,items: [memberServiceTable]
    });

    defaultname.memberServiceTable=memberServiceTable;
defaultname.memberServiceInfoPanel = memberServiceInfoPanel;
defaultname.memberServiceInfoPanel.init();

defaultname.Form.items.push(elementList['memberServiceInfoPanel']);

