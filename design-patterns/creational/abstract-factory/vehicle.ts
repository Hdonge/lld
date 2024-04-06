interface Truck {
    load(): void;
}

class DefenceTruck implements Truck {
    load(): void {
        console.log("Load Arms");
    }

    fire(): void {
        console.log("fire");
    }
}

class NormalTruck implements Truck {
    load(): void {
        console.log("Load normal logistics");
    }
}

interface Jeep {
    sit(): void;
}

class DefenceJeep implements Jeep {
    sit(): void {
        console.log("Soldier sitting");
    }

    fire(): void {
        console.log("fire");
    }
}

class NormalJeep implements Jeep {
    sit(): void {
        console.log("People sitting");
    }
}

interface AbstractFactory {
    createTruck(): Truck;
    createJeep(): Jeep;
}

