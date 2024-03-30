/**
 * Requirement: 
 * - User should be able to see stores and cars based on location, vehicle type
 * - User should be able to filter
 * - User should be able to reserve vehicle
 * 
 * 
 * 
 * Entities
 * - Vehicle
 * - Store
 * - Location
 * - User 
 * - Reservation
 * - Bill
 * - Payment
 */

class Vehicle {
    id: string = '';
    vehicleNumber: string = '';
    manufacturingDate: Date | null = null;
    activeStatus: ActiveStatus = ActiveStatus.ACTIVE;
    vehicleType: VehicleType = VehicleType.CAR;
    kmDriven: number = 0;
    average: number = 0;
    companyName: string = '';
    modelName: string = '';
    cc: number = 0;
    dailyRentalCost: number = 0;
    hourlyRentalCost: number = 0;
    noOfSeats: number = 0;
}

enum VehicleType {
    CAR = 'car',
    BIKE = 'bike',//future scope for Bike
}

enum ActiveStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

class Car extends Vehicle { }
//future scope for Bike
//class Bike extends Vehicle { }

class VehicleInvetoryManager {
    vehicles: Array<Vehicle> = [];

    constructor(vehicles: Array<Vehicle> = []) {
        this.vehicles = vehicles;
    }

    //crud
    getVehicles(): Array<Vehicle> {
        return vehicles;
    }
    setVehicles(vehicles: Array<Vehicle>): void {
        this.vehicles = vehicles;
    }
    addVehicle(vehicle: Vehicle): Vehicle | void { }
    getVehicle(vehicle: Vehicle): Vehicle | void { }
    removeVehicle(vehicle: Vehicle): Vehicle | void { }
    reserveVehicle(vehicle: Vehicle): Vehicle | void { }
}

class CarVehicleInvetoryManager extends VehicleInvetoryManager { }
//future scope for Bike
//class BikeVehicleInvetoryManager extends VehicleInvetoryManager { }

class Store {
    storeId: string = '';
    vehicleInventoryMgr: VehicleInvetoryManager = new VehicleInvetoryManager([]);
    location: Location | null = null;
    reservations: Array<Reservation> | null = null;

    getVehicles(vehicleType: VehicleType): Array<Vehicle> {
        return this.vehicleInventoryMgr.getVehicles();
    }

    setVehicles(vehicles: Array<Vehicle>): void {
        this.vehicleInventoryMgr?.setVehicles(vehicles);
    }

    createReservation(vehicle: Vehicle, user: User): Reservation {
        const reservation = new Reservation(vehicle, user);
        this.reservations?.push(reservation);
        return reservation;
    }

    completeReservation(reservationId: string): void {
        this.reservations?.forEach(r => {
            if (r.reservationId === reservationId) {
                r.reservationStatus = ReservationStatus.COMPLETED;
            }
        });
    }

    //cancel

    //inprogress
}

class Location {
    address: string = '';
    city: string = '';
    state: string = '';
    postalCode: string = '';

    constructor(address: string, city: string, state: string, postalCode: string) {
        this.address = address;
        this.city = city;
        this.postalCode = postalCode;
        this.state = state;
    }
}

class Reservation {
    reservationId: string = '';
    user: User | null = null;
    vehicle: Vehicle | null = null;
    bookingDate: Date | null = null;
    dateBookedFrom: Date | null = null;
    dateBookedTp: Date | null = null;
    pickedUpLocation: Location | null = null;
    dropLocation: Location | null = null;
    reservationType: ReservationType | null = null;
    reservationStatus: ReservationStatus = ReservationStatus.SCHEDULED;

    constructor(vehicle: Vehicle, user: User) {
        this.vehicle = vehicle;
        this.user = user;

        //other properties would also set from here 
    }
}

enum ReservationStatus {
    SCHEDULED = 'scheduled',
    INPROGRESS = 'inprogress',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled'
}

enum ReservationType {
    DAILY = 'daily',
    HOURLY = 'hourly'
}

class User {
    userId: string = '';
    username: string = '';
    drivingLiecense: string = '';
    address: Location | null = null;
}

class VehicleRentalSystem {
    users: Array<User> = [];
    stores: Array<Store> = [];

    //crud
    addUser(user: User): User | void { }
    removeUser(user: User): User | void { }
    addStore(store: Store): Store | void { }
    removeStore(store: Store): void { }
    getStore(storeId: string): Store | void { }
    getStoreByLocation(location: Location): Store | void { }
    getAllVehicles(location: Location): Array<Vehicle> | void { }
    reserveVehicle(vehicle: Vehicle): Reservation | void { }
}

class Bill {
    billId: string = '';
    reservation: Reservation | null = null;
    isPaid: string = '';
    amount: number = 0;

    constructor(reservation: Reservation) {
        this.reservation = reservation;
    }

    computeBillAmount(): number { }
}

class Payment {
    bill: Bill | null = null;

    payBill(bill: Bill): boolean | void { }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const users: Array<User> = addUsers();
const vehicles: Array<Vehicle> = addVehicles();
const stores: Array<Store> = addStores(vehicles);

const rentalSystem: VehicleRentalSystem = new VehicleRentalSystem();

//user came to through client
const user: User = users[0];
const location: Location = new Location('ABC XYZ DEF', 'Mumbai', 'MH', '123056');
const store: Store | void = rentalSystem.getStoreByLocation(location);

const storeVehicles: Array<Vehicle> = store.getVehicles(VehicleType.CAR);

const reservation: Reservation = store.createReservation(storeVehicles[0], user);

const bill: Bill = new Bill(reservation);

const payment : Payment = new Payment();
payment.payBill(bill);

store.completeReservation(reservation.reservationId);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////