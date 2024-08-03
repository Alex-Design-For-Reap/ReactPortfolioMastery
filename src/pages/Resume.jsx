import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="/path/to/your/resume.pdf" download className="btn btn-primary mb-3">Download Resume</a>
      <ul className="list-group">
        <li className="list-group-item">Seasoned Designer</li>
        <li className="list-group-item">Fullstack Developer</li>
        {/* Add more proficiencies here */}
      </ul>
    </section>
  );
};

export default Resume;
