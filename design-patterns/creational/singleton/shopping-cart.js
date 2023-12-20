var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.products = [];
        this.products = [];
    }
    ShoppingCart.getInstance = function () {
        if (!ShoppingCart.cartInstance)
            ShoppingCart.cartInstance = new ShoppingCart();
        return ShoppingCart.cartInstance;
    };
    ShoppingCart.prototype.addProduct = function (product) {
        this.products.push(product);
        console.log("Added ".concat(product.name, " to the cart."));
    };
    ShoppingCart.prototype.removeItem = function (productId) {
        var index = this.products.findIndex(function (item) { return item.id === productId; });
        if (index !== -1) {
            var removedItem = this.products.splice(index, 1)[0];
            console.log("Removed ".concat(removedItem.name, " from the cart."));
        }
        else {
            console.log("Product with ID ".concat(productId, " not found in the cart."));
        }
    };
    ShoppingCart.prototype.viewCart = function () {
        return this.products;
    };
    ShoppingCart.prototype.checkout = function () {
        console.log("Total price: ".concat(this.products.reduce(function (total, product) { return total + product.price; }, 0)));
        this.products = [];
    };
    return ShoppingCart;
}());
///////////////////////////////
var cartInstance1 = ShoppingCart.getInstance();
var cartInstance2 = ShoppingCart.getInstance();
console.log(cartInstance1 === cartInstance2);
var product1 = { id: "1", name: "ABC", price: 25 };
var product2 = { id: "2", name: "XYZ", price: 30 };
cartInstance1.addProduct(product1);
cartInstance2.addProduct(product2);
console.log(cartInstance1.viewCart());
cartInstance1.removeItem("1");
console.log(cartInstance1.viewCart());
cartInstance1.checkout();
console.log(cartInstance1.viewCart());
