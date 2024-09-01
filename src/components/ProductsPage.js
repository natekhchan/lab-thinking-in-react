import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json'; // Assuming this is the correct path to your data
import './css/style.css';

function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleInStockChange = (event) => {
    setOnlyInStock(event.target.checked);
  };

  const filteredProducts = data.filter(product => {
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStockFilter = !onlyInStock || product.inStock;
    return matchesSearchQuery && matchesStockFilter;
  });

  return (
    <div>
      <div className="search-title">Search</div>
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div className="in-stock-filter">
        <input
          type="checkbox"
          id="in-stock-checkbox"
          checked={onlyInStock}
          onChange={handleInStockChange}
        />
        <label htmlFor="in-stock-checkbox">Only show products in stock</label>
      </div>
      <div className="table-wrapper">
        <ProductTable products={filteredProducts} />
      </div>
    </div>
  );
}

export default ProductsPage;