import React from 'react';
import Project from '../components/Project';
import { Button } from 'react-bootstrap';

const projects = [
  {
    title: 'Fetch Feeder Dog Tracker',
    image: 'src/assets/images/fetchfeeder.png',
    description: 'Fetch Feeder is an innovative dog tracker app designed to help dog owners effortlessly track their dogs diet and health.',
    deployedLink: 'https://fetch-feeder-1.onrender.com/',
    githubLink: 'https://github.com/Alex-Design-For-Reap/Fetch-Feeder-Dog-Tracker'
  },
  {
    title: 'Weather Dashboard',
    image: 'src/assets/images/Current-weather-forecast.png',
    description: 'A weather dashboard that allows users to search for a city and see the current weather as well as a 5-day forecast.',
    deployedLink: 'https://weather-dashboard-56h1.onrender.com/',
    githubLink: 'https://github.com/Alex-Design-For-Reap/Weather-Dashboard'
  },
  {
    title: 'MCV Blog Post',
    image: 'src/assets/images/Blog-post-portfolio.png',
    description: 'A blog post app that allows users to create, edit, and delete blog posts.',
    deployedLink: 'https://mvc-blog-post.onrender.com/',
    githubLink: 'https://github.com/Alex-Design-For-Reap/MVC-Blog-Post'
  },
  {
  title: 'Note Taker Express.js',
  image: 'src/assets/images/Note-taker-portfolio.png',
  description: 'A Note taker app that allows users to write, save, and delete notes.',
  deployedLink: 'https://note-taker-express-js-j2ds.onrender.com/',
  githubLink: 'https://github.com/Alex-Design-For-Reap/note-taker-express-js'
},
];

const Portfolio = () => {
  return (
    <>
    <section id="portfolio">
      <h1 className='m-4'>Portfolio</h1>
      <div className='m-4'>
        <p>
        I believe my work speaks for itself. Browse my most recent projects below
        and enjoy my handmade work with love for every detail.
        </p>
      </div>
      <div className="row m-4">
        {projects.map((project, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
    <div className="d-grid gap-2 m-4">
      <Button variant="info" size="lg" href='/GitHubRepos'>
        Clcik to see my GitHub list of projects
      </Button>
    </div>

    </>

  );
};

export default Portfolio;

