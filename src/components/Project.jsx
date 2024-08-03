import React from 'react';

const Project = ({ title, description, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={deployedLink}>View Project</a>
      <a href={githubLink}>GitHub Repo</a>
    </div>
  );
};

export default Project;
