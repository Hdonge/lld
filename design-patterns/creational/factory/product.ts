interface Product {
    displayInfo(): void;
}

class ElectronicProduct implements Product {
    displayInfo(): void {
        console.log("Electronic Product");
    }
}

class ClothingProduct implements Product {
    displayInfo(): void {
        console.log("Clothing Product");
    }
}

class BookProduct implements Product {
    displayInfo(): void {
        console.log("Book Product");
    }
}

//simple factory function but it violates OCP

// Factory to create products
// class ProductFactory {
//     public static Product createProduct(String productType) {
//         if (productType.equalsIgnoreCase("Electronics")) {
//             return new ElectronicsProduct();
//         } else if (productType.equalsIgnoreCase("Clothing")) {
//             return new ClothingProduct();
//         } else if (productType.equalsIgnoreCase("Book")) {
//             return new BookProduct();
//         }
//         return null;
//     }
// }


interface ProductFactory {
    createProduct(): Product;
}

class ElectronicsProductFactory implements ProductFactory {
    createProduct(): Product {
        return new ElectronicProduct();
    }
}

class ClothingProductFactory implements ProductFactory {
    createProduct(): Product {
        return new ClothingProduct();
    }
}

class BookProductFactory implements ProductFactory {
    createProduct(): Product {
        return new BookProduct();
    }
}


class ProductImple {
    private productFactory: ProductFactory;
    constructor(productFactory: ProductFactory) {
        this.productFactory = productFactory;
    }
    public displayInfo(): void {
        this.productFactory.createProduct().displayInfo();
    }
}

const productImple = new ProductImple(new ElectronicsProductFactory());
productImple.displayInfo();


const productImple2 = new ProductImple(new BookProductFactory());
productImple2.displayInfo();


