interface Product {
    id: string;
    name: string;
    price: number;
    /// Other product-related attributes
}

class ShoppingCart {
    private static cartInstance: ShoppingCart;
    private products: Product[] = [];

    private constructor() {
        this.products = [];
    }

    public static getInstance(): ShoppingCart {
        if (!ShoppingCart.cartInstance) ShoppingCart.cartInstance = new ShoppingCart();
        return ShoppingCart.cartInstance;
    }

    public addProduct(product: Product): void {
        this.products.push(product);
        console.log(`Added ${product.name} to the cart.`);
    }

    public removeItem(productId: string): void {
        const index = this.products.findIndex(item => item.id === productId);
        if (index !== -1) {
            const removedItem = this.products.splice(index, 1)[0];
            console.log(`Removed ${removedItem.name} from the cart.`);
        } else {
            console.log(`Product with ID ${productId} not found in the cart.`);
        }
    }

    public viewCart(): Product[] {
        return this.products;
    }

    public checkout(): void{
        console.log(`Total price: ${this.products.reduce((total, product) => total + product.price, 0)}`);
        this.products = [];
    }
}

///////////////////////////////

const cartInstance1 = ShoppingCart.getInstance();
const cartInstance2 = ShoppingCart.getInstance();

console.log(cartInstance1 === cartInstance2);

const product1: Product = {id: "1", name: "ABC", price: 25};
const product2: Product = {id: "2", name: "XYZ", price: 30};


cartInstance1.addProduct(product1);
cartInstance2.addProduct(product2);

console.log(cartInstance1.viewCart());

cartInstance1.removeItem("1");

console.log(cartInstance1.viewCart());

cartInstance1.checkout();

console.log(cartInstance1.viewCart());
