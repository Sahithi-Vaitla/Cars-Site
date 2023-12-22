// components/RatingStars.js
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import 'firebase/analytics';

const RatingStars = ({ carId }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const ratingRef = ref(db, `cars/${carId}/rating`);

        onValue(ratingRef, (snapshot) => {
          const data = snapshot.val();
          setRating(data || 0);
        });
      } catch (error) {
        console.error('Error fetching rating:', error);
      }
    };

    fetchData();
  }, [carId]);

  const maxStars = 5;
  const starArray = Array.from({ length: maxStars }, (_, index) => (
    <i key={index} className={`fa fa-star ${index < rating ? 'filled' : ''}`}></i>
  ));

  return <div className="rating-stars">{starArray}</div>;
};

export default RatingStars;
