/****
 * Requirements: 
 * Functional:
 * 1. User should be able to login
 * 2. User should be able search restaurants and food items based on location
 * 3. List all food items for a restaurant
 * 4. Placing an order
 * 5. Payment
 * 6. Notification
 * 
 * Non functional:
 * Reliable, scalable and modular
 * 
 * Actors:
 * customer
 * Restaurant Owners
 * Delivery Partenrs
 * 
 * Entities:
 * 1. Customer/User
 * 2. Restaurant
 * 3. Food Items
 * 4. Cart
 * 5. Delivery
 * 6. Payment
 * 7. Notification
 */


class FoodDeliverySystem {
    users: Array<User> = [];
    locationsAndRestaurantsMap: Map<Location, Array<Restaurant>> = new Map();
    restaurantsAndFoodItemsMap: Map<Restaurant, Array<FoodItem>> = new Map();
    singIn(): boolean { return false; }
    signUp(): User | undefined { return; }
    getRestaurants(location: Location): Array<Restaurant> | undefined { return; }
    getFoodItems(restaurant: Restaurant): Array<FoodItem> | undefined { return; }
    addToCart(restaurant: Restaurant, foodItem: FoodItem,): Cart | null { return; }
    placeOrder(cart: Cart): Order | null { return null };
}

class Restaurant {
    name: string = '';
    description: string = '';
    location: Location | null = null;
    foodItems: Array<FoodItem> = [];

    updateResturantInfo(): void { }
    updateFoodItems(): void { }
}

class Location {
    name: string = '';
    city: string = '';
    zipCode: string = '';
    latitute: number = 0;
    longitude: number = 0;
    country: string = '';
}

class FoodItem {
    name: string = '';
    description: string = '';
    price: number = 0;
    rating: number = 0;
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

class Admin extends User { }
class RestaurantOwner extends User { }

class CartItem {
    foodItem: FoodItem | null = null;
    quantity: number = 0;
    totalPrice: number = 0;
    foodItemPrice: number = 0;
    restaurant: Restaurant | null = null;
}

class Cart {
    user: User | null = null;
    cartId: string = '';
    cartItems: Array<CartItem> = [];
    deliveryAddress: Location | null = null;
}

class Order {
    orderId: string = '';
    cart: Cart | null = null;
    deliveryPartner: User | null = null;
    orderStatus: OrderStatus = OrderStatus.PLACED;
}

enum OrderStatus {
    PLACED = 'PLACED',
    PREPARING = 'PREPARING',
    OUTFORDELIVERY = 'OUTFORDELIVERY',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'CANCELLED'
}