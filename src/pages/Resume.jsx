import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h2 className='m-4'>Resume</h2>
      <div className='m-4'>
        <a href="/path/to/your/resume.pdf" download className="btn btn-primary mb-3">Download Resume</a>
        <ul className="list-group">
          <li className="list-group-item">Seasoned Designer</li>
          <li className="list-group-item">Fullstack Developer</li>
          <li className="list-group-item">Fullstack Developer</li>
          <li className="list-group-item">Fullstack Developer</li>
          <li className="list-group-item">Fullstack Developer</li>
          <li className="list-group-item">Fullstack Developer</li>
        </ul>


      </div>
    </section>
  );
};

export default Resume;
