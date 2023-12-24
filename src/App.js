// App.js

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CarList from './components/CarList';
import SellButton from './components/SellButton';
import HomePage from './pages/HomePage';
import CarSubmissionForm from './pages/CarSubmissionForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import topImage from './images/top-image.png';

import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore, collection, addDoc, getDocs} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8GRujYv9KKCRMm3tZwfvqQ-drzslYr60",
  authDomain: "cars-site-db.firebaseapp.com",
  projectId: "cars-site-db",
  storageBucket: "cars-site-db.appspot.com",
  messagingSenderId: "567065209647",
  appId: "1:567065209647:web:3989f4a79911d6ed664fda",
  measurementId: "G-3HQWDEXF93"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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

  const fetchCarsFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(getFirestore(app), 'cars'));
      const carsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCars(carsData);
    } catch (error) {
      console.error('Error fetching car data from Firestore:', error.message);
    }
  };

  const handleSubmit = async (carDetails) => {
    try {
      const carsCollection = collection(getFirestore(app), 'cars');
      await addDoc(carsCollection, carDetails);
      console.log('Car details submitted successfully:', carDetails);

      // Fetch the updated cars list from Firestore

      await fetchCarsFromFirestore();
      // const querySnapshot = await getDocs(collection(getFirestore(app), 'cars'));
      // const updatedCars = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Update the cars state to reflect the changes on the homepage
      // setCars(updatedCars);
    } catch (error) {
      console.error('Error submitting car details:', error);
    }
  };

  useEffect(() => {
    // Fetch initial cars list from Firestore
    // const fetchCars = async () => {
    //   const querySnapshot = await getDocs(collection(getFirestore(app), 'cars'));
    //   const initialCars = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //   setCars(initialCars);
    // };

    fetchCarsFromFirestore();
  }, []);



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
