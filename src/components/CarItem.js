// components/CarItem.js
import React, { useEffect, useState } from 'react';
import RatingStars from './RatingStars';

const CarItem = ({ car }) => {
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    // Fetch review count from backend when the component mounts
    fetch(`/reviews/${car.id}`)
      .then(response => response.json())
      .then(data => setReviewCount(data.reviewCount))
      .catch(error => console.error('Error fetching review count:', error));
  }, [car.id]);

  return (
    <div className="car-item">
      <div className="car-details">
        <h4>{`${car.brand} ${car.name}`}</h4>
        <p>Brand: {car.brand}</p>
        <p>Price: ${car.price}</p>
        <p>Fuel Type: {car.fuelType}</p>
        <p>Location: {car.location}</p>
        <p>Reviews: {reviewCount}</p> {/* Display the review count */}
        <RatingStars rating={car.rating} carId={car.id}/>
      </div>
    </div>
  );
};

export default CarItem;