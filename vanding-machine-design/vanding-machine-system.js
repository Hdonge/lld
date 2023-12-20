var Item;
(function (Item) {
    Item["COKE"] = "Coke";
    Item["PEPSI"] = "Pepsi";
    Item["CHIPS"] = "Chips";
    Item["CHOCOLATE"] = "Chocolate";
})(Item || (Item = {}));
var Pricing = /** @class */ (function () {
    function Pricing() {
        this.prices = new Map();
        this.prices.set(Item.COKE, 10);
        this.prices.set(Item.PEPSI, 20);
        this.prices.set(Item.CHIPS, 15);
        this.prices.set(Item.CHOCOLATE, 20);
    }
    Pricing.prototype.getPrice = function (item) {
        return this.prices.get(item);
    };
    return Pricing;
}());
var ItemShelf = /** @class */ (function () {
    function ItemShelf(item, quantity) {
        this.item = item;
        this.quantity = quantity;
    }
    ItemShelf.prototype.getItem = function () {
        return this.item;
    };
    ItemShelf.prototype.getQuantity = function () {
        return this.quantity;
    };
    ItemShelf.prototype.decreaseQuantity = function () {
        if (this.quantity > 0)
            this.quantity--;
    };
    ItemShelf.prototype.increaseQuantity = function () {
        if (this.quantity > 0)
            this.quantity++;
    };
    return ItemShelf;
}());
var ItemInventory = /** @class */ (function () {
    function ItemInventory() {
        this.shelves = new Map();
    }
    ItemInventory.prototype.addItem = function (item, quantity) {
        if (this.shelves.has(item)) {
            var shelf = this.shelves.get(item);
            if (shelf)
                shelf.increaseQuantity();
        }
        else {
            this.shelves.set(item, new ItemShelf(item, quantity));
        }
    };
    ItemInventory.prototype.removeItem = function (item) {
        if (this.shelves.has(item)) {
            var shelf = this.shelves.get(item);
            if (shelf)
                shelf.decreaseQuantity();
        }
    };
    ItemInventory.prototype.getItemQuantity = function (item) {
        var shelf = this.shelves.get(item);
        return shelf ? shelf.getQuantity() : 0;
    };
    return ItemInventory;
}());
var NoMoneyState = /** @class */ (function () {
    function NoMoneyState(vendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    NoMoneyState.prototype.insertMoney = function (amount) {
        var moneyInserted = this.vendingMachine.insertMoney(amount);
        this.vendingMachine.setState(new HasMoneyState(this.vendingMachine));
        return "Total money inserted ".concat(moneyInserted);
    };
    NoMoneyState.prototype.selectItem = function (item) {
        return "Please insert money first";
    };
    NoMoneyState.prototype.refundChange = function () {
        console.log("Refund applicable ".concat(0));
        return 0;
    };
    NoMoneyState.prototype.dispense = function () {
        console.log("No dispense applicable");
        return null;
    };
    NoMoneyState.prototype.cancel = function () {
        console.log("Nothing to cancel");
    };
    return NoMoneyState;
}());
var HasMoneyState = /** @class */ (function () {
    function HasMoneyState(vendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    HasMoneyState.prototype.insertMoney = function (amount) {
        var moneyInserted = this.vendingMachine.insertMoney(amount);
        return "Total money inserted ".concat(moneyInserted);
    };
    HasMoneyState.prototype.selectItem = function (item) {
        var currentMoney = this.vendingMachine.getMoneyInserted();
        var itemPrice = this.vendingMachine.getItemPrice(item);
        if (!itemPrice)
            return "Item ".concat(item, " is not available");
        if (currentMoney < itemPrice)
            return "Insufficient money, Please insert balance";
        this.vendingMachine.selectItem(item);
        var refundAmount = this.refundChange();
        this.vendingMachine.setState(new DispenseState(this.vendingMachine));
        return "Item ".concat(item, " is selected with refund change ").concat(refundAmount);
    };
    HasMoneyState.prototype.refundChange = function () {
        var itemSelected = this.vendingMachine.getItemSelected();
        var currentMoney = this.vendingMachine.getMoneyInserted();
        if (!itemSelected)
            return currentMoney;
        var itemPrice = this.vendingMachine.getItemPrice(itemSelected);
        if (!itemPrice)
            return currentMoney;
        return currentMoney - itemPrice;
    };
    HasMoneyState.prototype.dispense = function () {
    };
    HasMoneyState.prototype.cancel = function () {
        this.refundChange();
        this.vendingMachine.setState(new NoMoneyState(this.vendingMachine));
    };
    return HasMoneyState;
}());
var DispenseState = /** @class */ (function () {
    function DispenseState(vendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    DispenseState.prototype.insertMoney = function (amount) {
        throw new Error("Machine dispensing product! Money can't be inserted.");
    };
    DispenseState.prototype.selectItem = function (item) {
        throw new Error("Machine dispensing product!Item can't be selected.");
    };
    DispenseState.prototype.refundChange = function () {
        throw new Error("Machine dispensing product! No refund applicable");
    };
    DispenseState.prototype.dispense = function () {
        var itemSelected = this.vendingMachine.getItemSelected();
        if (!itemSelected)
            return "No Item is selected";
        this.vendingMachine.getInventory().removeItem(itemSelected);
        return "Item ".concat(itemSelected, " is dispensed");
    };
    DispenseState.prototype.cancel = function () {
        throw new Error("Machine dispensing product! No cancel applicable");
    };
    return DispenseState;
}());
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        this.inventory = new ItemInventory();
        this.currentMoney = 0;
        this.itemSelected = null;
        this.pricing = new Pricing();
        this.currentState = new NoMoneyState(this);
    }
    VendingMachine.prototype.setState = function (state) {
        this.currentState = state;
    };
    VendingMachine.prototype.getState = function () {
        return this.currentState;
    };
    VendingMachine.prototype.insertMoney = function (money) {
        this.currentMoney += money;
        return this.currentMoney;
    };
    VendingMachine.prototype.getMoneyInserted = function () {
        return this.currentMoney;
    };
    VendingMachine.prototype.selectItem = function (item) {
        if (this.inventory.getItemQuantity(item) > 0)
            this.itemSelected = item;
    };
    VendingMachine.prototype.getItemSelected = function () {
        return this.itemSelected;
    };
    VendingMachine.prototype.getItemPrice = function (item) {
        return this.pricing.getPrice(item);
    };
    VendingMachine.prototype.getInventory = function () {
        return this.inventory;
    };
    VendingMachine.prototype.setInventory = function (item, quantity) {
        this.inventory.addItem(item, quantity);
    };
    VendingMachine.prototype.initializeMachine = function (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.inventory.addItem(item[0], item[1]);
        }
        return "Machine initialization completed!";
    };
    return VendingMachine;
}());
/**----------------Main--------*/
var vendingMachine = new VendingMachine();
vendingMachine.initializeMachine([[Item.COKE, 10], [Item.PEPSI, 10], [Item.CHIPS, 10], [Item.CHOCOLATE, 10]]);
var state = vendingMachine.getState();
var insertResp = state.insertMoney(20);
console.log(insertResp);
state = vendingMachine.getState();
var selectResp = state.selectItem(Item.PEPSI);
console.log(selectResp);
state = vendingMachine.getState();
var dispenseResp = state.dispense();
console.log(dispenseResp);
