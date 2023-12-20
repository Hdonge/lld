var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UPIPayment = /** @class */ (function () {
    function UPIPayment() {
    }
    return UPIPayment;
}());
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
    }
    return CreditCardPayment;
}());
var NetbankingPayment = /** @class */ (function () {
    function NetbankingPayment() {
    }
    return NetbankingPayment;
}());
var PaymentFactory = /** @class */ (function () {
    function PaymentFactory() {
    }
    return PaymentFactory;
}());
var PhonepePayementGatewayFactory = /** @class */ (function (_super) {
    __extends(PhonepePayementGatewayFactory, _super);
    function PhonepePayementGatewayFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhonepePayementGatewayFactory.prototype.createNetbankingPayment = function () {
        return new PhonepeNetbankingPayement();
    };
    PhonepePayementGatewayFactory.prototype.createCreditCardPayment = function () {
        return new PhonepeCreditCardPayment();
    };
    PhonepePayementGatewayFactory.prototype.createUPIPayment = function () {
        return new PhonepeUPIPayment();
    };
    return PhonepePayementGatewayFactory;
}(PaymentFactory));
var RazorpayPayementGatewayFactory = /** @class */ (function (_super) {
    __extends(RazorpayPayementGatewayFactory, _super);
    function RazorpayPayementGatewayFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RazorpayPayementGatewayFactory.prototype.createNetbankingPayment = function () {
        return new RazorpayNetbankingPayement();
    };
    RazorpayPayementGatewayFactory.prototype.createCreditCardPayment = function () {
        return new RazorpayCreditCardPayment();
    };
    RazorpayPayementGatewayFactory.prototype.createUPIPayment = function () {
        return new RazorpayUPIPayment();
    };
    return RazorpayPayementGatewayFactory;
}(PaymentFactory));
var PhonepeNetbankingPayement = /** @class */ (function (_super) {
    __extends(PhonepeNetbankingPayement, _super);
    function PhonepeNetbankingPayement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhonepeNetbankingPayement.prototype.processPayment = function (amount) {
        console.log("Net banking payment using phonepe payment gateway", amount);
    };
    return PhonepeNetbankingPayement;
}(NetbankingPayment));
var PhonepeCreditCardPayment = /** @class */ (function (_super) {
    __extends(PhonepeCreditCardPayment, _super);
    function PhonepeCreditCardPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhonepeCreditCardPayment.prototype.processPayment = function (amount) {
        console.log("Credit card payment using phonepe payment gateway", amount);
    };
    return PhonepeCreditCardPayment;
}(CreditCardPayment));
var PhonepeUPIPayment = /** @class */ (function (_super) {
    __extends(PhonepeUPIPayment, _super);
    function PhonepeUPIPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhonepeUPIPayment.prototype.processPayment = function (amount) {
        console.log("UPI payment using phonepe payment gateway", amount);
    };
    return PhonepeUPIPayment;
}(UPIPayment));
var RazorpayNetbankingPayement = /** @class */ (function (_super) {
    __extends(RazorpayNetbankingPayement, _super);
    function RazorpayNetbankingPayement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RazorpayNetbankingPayement.prototype.processPayment = function (amount) {
        console.log("Net banking payment using razorpay payment gateway", amount);
    };
    return RazorpayNetbankingPayement;
}(NetbankingPayment));
var RazorpayCreditCardPayment = /** @class */ (function (_super) {
    __extends(RazorpayCreditCardPayment, _super);
    function RazorpayCreditCardPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RazorpayCreditCardPayment.prototype.processPayment = function (amount) {
        console.log("Credit card payment using razorpay payment gateway", amount);
    };
    return RazorpayCreditCardPayment;
}(CreditCardPayment));
var RazorpayUPIPayment = /** @class */ (function (_super) {
    __extends(RazorpayUPIPayment, _super);
    function RazorpayUPIPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RazorpayUPIPayment.prototype.processPayment = function (amount) {
        console.log("UPI payment using razorpay payment gateway", amount);
    };
    return RazorpayUPIPayment;
}(UPIPayment));
///////////////////////////
var paymentGateway = 'razorpay';
var paymentFactory = null;
if (paymentGateway.toLowerCase() === 'razorpay') {
    paymentFactory = new RazorpayPayementGatewayFactory();
}
else if (paymentGateway.toLowerCase() === 'phonepe') {
    paymentFactory = new PhonepePayementGatewayFactory();
}
else {
    console.log("Invalid payment gateway");
}
if (paymentFactory !== null) {
    var creditCardPayment = paymentFactory.createCreditCardPayment(100);
    var upiPayment = paymentFactory.createUPIPayment(100);
    var netbanking = paymentFactory.createNetbankingPayment(100);
    creditCardPayment.processPayment(100);
    upiPayment.processPayment(100);
    netbanking.processPayment(100);
}
