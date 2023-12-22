import React from 'react';
import teslaImage from '../images/teslamodelx.jpg';
import hondaImage from '../images/hondacivic.jpg';
import toyotaImage from '../images/toyotacamry.jpg';
import chevroletImage from '../images/chevroletmalibu.jpg';

const CarList = () => {
  const cars = [
    {
      id: 1,
      name: 'Tesla Model X',
      brand: 'Tesla',
      price: 80000,
      fuelType: 'Electric',
      location: 'Nagpur, India',
    },
    {
      id: 2,
      name: 'Honda Civic',
      brand: 'Honda',
      price: 25000,
      fuelType: 'Gasoline',
      location: 'Kerala, India',
    },
    {
      id: 3,
      name: 'Toyota Camry',
      brand: 'Toyota',
      price: 30000,
      fuelType: 'Hybrid',
      location: 'Pune, India',
    },
    {
      id: 4,
      name: 'Chevrolet Malibu',
      brand: 'Chevrolet',
      price: 28000,
      fuelType: 'Gasoline',
      location: 'Chennai, India',
    },
  ];

  const getCarImage = (brand) => {
    switch (brand) {
      case 'Tesla':
        return <img src={teslaImage} alt="Tesla" className="car-image" />;
      case 'Honda':
        return <img src={hondaImage} alt="Honda" className="car-image" />;
      case 'Toyota':
        return <img src={toyotaImage} alt="Toyota" className="car-image" />;
      case 'Chevrolet':
        return <img src={chevroletImage} alt="Chevrolet" className="car-image" />;
      default:
        return null;
    }
  };


  // const getReviewCount = (reviews) => {
  //   return reviews ? reviews.length : 0;
  // };


  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car.id} className="car-item">
          <div className="car-item-box">
            {getCarImage(car.brand)}
            <div className="car-details">
              <h4>{car.name}</h4>
              <p>Brand: {car.brand}</p>
              <p>Price: ${car.price}</p>
              <p>Fuel Type: {car.fuelType}</p>
              <p>Location: {car.location}</p>
              {/* <p>Reviews: {getReviewCount(car.reviews)}</p> */}
              {/* Additional car details can be displayed here */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
