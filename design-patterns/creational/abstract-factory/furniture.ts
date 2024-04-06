interface Table {
    dining(): void;
}

class VintageTable implements Table {
    dining(): void {
        console.log("Dining on Vintage Table");
    }
}

class ModernTable implements Table {
    dining(): void {
        console.log("Dining on Modern Table");
    }
}

class VenylTable implements Table {
    dining(): void {
        console.log("Dining on Venyl Table");
    }
}

interface Chair {
    sit(): void
}

class VintageChair implements Chair {
    sit(): void {
        console.log("Dining on Vintage Chair");
    }
}

class ModernChair implements Chair {
    sit(): void {
        console.log("Dining on Modern Chair");
    }
}

class VenylChair implements Chair {
    sit(): void {
        console.log("Dining on Venyl Chair");
    }
}

interface Sofa {
    sit(): void;
}

class VintageSofa implements Sofa {
    sit(): void {
        console.log("Dining on Vintage Sofa");
    }
}

class ModernSofa implements Sofa {
    sit(): void {
        console.log("Dining on Modern Sofa");
    }
}

class VenylSofa implements Sofa {
    sit(): void {
        console.log("Dining on Venyl Sofa");
    }
}

////////////////////////////////////////////////////////////////////////
interface AbstractFurnitureFactory {
    createTable(): Table;
    createSofa(): Sofa;
    createChair(): Chair;
}

class VintageFurnitureFactory implements AbstractFurnitureFactory {
    createTable(): Table {
        return new VintageTable();
    }
    createSofa(): Sofa {
        return new VintageSofa();
    }
    createChair(): Chair {
        return new VintageChair();
    }
}

class ModernFurnitureFactory implements AbstractFurnitureFactory {
    createTable(): Table {
        return new ModernTable();
    }
    createSofa(): Sofa {
        return new ModernSofa();
    }
    createChair(): Chair {
        return new ModernChair();
    }
}

class VenylFurnitureFactory implements AbstractFurnitureFactory {
    createTable(): Table {
        return new VenylTable();
    }
    createSofa(): Sofa {
        return new VenylSofa();
    }
    createChair(): Chair {
        return new VenylChair();
    }
}


//////////////////////////////////////////////////////////////////////////////////

class FurnitureFactory {
    static createFurnitureFactory(type: string) {
        if (type === 'vintage') return new VintageFurnitureFactory();
        else if (type === 'modern') return new ModernFurnitureFactory();
        else return new VenylFurnitureFactory();
    }
}

//////////////////////////////////////////////////////////////////////////////////////

const furnitureFactory: AbstractFurnitureFactory = FurnitureFactory.createFurnitureFactory('vintage');

let table = furnitureFactory.createTable();
table.dining();

let sofa = furnitureFactory.createSofa();
sofa.sit();

let chair = furnitureFactory.createChair();
chair.sit();

