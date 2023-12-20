var Meal = /** @class */ (function () {
    function Meal(mainCourse, sideDish, drink, dessert) {
        this.mainCourse = mainCourse;
        this.sideDish = sideDish;
        this.drink = drink;
        this.dessert = dessert;
    }
    Meal.prototype.display = function () {
        console.log(this.mainCourse, this.sideDish, this.drink, this.dessert);
    };
    return Meal;
}());
var MealBuilder = /** @class */ (function () {
    function MealBuilder() {
        this.mainCourse = '';
        this.sideDish = '';
        this.drink = '';
        this.dessert = '';
    }
    MealBuilder.prototype.withMainCourse = function (mainCourse) {
        this.mainCourse = mainCourse;
        return this;
    };
    MealBuilder.prototype.withSideDish = function (sideDish) {
        this.sideDish = sideDish;
        return this;
    };
    MealBuilder.prototype.withDrink = function (drink) {
        this.drink = drink;
        return this;
    };
    MealBuilder.prototype.withDessert = function (dessert) {
        this.dessert = dessert;
        return this;
    };
    MealBuilder.prototype.build = function () {
        return new Meal(this.mainCourse, this.sideDish, this.drink, this.dessert);
    };
    return MealBuilder;
}());
var MealDirector = /** @class */ (function () {
    function MealDirector() {
    }
    MealDirector.prototype.buildMeal = function (mainCourse, sideDish, drink, dessert) {
        return new MealBuilder()
            .withMainCourse(mainCourse)
            .withSideDish(sideDish)
            .withDrink(drink)
            .withDessert(dessert)
            .build();
    };
    return MealDirector;
}());
var meal = new MealDirector().buildMeal("Pizza", "Cheese", "Water", "Ice cream");
meal.display();
