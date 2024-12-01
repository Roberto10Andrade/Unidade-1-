const FoodLogger = require('./FoodLogger');

const foodLogger = new FoodLogger().getFoodLoggerInstance();

class Restaurant {
  constructor(inventory) {
    this.quantity = inventory.count;
    this.food = inventory.foodItem;
    foodLogger.log(inventory);
  }

  // other cool stuff happening at the restaurant
}

module.exports = Restaurant;