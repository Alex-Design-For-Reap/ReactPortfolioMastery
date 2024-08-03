import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-light p-3 mb-3 border-bottom">
      <div className="container">
        <h1>Alex Da Silva</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
