import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section id="error">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </section>
  );
};

export default Error;