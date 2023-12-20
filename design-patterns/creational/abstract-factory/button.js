var MacButton = /** @class */ (function () {
    function MacButton() {
    }
    MacButton.prototype.click = function () {
        console.log("Mac Button Clicked");
    };
    return MacButton;
}());
var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.click = function () {
        console.log("Windows Button Clicked");
    };
    return WindowsButton;
}());
var WindowsTextbox = /** @class */ (function () {
    function WindowsTextbox() {
    }
    WindowsTextbox.prototype.setText = function (text) {
        console.log("Windows Textbox Set", text);
    };
    return WindowsTextbox;
}());
var MacTextbox = /** @class */ (function () {
    function MacTextbox() {
    }
    MacTextbox.prototype.setText = function (text) {
        console.log("Mac Textbox Set", text);
    };
    return MacTextbox;
}());
var MacControlsFactory = /** @class */ (function () {
    function MacControlsFactory() {
    }
    MacControlsFactory.prototype.createButton = function () {
        return new MacButton();
    };
    MacControlsFactory.prototype.createTextbox = function () {
        return new MacTextbox();
    };
    return MacControlsFactory;
}());
var WindowsControlsFactory = /** @class */ (function () {
    function WindowsControlsFactory() {
    }
    WindowsControlsFactory.prototype.createButton = function () {
        return new WindowsButton();
    };
    WindowsControlsFactory.prototype.createTextbox = function () {
        return new WindowsTextbox();
    };
    return WindowsControlsFactory;
}());
var OSControls = /** @class */ (function () {
    function OSControls() {
    }
    OSControls.createControlsFactory = function (os) {
        if (os.toLowerCase() === "mac") {
            return new MacControlsFactory();
        }
        else if (os.toLowerCase() === "windows") {
            return new WindowsControlsFactory();
        }
        return null;
    };
    return OSControls;
}());
////////////////////////////////////////////////\
console.log("Choose OS , Windows/Mac");
var osFactory = OSControls.createControlsFactory('windows');
if (osFactory) {
    var button = osFactory.createButton();
    button.click();
    var textbox = osFactory.createTextbox();
    textbox.setText('text added');
}
