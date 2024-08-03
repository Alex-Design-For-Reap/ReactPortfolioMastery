import React from 'react';
import { NavLink, useLocation  } from 'react-router-dom';

function Navigation() {
  const location = useLocation().pathname;
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" className={location === '/' ? 'nav-active' : ''}
          >Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-me" className={location === '/about-me' ? 'nav-active' : ''}
          >About Me</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={location === '/portfolio' ? 'nav-active' : ''}
          >Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={location === '/contact' ? 'nav-active' : ''}
          >Contact</NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={location === '/resume' ? 'nav-active' : ''}
          >Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
