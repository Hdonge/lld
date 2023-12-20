interface TransactionProcessor {
    setNextHandler(nextHandler: TransactionProcessor): void;
    process(transaction: Transaction): void;
}

class TransactionValidator implements TransactionProcessor {
    private nextHandler: TransactionProcessor | null = null;
    setNextHandler(nextHandler: TransactionProcessor): void {
        this.nextHandler = nextHandler;
    }

    process(transaction: Transaction): void {
        console.log('Validating Transaction details......' + transaction);

        if (this.nextHandler !== null) {
            this.nextHandler.process(transaction);
        }
    }
}

class FraudDetector implements TransactionProcessor {
    private nextHandler: TransactionProcessor | null = null;
    setNextHandler(nextHandler: TransactionProcessor): void {
        this.nextHandler = nextHandler;
    }

    process(transaction: Transaction): void {
        console.log('Detecting Fraud......' + transaction);

        if (this.nextHandler !== null) {
            this.nextHandler.process(transaction);
        }
    }
}

class ComplianceChecker implements TransactionProcessor {
    private nextHandler: TransactionProcessor | null = null;

    setNextHandler(nextHandler: TransactionProcessor): void {
        this.nextHandler = nextHandler;
    }

    process(transaction: Transaction): void {
        console.log('Checking Compliance......' + transaction);

        if (this.nextHandler !== null) {
            this.nextHandler.process(transaction);
        }
    }
}

class Transaction {
    constructor(public amount: number, public fromAccount: string, public toAccount: string) { }
}

//////////////////////////////////////

const transactionValidator = new TransactionValidator();
const fraudDetector = new FraudDetector();
const complianceChecker = new ComplianceChecker();

transactionValidator.setNextHandler(fraudDetector);
fraudDetector.setNextHandler(complianceChecker);

const transactionDetails: Transaction = {
    amount: 1000,
    fromAccount: '1234567890',
    toAccount: '0987654321',
    // Other transaction details
};
transactionValidator.process(transactionDetails);