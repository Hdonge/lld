var Product = /** @class */ (function () {
    function Product(name, price, description, stock, category) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
        this.category = category;
    }
    Product.prototype.display = function () {
        console.log(this.name, this.price, this.description, this.stock, this.category);
    };
    return Product;
}());
var ProductBuilder = /** @class */ (function () {
    function ProductBuilder() {
        this.name = '';
        this.price = 0;
        this.description = '';
        this.stock = 0;
        this.category = '';
    }
    ProductBuilder.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ProductBuilder.prototype.withPrice = function (price) {
        this.price = price;
        return this;
    };
    ProductBuilder.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    ProductBuilder.prototype.withStock = function (stock) {
        this.stock = stock;
        return this;
    };
    ProductBuilder.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    ProductBuilder.prototype.build = function () {
        return new Product(this.name, this.price, this.description, this.stock, this.category);
    };
    return ProductBuilder;
}());
var ProductDirector = /** @class */ (function () {
    function ProductDirector() {
    }
    ProductDirector.prototype.buildProduct = function (name, price, description, stock, category) {
        return new ProductBuilder()
            .withName(name)
            .withPrice(price)
            .withDescription(description)
            .withStock(stock)
            .withCategory(category)
            .build();
    };
    return ProductDirector;
}());
var product = new ProductDirector().buildProduct("T-Shirt", 100, "Cotton T-Shirt", 100, "Apparal");
product.display();
