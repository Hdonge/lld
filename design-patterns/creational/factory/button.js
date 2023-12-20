var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.render = function () {
        //render windows style button
        console.log("Windows button rendered");
    };
    return WindowsButton;
}());
var MacButton = /** @class */ (function () {
    function MacButton() {
    }
    MacButton.prototype.render = function () {
        //render mac style button
        console.log("Mac button rendered");
    };
    return MacButton;
}());
var WindowsButtonFactory = /** @class */ (function () {
    function WindowsButtonFactory() {
    }
    WindowsButtonFactory.prototype.createButton = function () {
        return new WindowsButton();
    };
    return WindowsButtonFactory;
}());
var MacButtonFactory = /** @class */ (function () {
    function MacButtonFactory() {
    }
    MacButtonFactory.prototype.createButton = function () {
        return new MacButton();
    };
    return MacButtonFactory;
}());
var ButtonImpl = /** @class */ (function () {
    function ButtonImpl(buttonFactory) {
        this.buttonFactory = buttonFactory;
    }
    ButtonImpl.prototype.render = function () {
        var button = this.buttonFactory.createButton();
        button === null || button === void 0 ? void 0 : button.render();
    };
    return ButtonImpl;
}());
var buttonImpl = new ButtonImpl(new WindowsButtonFactory());
buttonImpl.render();
var buttonImplMac = new ButtonImpl(new MacButtonFactory());
buttonImplMac.render();
