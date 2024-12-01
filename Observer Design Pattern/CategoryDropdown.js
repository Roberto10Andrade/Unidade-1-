class CategoryDropdown {
  constructor() {
    this.categories = ['appliances', 'doors', 'tools'];
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  onChange(selectedCategory) {
    this.subscribers.forEach(observer => observer.update(selectedCategory));
  }
}

module.exports = CategoryDropdown;