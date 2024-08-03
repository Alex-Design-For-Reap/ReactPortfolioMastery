import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Weather Dashboard',
    image: 'src/assets/images/Current-weather-forecast.png',
    description: 'A weather dashboard that allows users to search for a city and see the current weather as well as a 5-day forecast.',
    deployedLink: 'https://weather-dashboard-56h1.onrender.com/',
    githubLink: 'https://github.com/Alex-Design-For-Reap/Weather-Dashboard'
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;



// import React from 'react';
// import GitHubRepos from './GitHubRepos';

// const Portfolio = () => {
//   return (
//     <section id="portfolio">
//       <h2>Portfolio</h2>
//       {/* Other portfolio content here */}
//       <GitHubRepos />
//     </section>
//   );
// };

// export default Portfolio;
