var InitiateOrderProcessor = /** @class */ (function () {
    function InitiateOrderProcessor() {
        this.nextHandler = null;
    }
    InitiateOrderProcessor.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    InitiateOrderProcessor.prototype.processdOrder = function (orderObject) {
        console.log('Initiating Order Processing......');
        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    };
    return InitiateOrderProcessor;
}());
var ValidateOrderedItems = /** @class */ (function () {
    function ValidateOrderedItems() {
        this.nextHandler = null;
    }
    ValidateOrderedItems.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    ValidateOrderedItems.prototype.processdOrder = function (orderObject) {
        console.log('Validating Ordered Items......');
        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    };
    return ValidateOrderedItems;
}());
var ValidateAddressDetails = /** @class */ (function () {
    function ValidateAddressDetails() {
        this.nextHandler = null;
    }
    ValidateAddressDetails.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    ValidateAddressDetails.prototype.processdOrder = function (orderObject) {
        console.log('Validating Address Details......');
        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    };
    return ValidateAddressDetails;
}());
var ValidateCustomerDetails = /** @class */ (function () {
    function ValidateCustomerDetails() {
        this.nextHandler = null;
    }
    ValidateCustomerDetails.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    ValidateCustomerDetails.prototype.processdOrder = function (orderObject) {
        console.log('Validating Customer Details......');
        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    };
    return ValidateCustomerDetails;
}());
var ValidatePaymentDetails = /** @class */ (function () {
    function ValidatePaymentDetails() {
        this.nextHandler = null;
    }
    ValidatePaymentDetails.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    ValidatePaymentDetails.prototype.processdOrder = function (orderObject) {
        console.log('Validating Payment Details......');
        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    };
    return ValidatePaymentDetails;
}());
var ValidateShippingDetails = /** @class */ (function () {
    function ValidateShippingDetails() {
        this.nextHandler = null;
    }
    ValidateShippingDetails.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    ValidateShippingDetails.prototype.processdOrder = function (orderObject) {
        console.log('Validating Shipping Details......');
        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    };
    return ValidateShippingDetails;
}());
var FraudDetection = /** @class */ (function () {
    function FraudDetection() {
        this.nextHandler = null;
    }
    FraudDetection.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    FraudDetection.prototype.processdOrder = function (orderObject) {
        console.log('Fraud Detection......');
        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    };
    return FraudDetection;
}());
var PrepareOrderJson = /** @class */ (function () {
    function PrepareOrderJson() {
        this.nextHandler = null;
    }
    PrepareOrderJson.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    PrepareOrderJson.prototype.processdOrder = function (orderObject) {
        console.log('Preparing Order JSON......');
        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    };
    return PrepareOrderJson;
}());
var ValidateOrderJson = /** @class */ (function () {
    function ValidateOrderJson() {
        this.nextHandler = null;
    }
    ValidateOrderJson.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    ValidateOrderJson.prototype.processdOrder = function (orderObject) {
        console.log('Validating Order JSON......');
        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    };
    return ValidateOrderJson;
}());
var OracleImport = /** @class */ (function () {
    function OracleImport() {
        this.nextHandler = null;
    }
    OracleImport.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    OracleImport.prototype.processdOrder = function (orderObject) {
        console.log('Importing Order JSON in Oracle......');
        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    };
    return OracleImport;
}());
////////////////////////////////////////////////////////////////
var initiateOrderProcessor = new InitiateOrderProcessor();
var validateOrderedItems = new ValidateOrderedItems();
var validateAddressDetails = new ValidateAddressDetails();
var validateCustomerDetails = new ValidateCustomerDetails();
var validatePaymentDetails = new ValidatePaymentDetails();
var validateShippingDetails = new ValidateShippingDetails();
var fraudDetection = new FraudDetection();
var prepareOrderJson = new PrepareOrderJson();
var validateOrderJson = new ValidateOrderJson();
var oracleImport = new OracleImport();
initiateOrderProcessor.setNextHandler(validateOrderedItems);
validateOrderedItems.setNextHandler(validateAddressDetails);
validateAddressDetails.setNextHandler(validateCustomerDetails);
validateCustomerDetails.setNextHandler(validatePaymentDetails);
validatePaymentDetails.setNextHandler(validateShippingDetails);
validateShippingDetails.setNextHandler(fraudDetection);
fraudDetection.setNextHandler(prepareOrderJson);
prepareOrderJson.setNextHandler(validateOrderJson);
validateOrderJson.setNextHandler(oracleImport);
var orderObject = {
    orderCode: "12345",
};
initiateOrderProcessor.processdOrder(orderObject);
