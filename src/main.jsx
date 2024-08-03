
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';


import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Error from './pages/Error';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'About-Me',
        element: <AboutMe />
      },
      {
        path: 'Portfolio',
        element: <Portfolio />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
      {
        path: 'Resume',
        element: <Resume />
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);