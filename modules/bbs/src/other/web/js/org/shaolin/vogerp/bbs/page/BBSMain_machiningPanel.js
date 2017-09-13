
    var machiningTopicTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["machiningTopicTable"]
    });

    var machiningPanel = new UIMaster.ui.panel
    ({
        ui: elementList["machiningPanel"]
        ,items: [machiningTopicTable]
    });

    defaultname.machiningTopicTable=machiningTopicTable;
defaultname.machiningPanel = machiningPanel;
defaultname.machiningPanel.init();

defaultname.Form.items.push(elementList['machiningPanel']);

