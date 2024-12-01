const FoodLogger = require('./FoodLogger');

const foodLogger = new FoodLogger().getFoodLoggerInstance();

class Customer {
  constructor(order) {
    this.price = order.price;
    this.food = order.foodItem;
    foodLogger.log(order);
  }

  // other cool stuff happening for the customer
}

module.exports = Customer;