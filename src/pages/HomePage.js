// pages/HomePage.js

import React, {  useEffect, useState } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters'; // Import the Filters component
import CarList from '../components/CarList';
import topImage from '../images/top-image.png';
import SellButton from '../components/SellButton';
import { useLocation } from 'react-router-dom';
import { collection, getDocs} from 'firebase/firestore';
import { app} from '../firebase/firebaseConfig';
import { getFirestore } from 'firebase/firestore';

const db = getFirestore();
// import { db } from '../firebase'; // Import the Firebase instance

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

  const [userSubmittedCars, setUserSubmittedCars] = useState([]);
  const [hardcodedCars, setHardcodedCars] = useState([]);

// const [carData, setCarData] = useState([]);

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

  // Fetch car data from Firebase
  const fetchUserSubmittedCars = async () => {
    try {
    const userCarsCollection = collection(db, 'cars'); // 'cars' is the collection name in your Firestore
    const querySnapshot = await getDocs(userCarsCollection);
    // const data = querySnapshot.docs.map((doc) => doc.data());

    const newData = querySnapshot.docs.map((doc) => ({
      id: doc.id, 
      ...doc.data(),
      }));
      
    setUserSubmittedCars(newData);
  } catch (error) {
    console.error('Error fetching user-submitted cars:', error.message);
  }
};

  useEffect(() => {
    fetchUserSubmittedCars();
  }, []);

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
        userSubmittedCars = {userSubmittedCars}
        hardcodedCars={hardcodedCars}
      />
      <SellButton/>
      {/* You can add any other content specific to the home page */}
    </div>

    
    </div>
  );
};

export default HomePage;
