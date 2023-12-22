// CarSubmissionForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CarSubmissionPage.css';

const CarSubmissionForm = () => {
  const navigate = useNavigate();
  const [carDetails, setCarDetails] = useState({
    brand: '',
    model: '',
    price: '',
    FuelType: '',
    SeatingCapacity:'',
    Year:'',
    location: '',
    imageUrl: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    // Clear the error message when the user starts typing in a field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Basic validation example: Check if required fields are filled
    if (!carDetails.brand.trim()) {
      newErrors.brand = 'Brand is required';
      valid = false;
    }

    if (!carDetails.model.trim()) {
      newErrors.model = 'Model is required';
      valid = false;
    }

    if (!carDetails.price.trim()) {
      newErrors.price = 'Price is required';
      valid = false;
    }

    if (!carDetails.FuelType.trim()) {
      newErrors.FuelType = 'FuelType is required';
      valid = false;
    }

    if (!carDetails.SeatingCapacity.trim()) {
      newErrors.SeatingCapacity = 'SeatingCapacity is required';
      valid = false;
    }

    if (!carDetails.Year.trim()) {
      newErrors.Year = 'Year is required';
      valid = false;
    }

    if (!carDetails.location.trim()) {
      newErrors.location = 'Location is required';
      valid = false;
    }

    if (!carDetails.imageUrl.trim()) {
      newErrors.imageUrl = 'Image URL is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can proceed with submission
      console.log('Submitted data:', carDetails);
      // You can redirect the user or perform other actions here
    } else {
      console.log('Form has validation errors. Please fix them.');
    }

    navigate('/');
  };

  return (
    <div className="lightbox-container">
      <h2>Car Submission Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Brand Input */}
        <div className = "form-group">
          <label className="label">Brand:</label>
            <input
              type="text"
              name="brand"
              value={carDetails.brand}
              onChange={handleInputChange}
              required
              className="input"
            />
          {/* </label> */}
          <span style={{ color: 'red' }}>{errors.brand}</span>
        </div>

        {/* Name Input */}
        <div className="form-group">
          <label className="label">Model:</label>
            <input
              type="text"
              name="model"
              value={carDetails.model}
              onChange={handleInputChange}
              required
              className="input"
            />
          {/* </label> */}
          <span style={{ color: 'red' }}>{errors.model}</span>
        </div>

        {/* Price Input */}
        <div className="form-group">
          <label className="label">Price:</label>
            <input
              type="text"
              name="price"
              value={carDetails.price}
              onChange={handleInputChange}
              required
            />
          {/* </label> */}
          <span style={{ color: 'red' }}>{errors.price}</span>
        </div>


        {/* FuelType Input */}
        <div className="form-group">
          <label className="label">FuelType:</label>
            <input
              type="text"
              name="FuelType"
              value={carDetails.FuelType}
              onChange={handleInputChange}
              required
            />
          {/* </label> */}
          <span style={{ color: 'red' }}>{errors.FuelType}</span>
        </div>


      {/* SeatingCapacity Input */}
      <div className="form-group">
          <label className="label">SeatingCapacity:</label>
            <input
              type="text"
              name="SeatingCapacity"
              value={carDetails.SeatingCapacity}
              onChange={handleInputChange}
              required
            />
          {/* </label> */}
          <span style={{ color: 'red' }}>{errors.SeatingCapacity}</span>
        </div>

        {/* Year Input */}
        <div className="form-group">
          <label className="label">Year:</label>
            <input
              type="text"
              name="Year"
              value={carDetails.Year}
              onChange={handleInputChange}
              required
            />
          {/* </label> */}
          <span style={{ color: 'red' }}>{errors.Year}</span>
        </div>

        {/* Location Input */}
        <div className="form-group">
          <label className="label">Location:</label>
            <input
              type="text"
              name="location"
              value={carDetails.location}
              onChange={handleInputChange}
              required
            />
          {/* </label> */}
          <span style={{ color: 'red' }}>{errors.location}</span>
        </div>

        {/* Image URL Input */}
        <div className="form-group">
          <label className="label">Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={carDetails.imageUrl}
              onChange={handleInputChange}
              required
            />
          {/* </label> */}
          <span style={{ color: 'red' }}>{errors.imageUrl}</span>
        </div>

        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default CarSubmissionForm;
