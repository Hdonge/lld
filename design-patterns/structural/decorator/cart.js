var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseProduct = /** @class */ (function () {
    function BaseProduct(name, price, descrption) {
        this.name = name;
        this.price = price;
        this.descrption = descrption;
    }
    BaseProduct.prototype.getPrice = function () {
        return this.price;
    };
    BaseProduct.prototype.getDescription = function () {
        return this.descrption;
    };
    return BaseProduct;
}());
var ProductDecorator = /** @class */ (function () {
    function ProductDecorator(product) {
        this.product = product;
    }
    ProductDecorator.prototype.getDescription = function () {
        return this.product.getDescription();
    };
    ProductDecorator.prototype.getPrice = function () {
        return this.product.getPrice();
    };
    return ProductDecorator;
}());
var AddUpsellDecorator = /** @class */ (function (_super) {
    __extends(AddUpsellDecorator, _super);
    function AddUpsellDecorator(product, upsellPrice) {
        var _this = _super.call(this, product) || this;
        _this.upsellPrice = upsellPrice;
        return _this;
    }
    AddUpsellDecorator.prototype.getPrice = function () {
        return this.product.getPrice() + this.upsellPrice;
    };
    AddUpsellDecorator.prototype.getDescription = function () {
        return this.product.getDescription() + 'Added Upsell quantity X';
    };
    return AddUpsellDecorator;
}(ProductDecorator));
var AccessoryDecorator = /** @class */ (function (_super) {
    __extends(AccessoryDecorator, _super);
    function AccessoryDecorator(product, accessoryName, accessoryPrice) {
        var _this = _super.call(this, product) || this;
        _this.accessoryName = accessoryName;
        _this.accessoryPrice = accessoryPrice;
        return _this;
    }
    AccessoryDecorator.prototype.getPrice = function () {
        return this.product.getPrice() + this.accessoryPrice;
    };
    AccessoryDecorator.prototype.getDescription = function () {
        return this.product.getDescription() + 'with' + this.accessoryName;
    };
    return AccessoryDecorator;
}(ProductDecorator));
var FreeItem = /** @class */ (function (_super) {
    __extends(FreeItem, _super);
    function FreeItem(product) {
        return _super.call(this, product) || this;
    }
    FreeItem.prototype.getPrice = function () {
        return this.product.getPrice();
    };
    FreeItem.prototype.getDescription = function () {
        return this.product.getDescription() + 'with Free Item Quntity X extra';
    };
    return FreeItem;
}(ProductDecorator));
var CouponDiscount = /** @class */ (function (_super) {
    __extends(CouponDiscount, _super);
    function CouponDiscount(product, discountPercent, couponCode) {
        var _this = _super.call(this, product) || this;
        _this.discountPercent = discountPercent;
        _this.couponCode = couponCode;
        return _this;
    }
    CouponDiscount.prototype.getPrice = function () {
        return this.product.getPrice() - this.product.getPrice() * this.discountPercent / 100;
    };
    CouponDiscount.prototype.getDescription = function () {
        return this.product.getDescription() + 'with' + this.discountPercent + '% discount on applied coupon' + this.couponCode;
    };
    return CouponDiscount;
}(ProductDecorator));
var PublicDiscount = /** @class */ (function (_super) {
    __extends(PublicDiscount, _super);
    function PublicDiscount(product, discountPercent) {
        var _this = _super.call(this, product) || this;
        _this.discountPercent = discountPercent;
        return _this;
    }
    PublicDiscount.prototype.getPrice = function () {
        return this.product.getPrice() - this.product.getPrice() * this.discountPercent / 100;
    };
    PublicDiscount.prototype.getDescription = function () {
        return this.product.getDescription() + 'with' + this.discountPercent + '% public discount';
    };
    return PublicDiscount;
}(ProductDecorator));
var LogoCharge = /** @class */ (function (_super) {
    __extends(LogoCharge, _super);
    function LogoCharge(product, logoCharge) {
        var _this = _super.call(this, product) || this;
        _this.logoCharge = logoCharge;
        return _this;
    }
    LogoCharge.prototype.getPrice = function () {
        return this.product.getPrice() + this.logoCharge;
    };
    LogoCharge.prototype.getDescription = function () {
        return this.product.getDescription() + 'with' + this.logoCharge + 'logo charge';
    };
    return LogoCharge;
}(ProductDecorator));
var SetupCharge = /** @class */ (function (_super) {
    __extends(SetupCharge, _super);
    function SetupCharge(product, setupCharge) {
        var _this = _super.call(this, product) || this;
        _this.setupCharge = setupCharge;
        return _this;
    }
    SetupCharge.prototype.getPrice = function () {
        return this.product.getPrice() + this.setupCharge;
    };
    SetupCharge.prototype.getDescription = function () {
        return this.product.getDescription() + 'with' + this.setupCharge + 'setup charge';
    };
    return SetupCharge;
}(ProductDecorator));
var ShippingCharge = /** @class */ (function (_super) {
    __extends(ShippingCharge, _super);
    function ShippingCharge(product, shippingCharge) {
        var _this = _super.call(this, product) || this;
        _this.shippingCharge = shippingCharge;
        return _this;
    }
    ShippingCharge.prototype.getPrice = function () {
        return this.product.getPrice() + this.shippingCharge;
    };
    ShippingCharge.prototype.getDescription = function () {
        return this.product.getDescription() + 'with' + this.shippingCharge + 'shipping charge';
    };
    return ShippingCharge;
}(ProductDecorator));
var ShippingDiscount = /** @class */ (function (_super) {
    __extends(ShippingDiscount, _super);
    function ShippingDiscount(product, shippingDiscount) {
        var _this = _super.call(this, product) || this;
        _this.shippingDiscount = shippingDiscount;
        return _this;
    }
    ShippingDiscount.prototype.getPrice = function () {
        return this.product.getPrice() - this.product.getPrice() * this.shippingDiscount / 100;
    };
    ShippingDiscount.prototype.getDescription = function () {
        return this.product.getDescription() + 'with' + this.shippingDiscount + 'shipping discount';
    };
    return ShippingDiscount;
}(ProductDecorator));
////////////////////////////////////////////////////////////////////////
var baseProduct = new BaseProduct('Base Product', 100, 'This is a base product');
//Add Upsell
baseProduct = new AddUpsellDecorator(baseProduct, 200);
//Accessory
baseProduct = new AccessoryDecorator(baseProduct, 'Accessory', 100);
//Free Item
baseProduct = new FreeItem(baseProduct);
//Add Logo Charge
baseProduct = new LogoCharge(baseProduct, 100);
//Add Setup Charge
baseProduct = new SetupCharge(baseProduct, 100);
//Add Shipping Charge
baseProduct = new ShippingCharge(baseProduct, 100);
//Apply Shipping Discount
baseProduct = new ShippingDiscount(baseProduct, 100);
//Apply Coupon
baseProduct = new CouponDiscount(baseProduct, 10, 'NPSELL');
console.log(baseProduct.getDescription());
console.log(baseProduct.getPrice());
