interface IRobot {
    display(x: number, y: number): void;
}

class HumanoidRobot implements IRobot {
    constructor(private type: string, private body: Sprites) { }

    getType(): string { return this.type; }
    getBody(): Sprites { return this.body; }
    display(x: number, y: number): void {
        console.log(`Display HumanoidRobot ${this.type} with ${this.body}  at (${x},${y}) `);
    }
}

class RoboticDog implements IRobot {
    constructor(private type: string, private body: Sprites) { }

    getType(): string { return this.type; }
    getBody(): Sprites { return this.body; }
    display(x: number, y: number): void {
        console.log(`Display RoboticDog ${this.type} with ${this.body} at (${x},${y}) `);
    }
}

class Sprites { }// duumy image 

class RoboticFactory {
    private static roboticObjectCache: Map<string, IRobot> = new Map<string, IRobot>();

    public static createRobot(robotType: string) {
        if (RoboticFactory.roboticObjectCache.has(robotType)) {
            return RoboticFactory.roboticObjectCache.get(robotType);
        }

        switch (robotType) {
            case "HumanoidRobot":
                const humanoidRobot = new HumanoidRobot("HumanoidRobot", new Sprites());
                RoboticFactory.roboticObjectCache.set(robotType, humanoidRobot);
                return humanoidRobot;
            case "RoboticDog":
                const roboticDog = new RoboticDog("RoboticDog", new Sprites());
                RoboticFactory.roboticObjectCache.set(robotType, roboticDog);
                return roboticDog;
            default:
                return null;
        }
    }
}


////////////////////////////////////////

const humanoidRobot1: IRobot = RoboticFactory.createRobot("HumanoidRobot");
humanoidRobot1.display(1, 2);

const humanoidRobot2: IRobot = RoboticFactory.createRobot("HumanoidRobot");
humanoidRobot2.display(2, 4);

const roboticDog1: IRobot = RoboticFactory.createRobot("RoboticDog");
roboticDog1.display(3, 5);

const roboticDog2: IRobot = RoboticFactory.createRobot("RoboticDog");
roboticDog2.display(2, 3);
