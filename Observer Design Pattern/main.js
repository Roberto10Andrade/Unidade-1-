const CategoryDropdown = require('./CategoryDropdown');
const FilterDropdown = require('./FilterDropdown');

const categoryDropdown = new CategoryDropdown();

const colorsDropdown = new FilterDropdown('colors');
const priceDropdown = new FilterDropdown('price');
const brandDropdown = new FilterDropdown('brand');

categoryDropdown.subscribe(colorsDropdown);
categoryDropdown.subscribe(priceDropdown);
categoryDropdown.subscribe(brandDropdown);