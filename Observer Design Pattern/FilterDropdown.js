class FilterDropdown {
  constructor(filterType) {
    this.filterType = filterType;
    this.items = [];
  }

  update(category) {
    // Fetch new items based on the updated category
    fetch(`https://example.com?category=${category}`)
      .then(res => res.json())
      .then(data => {
        this.items = data; // Update items based on the response
      });
  }
}

module.exports = FilterDropdown;