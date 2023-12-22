// App.js

import React, { useState } from 'react';
import Header from './components/Header';
import CarList from './components/CarList';
import SellButton from './components/SellButton';
import HomePage from './pages/HomePage';
import CarSubmissionForm from './pages/CarSubmissionForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import topImage from './images/top-image.png';

const App = () => {
  // const location = useLocation();
  // const isHomePage = location.pathname === '/';
  const [cars, setCars] = useState([
    {
      id: 1,
      name: 'Tesla Model X',
      brand: 'Tesla',
      price: 80000,
      fuelType: 'Electric',
      location: 'Nagpur, India',
      imageUrl: require('./images/teslamodelx.jpg').default,
    },
    // ... (other cars)
  ]);

  const [searchText, setSearchText] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');
  const [selectedPassengerCapacity, setSelectedPassengerCapacity] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleTransmissionChange = (event) => {
    setSelectedTransmission(event.target.value);
  };

  const handleFuelTypeChange = (event) => {
    setSelectedFuelType(event.target.value);
  };

  const handlePassengerCapacityChange = (event) => {
    setSelectedPassengerCapacity(event.target.value);
  };

  const resetFilters = () => {
    setSearchText('');
    setSelectedYear('');
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedPriceRange('');
    setSelectedTransmission('');
    setSelectedFuelType('');
    setSelectedPassengerCapacity('');
  };

  // const location = useLocation();
  // const isCarSubmissionPage = location.pathname === '/sell';


  return (
    <Router>
      <div className="app">
         <Header /> 
        {/* New Section: Top Image */}
        
        {/* <div className="top-image-container">
          <img src={topImage} alt="Top Image" className="top-image" />
        </div> */}
  

        <div className="main-container">
          <Routes>
            {/* HomePage route */}
            <Route
              path="/"
              element={
                <HomePage
                  cars={cars}
                  searchText={searchText}
                  selectedYear={selectedYear}
                  selectedBrand={selectedBrand}
                  selectedModel={selectedModel}
                  selectedPriceRange={selectedPriceRange}
                  selectedTransmission={selectedTransmission}
                  selectedFuelType={selectedFuelType}
                  selectedPassengerCapacity={selectedPassengerCapacity}
                  handleSearchChange={handleSearchChange}
                  handleYearChange={handleYearChange}
                  handleBrandChange={handleBrandChange}
                  handleModelChange={handleModelChange}
                  handlePriceRangeChange={handlePriceRangeChange}
                  handleTransmissionChange={handleTransmissionChange}
                  handleFuelTypeChange={handleFuelTypeChange}
                  handlePassengerCapacityChange={handlePassengerCapacityChange}
                  resetFilters={resetFilters}
                  topImage ={topImage}
                />
              }
            />

            {/* CarSubmissionForm route */}
            <Route path="/sell" element={<CarSubmissionForm navigate = {{pathname: '/'}}/>} />

            {/* You can add more routes as needed */}
          </Routes>
        </div>

        {/* SellButton component */}
        <SellButton />
      </div>
    </Router>
  );
};

export default App;
