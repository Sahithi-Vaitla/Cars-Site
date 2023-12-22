import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SellButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return isHomePage ? (
    <button className="sell-button" onClick={() => navigate('/sell')}>
      + Sell
    </button>
  ) : null;
};

export default SellButton;