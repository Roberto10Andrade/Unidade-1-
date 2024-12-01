class Sandwich {
  constructor() {
    this.description = 'Sandwich';
    this.price = 5.00;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }
}

// Decorator
class ToppingDecorator {
  constructor(sandwich) {
    this.sandwich = sandwich;
  }

  getDescription() {
    return this.sandwich.getDescription() + ', with extra toppings';
  }

  getPrice() {
    return this.sandwich.getPrice() + 1.50; // Adicionando custo para toppings
  }
}

// Uso
const mySandwich = new Sandwich();
const myDeliciousSandwich = new ToppingDecorator(mySandwich);

console.log(myDeliciousSandwich.getDescription()); // "Sandwich, with extra toppings"
console.log(myDeliciousSandwich.getPrice()); // 6.50