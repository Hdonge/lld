/***
 * Liskov Substitution Principle : LSP
 * Super/Parent class should be replaceble with objects of
 * child/sub class without breaking application or its result 
 * Still behvaiour of application should be same
 * 
 */

//bad example

class Vehicle {
    getNumberOfWheels(): number {
        return 2;
    }

    startEngine(): boolean {
        return true;
    }
}

class MotorCycle extends Vehicle {
    //will have all methods same as super
}

class Car extends Vehicle {
    getNumberOfWheels(): number {
        return 4;
    }
}

class BiCycle extends Vehicle {
    //enforced handling because of super class method though this class does not want that method
    startEngine(): null {
        return null;
    }
}

const vehicleList1: Array<Vehicle> = [];
vehicleList1.push(new MotorCycle());
vehicleList1.push(new Car());
vehicleList1.push(new BiCycle());

for (let v of vehicleList1) {
    v.startEngine().toString();
}

//In above example bicyle does not have hasEngine
// for bicycle it will break code for hasEngine method even though Bicyle has that method
// Quick fix would be will have to introduce lot of conditional handling
//which actually breaks the LSP.
// Parent and child class should be replacable without changing the behavoiur


//Good example

class Vehicle {
    getNumberOfWheels(): number {
        return 2;
    }
}

class BiCycle extends Vehicle { }

class EngineVehicle extends Vehicle {
    startEngine(): boolean {
        return true;
    }
}

class MotorCycle extends EngineVehicle {
    //will have all methods same as super
}

class Car extends EngineVehicle {
    getNumberOfWheels(): number {
        return 4;
    }
}



const vehicleList2: Array<Vehicle> = [];
vehicleList2.push(new MotorCycle());
vehicleList2.push(new Car());
vehicleList2.push(new BiCycle());

for (let v of vehicleList2) {
    v.getNumberOfWheels().toString();
}

const vehicleList3: Array<Vehicle> = [];
vehicleList3.push(new MotorCycle());
vehicleList3.push(new Car());
vehicleList3.push(new BiCycle());

for (let v of vehicleList3) {
    v.startEngine().toString();
}

// Now Bicycle method does not aware of startEngine method
// It will give compilation error.

const vehicleList4: Array<EngineVehicle> = [];
vehicleList4.push(new MotorCycle());
vehicleList4.push(new Car());

for (let v of vehicleList4) {
    v.startEngine().toString();
}