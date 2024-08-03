import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light p-3 mt-3 border-top">
      <div className="container text-center">
        <p>Connect with me:</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://github.com/yourusername">GitHub</a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/yourusername/">LinkedIn</a>
          </li>
          <li className="list-inline-item">
            <a href="https://twitter.com/yourusername">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
