import { useRoutes } from 'react-router-dom';
import React, { FC } from 'react';

import App from './App';

import Dashboard from './app/components/sections/dashboard/Dashboard';
import Sightings from './app/components/sections/sightings/Sighting';
import SightingForm from './app/components/sections/sightings/form/SightingForm';
import SightingDetails from './app/components/sections/sightings/details/SightingDetails';
import Settings from './app/components/sections/settings/Settings';
import Login from './app/components/sections/login/Login';
import Register from './app/components/sections/register/Register';
import Profile from './app/components/sections/profile/Profile';
import About from './app/components/sections/about/About';
import Hotlines from './app/components/sections/hotlines/Hotlines';
import Education from './app/components/sections/education/Education';
import Contact from './app/components/sections/contact/Contact';
import Contribute from './app/components/sections/contribute/Contribute';
import IdentificationGuides from './app/components/sections/education/id-guides/IdentificationGuides';
import VisualisedData from './app/components/sections/education/visualised-data/VisualisedData';

const AppRoutes: FC = () =>
  useRoutes([
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Dashboard /> },
        {
          path: 'sighting',
          element: <Sightings />,
          children: [
            { path: 'new', element: <SightingForm /> },
            { path: 'details/:id', element: <SightingDetails /> },
          ],
        },
        { path: 'settings', element: <Settings /> },
        { path: 'profile', element: <Profile /> },
        { path: 'about', element: <About /> },
        { path: 'hotlines', element: <Hotlines /> },
        {
          path: 'education',
          element: <Education />,
          children: [
            { path: 'data', element: <VisualisedData /> },
            { path: 'identification', element: <IdentificationGuides /> },
          ],
        },
        { path: 'contact', element: <Contact /> },
        { path: 'contribute', element: <Contribute /> },
      ],
    },
  ]);

export default AppRoutes;
