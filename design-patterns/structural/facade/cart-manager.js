var InventoryService = /** @class */ (function () {
    function InventoryService() {
    }
    InventoryService.prototype.checkAvailability = function (productId, quantity) { return true; };
    return InventoryService;
}());
var PaymentService = /** @class */ (function () {
    function PaymentService() {
    }
    PaymentService.prototype.processPayment = function (amount, paymentMethod) { return true; };
    return PaymentService;
}());
var shippingService = /** @class */ (function () {
    function shippingService() {
    }
    shippingService.prototype.shipOrder = function (productId, quantity, address) { return 'SHIPPING-TRACKING-NUMBER'; };
    return shippingService;
}());
var CartManagerFacade = /** @class */ (function () {
    function CartManagerFacade() {
        this.inventoryService = new InventoryService();
        this.paymentService = new PaymentService();
        this.shippingService = new shippingService();
    }
    CartManagerFacade.prototype.placeOrder = function (productId, quantity, address, paymentMethod) {
        var isAvailable = this.inventoryService.checkAvailability(productId, quantity);
        if (!isAvailable)
            return undefined;
        var isPaymentSuccessful = this.paymentService.processPayment(quantity, paymentMethod);
        if (!isPaymentSuccessful)
            return undefined;
        var trackingNumber = this.shippingService.shipOrder(productId, quantity, address);
        return trackingNumber;
    };
    return CartManagerFacade;
}());
var cartManager = new CartManagerFacade();
var trackingNumber = cartManager.placeOrder('Base Product', 1, '123 Main St', 'Credit Card');
if (trackingNumber) {
    console.log('Order placed successfully. Tracking number: ' + trackingNumber);
}
else {
    console.log('Order not placed');
}
