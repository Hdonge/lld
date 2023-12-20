interface OrderProcessor {
    setNextHandler(nextHandler: OrderProcessor): void;
    processdOrder(orderObject: any): void;
}

class InitiateOrderProcessor implements OrderProcessor {
    private nextHandler: OrderProcessor | null = null;
    setNextHandler(nextHandler: OrderProcessor): void {
        this.nextHandler = nextHandler;
    }
    processdOrder(orderObject: any): void {
        console.log('Initiating Order Processing......');

        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    }
}

class ValidateOrderedItems implements OrderProcessor {
    private nextHandler: OrderProcessor | null = null;
    setNextHandler(nextHandler: OrderProcessor): void {
        this.nextHandler = nextHandler;
    }
    processdOrder(orderObject: any): void {
        console.log('Validating Ordered Items......');

        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    }
}

class ValidateAddressDetails implements OrderProcessor {
    private nextHandler: OrderProcessor | null = null;
    setNextHandler(nextHandler: OrderProcessor): void {
        this.nextHandler = nextHandler;
    }
    processdOrder(orderObject: any): void {
        console.log('Validating Address Details......');

        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    }
}

class ValidateCustomerDetails implements OrderProcessor {
    private nextHandler: OrderProcessor | null = null;
    setNextHandler(nextHandler: OrderProcessor): void {
        this.nextHandler = nextHandler;
    }
    processdOrder(orderObject: any): void {
        console.log('Validating Customer Details......');

        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    }
}

class ValidatePaymentDetails implements OrderProcessor {
    private nextHandler: OrderProcessor | null = null;
    setNextHandler(nextHandler: OrderProcessor): void {
        this.nextHandler = nextHandler;
    }
    processdOrder(orderObject: any): void {
        console.log('Validating Payment Details......');

        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    }
}

class ValidateShippingDetails implements OrderProcessor {
    private nextHandler: OrderProcessor | null = null;
    setNextHandler(nextHandler: OrderProcessor): void {
        this.nextHandler = nextHandler;
    }
    processdOrder(orderObject: any): void {
        console.log('Validating Shipping Details......');

        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    }
}

class FraudDetection implements OrderProcessor {
    private nextHandler: OrderProcessor | null = null;
    setNextHandler(nextHandler: OrderProcessor): void {
        this.nextHandler = nextHandler;
    }
    processdOrder(orderObject: any): void {
        console.log('Fraud Detection......');

        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    }
}

class PrepareOrderJson implements OrderProcessor {
    private nextHandler: OrderProcessor | null = null;
    setNextHandler(nextHandler: OrderProcessor): void {
        this.nextHandler = nextHandler;
    }
    processdOrder(orderObject: any): void {
        console.log('Preparing Order JSON......');

        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    }
}

class ValidateOrderJson implements OrderProcessor {
    private nextHandler: OrderProcessor | null = null;
    setNextHandler(nextHandler: OrderProcessor): void {
        this.nextHandler = nextHandler;
    }
    processdOrder(orderObject: any): void {
        console.log('Validating Order JSON......');

        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    }
}

class OracleImport implements OrderProcessor {
    private nextHandler: OrderProcessor | null = null;
    setNextHandler(nextHandler: OrderProcessor): void {
        this.nextHandler = nextHandler;
    }
    processdOrder(orderObject: any): void {
        console.log('Importing Order JSON in Oracle......');

        if (this.nextHandler !== null) {
            this.nextHandler.processdOrder(orderObject);
        }
    }
}

////////////////////////////////////////////////////////////////

const initiateOrderProcessor = new InitiateOrderProcessor();
const validateOrderedItems = new ValidateOrderedItems();
const validateAddressDetails = new ValidateAddressDetails();
const validateCustomerDetails = new ValidateCustomerDetails();
const validatePaymentDetails = new ValidatePaymentDetails();
const validateShippingDetails = new ValidateShippingDetails();
const fraudDetection = new FraudDetection();
const prepareOrderJson = new PrepareOrderJson();
const validateOrderJson = new ValidateOrderJson();
const oracleImport = new OracleImport();


initiateOrderProcessor.setNextHandler(validateOrderedItems);
validateOrderedItems.setNextHandler(validateAddressDetails);
validateAddressDetails.setNextHandler(validateCustomerDetails);
validateCustomerDetails.setNextHandler(validatePaymentDetails);
validatePaymentDetails.setNextHandler(validateShippingDetails);
validateShippingDetails.setNextHandler(fraudDetection);
fraudDetection.setNextHandler(prepareOrderJson);
prepareOrderJson.setNextHandler(validateOrderJson);
validateOrderJson.setNextHandler(oracleImport);


const orderObject = {
    orderCode: "12345",
}

initiateOrderProcessor.processdOrder(orderObject);