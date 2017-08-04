
    var storageItemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList["storageItemTable"]
    });

    var storageItemPanel = new UIMaster.ui.panel
    ({
        ui: elementList["storageItemPanel"]
        ,items: [storageItemTable]
    });

    defaultname.storageItemTable=storageItemTable;
defaultname.storageItemPanel = storageItemPanel;
defaultname.storageItemPanel.init();

defaultname.storageItemPanel.Form.items.push(elementList['storageItemPanel']);

