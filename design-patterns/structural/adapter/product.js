var VendorToInHouseProductAdapter = /** @class */ (function () {
    function VendorToInHouseProductAdapter(vendorProduct) {
        this.vendorProduct = vendorProduct;
    }
    Object.defineProperty(VendorToInHouseProductAdapter.prototype, "id", {
        get: function () {
            return this.vendorProduct.productSkuId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VendorToInHouseProductAdapter.prototype, "name", {
        get: function () {
            return this.vendorProduct.productName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VendorToInHouseProductAdapter.prototype, "price", {
        get: function () {
            return this.vendorProduct.productPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VendorToInHouseProductAdapter.prototype, "description", {
        get: function () {
            return this.vendorProduct.productDescription;
        },
        enumerable: false,
        configurable: true
    });
    VendorToInHouseProductAdapter.prototype.display = function () {
        console.log(this.id, this.name, this.price, this.description);
    };
    return VendorToInHouseProductAdapter;
}());
var vendorProduct = {
    productSkuId: 1,
    productName: 'T-shirt',
    productPrice: 50,
    productDescription: 'Awsome T-shirts'
};
var inHouseProduct = new VendorToInHouseProductAdapter(vendorProduct);
inHouseProduct.display();
