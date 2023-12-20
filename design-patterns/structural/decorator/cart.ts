interface IProduct {
    getPrice(): number;
    getDescription(): string;
}

class BaseProduct implements IProduct {
    constructor(private name: string, private price: number, private descrption: string){}

    getPrice(): number {
        return this.price;
    }

    getDescription(): string {
        return this.descrption;
    }
}

abstract class ProductDecorator implements IProduct {
    constructor(protected product: IProduct) { }

    getDescription(): string {
        return this.product.getDescription();
    }

    getPrice(): number {
        return this.product.getPrice();
    }
}

class AddUpsellDecorator extends ProductDecorator {
    constructor(product: IProduct, private upsellPrice: number) {
        super(product);
    }

    getPrice(): number {
        return this.product.getPrice() + this.upsellPrice;
    }

    getDescription(): string {
        return this.product.getDescription() + 'Added Upsell quantity X';
    }
}

class AccessoryDecorator extends ProductDecorator {
    constructor(product: IProduct, private accessoryName: string, private accessoryPrice: number) {
        super(product);
    }

    getPrice(): number {
        return this.product.getPrice() + this.accessoryPrice;
    }

    getDescription(): string {
        return this.product.getDescription() +'with'+ this.accessoryName;
    }
}

class FreeItem extends ProductDecorator {
    constructor(product: IProduct) {
        super(product);
    }

    getPrice(): number {
        return this.product.getPrice();
    }

    getDescription(): string {
        return this.product.getDescription() + 'with Free Item Quntity X extra';
    }
}

class CouponDiscount extends ProductDecorator {
    constructor(product: IProduct, private discountPercent: number, private couponCode: string) {
        super(product);
    }

    getPrice(): number {
        return this.product.getPrice() - this.product.getPrice() * this.discountPercent / 100;
    }

    getDescription(): string {
        return this.product.getDescription() +'with'+ this.discountPercent + '% discount on applied coupon' + this.couponCode;
    }
}

class PublicDiscount extends ProductDecorator {
    constructor(product: IProduct, private discountPercent: number) {
        super(product);
    }

    getPrice(): number {
        return this.product.getPrice() - this.product.getPrice() * this.discountPercent / 100;
    }

    getDescription(): string {
        return this.product.getDescription() +'with'+ this.discountPercent + '% public discount';
    }
}

class LogoCharge extends ProductDecorator {
    constructor(product: IProduct, private logoCharge: number) {
        super(product);
    }

    getPrice(): number {
        return this.product.getPrice() + this.logoCharge;
    }

    getDescription(): string {
        return this.product.getDescription() +'with'+ this.logoCharge +'logo charge';
    }
}

class SetupCharge extends ProductDecorator {
    constructor(product: IProduct, private setupCharge: number) {
        super(product);
    }

    getPrice(): number {
        return this.product.getPrice() + this.setupCharge;
    }

    getDescription(): string {
        return this.product.getDescription() +'with'+ this.setupCharge +'setup charge';
    }
}

class ShippingCharge extends ProductDecorator {
    constructor(product: IProduct, private shippingCharge: number) {
        super(product);
    }

    getPrice(): number {
        return this.product.getPrice() + this.shippingCharge;
    }

    getDescription(): string {
        return this.product.getDescription() +'with'+ this.shippingCharge +'shipping charge';
    }
}

class ShippingDiscount extends ProductDecorator{
    constructor(product: IProduct, private shippingDiscount: number) {
        super(product);
    }

    getPrice(): number {
        return this.product.getPrice() - this.product.getPrice() * this.shippingDiscount / 100;
    }

    getDescription(): string {
        return this.product.getDescription() +'with'+ this.shippingDiscount +'shipping discount';
    }
}

////////////////////////////////////////////////////////////////////////

let baseProduct: IProduct = new BaseProduct('Base Product', 100, 'This is a base product');
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
