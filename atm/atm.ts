class ATMRoom {
    atm: ATM;
    user: User;

    //initialize atm with some balance

    //createUser

    //create Card

    //createBankAccount
}


class ATM {
    atmBalance: number = 0;
    noOfTwoThousandNotes: number = 0;
    noOfFiveHundredNotes: number = 0;
    noOfOneHundredNotes: number = 0;

    //atm crud operations for setting and getting balance and notes
    private currentState: ATMState | null = null;

    setAtmState(state: ATMState) {
        this.currentState = state;
    }

    getAtmState() {
        return this.currentState;
    }

    deductBalance(amt: number) { }
}

class User {
    card: Card;
    bankAccount: BankAccount;
}

class Card {
    cardNumber: number = 0;
    cvv: number = 0;
    expiryDate: Date = new Date();
    holderName: string = '';
    PIN: number = 0;
    bankAccount: BankAccount | null = null;
}

class BankAccount {
    bankaccountNumber: number = 0;
    balance: number = 0;

    withDrawBalance = 0;
    deductBalance(amout: number) { };
}

enum TransactionType {
    CASH_WITHDRWAL = 'cash_withdrawal',
    BALANCE_CHECK = 'balance_check'
}

///////////////////////////

//atm states

interface IATMState {
    insertCard(atm: ATM, card: Card): void;
    authenticatePin(atm: ATM, card: Card, pin: number): void;
    selectOperation(atm: ATM, card: Card, txnType: TransactionType): void;
    cashWithdrawal(atm: ATM, card: Card, withdrawalAmt: number): void;
    displayBalance(atm: ATM, card: Card, withdrawalAmt: number): void;
    returnCard(): void;
    exit(atm: ATM): void;
}

abstract class ATMState implements IATMState {
    constructor() {
    }
    insertCard(atm: ATM, card: Card): void {
        console.log("Not a valid action or something went wrong. Please try after reinserting card");
    }
    authenticatePin(atm: ATM, card: Card, pin: number): void {
        console.log("Not a valid action or something went wrong. Please try after reinserting card");
    }
    selectOperation(atm: ATM, card: Card, txnType: TransactionType): void {
        console.log("Not a valid action or something went wrong. Please try after reinserting card");
    }
    cashWithdrawal(atm: ATM, card: Card, withdrawalAmt: number): void {
        console.log("Not a valid action or something went wrong. Please try after reinserting card");
    }
    displayBalance(atm: ATM, card: Card, withdrawalAmt: number): void {
        console.log("Not a valid action or something went wrong. Please try after reinserting card");
    }
    returnCard(): void {
        console.log("Please collect your card");
    }
    exit(atm: ATM): void {
        atm.setAtmState(new IdleState());
        this.returnCard();
    }
}

class IdleState extends ATMState implements IATMState {
    constructor() {
        super();
        console.log("Please insert card");
    }
    insertCard(atm: ATM, card: Card): void {
        console.log("Card is inserted");
        atm.setAtmState(new HasCardState());
    }
}

class HasCardState extends ATMState implements IATMState {
    constructor() {
        super();
        console.log("Enter you PIN");
    }

    authenticatePin(atm: ATM, card: Card, pin: number): void {
        if (card.PIN === pin) {
            atm.setAtmState(new SelectOperationState());
        } else {
            console.log("Invalid PIN");
        }
    }
}

class SelectOperationState extends ATMState implements IATMState {
    constructor() {
        super();
        console.log("Select Operation");
    }

    selectOperation(atm: ATM, card: Card, txnType: TransactionType) {
        switch (txnType) {
            case TransactionType.CASH_WITHDRWAL: {
                atm.setAtmState(new CashWithDrawalState());
                break;
            }
            case TransactionType.BALANCE_CHECK: {
                atm.setAtmState(new BalanceCheckState());
            }
            default: {
                console.log("Invalid option");
            }

        }
    }
}

class CashWithDrawalState extends ATMState implements IATMState {
    constructor() {
        super();
        console.log("Please enter amount");
    }

    cashWithdrawal(atm: ATM, card: Card, withdrawalAmt: number): void {
        console.log("Not a valid action or something went wrong. Please try after reinserting card");

        if (atm.atmBalance < withdrawalAmt) {
            console.log("Insufficient fund in the ATM Machine");
            this.exit(atm);
        }
        else if (card.bankAccount?.balance < withdrawalAmt) {
            console.log("Insufficient fund in the account");
            this.exit(atm);
        } else {
            card.bankAccount?.deductBalance(withdrawalAmt);
            atm.deductBalance(withdrawalAmt);
        }
        //withdrwa processor logic
        const twoThousandWithDrawalProcessor: ICashWithDrawalProcessor = new TwoThousandWithdrawProcessor();
        const fiveHundredWithDrawalProcessor: ICashWithDrawalProcessor = new FiveHundredWithdrawProcessor();
        const oneHundredWithDrawalProcessor: ICashWithDrawalProcessor = new OneHundreddWithdrawProcessor();

        twoThousandWithDrawalProcessor.setNextHandler(fiveHundredWithDrawalProcessor);
        fiveHundredWithDrawalProcessor.setNextHandler(oneHundredWithDrawalProcessor);

        twoThousandWithDrawalProcessor.proceedToWithdraw(atm, withdrawalAmt);
        this.exit(atm);
    }
}

class CheckBalanceState extends ATMState implements IATMState {
    constructor() {
        super();
    }

    displayBalance(atm: ATM, card: Card, withdrawalAmt: number): void {
        console.log(card.bankAccount?.balance);
        this.exit(atm);
    }
}

///////
//cash withdrawala processor - chain of responsiblity

interface ICashWithDrawalProcessor {
    setNextHandler(nextHandler: ICashWithDrawalProcessor): void;
    proceedToWithdraw(atm: ATM, amt: number): void;
}

abstract class CashWithDrawalProcessor implements ICashWithDrawalProcessor {
    nextHandler: ICashWithDrawalProcessor | null = null;
    setNextHandler(nextHandler: ICashWithDrawalProcessor): void {
        this.nextHandler = nextHandler;
    }

    abstract proceedToWithdraw(atm: ATM, amt: number): void;
}

class TwoThousandWithdrawProcessor extends CashWithDrawalProcessor implements ICashWithDrawalProcessor {
    proceedToWithdraw(atm: ATM, amt: number): void {
        //withdraw 2000 rs notes

        if (this.nextHandler !== null) {
            this.nextHandler?.proceedToWithdraw(atm, amt);
        }
    }
}

class FiveHundredWithdrawProcessor extends CashWithDrawalProcessor implements ICashWithDrawalProcessor {
    proceedToWithdraw(atm: ATM, amt: number): void {
        //withdraw 500 rs notes

        if (this.nextHandler !== null) {
            this.nextHandler?.proceedToWithdraw(atm, amt);
        }
    }
}

class OneHundreddWithdrawProcessor extends CashWithDrawalProcessor implements ICashWithDrawalProcessor {
    proceedToWithdraw(atm: ATM, amt: number): void {
        //withdraw 100 rs notes

        if (this.nextHandler !== null) {
            this.nextHandler?.proceedToWithdraw(atm, amt);
        }
    }
}

///////////////////////////