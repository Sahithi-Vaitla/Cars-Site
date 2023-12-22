// pages/HomePage.js

import React, { useState } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters'; // Import the Filters component
import CarList from '../components/CarList';
import topImage from '../images/top-image.png';
import SellButton from '../components/SellButton';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  // State for filters (you can modify as needed)
  const [searchText, setSearchText] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');
  const [selectedPassengerCapacity, setSelectedPassengerCapacity] = useState('');

  // Function to handle filter changes
  const handleFilterChange = (filterName, value) => {
    // Handle filter changes accordingly
    switch (filterName) {
      case 'searchText':
        setSearchText(value);
        break;
      case 'selectedYear':
        setSelectedYear(value);
        break;
      case 'selectedBrand':
        setSelectedBrand(value);
        break;
      case 'selectedModel':
        setSelectedModel(value);
        break;
      case 'selectedPriceRange':
        setSelectedPriceRange(value);
        break;
      case 'selectedTransmission':
        setSelectedTransmission(value);
        break;
      case 'selectedFuelType':
        setSelectedFuelType(value);
        break;
      case 'selectedPassengerCapacity':
        setSelectedPassengerCapacity(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {/* New Section: Top Image for HomePage */}
      <div className="top-image-container">
        <img src={topImage} alt="Top Image" className="top-image" />
      </div>

  
    
    <div style={{ display: 'flex' }}>
     {/* <div> */}
      {/* <Header /> */}
      <Filters
        // Pass filter values and change handlers as props
        searchText={searchText}
        selectedYear={selectedYear}
        selectedBrand={selectedBrand}
        selectedModel={selectedModel}
        selectedPriceRange={selectedPriceRange}
        selectedTransmission={selectedTransmission}
        selectedFuelType={selectedFuelType}
        selectedPassengerCapacity={selectedPassengerCapacity}
        onFilterChange={handleFilterChange}
      />
      <CarList
        // Pass filter values as props to CarList component
        searchText={searchText}
        selectedYear={selectedYear}
        selectedBrand={selectedBrand}
        selectedModel={selectedModel}
        selectedPriceRange={selectedPriceRange}
        selectedTransmission={selectedTransmission}
        selectedFuelType={selectedFuelType}
        selectedPassengerCapacity={selectedPassengerCapacity}
      />
      <SellButton/>
      {/* You can add any other content specific to the home page */}
    </div>
    </div>
  );
};

export default HomePage;
