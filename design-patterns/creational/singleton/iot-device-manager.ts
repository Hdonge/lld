interface DeviceData {
    deviceId: string;
    data: any;
}

class DeviceManager {
    private static deviceInstance: DeviceManager;
    private devices: DeviceData[] = [];

    private constructor() {
        this.devices = [];
    }

    public static getInstance(): DeviceManager {
        if (!DeviceManager.deviceInstance) DeviceManager.deviceInstance = new DeviceManager();
        return DeviceManager.deviceInstance;
    }

    public connectedDevice(deviceId: string, initialData: any): void {
        //simulating device connection
        this.devices.push({deviceId: deviceId, data: initialData});
        console.log("Device connected: " + deviceId);
    }

    public disconnectedDevice(deviceId: string): void {
        //simulating device disconnection
        this.devices = this.devices.filter(device => device.deviceId !== deviceId);
        console.log(`Device ${deviceId} disconnected.`);
    }

    public getDevices(): DeviceData[] {
        return this.devices;
    }

    public sendDataToDevice(deviceId: string, data: any): void {
        // Find the device by ID and send data (simulated)
        const device = this.devices.find(device => device.deviceId === deviceId);
        if (device) {
            device.data = data;
            console.log(`Data sent to device ${deviceId}:`, data);
        } else {
            console.log(`Device ${deviceId} not found.`);
        }
    }
}


const deviceInstance1 = DeviceManager.getInstance();
const deviceInstance2 = DeviceManager.getInstance();

console.log(deviceInstance1 === deviceInstance2);

deviceInstance1.connectedDevice("device1", { value: 100});
deviceInstance2.connectedDevice("device2", { value: 150});

const allDevices = deviceInstance1.getDevices();
console.log(allDevices);

deviceInstance1.disconnectedDevice("device1");
