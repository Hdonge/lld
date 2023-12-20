//Abstraction: used as a component in any other systen
interface NavigationSystem {
    navigate(destination: string): void;
}

//implementations: actual navigation implmentation used by other systems.
interface NavigationImplementation {
    navigate(destination: string): void;
}

class GoogleMaps implements NavigationImplementation {
    navigate(destination: string): void {
        console.log(`Google Map: Navigating to ${destination}`);
    }
}

class AppleMaps implements NavigationImplementation {
    navigate(destination: string): void {
        console.log(`Apple Map: Navigating to ${destination}`);
    }
}

class UberRide implements NavigationSystem {
    constructor(private navigationImpl: NavigationImplementation) { }

    navigate(destination: string): void {
        this.navigationImpl.navigate(destination);
    }
}

class UberEats implements NavigationSystem {
    constructor(private navigationImpl: NavigationImplementation) { }
    navigate(destination: string): void {
        this.navigationImpl.navigate(destination);
    }
}


////////////////////////////////////////////////////////////////
const os: string = 'apple';
if (os.toLowerCase() === 'apple') {
    const uberEats = new UberEats(new AppleMaps());
    uberEats.navigate('New York');
    const uberRide = new UberRide(new AppleMaps());
    uberRide.navigate('New York');
} else {
    const uberEats = new UberEats(new GoogleMaps());
    uberEats.navigate('New York');
    const uberRide = new UberRide(new GoogleMaps());
    uberRide.navigate('New York');
}