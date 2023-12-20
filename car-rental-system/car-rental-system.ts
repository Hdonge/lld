/******
 * Car Rental System
 * Requirements:
 * 
 * Functional:
 * 1. Users should be able to create account 
 * 2. Enter user location from where car can be booked
 * 3. List down all available car based on entered location
 * 5. User should be able to select car from list
 * 6. User should be able to fill all details like pickup and drop location
 * 7. Payment 
 * 8. Notification
 * 
 * Non Functional:
 * scalable, Reliable and Modular
 * 
 * Actors:
 * operators
 * customers
 * 
 * Entities:
 * 1. Car Rental System
 * 2. User
 * 3. Car
 * 4. Payment
 * 5. Notification
 */

class CarRentalSystem {
    users: Array<User> = [];
    locations: Array<Location> = [];
    carAndLocarions: Map<Location, Array<Car>> = new Map();

    getCarList(location: Location, type: Type, status: Status): Array<Car> | undefined { return; }
    getAllCarsAndDetails(startLocation: string, endLLocation: string, TimeStamp: Date): Array<Car> | null { return null };
    bookingCar(car: Car, user: User): BookingDetails | null { return null };
    confirmBooking(details: BookingDetails): CarBooking | null { return null };
}

class Car {
    name: string = '';
    brand: string = '';
    model: string = '';
    rent: number = 0;
    kmDriven: number = 0;
    manuDate: Date = new Date();
    ChasisNo: number = 0;
    type: Type = Type.SUV;
    status: Status = Status.AVAILABLE;
    location: Location | null = null;
    fromAvailable: Date = new Date();
    toAvailable: Date = new Date();
    rating: number = 0;

    reserveCar(): boolean | void { };
    updateCarDetails(): void { };
}

enum Type {
    SEDAN,
    SUV,
    COUPE,
    HATCHBACK
}

enum Status {
    AVAILABLE = "AVAILABLE",
    RESERVED = "RESERVED",
    RUNNING = "RUNNING",
    UNDERMAITAINANCE = "UNDERMAITAINANCE"
}

class Location {
    name: string = '';
    zipCode: number = 0;
    city: string = '';
    latitute: number = 0;
    longitude: number = 0;
    id: any;
}

class User {
    name: string = '';
    email: string = '';
    mobile: string = '';
    location: Location | null = null;
    userId: string = '';
    password: string = '';
}

class Customer extends User {
    licenseNo: number = 0;
    rating: number = 0;
}

class Operator extends User {
}

class CarBookingDetails {
    car: Car | null = null;
    user: User | null = null;
    start: string = '';
    end: string = '';
    date: Date | null = null;
    rent: number = 0;
}

class CarBooking {
    bookingId: string = '';
    car: Car | null = null;
    user: User | null = null;
    start: string = '';
    end: string = '';
    date: Date | null = null;
    rent: number = 0;
}

// class Notification {
//     notificationId: number = 0;
//     createdOn: Date = new Date();
//     content: any = null;
//     send(): void { };
// }

// class EmailNotification extends Notification {
//     email: string = "";
//     send(): void { };
// }

// class SMSNotification extends Notification {
//     mobile: string = "";
//     send(): void { };
// }