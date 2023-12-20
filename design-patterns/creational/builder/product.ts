class Product {
    constructor(
        public name: string,
        public price: number,
        public description: string,
        public stock: number,
        public category: string
    ){}

    display(): void {
        console.log(this.name, this.price, this.description, this.stock, this.category);
    }
}


class ProductBuilder {
    private name: string = '';
    private price: number = 0;
    private description: string = '';
    private stock: number = 0;
    private category: string = '';

    public withName(name: string): ProductBuilder {
        this.name = name;
        return this;
    }

    public withPrice(price: number): ProductBuilder {
        this.price = price;
        return this;
    }

    public withDescription(description: string): ProductBuilder {
        this.description = description;
        return this;
    }

    public withStock(stock: number): ProductBuilder {
        this.stock = stock;
        return this;
    }

    public withCategory(category: string): ProductBuilder {
        this.category = category;
        return this;
    }

    public build(): Product {
        return new Product(this.name, this.price, this.description, this.stock, this.category);
    }
}

class ProductDirector {
    buildProduct(name: string, price: number, description: string, stock: number, category: string): Product {
        return new ProductBuilder()
         .withName(name)
         .withPrice(price)
         .withDescription(description)
         .withStock(stock)
         .withCategory(category)
         .build();
    }
}

const product = new ProductDirector().buildProduct("T-Shirt", 100, "Cotton T-Shirt", 100, "Apparal");
product.display();