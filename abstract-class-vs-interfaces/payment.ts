interface PaymentMethod {
    initiatePayment(amount: number): void;
    handleResponse(response: any): void;
}

abstract class BaseMethod implements PaymentMethod {
    protected paymentType: string;

    constructor(paymentType: string) {
        this.paymentType = paymentType;
    }

    protected logActivity(message: string): void {
        //log logic here
    }

    protected fetchOrderAmountDetails() {
        //logic to fetch order, customer and amount details here
    }

    abstract initiatePayment(amount: number): void;
    abstract handleResponse(response: any): void;
}

class CreditCardPayment extends BaseMethod {
    initiatePayment(amount: number): void {
        this.logActivity('Credit card payment');
    }

    handleResponse(response: any): void {
        this.logActivity('Credit Card Response handling');
    }
}

class PaypalPayment extends BaseMethod {
    initiatePayment(amount: number): void {
        this.logActivity('paypal payment');
    }

    handleResponse(response: any): void {
        this.logActivity('Paypal Response handling');
    }
}

class BankTransferPayment extends BaseMethod {
    initiatePayment(amount: number): void {
        this.logActivity('Bank transfer payment');
    }

    handleResponse(response: any): void {
        this.logActivity('Bank transfer handling');
    }
}

const creditCardPayment: PaymentMethod = new CreditCardPayment('creditCard');
creditCardPayment.initiatePayment(1000);
creditCardPayment.handleResponse('Payment successful');

const paypalPayment: PaymentMethod = new PaypalPayment('paypal');
paypalPayment.initiatePayment(1000);
paypalPayment.handleResponse('Payment sucessful');

const bankTransferPayment: PaymentMethod = new BankTransferPayment('bankTransfer');
bankTransferPayment.initiatePayment(1000);
bankTransferPayment.handleResponse('Payment successful');
