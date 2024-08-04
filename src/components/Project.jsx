import React from 'react';

const Project = ({ title, description, image, deployedLink, githubLink }) => {
  return (
    <div className="card mb-3">
      <img src={image} className="card-img-top" alt={`${title} screenshot`} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <a href={deployedLink} target='_blank' className="btn btn-primary me-2">View Project</a>
        <a href={githubLink} target='_blank' className="btn btn-secondary">GitHub Repo</a>
      </div>
    </div>
  );
};

export default Project;
