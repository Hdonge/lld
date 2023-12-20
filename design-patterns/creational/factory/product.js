var ElectronicProduct = /** @class */ (function () {
    function ElectronicProduct() {
    }
    ElectronicProduct.prototype.displayInfo = function () {
        console.log("Electronic Product");
    };
    return ElectronicProduct;
}());
var ClothingProduct = /** @class */ (function () {
    function ClothingProduct() {
    }
    ClothingProduct.prototype.displayInfo = function () {
        console.log("Clothing Product");
    };
    return ClothingProduct;
}());
var BookProduct = /** @class */ (function () {
    function BookProduct() {
    }
    BookProduct.prototype.displayInfo = function () {
        console.log("Book Product");
    };
    return BookProduct;
}());
var ElectronicsProductFactory = /** @class */ (function () {
    function ElectronicsProductFactory() {
    }
    ElectronicsProductFactory.prototype.createProduct = function () {
        return new ElectronicProduct();
    };
    return ElectronicsProductFactory;
}());
var ClothingProductFactory = /** @class */ (function () {
    function ClothingProductFactory() {
    }
    ClothingProductFactory.prototype.createProduct = function () {
        return new ClothingProduct();
    };
    return ClothingProductFactory;
}());
var BookProductFactory = /** @class */ (function () {
    function BookProductFactory() {
    }
    BookProductFactory.prototype.createProduct = function () {
        return new BookProduct();
    };
    return BookProductFactory;
}());
var ProductImple = /** @class */ (function () {
    function ProductImple(productFactory) {
        this.productFactory = productFactory;
    }
    ProductImple.prototype.displayInfo = function () {
        this.productFactory.createProduct().displayInfo();
    };
    return ProductImple;
}());
var productImple = new ProductImple(new ElectronicsProductFactory());
productImple.displayInfo();
var productImple2 = new ProductImple(new BookProductFactory());
productImple2.displayInfo();
