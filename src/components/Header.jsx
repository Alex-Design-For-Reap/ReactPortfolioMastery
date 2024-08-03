import React from 'react';
import Navigation from './Navigation';
import { toggleTheme } from '../utils/themeToggle';

const Header = () => {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>Alex Da Silva</h1>
        <div>
          <Navigation />
          <button onClick={toggleTheme} className="btn btn-secondary ms-3">
            Theme Mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
