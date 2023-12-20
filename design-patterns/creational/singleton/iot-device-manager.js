var DeviceManager = /** @class */ (function () {
    function DeviceManager() {
        this.devices = [];
        this.devices = [];
    }
    DeviceManager.getInstance = function () {
        if (!DeviceManager.deviceInstance)
            DeviceManager.deviceInstance = new DeviceManager();
        return DeviceManager.deviceInstance;
    };
    DeviceManager.prototype.connectedDevice = function (deviceId, initialData) {
        //simulating device connection
        this.devices.push({ deviceId: deviceId, data: initialData });
        console.log("Device connected: " + deviceId);
    };
    DeviceManager.prototype.disconnectedDevice = function (deviceId) {
        //simulating device disconnection
        this.devices = this.devices.filter(function (device) { return device.deviceId !== deviceId; });
        console.log("Device ".concat(deviceId, " disconnected."));
    };
    DeviceManager.prototype.getDevices = function () {
        return this.devices;
    };
    DeviceManager.prototype.sendDataToDevice = function (deviceId, data) {
        // Find the device by ID and send data (simulated)
        var device = this.devices.find(function (device) { return device.deviceId === deviceId; });
        if (device) {
            device.data = data;
            console.log("Data sent to device ".concat(deviceId, ":"), data);
        }
        else {
            console.log("Device ".concat(deviceId, " not found."));
        }
    };
    return DeviceManager;
}());
var deviceInstance1 = DeviceManager.getInstance();
var deviceInstance2 = DeviceManager.getInstance();
console.log(deviceInstance1 === deviceInstance2);
deviceInstance1.connectedDevice("device1", { value: 100 });
deviceInstance2.connectedDevice("device2", { value: 150 });
var allDevices = deviceInstance1.getDevices();
console.log(allDevices);
deviceInstance1.disconnectedDevice("device1");
