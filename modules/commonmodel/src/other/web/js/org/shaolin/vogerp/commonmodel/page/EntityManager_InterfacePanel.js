
    var scriptCodeUI = new UIMaster.ui.textarea
    ({
        ui: elementList["scriptCodeUI"]
    });

    var veriCodeQuestion = new UIMaster.ui.label
    ({
        ui: elementList["veriCodeQuestion"]
    });

    var veriCode = new UIMaster.ui.textfield
    ({
        ui: elementList["veriCode"]
    });

    var testBtn = new UIMaster.ui.button
    ({
        ui: elementList["testBtn"]
    });

    var InterfacePanel = new UIMaster.ui.panel
    ({
        ui: elementList["InterfacePanel"]
        ,items: [scriptCodeUI,veriCodeQuestion,veriCode,testBtn]
    });

    defaultname.scriptCodeUI=scriptCodeUI;

    defaultname.veriCodeQuestion=veriCodeQuestion;

    defaultname.veriCode=veriCode;

    defaultname.testBtn=testBtn;
defaultname.InterfacePanel = InterfacePanel;
defaultname.InterfacePanel.init();

defaultname.Form.items.push(elementList['InterfacePanel']);

