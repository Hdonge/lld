interface TVPowerState {
    power(): void;
}

interface TVVolumeState {
    volumeUp(): void;
    volumeDown(): void;
}

interface TVChannelState {
    channelNext(): void;
    channelPrev(): void;
}

class TVOffState implements TVPowerState {
    constructor(private device: RemoteControl) { }

    power(): void {
        this.device.setState(new TVOnState(this.device));
        console.log("Welcome! Now TV is turned on");
    }
}

class TVOnState implements TVPowerState, TVChannelState, TVVolumeState {
    constructor(private device: RemoteControl) { }

    power(): void {
        this.device.setState(new TVOffState(this.device));
        console.log("Shutting Down");
    }

    volumeUp(): void {
        console.log("Increasing Volume");
    }

    volumeDown(): void {
        console.log("Decreasing volume");
    }

    channelNext(): void {
        console.log("Next channel");
    }

    channelPrev(): void {
        console.log("Previous channel");
    }
}


class RemoteControl {
    private powerState: TVPowerState;

    constructor() {
        this.powerState = new TVOffState(this);
    }

    setState(state: TVPowerState): void {
        this.powerState = state;
    }

    power(): void {
        this.powerState.power();
    }

    volumeUp(): void {
        if (this.powerState instanceof TVOnState) {
            this.powerState.volumeUp();
        } else {
            console.log("Please turn on the TV first");
        }
    }

    volumeDown(): void {
        if (this.powerState instanceof TVOnState) {
            this.powerState.volumeDown();
        } else {
            console.log("Please turn on the TV first");
        }
    }

    channelNext(): void {
        if (this.powerState instanceof TVOnState) {
            this.powerState.channelNext();
        } else {
            console.log("Please turn on the TV first");
        }
    }

    channelPrev(): void {
        if (this.powerState instanceof TVOnState) {
            this.powerState.channelPrev();
        } else {
            console.log("Please turn on the TV first");
        }
    }
}



/***------------------------------------------------------*/

const remote = new RemoteControl();

remote.power();
remote.volumeUp();
remote.volumeDown();
remote.channelNext();
remote.channelPrev();
remote.power();
remote.volumeUp();
remote.channelPrev();
