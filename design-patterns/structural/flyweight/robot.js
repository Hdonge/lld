var HumanoidRobot = /** @class */ (function () {
    function HumanoidRobot(type, body) {
        this.type = type;
        this.body = body;
    }
    HumanoidRobot.prototype.getType = function () { return this.type; };
    HumanoidRobot.prototype.getBody = function () { return this.body; };
    HumanoidRobot.prototype.display = function (x, y) {
        console.log("Display HumanoidRobot ".concat(this.type, " with ").concat(this.body, "  at (").concat(x, ",").concat(y, ") "));
    };
    return HumanoidRobot;
}());
var RoboticDog = /** @class */ (function () {
    function RoboticDog(type, body) {
        this.type = type;
        this.body = body;
    }
    RoboticDog.prototype.getType = function () { return this.type; };
    RoboticDog.prototype.getBody = function () { return this.body; };
    RoboticDog.prototype.display = function (x, y) {
        console.log("Display RoboticDog ".concat(this.type, " with ").concat(this.body, " at (").concat(x, ",").concat(y, ") "));
    };
    return RoboticDog;
}());
var Sprites = /** @class */ (function () {
    function Sprites() {
    }
    return Sprites;
}()); // duumy image 
var RoboticFactory = /** @class */ (function () {
    function RoboticFactory() {
    }
    RoboticFactory.createRobot = function (robotType) {
        if (RoboticFactory.roboticObjectCache.has(robotType)) {
            return RoboticFactory.roboticObjectCache.get(robotType);
        }
        switch (robotType) {
            case "HumanoidRobot":
                var humanoidRobot = new HumanoidRobot("HumanoidRobot", new Sprites());
                RoboticFactory.roboticObjectCache.set(robotType, humanoidRobot);
                return humanoidRobot;
            case "RoboticDog":
                var roboticDog = new RoboticDog("RoboticDog", new Sprites());
                RoboticFactory.roboticObjectCache.set(robotType, roboticDog);
                return roboticDog;
            default:
                return null;
        }
    };
    RoboticFactory.roboticObjectCache = new Map();
    return RoboticFactory;
}());
////////////////////////////////////////
var humanoidRobot1 = RoboticFactory.createRobot("HumanoidRobot");
humanoidRobot1.display(1, 2);
var humanoidRobot2 = RoboticFactory.createRobot("HumanoidRobot");
humanoidRobot2.display(2, 4);
var roboticDog1 = RoboticFactory.createRobot("RoboticDog");
roboticDog1.display(3, 5);
var roboticDog2 = RoboticFactory.createRobot("RoboticDog");
roboticDog2.display(2, 3);
