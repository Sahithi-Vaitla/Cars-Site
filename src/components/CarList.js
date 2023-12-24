import React from 'react';

const CarList = ({ userSubmittedCars }) => {
  const getCarImage = (brand, image) => {
    if (!image) {
      return null; // No image to display
    }
  
    if (image instanceof File) {
      // Display the local image file directly
      return <img src={URL.createObjectURL(image)} alt={`${brand} Car`} className="car-image" />;
    } else if (typeof image === 'string') {
      // Display the image using the URL
      return <img src={image} alt={`${brand} Car`} className="car-image" />;
    }
    return null; // No image to display
  };

  return (
    <div className="car-list">
      {userSubmittedCars.map((car) => (
        <div key={car.id} className="car-item">
          <div className="car-item-box">
            {getCarImage(car.brand, car.imageUrl)}
            <div className="car-details">
              <h4>{car.brand} {car.model}</h4>
              <p>Brand: {car.brand}</p>
              <p>Price: ${car.price}</p>
              <p>Fuel Type: {car.fuelType}</p>
              <p>Location: {car.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
