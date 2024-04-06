interface CarBuildingSystem {
    assembleHardware(): void;
    assembleSoftware(): void;
    applyColor(): void;
}

class Model1Car implements CarBuildingSystem {
    constructor(private carColorImpl: CarColorizationImplementation) { }
    assembleHardware(): void {
        //assembling hardware logic 
    }

    assembleSoftware(): void {
        //assembling software logic
    }

    applyColor(): void {
        //apply color logic
        this.carColorImpl.applyColor();
    }
}

class Model2Car implements CarBuildingSystem {
    constructor(private carColorImpl: CarColorizationImplementation) { }
    assembleHardware(): void {
        //assembling hardware logic 
    }

    assembleSoftware(): void {
        //assembling software logic
    }

    applyColor(): void {
        //apply color logic
        this.carColorImpl.applyColor();
    }
}

interface CarColorizationImplementation {
    applyColor(): void;
}

class Blue implements CarColorizationImplementation {
    applyColor(): void {
        // apply blue color to model
    }
}

class Red implements CarColorizationImplementation {
    applyColor(): void {
        // apply red color to model
    }
}

class White implements CarColorizationImplementation {
    applyColor(): void {
        // apply white color to model
    }
}

////////////////////////////////////////////////////////////////////////////////////////


const model1BlueCar = new Model1Car(new Blue());
model1BlueCar.assembleHardware();
model1BlueCar.assembleSoftware();
model1BlueCar.applyColor();
