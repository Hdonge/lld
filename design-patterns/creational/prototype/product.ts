class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) { }

    clone(): Product {
        return Object.create(this);
    }

    display(): void {
        console.log(this.id, this.name, this.price);
    }
}

class Shoes extends Product {
    constructor(id: number, name: string, price: number, public size: number) {
        super(id, name, price);
    }

    clone(): Shoes{
        return new Shoes(this.id, this.name, this.price, this.size);
    }
}

class TShirt extends Product {
    constructor(id: number, name: string, price: number, public color: string) {
        super(id, name, price);
    }

    clone(): TShirt{
        return new TShirt(this.id, this.name, this.price, this.color);
    }
}

////////////////////////////////////////////////////////////////////////////

const shoesPrototype = new Shoes(1, 'Running Status', 50, 9);
const clonedShoes = shoesPrototype.clone();

const tshirtPrototype = new TShirt(2, 'Plan T-shirt', 20, 'Blue');
const clonedTShirt = tshirtPrototype.clone();

clonedShoes.display();
clonedTShirt.display();

