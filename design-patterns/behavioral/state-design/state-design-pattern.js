var TVOffState = /** @class */ (function () {
    function TVOffState(device) {
        this.device = device;
    }
    TVOffState.prototype.power = function () {
        this.device.setState(new TVOnState(this.device));
        console.log("Welcome! Now TV is turned on");
    };
    return TVOffState;
}());
var TVOnState = /** @class */ (function () {
    function TVOnState(device) {
        this.device = device;
    }
    TVOnState.prototype.power = function () {
        this.device.setState(new TVOffState(this.device));
        console.log("Shutting Down");
    };
    TVOnState.prototype.volumeUp = function () {
        console.log("Increasing Volume");
    };
    TVOnState.prototype.volumeDown = function () {
        console.log("Decreasing volume");
    };
    TVOnState.prototype.channelNext = function () {
        console.log("Next channel");
    };
    TVOnState.prototype.channelPrev = function () {
        console.log("Previous channel");
    };
    return TVOnState;
}());
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.powerState = new TVOffState(this);
    }
    RemoteControl.prototype.setState = function (state) {
        this.powerState = state;
    };
    RemoteControl.prototype.power = function () {
        this.powerState.power();
    };
    RemoteControl.prototype.volumeUp = function () {
        if (this.powerState instanceof TVOnState) {
            this.powerState.volumeUp();
        }
        else {
            console.log("Please turn on the TV first");
        }
    };
    RemoteControl.prototype.volumeDown = function () {
        if (this.powerState instanceof TVOnState) {
            this.powerState.volumeDown();
        }
        else {
            console.log("Please turn on the TV first");
        }
    };
    RemoteControl.prototype.channelNext = function () {
        if (this.powerState instanceof TVOnState) {
            this.powerState.channelNext();
        }
        else {
            console.log("Please turn on the TV first");
        }
    };
    RemoteControl.prototype.channelPrev = function () {
        if (this.powerState instanceof TVOnState) {
            this.powerState.channelPrev();
        }
        else {
            console.log("Please turn on the TV first");
        }
    };
    return RemoteControl;
}());
/***------------------------------------------------------*/
var remote = new RemoteControl();
remote.power();
remote.volumeUp();
remote.volumeDown();
remote.channelNext();
remote.channelPrev();
remote.power();
remote.volumeUp();
remote.channelPrev();
