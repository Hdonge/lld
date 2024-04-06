/**
 * Dependency Inversion Principle : DIP
 * 
 * High level module should not depend on low level module directly
 * rather it should depend on abstraction.
 * Also abstractions should not depend on details rather
 * details should depend on abstractions
 * 
 */

//bad Example
class StripePayment {
    payment(): boolean {
        return true;
    }
}

class Ecommerce {
    stripePayment: StripePayment = new StripePayment();

    pay() {
        this.stripePayment.payment();
    }
}

// Now here Ecommerce class (high level module) is directly dependent on StripePayment class (low level module) and payment method of that class (details)
// Now if we want to alter StripPayement class or want add new payment types
// it becomes difficult then.

// Good Example

interface IPayment {
    pay(): boolean;
}

class Stripe implements IPayment {
    pay(): boolean {
        return true;
    }
}

class Paypal implements IPayment{
    pay(): boolean {
        return true;
    }
}

class Ecommerce {
    constructor(private paymentInterface : IPayment){}

    pay(){
        this.paymentInterface.pay();
    }
}

// Now here Ecommerce class (high level module) is not dependent on any payment class (low level module) directly
// It depends on abstraction.
// Also IPayment (abstraction) is guiding payment classes for details not a vice versa
