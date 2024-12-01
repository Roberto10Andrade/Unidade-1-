class PaymentMethodStrategy {
  static BankAccount(customerInfo) {
    const { name, accountNumber, routingNumber } = customerInfo;
    // do stuff to get payment
  }

  static BitCoin(customerInfo) {
    const { emailAddress, accountNumber } = customerInfo;
    // do stuff to get payment
  }

  static CreditCard(customerInfo) {
    const { name, cardNumber, emailAddress } = customerInfo;
    // do stuff to get payment
  }

  static MailIn(customerInfo) {
    const { name, address, city, state, country } = customerInfo;
    // do stuff to get payment
  }

  static PayPal(customerInfo) {
    const { emailAddress } = customerInfo;
    // do stuff to get payment
  }
}

module.exports = PaymentMethodStrategy;