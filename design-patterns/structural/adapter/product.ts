interface InHouseProduct {
    id: number;
    name: string;
    price: number;
    description: string;

    display(): void;
}

interface VendorProduct {
    productSkuId: number;
    productName: string;
    productPrice: number;
    productDescription: string;
}


class VendorToInHouseProductAdapter implements InHouseProduct {
    constructor(private vendorProduct: VendorProduct) {}

    get id(): number {
        return this.vendorProduct.productSkuId;
    }

    get name(): string {
        return this.vendorProduct.productName;
    }

    get price(): number {
        return this.vendorProduct.productPrice;
    }

    get description(): string {
        return this.vendorProduct.productDescription;
    }

    display(): void {
        console.log(this.id, this.name, this.price, this.description);
    }
}

const vendorProduct: VendorProduct = {
    productSkuId: 1,
    productName: 'T-shirt',
    productPrice: 50,
    productDescription: 'Awsome T-shirts'
}

const inHouseProduct = new VendorToInHouseProductAdapter(vendorProduct);

inHouseProduct.display();