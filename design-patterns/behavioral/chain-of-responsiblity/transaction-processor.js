var TransactionValidator = /** @class */ (function () {
    function TransactionValidator() {
        this.nextHandler = null;
    }
    TransactionValidator.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    TransactionValidator.prototype.process = function (transaction) {
        console.log('Validating Transaction details......' + transaction);
        if (this.nextHandler !== null) {
            this.nextHandler.process(transaction);
        }
    };
    return TransactionValidator;
}());
var FraudDetector = /** @class */ (function () {
    function FraudDetector() {
        this.nextHandler = null;
    }
    FraudDetector.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    FraudDetector.prototype.process = function (transaction) {
        console.log('Detecting Fraud......' + transaction);
        if (this.nextHandler !== null) {
            this.nextHandler.process(transaction);
        }
    };
    return FraudDetector;
}());
var ComplianceChecker = /** @class */ (function () {
    function ComplianceChecker() {
        this.nextHandler = null;
    }
    ComplianceChecker.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    ComplianceChecker.prototype.process = function (transaction) {
        console.log('Checking Compliance......' + transaction);
        if (this.nextHandler !== null) {
            this.nextHandler.process(transaction);
        }
    };
    return ComplianceChecker;
}());
var Transaction = /** @class */ (function () {
    function Transaction(amount, fromAccount, toAccount) {
        this.amount = amount;
        this.fromAccount = fromAccount;
        this.toAccount = toAccount;
    }
    return Transaction;
}());
//////////////////////////////////////
var transactionValidator = new TransactionValidator();
var fraudDetector = new FraudDetector();
var complianceChecker = new ComplianceChecker();
transactionValidator.setNextHandler(fraudDetector);
fraudDetector.setNextHandler(complianceChecker);
var transactionDetails = {
    amount: 1000,
    fromAccount: '1234567890',
    toAccount: '0987654321',
    // Other transaction details
};
transactionValidator.process(transactionDetails);
