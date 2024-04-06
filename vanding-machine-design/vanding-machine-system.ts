enum Item {
    COKE = 'Coke',
    PEPSI = 'Pepsi',
    CHIPS = 'Chips',
    CHOCOLATE = 'Chocolate'
}

class Pricing {
    private prices: Map<string, number> = new Map();

    constructor() {
        this.prices.set(Item.COKE, 10);
        this.prices.set(Item.PEPSI, 20);
        this.prices.set(Item.CHIPS, 15);
        this.prices.set(Item.CHOCOLATE, 20);
    }

    getPrice(item: Item): number | undefined {
        return this.prices.get(item);
    }
}

class ItemShelf {
    private item: Item;
    private quantity: number;

    constructor(item: Item, quantity: number) {
        this.item = item;
        this.quantity = quantity;
    }

    getItem(): Item {
        return this.item;
    }

    getQuantity(): number {
        return this.quantity;
    }

    decreaseQuantity(): void {
        if (this.quantity > 0) this.quantity--;
    }

    increaseQuantity(): void {
        if (this.quantity > 0) this.quantity++;
    }
}

class ItemInventory {
    private shelves: Map<Item, ItemShelf>

    constructor() {
        this.shelves = new Map<Item, ItemShelf>();
    }

    addItem(item: Item, quantity: number): void {
        if (this.shelves.has(item)) {
            const shelf = this.shelves.get(item);
            if (shelf) shelf.increaseQuantity();
        } else {
            this.shelves.set(item, new ItemShelf(item, quantity));
        }
    }

    removeItem(item: Item): void {
        if (this.shelves.has(item)) {
            const shelf = this.shelves.get(item);
            if (shelf) shelf.decreaseQuantity();
        }
    }

    getItemQuantity(item: Item): number {
        const shelf = this.shelves.get(item);
        return shelf ? shelf.getQuantity() : 0;
    }
}

interface IVendingState {
    insertMoney(amount: number): string;
    selectItem(item: Item): string;
    refundChange(): number | string;
    dispense(): string | null;
    cancel(): void;
}

abstract class VendingState implements IVendingState {
    constructor(protected vendingMachine: VendingMachine) { }
    insertMoney(amount: number): string {
        return "Money can't be dispensed";
    };
    selectItem(item: Item): string {
        return "Item can't be selected, please insert money or wait to dispense";
    };
    refundChange(): number | string {
        return "Nothing to refund";
    };
    dispense(): string | null {
        return "Nothing to dispense"
    };
    cancel(): void {
        this.refundChange();
        this.vendingMachine.setState(new NoMoneyState(this.vendingMachine));
    };
}


class NoMoneyState extends VendingState implements IVendingState {
    insertMoney(amount: number): string {
        const moneyInserted = this.vendingMachine.insertMoney(amount);
        this.vendingMachine.setState(new HasMoneyState(this.vendingMachine));
        return `Total money inserted ${moneyInserted}`;
    }
}

class HasMoneyState extends VendingState implements IVendingState {

    insertMoney(amount: number): string {
        const moneyInserted = this.vendingMachine.insertMoney(amount);
        this.vendingMachine.setState(new HasMoneyState(this.vendingMachine));
        return `Total money inserted ${moneyInserted}`;
    }

    selectItem(item: Item): string {
        const currentMoney = this.vendingMachine.getMoneyInserted();
        const itemPrice = this.vendingMachine.getItemPrice(item);
        if (!itemPrice) return `Item ${item} is not available`;
        if (currentMoney < itemPrice) return `Insufficient money, Please insert balance`;

        this.vendingMachine.selectItem(item);
        const refundAmount = this.refundChange();
        this.vendingMachine.setState(new DispenseState(this.vendingMachine));
        return `Item ${item} is selected with refund change ${refundAmount}`;
    }

    refundChange(): number {
        const itemSelected = this.vendingMachine.getItemSelected();
        const currentMoney = this.vendingMachine.getMoneyInserted();
        if (!itemSelected) return currentMoney;
        const itemPrice = this.vendingMachine.getItemPrice(itemSelected);
        if (!itemPrice) return currentMoney;
        return currentMoney - itemPrice;
    }
}

class DispenseState extends VendingState implements IVendingState {
    dispense(): string {
        const itemSelected = this.vendingMachine.getItemSelected();
        if (!itemSelected) return "No Item is selected";
        this.vendingMachine.getInventory().removeItem(itemSelected);
        return `Item ${itemSelected} is dispensed`;
    }
}


class VendingMachine {
    private inventory: ItemInventory;
    private currentMoney: number;
    private itemSelected: Item | null;
    private currentState: IVendingState;
    private pricing: Pricing;

    constructor() {
        this.inventory = new ItemInventory();
        this.currentMoney = 0;
        this.itemSelected = null;
        this.pricing = new Pricing();
        this.currentState = new NoMoneyState(this);
    }

    setState(state: IVendingState): void {
        this.currentState = state;
    }

    getState(): IVendingState {
        return this.currentState
    }

    insertMoney(money: number): number {
        this.currentMoney += money;
        return this.currentMoney;
    }

    getMoneyInserted(): number {
        return this.currentMoney;
    }

    selectItem(item: Item): void {
        if (this.inventory.getItemQuantity(item) > 0) this.itemSelected = item;
    }

    getItemSelected(): Item | null {
        return this.itemSelected;
    }

    getItemPrice(item: Item): number | undefined {
        return this.pricing.getPrice(item);
    }

    getInventory() {
        return this.inventory;
    }

    setInventory(item: Item, quantity: number): void {
        this.inventory.addItem(item, quantity);
    }

    initializeMachine(items: Array<Array<any>>): string {
        for (const item of items) {
            this.inventory.addItem(item[0], item[1]);
        }
        return `Machine initialization completed!`;
    }
}



/**----------------Main/client--------*/
const vendingMachine = new VendingMachine();
vendingMachine.initializeMachine([[Item.COKE, 10], [Item.PEPSI, 10], [Item.CHIPS, 10], [Item.CHOCOLATE, 10]]);

let state = vendingMachine.getState();
let insertResp = state.insertMoney(20);
console.log(insertResp);

state = vendingMachine.getState();
let selectResp = state.selectItem(Item.PEPSI);
console.log(selectResp);

state = vendingMachine.getState();
let dispenseResp = state.dispense();
console.log(dispenseResp);




