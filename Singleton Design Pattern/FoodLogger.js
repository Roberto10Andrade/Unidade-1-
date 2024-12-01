class FoodLogger {
  constructor() {
    this.foodLog = [];
  }

  log(order) {
    this.foodLog.push(order.foodItem);
    // do fancy code to send this log somewhere
  }
}

// Singleton
class FoodLoggerSingleton {
  constructor() {
    if (!FoodLoggerSingleton.instance) {
      FoodLoggerSingleton.instance = new FoodLogger();
    }
  }

  getFoodLoggerInstance() {
    return FoodLoggerSingleton.instance;
  }
}

module.exports = FoodLoggerSingleton;