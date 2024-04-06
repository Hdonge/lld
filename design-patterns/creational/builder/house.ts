class House {
    constructor(
        private walls: number,
        private paint: string,
        private flooringType: string,
        private roofType: string,
        private swaimmingPool: boolean,
        private backyard: boolean,
        private lawn: boolean
    ) { }
}

// If different client wants diff kind of houses then either will have to create parent child hierarchy or will have to
// create multiple constructors to create diff types of house objects which leads to messy code.
// To solve that builder design pattern can be used.

class HouseBuilder {
    private walls: number = 4;
    private paint: string = 'white';
    private flooringType: string = 'marble';
    private roofType: string = 'flat';
    private swaimmingPool: boolean = false;
    private backyard: boolean = false;
    private lawn: boolean = false;

    withWalls(walls: number) {
        this.walls = walls;
        return this;
    }

    withPaint(paint: string) {
        this.paint = paint;
        return this;
    }

    withFlooring(flooringType: string) {
        this.flooringType = flooringType;
        return this;
    }

    withRoof(roofType: string) {
        this.roofType = roofType;
        return this;
    }

    withSwimmingPool(swimmingPool: boolean) {
        this.swaimmingPool = swimmingPool;
        return this;
    }

    withBackyard(backyard: boolean) {
        this.backyard = backyard;
        return this;
    }

    withLawn(lawn: boolean) {
        this.lawn = lawn;
        return this;
    }

    build() {
        return new House(this.walls, this.paint, this.flooringType, this.roofType, this.swaimmingPool, this.backyard, this.lawn);
    }
}

class HouseDirector {
    buildNormalHouse(){
        return new HouseBuilder()
        .withWalls(4)
        .withPaint('white')
        .withFlooring('tiles')
        .withRoof('hip')
        .build()
    }

    buildSwimmingPoolHouse(){
        return new HouseBuilder()
        .withWalls(4)
        .withPaint('white')
        .withFlooring('tiles')
        .withRoof('hip')
        .withSwimmingPool(true)
        .withLawn(true)
        .build()
    }
}