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
            {
              path: 'new',
              element: <SightingForm />,
            },
            {
              path: 'details/:id',
              element: <SightingDetails />,
            },
          ],
        },
        { path: 'settings', element: <Settings /> },
        { path: 'profile', element: <Profile /> },
      ],
    },
  ]);

export default AppRoutes;
