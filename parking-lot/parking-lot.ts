/**
 * Requirement
 * How many entrances & exits
 * what different of spots are suppported in the system
 * Hourly based charge
 * Spot finding strategy - nearest to entrance/exit.
 * 
 * 
 * Entities
 * - Vehicle
 * - Ticket
 * - Entrance Gate
 * - Parking Spot
 * - Exit Gate
 */

class Config {
    static TWO_WHEELER_PARKING_PRICE: number = 10;
    static FOUR_WHEELER_PARKING_PRICE: number = 30;
    static TWO_WHEELER_PARKING_SPOTS_COUNT: number = 600;
    static FOUR_WHEELER_PARKING_SPOTS_COUNT: number = 400;
}

class ParkingSpot {
    id: string = '';
    isEmpty: boolean = true;
    vehicle: Vehicle | null = null;
    price: number = 0;

    parkVehicle(vehicle: Vehicle): void {
        this.isEmpty = false;
        this.vehicle = vehicle;
    }

    removeVehicle(): void {
        this.isEmpty = true;
        this.vehicle = null;
    }

    getPrice(): number {
        return this.price;
    }
}

class TwoWheelerParkingSpot extends ParkingSpot {
    price: number = Config.TWO_WHEELER_PARKING_PRICE;
}

class FourWheelerParkingSpot extends ParkingSpot {
    price: number = Config.FOUR_WHEELER_PARKING_PRICE;
}

class ParkingSpotManager {
    parkingSpots: Array<ParkingSpot> = [];

    constructor(spots: Array<ParkingSpot>) {
        this.parkingSpots = spots;
    }

    findFreeParkingSpot(vehicleType: VehicleType): ParkingSpot | void { }
    addParkingSpot(vehicleType: VehicleType): void { }
    removeParkingSpot(vehicleType: VehicleType): void { }
}

class TwoWheelerParkingSpotManager extends ParkingSpotManager {
    parkingSpots: Array<ParkingSpot> = [];
    parkingStrategy: ParkingStrategy | null = null;
    constructor(
        parkingSpots: Array<TwoWheelerParkingSpot> = new Array(Config.TWO_WHEELER_PARKING_SPOTS_COUNT),
        parkingStrategy: ParkingStrategy = new NearEntranceParkingStrategy()
    ) {
        super(parkingSpots);
        this.parkingSpots = parkingSpots;
        this.parkingStrategy = parkingStrategy;
    }
}

class FourWheelerParkingSpotManager extends ParkingSpotManager {
    parkingSpots: Array<ParkingSpot> = [];
    parkingStrategy: ParkingStrategy | null = null;
    constructor(
        parkingSpots: Array<FourWheelerParkingSpot> = new Array(Config.FOUR_WHEELER_PARKING_SPOTS_COUNT),
        parkingStrategy: ParkingStrategy = new NearElevatorParkingStrategy()
    ) {
        super(parkingSpots);
        this.parkingSpots = parkingSpots;
        this.parkingStrategy = parkingStrategy;
    }
}

class ParkingSpotManagerFactory {
    getParkingSpotManager(vehicleType: VehicleType = VehicleType.FOUR_WHEELER): ParkingSpotManager {
        if (vehicleType == VehicleType.FOUR_WHEELER) {
            return new FourWheelerParkingSpotManager();
        } else {
            return new TwoWheelerParkingSpotManager();
        }
    }
}

class ParkingStrategy {
    find() { }
}

class NearEntranceParkingStrategy extends ParkingStrategy {
    //can maintain a min heap of Parking spots based on the number from entrance
    find() { }
}
class NearElevatorParkingStrategy extends ParkingStrategy {
    //can maintain a min heap of Parking spots based on the number from elevator
    find() { }
}

class Vehicle {
    vehicleId: string = '';
    vehicleNumber: string = '';
    vtype: VehicleType = VehicleType.TWO_WHEELER;
}

enum VehicleType {
    TWO_WHEELER = 'two',
    FOUR_WHEELER = 'four'
}

class Ticket {
    ticketId: string = '';
    vehicle: Vehicle | null = null;
    parkingSpot: ParkingSpot | null = null;
    startDateTime: Date | null = null;
}

class EntranceGate {
    psManagerFactory: ParkingSpotManagerFactory | null = null;
    psManager: ParkingSpotManager | null = null;


    findSpace(vehicleType: VehicleType = VehicleType.FOUR_WHEELER): ParkingSpot | void { }
    bookSpot(vehicle: Vehicle): string | void { }
    generateTicket(vehicle: Vehicle, bookedSpot: ParkingSpot): Ticket | void { }
}

class ExitGate {
    ccFactory: CostComputationFactory | null = null;
    costComputation: CostComputation | null = null;
    psManagerFactory: ParkingSpotManagerFactory | null = null;
    psManager: ParkingSpotManager | null = null;
    payment: null = null;

    checkout() {
        //this.psManager?.removeParkingSpot();
    }
}

class CostComputation { }

class TwoWheelerCostComputation extends CostComputation { }
class FourWheelerCostComputation extends CostComputation { }

class CostComputationFactory {
    getInstance(vehicleType: VehicleType = VehicleType.FOUR_WHEELER, parkingStrategy: ParkingStrategy) {
        if (vehicleType === VehicleType.FOUR_WHEELER) {
            return new FourWheelerCostComputation()
        } else {
            return new TwoWheelerCostComputation()
        }
    }
}

class PricingStrategy {
    getCost(ticket: Ticket): number | void { }
}
class HourlyBasedPricingStrategy extends PricingStrategy {
    getCost(ticket: Ticket): number | void { }
}
class MinutesBasedPricingStrategy extends PricingStrategy {
    getCost(ticket: Ticket): number | void { }
}
class DayBasedPricingStrategy extends PricingStrategy {
    getCost(ticket: Ticket): number | void { }
}
class MonthlyBasedPricingStrategy extends PricingStrategy {
    getCost(ticket: Ticket): number | void { }
}


