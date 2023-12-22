// components/Header.js
import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="brand">Car Zone</div>
      <div className="profile-cart">
        <div className="profile">
          <i className="fas fa-user"></i>
          <span className="profile-text">Profile</span>
        </div>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-text">Cart</span>
        </div>

        {/* <Link to="/sell-car">Sell Your Car</Link> */}
      </div>
    </header>
  );
};

export default Header;
