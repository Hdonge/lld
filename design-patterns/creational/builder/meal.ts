class Meal {
    constructor(
        public mainCourse: string,
        public sideDish: string,
        public drink: string,
        public dessert: string
    ){}

    display(): void {
        console.log(this.mainCourse, this.sideDish, this.drink, this.dessert);
    }
}

class MealBuilder {
    private mainCourse: string = '';
    private sideDish: string = '';
    private drink: string = '';
    private dessert: string = '';

    public withMainCourse(mainCourse: string): MealBuilder {
        this.mainCourse = mainCourse;
        return this;
    }

    public withSideDish(sideDish: string): MealBuilder {
        this.sideDish = sideDish;
        return this;
    }

    public withDrink(drink: string): MealBuilder {
        this.drink = drink;
        return this;
    }

    public withDessert(dessert: string): MealBuilder {
        this.dessert = dessert;
        return this;
    }

    build(): Meal {
        return new Meal(this.mainCourse, this.sideDish, this.drink, this.dessert);
    }
}

class MealDirector {
    buildMeal(mainCourse: string, sideDish: string, drink: string, dessert: string): Meal {
        return new MealBuilder()
          .withMainCourse(mainCourse)
          .withSideDish(sideDish)
          .withDrink(drink)
          .withDessert(dessert)
          .build();
    }
}

const meal = new MealDirector().buildMeal("Pizza", "Cheese", "Water", "Ice cream");
meal.display();