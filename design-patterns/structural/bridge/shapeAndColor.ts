interface ShapeCreationSystem{
    createShape(): void;
    applyColor(): void;
}

interface ShapeColorizationImplementation {
    applyColor(): void;
}

class RedColor implements ShapeColorizationImplementation {
    applyColor(): void {
        //applly red color logic
    }
}

class BlueColor implements ShapeColorizationImplementation {
    applyColor(): void {
        // apply blue color logic to shape
    }
}


class Circle implements ShapeCreationSystem{
    constructor(private shapeColorImplementation : ShapeColorizationImplementation){}

    createShape(): void {
        // Circle shape creation logic
    }

    applyColor(): void {
        this.shapeColorImplementation.applyColor();
    }
}

class Square implements ShapeCreationSystem {
    constructor(private shapeColorImplementation : ShapeColorizationImplementation){}

    createShape(): void {
        // Circle shape creation logic
    }

    applyColor(): void {
        this.shapeColorImplementation.applyColor();
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

const redCicle = new Circle(new RedColor());
redCicle.createShape();
redCicle.applyColor();

const blueSquare = new Square(new BlueColor());
blueSquare.createShape();
blueSquare.applyColor();


/////////////////////////////////////////////////////////////////////////////////////////

// Now lets as per the business case we wann add new functionality by supporting more shapes and more colors , so we can easly do it.

class Tringle implements ShapeCreationSystem {
    constructor(private shapeColorImplementation : ShapeColorizationImplementation){}

    createShape(): void {
        // Circle shape creation logic
    }

    applyColor(): void {
        this.shapeColorImplementation.applyColor();
    }
}

class YellowColor implements ShapeColorizationImplementation {
    applyColor(): void {
        //yellow color apply logic on shape
    }
}



const yellowTringle = new Tringle(new YellowColor());

yellowTringle.createShape();
yellowTringle.applyColor();

