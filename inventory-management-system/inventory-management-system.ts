/***
 * Invntory Management System
 * Requirement: 
 * Functional
 * 1. User should be able to onboard product
 * 2. User should be able to update (add/remove) product units/price
 * 3. System should be able to show status of unit
 * 4. System should be able to locate unit
 * 5. Reports and analytics.
 * 
 * Non functional:
 * Scalable ,reliable and modular
 * 
 * 
 * Actors:
 * User
 * 
 * 
 */

class InventoryManagementSystem {
    users: User[] = [];
    productsMap: Map<string, Product> = new Map<string, Product>();
    locationMap: Map<Location, Unit> = new Map<Location, Unit>();

    addProduct(product: Product): void {
        this.productsMap.set(product.id, product);
    }

    getProduct(id: string): Product | undefined {
        return this.productsMap.get(id);
    }

    placeUnit(unit: Unit): void {
        for (const [location, value] of this.locationMap.entries()) {
            //apply lock
            if (value == null) {
                unit.locationId = location.id;
            }
            //release lock on multithreading
        }
    }

    removeUnit(product: Product): void {
        for (const [location, value] of this.locationMap.entries()) {
            //apply lock
            if (value !== null && value.productId === product.id) {
                this.locationMap.delete(location);
            }
            //release lock
        }
    }
    getShelveStatus(): Map<Location, Unit> {
        return this.locationMap;
    }
    updateStatus(unit: Unit, status: ProductStatus): void {
        unit.status = status;
    }

    getProductLocation(product: Product): Location | undefined { return }
    setProductLocation(product: Product, location: Location): void { }
    generateReport() { }
}

class Product {
    id: string = '';
    name: string = '';
    description: string = '';
    price: number = 0;
    weight: number = 0;
    size: ProductSize = ProductSize.LARGE;
    units: Array<Unit> = [];
}

class Unit {
    id: string = '';
    productId: string = '';
    locationId: string = '';
    status: ProductStatus = ProductStatus.INVENTORY;
}

class Location {
    id: string = '';
    size: ProductSize = ProductSize.LARGE;
}

enum ProductStatus {
    INVENTORY = 'inventory',
    TRANSIT = 'transit',
    OUTFORDELIVERY = 'outfordelievery',
    SHIPPED = 'shipped',
}

enum ProductSize {
    LARGE = 'large',
    MEDIUM = 'medium',
    SMALL = 'small'
}

class User {
    name: string = '';
    email: string = '';
    userId: string = '';
    password: string = '';
}