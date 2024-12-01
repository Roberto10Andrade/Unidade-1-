const PaymentMethodStrategy = require('./PaymentMethodStrategy');
const config = require('./config');

class Checkout {
  constructor(strategy = 'CreditCard') {
    this.strategy = PaymentMethodStrategy[strategy];
  }

  changeStrategy(newStrategy) {
    this.strategy = PaymentMethodStrategy[newStrategy];
  }

  postPayment(userInput) {
    this.strategy(userInput);
  }
}

module.exports = new Checkout(config.paymentMethod.strategy);