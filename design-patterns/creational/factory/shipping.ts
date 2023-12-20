// Shipping interface
interface Shipping {
    ship(): void;
}

// Concrete shipping classes
class StandardShipping implements Shipping {
    public ship(): void {
        // Implement standard shipping method
    }
}

class ExpressShipping implements Shipping {
    public ship(): void {
        // Implement express shipping method
    }
}

// Simple Factory to create shipping methods
class ShippingMethodFactory {
    public static createShippingMethod(shippingType: string): Shipping | null {
        if (shippingType.toLowerCase() === "Standard") {
            return new StandardShipping();
        } else if (shippingType.toLowerCase() === "Express") {
            return new ExpressShipping();
        }
        return null;
    }
}
