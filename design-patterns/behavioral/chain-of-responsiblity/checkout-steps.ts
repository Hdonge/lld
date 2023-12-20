interface CheckoutProcessor {
    setNextHandler(nextHandler: CheckoutProcessor): void;
    proceedCheckout(cart: Cart): void;
}

class Cart {
    cartId: number = 123;
    //Cart details;
}

class CartItemValidator implements CheckoutProcessor {
    private nextHandler: CheckoutProcessor | null = null;

    setNextHandler(nextHandler: CheckoutProcessor): void {
        this.nextHandler = nextHandler;
    }

    proceedCheckout(cart: Cart): void {
        console.log('Validating Cart Item......' + cart);

        if (this.nextHandler !== null) {
            this.nextHandler.proceedCheckout(cart);
        }
    }
}

class AddressValidator implements CheckoutProcessor {
    private nextHandler: CheckoutProcessor | null = null;
    setNextHandler(nextHandler: CheckoutProcessor): void {
        this.nextHandler = nextHandler;
    }

    proceedCheckout(cart: Cart): void {
        console.log('Validating Address......' + cart);

        if (this.nextHandler !== null) {
            this.nextHandler.proceedCheckout(cart);
        }
    }
}

class CustomerDetailsValidator implements CheckoutProcessor {
    private nextHandler: CheckoutProcessor | null = null;
    setNextHandler(nextHandler: CheckoutProcessor): void {
        this.nextHandler = nextHandler;
    }

    proceedCheckout(cart: Cart): void {
        console.log('Validating Customer Details......' + cart);

        if (this.nextHandler !== null) {
            this.nextHandler.proceedCheckout(cart);
        }
    }
}

class PaymentDetailsValidator implements CheckoutProcessor {
    private nextHandler: CheckoutProcessor | null = null;
    setNextHandler(nextHandler: CheckoutProcessor): void {
        this.nextHandler = nextHandler;
    }

    proceedCheckout(cart: Cart): void {
        console.log('Validating Payment Details......' + cart);

        if (this.nextHandler !== null) {
            this.nextHandler.proceedCheckout(cart);
        }
    }
}

class FraudDetect implements CheckoutProcessor {
    private nextHandler: CheckoutProcessor | null = null;

    setNextHandler(nextHandler: CheckoutProcessor): void {
        this.nextHandler = nextHandler;
    }

    proceedCheckout(cart: Cart): void {
        console.log('Detecting Fraud......' + cart);

        if (this.nextHandler!== null) {
            this.nextHandler.proceedCheckout(cart);
        }
    }
}

class ProceedCheckout implements CheckoutProcessor {
    private nextHandler: CheckoutProcessor | null = null;

    setNextHandler(nextHandler: CheckoutProcessor): void {
        this.nextHandler = nextHandler;
    }

    proceedCheckout(cart: Cart): void {
        console.log('Proceeding to Checkout......' + cart);

        if (this.nextHandler!== null) {
            this.nextHandler.proceedCheckout(cart);
        }
    }
}

////////////////////////////////////////////////////////////////

const cartItemValidator = new CartItemValidator();
const addressValidator1 = new AddressValidator();
const customerDetailsValidator = new CustomerDetailsValidator();
const paymentDetailsValidator = new PaymentDetailsValidator();
const fraudDetect = new FraudDetect();


cartItemValidator.setNextHandler(addressValidator1);
addressValidator1.setNextHandler(customerDetailsValidator);
customerDetailsValidator.setNextHandler(paymentDetailsValidator);
paymentDetailsValidator.setNextHandler(fraudDetect);
fraudDetect.setNextHandler(new ProceedCheckout());

const cart = new Cart();


cartItemValidator.proceedCheckout(cart);
