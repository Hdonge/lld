/***
 * Hotel Booking System
 * Requirements:
 * functional:
 * 1. search rooms & hotels based on date & location.
 * 2. select rooms based on preference
 * 3. payment
 * 4. notification
 * 
 * non functional:
 * scalable, reliable and modular
 * 
 * Actors:
 * admin
 * hotel owner
 * customer
 * 
 * Entities
 * Hotel
 * Room
 * location
 * user
 * reservation
 * payment
 * notification 
 */


class HotelBookingSystem {
    users: Array<User> = [];
    locationsAndHotelsMap: Map<Location, Array<Hotel>> = new Map();

    getHotelList(location: Location): Array<Hotel> | undefined { return; }
    getHotelDetailsAndRooms(hotel: Hotel): Array<Hotel> | undefined { return; }
    bookingHotel(hotel: Hotel, room: Room, user: User): BookingDetails | null { return null };
    confirmBooking(bookingDetails: BookingDetails): HotelBooking | null { return null };
}

class Hotel {
    hotelId: string = '';
    name: string = '';
    location: Location | null = null;
    rooms: Array<Room> = [];
    rating: number = 0;
    comments: Array<Comment> = [];
}

class Location {
    name: string = '';
    city: string = '';
    zipCode: string = '';
    latitute: number = 0;
    longitude: number = 0;
}

class Room {
    uniqueId: string = '';
    hotelId: string = '';
    type: Type = Type.STANDARD;
    price: number = 0;
    status: Status = '';
}

enum Type {
    PREMIER = 'PREMIER',
    DELUXE = 'DELUXE',
    STANDARD = 'STANDARD',
    DORMITORY = 'DORMITORY',
    EXICUTIVE = 'EXICUTIVE',
    SUITE = 'SUITE'
}

enum Status {
    EMPTY = 'EMPTY',
    BOOKED = 'BOOKED',
    INMAITAINANCE = 'INMAITAINANCE'
}

class Comment {
    commentId: number = 0;
    comment: string = '';
    user: User | null = null;
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
    rating: number = 0;
}

class HotelOwner extends User { }

class Admin extends User { }


class RoomBookingDetails {
    user: User | null = null;
    hotel: Hotel | null = null;
    room: Room | null = null;
    start: string = '';
    end: string = '';
    price: number = 0;
}

class HotelBooking {
    bookingId: string = '';
    bookingDetails: RoomBookingDetails | null = null;
}