
    var employeeInfoTablel = new UIMaster.ui.objectlist
    ({
        ui: elementList["employeeInfoTablel"]
    });

    var employeeInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList["employeeInfoPanel"]
        ,items: [employeeInfoTablel]
    });

    defaultname.employeeInfoTablel=employeeInfoTablel;
defaultname.employeeInfoPanel = employeeInfoPanel;
defaultname.employeeInfoPanel.init();

defaultname.employeeInfoPanel.Form.items.push(elementList['employeeInfoPanel']);

