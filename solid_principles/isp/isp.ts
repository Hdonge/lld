
/**
 * Inteface Segregation Principle : ISP
 * 
 * class must not have to implement any interface properties and methods that
 * is not required by functionality of class
 * 
 * Hence rather than one consolidated interface, can have multiple functionality specific
 * interfaces which will not enfore class to implement unrequired methods
 */

interface IVehicle {

    refuel(): void;
    openDoors(): void;
}

class Bike implements IVehicle {
    drive(): void {
        //Logic
    }
    stop(): void {
        //Logic
    }
    refuel(): void {
        //Logic
    }

    //Bike does not have doors so below method invalid 
    openDoors(): void {
        throw new Error("Method not implemented.");
    }
}

class Car implements IVehicle {
    drive(): void {
        //Logic
    }
    stop(): void {
        //Logic
    }
    refuel(): void {
        //Logic
    }

    openDoors(): void {
        //Logic
    }
}


interface DrivingVehicle {
    drive(): void;
    stop(): void;
}

interface RefuelingVehicle {
    refuel(): void;
}

interface DooringVehicle {
    openDoors(): void;
}

class Bike implements DrivingVehicle, RefuelingVehicle {
    drive(): void {
        //Logic
    }
    stop(): void {
        //Logic
    }
    refuel(): void {
        //Logic
    }
}

class BiCycle implements DrivingVehicle {
    drive(): void {
        //Logic
    }
    stop(): void {
        //Logic
    }
}

class Car implements DrivingVehicle, RefuelingVehicle, DooringVehicle {
    drive(): void {
        //Logic
    }
    stop(): void {
        //Logic
    }
    refuel(): void {
        //Logic
    }

    openDoors(): void {
        //Logic
    }
}