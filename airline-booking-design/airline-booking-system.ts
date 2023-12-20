/*******
 * Requirement:
 * functional: -
 * 1. User should be able to search flights based on arrival and departure + date of travel
 * 2. User should be able to login to applcation.
 * 3. Select the flight based on time & preference.
 * 4. Enter the personal details
 * 5. Make payment 
 * 6. Confirmation mail / notification.
 * 
 * Non functional:-
 * Scalable, reliable and moudular.
 * 
 * Actors: 
 * Admin
 * customer
 * Airline authority
 * 
 * Initial entities:
 * Flight system
 * flight
 * user
 * booking
 * payment
 * notification
 */

class FlightBookingSystem {
    private users: Array<User> = [];
    private flights: Array<Flight> = [];

    getAllFlightsAndDetails(startLocation: string, endLLocation: string, startDate: Date): Array<Flight> {
        return this.flights.filter(flight =>
            flight.schedules.filter(schedule =>
                schedule.start?.location === startLocation &&
                schedule.end?.location === endLLocation &&
                schedule.startTime === startDate).length > 0);
    };
    bookingFlight(schedule: Schedule, flight: Flight, seat: FlightSeat, user: User): BookingDetails {
        const booking = new BookingDetails();
        booking.flight = flight;
        booking.seat = seat;
        booking.user = user;
        booking.schedule = schedule;
        return booking;
    };
    confirmBooking(details: BookingDetails): FlightTicket | null {
        const flightTicket = new FlightTicket();
        flightTicket.booking = details;
        flightTicket.pnr = Math.random();
        return flightTicket;
    };
}

class Flight {
    id: number = 0;
    company: Airline | null = null;
    flightNo: string = "";
    seatCapacity: number = 0;
    seats: Array<Seat> = [];
    schedules: Array<Schedule> = [];
}

class Airline {
    id: number = 0;
    name: string = "";
    flights: Array<Flight> = [];
}

class Seat {
    number: number = 0;
    className: SeatClass = SeatClass.ECONOMY;
}

enum SeatClass {
    BUSINESS = "BUSINESS",
    ECONOMY = "ECONOMY"
}

class Schedule {
    flight: Flight | null = null;
    start: Airport | null = null;
    end: Airport | null = null;
    startTime: Date = new Date();
    endTime: Date = new Date();
    status: FlightStatus = FlightStatus.NOSTATUS;
    flightSeats: Array<FlightSeat> = [];
}

enum FlightStatus {
    NOSTATUS = "NOSTATUS",
    ONTIME = "ONTIME",
    DELAY = "DELAY",
    CANCELLED = "CANCELLED"
}

class Airport {
    id: number = 0;
    name: string = "";
    location: string = "";
    flights: Array<Flight> = [];
}

class FlightSeat extends Seat {
    price: number = 0;
    status: FlightSeatStatus = FlightSeatStatus.EMPTY;
}

enum FlightSeatStatus {
    EMPTY = "EMPTY",
    BOOKED = "BOOKED"
}

class User {
    name: string = "";
    email: string = "";
    mobile: string = "";
}

class BookingDetails {
    flight: Flight | null = null;
    user: User | null = null;
    schedule: Schedule | null = null;
    pnr: string = "";
    seat: FlightSeat | null = null;
}

class FlightTicket {
    pnr: number = 0;
    booking: BookingDetails | null = null;
}

class Notification {
    notificationId: number = 0;
    createdOn: Date = new Date();
    content: any = null;
    send(): void { };
}

class EmailNotification extends Notification {
    email: string = "";
    send(): void { };
}

class SMSNotification extends Notification {
    mobile: string = "";
    send(): void { };
}
