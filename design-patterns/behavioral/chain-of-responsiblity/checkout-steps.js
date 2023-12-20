var Cart = /** @class */ (function () {
    function Cart() {
        this.cartId = 123;
        //Cart details;
    }
    return Cart;
}());
var CartItemValidator = /** @class */ (function () {
    function CartItemValidator() {
        this.nextHandler = null;
    }
    CartItemValidator.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    CartItemValidator.prototype.proceedCheckout = function (cart) {
        console.log('Validating Cart Item......' + cart);
        if (this.nextHandler !== null) {
            this.nextHandler.proceedCheckout(cart);
        }
    };
    return CartItemValidator;
}());
var AddressValidator = /** @class */ (function () {
    function AddressValidator() {
        this.nextHandler = null;
    }
    AddressValidator.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    AddressValidator.prototype.proceedCheckout = function (cart) {
        console.log('Validating Address......' + cart);
        if (this.nextHandler !== null) {
            this.nextHandler.proceedCheckout(cart);
        }
    };
    return AddressValidator;
}());
var CustomerDetailsValidator = /** @class */ (function () {
    function CustomerDetailsValidator() {
        this.nextHandler = null;
    }
    CustomerDetailsValidator.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    CustomerDetailsValidator.prototype.proceedCheckout = function (cart) {
        console.log('Validating Customer Details......' + cart);
        if (this.nextHandler !== null) {
            this.nextHandler.proceedCheckout(cart);
        }
    };
    return CustomerDetailsValidator;
}());
var PaymentDetailsValidator = /** @class */ (function () {
    function PaymentDetailsValidator() {
        this.nextHandler = null;
    }
    PaymentDetailsValidator.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    PaymentDetailsValidator.prototype.proceedCheckout = function (cart) {
        console.log('Validating Payment Details......' + cart);
        if (this.nextHandler !== null) {
            this.nextHandler.proceedCheckout(cart);
        }
    };
    return PaymentDetailsValidator;
}());
var FraudDetect = /** @class */ (function () {
    function FraudDetect() {
        this.nextHandler = null;
    }
    FraudDetect.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    FraudDetect.prototype.proceedCheckout = function (cart) {
        console.log('Detecting Fraud......' + cart);
        if (this.nextHandler !== null) {
            this.nextHandler.proceedCheckout(cart);
        }
    };
    return FraudDetect;
}());
var ProceedCheckout = /** @class */ (function () {
    function ProceedCheckout() {
        this.nextHandler = null;
    }
    ProceedCheckout.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    ProceedCheckout.prototype.proceedCheckout = function (cart) {
        console.log('Proceeding to Checkout......' + cart);
        if (this.nextHandler !== null) {
            this.nextHandler.proceedCheckout(cart);
        }
    };
    return ProceedCheckout;
}());
////////////////////////////////////////////////////////////////
var cartItemValidator = new CartItemValidator();
var addressValidator1 = new AddressValidator();
var customerDetailsValidator = new CustomerDetailsValidator();
var paymentDetailsValidator = new PaymentDetailsValidator();
var fraudDetect = new FraudDetect();
cartItemValidator.setNextHandler(addressValidator1);
addressValidator1.setNextHandler(customerDetailsValidator);
customerDetailsValidator.setNextHandler(paymentDetailsValidator);
paymentDetailsValidator.setNextHandler(fraudDetect);
fraudDetect.setNextHandler(new ProceedCheckout());
var cart = new Cart();
cartItemValidator.proceedCheckout(cart);
