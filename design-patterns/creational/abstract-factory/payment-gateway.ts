interface Payment {
    processPayment(amount: number): void;
}

abstract class UPIPayment implements Payment {
    abstract processPayment(amount: number): void;
}

abstract class CreditCardPayment implements Payment {
    abstract processPayment(amount: number): void;
}

abstract class NetbankingPayment implements Payment {
    abstract processPayment(amount: number): void;
}

abstract class PaymentFactory {
    abstract createUPIPayment(amount: number): UPIPayment;
    abstract createCreditCardPayment(amount: number): CreditCardPayment;
    abstract createNetbankingPayment(amount: number): NetbankingPayment;
}

class PhonepePayementGatewayFactory extends PaymentFactory {
    createNetbankingPayment(): NetbankingPayment {
        return new PhonepeNetbankingPayement();
    }

    createCreditCardPayment(): CreditCardPayment {
        return new PhonepeCreditCardPayment();
    }

    createUPIPayment(): UPIPayment {
        return new PhonepeUPIPayment();
    }
}

class RazorpayPayementGatewayFactory extends PaymentFactory{
    createNetbankingPayment(): NetbankingPayment {
        return new RazorpayNetbankingPayement();
    }

    createCreditCardPayment(): CreditCardPayment {
        return new RazorpayCreditCardPayment();
    }

    createUPIPayment(): UPIPayment {
        return new RazorpayUPIPayment();
    }
}

class PhonepeNetbankingPayement extends NetbankingPayment{
    processPayment(amount: number): void {
        console.log("Net banking payment using phonepe payment gateway",amount);
    }
}

class PhonepeCreditCardPayment extends CreditCardPayment{
    processPayment(amount: number): void {
        console.log("Credit card payment using phonepe payment gateway", amount);
    }
}

class PhonepeUPIPayment extends UPIPayment{
    processPayment(amount: number): void {
        console.log("UPI payment using phonepe payment gateway", amount);
    }
}

class RazorpayNetbankingPayement extends NetbankingPayment{
    processPayment(amount: number): void {
        console.log("Net banking payment using razorpay payment gateway",amount);
    }
}

class RazorpayCreditCardPayment extends CreditCardPayment{
    processPayment(amount: number): void {
        console.log("Credit card payment using razorpay payment gateway", amount);
    }
}

class RazorpayUPIPayment extends UPIPayment{
    processPayment(amount: number): void {
        console.log("UPI payment using razorpay payment gateway", amount);
    }
}

///////////////////////////

const paymentGateway = 'razorpay';
let paymentFactory: PaymentFactory | null = null;
if(paymentGateway.toLowerCase() === 'razorpay'){
    paymentFactory = new RazorpayPayementGatewayFactory();
}else if(paymentGateway.toLowerCase() === 'phonepe'){
    paymentFactory = new PhonepePayementGatewayFactory();
}else {
    console.log("Invalid payment gateway");
}

if(paymentFactory !== null){
    const creditCardPayment = paymentFactory.createCreditCardPayment(100);
    const upiPayment = paymentFactory.createUPIPayment(100);
    const netbanking = paymentFactory.createNetbankingPayment(100);

    creditCardPayment.processPayment(100);
    upiPayment.processPayment(100);
    netbanking.processPayment(100);
}
