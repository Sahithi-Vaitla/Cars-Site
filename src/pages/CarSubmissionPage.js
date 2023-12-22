// pages/CarSubmissionPage.js

import React, { useState } from 'react';
import './CarSubmissionPage.css'; // Import your CSS file for styling

const CarSubmissionPage = () => {
  // State for form fields
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [FuelType, setFuelType] = useState('');
  const [SeatingCapacity, setSeatingCapacity] = useState('');
  const [Year, setYear] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', { brand, model, price, FuelType, SeatingCapacity, Year, location, imageUrl });
  };

  return (
    <div className="car-submission-page">
      {/* Header with company name, profile, and cart buttons */}
      <header>
        {/* Add your header content here */}
        Car Zone | Profile | Cart
      </header>

      {/* Form section */}
      <main>
        <h2>Sell Your Car</h2>
        {/* Form with fields */}
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label className="label">Brand:</label>
            <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} className="input" />
          </div>

          <div className="form-group">
            <label className="label">Model:</label>
            <input type="text" value={model} onChange={(e) => setModel(e.target.value)} className="input" />
          </div>

          <div className="form-group">
            <label className="label">Price:</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="input" />
          </div>

          <div className="form-group">
            <label className="label">FuelType:</label>
            <input type="text" value={FuelType} onChange={(e) => setFuelType(e.target.value)} className="input" />
          </div>

          <div className="form-group">
            <label className="label">SeatingCapacity:</label>
            <input type="text" value={SeatingCapacity} onChange={(e) => setSeatingCapacity(e.target.value)} className="input" />
          </div>

          <div className="form-group">
            <label className="label">Year:</label>
            <input type="text" value={Year} onChange={(e) => setYear(e.target.value)} className="input" />
          </div>

          <div className="form-group">
            <label className="label">Location:</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="input" />
          </div>

          <div className="form-group">
            <label className="label">Image URL:</label>
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="input" />
          </div>

          {/* Submit button */}
          <button type="submit" className="button">Submit</button>
        </form>
      </main>


      {/* Footer */}
      <footer>
        {/* Add your footer content here */}
        © 2023 Your Company
      </footer>
    </div>
  );
};

export default CarSubmissionPage;
