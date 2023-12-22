// components/Filters.js

import React from 'react';

const Filters = ({
  searchText,
  selectedYear,
  selectedBrand,
  selectedModel,
  selectedPriceRange,
  selectedTransmission,
  selectedFuelType,
  selectedPassengerCapacity,
  onFilterChange,
}) => {
  // Function to handle input changes
  const handleInputChange = (filterName, event) => {
    onFilterChange(filterName, event.target.value);
  };

  return (
      <aside className="light-box">
      <div>
    {/* <aside className="filters">
       <div className="filter-group"> */}
        <h4>Filters</h4>
        <h5>Search Here</h5>
        <input
          type="text"
          value={searchText}
          onChange={(event) => handleInputChange('searchText', event)}
          placeholder="Type to search..."
        />
      </div>

      {/* Year Dropdown */}
      <div className="filter-group">
        <h5>Year</h5>
        <select value={selectedYear} onChange={(event) => handleInputChange('selectedYear', event)}>
          <option value="">All Years</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          {/* Add more years as needed */}
        </select>
      </div>

      {/* Brand Dropdown */}
      <div className="filter-group">
        <h5>Brand</h5>
        <select value={selectedBrand} onChange={(event) => handleInputChange('selectedBrand', event)}>
          <option value="">All Brands</option>
          <option value="Tesla">Tesla</option>
          <option value="Honda">Honda</option>
          {/* Add more brands as needed */}
        </select>
      </div>

      {/* Model Dropdown */}
      <div className="filter-group">
        <h5>Model</h5>
        <select value={selectedModel} onChange={(event) => handleInputChange('selectedModel', event)}>
          <option value="">All Models</option>
          <option value="Model X">Model X</option>
          <option value="Civic">Civic</option>
          {/* Add more models as needed */}
        </select>
      </div>

      {/* Price Range Dropdown */}
      <div className="filter-group">
        <h5>Price Range</h5>
        <select value={selectedPriceRange} onChange={(event) => handleInputChange('selectedPriceRange', event)}>
          <option value="">All Price Ranges</option>
          <option value="$0-$10,000">$0-$10,000</option>
          <option value="$10,000-$20,000">$10,000-$20,000</option>
          <option value="$20,000-$30,000">$20,000-$30,000</option>
          {/* Add more price ranges as needed */}
        </select>
      </div>

      {/* FuelType Dropdown */}
      <div className="filter-group">
        <h5>Fuel Type</h5>
        <select value={selectedFuelType} onChange={(event) => handleInputChange('selectedFuelType', event)}>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Petrol">Petrol</option>
          <option value="Gas">Gas</option>
          <option value="Diesel">Diesel</option>
        </select>
      </div>

      <div className="filter-group">
        <h5>Passenger Capacity</h5>
        <select
          value={selectedPassengerCapacity}
          onChange={(event) => handleInputChange('selectedPassengerCapacity', event)}
        >
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="7">7</option>
        </select>
      </div>

      {/* Reset Filter Button */}
      <div className="filter-group">
        <h5>Reset Filter</h5>
        <button onClick={() => onFilterChange('resetFilters')}>Reset</button>
      </div>
    </aside>
  );
};

export default Filters;
