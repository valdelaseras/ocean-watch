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
import VisualSettings from './app/components/sections/settings/visual/VisualSettings';
import Subscriptions from './app/components/sections/settings/subscriptions/Subscriptions';
import Notifications from './app/components/sections/settings/notifications/Notifications';
import Resources from './app/components/sections/education/resources/Resources';
import MonetaryContributions from './app/components/sections/contribute/monetary/MonetaryContributions';
import OtherContributions from './app/components/sections/contribute/other/OtherContributions';
import DevContributions from './app/components/sections/contribute/devs/DevContributions';
import ReportIssues from './app/components/sections/contact/issues/ReportIssues';
import Feedback from './app/components/sections/contact/feedback/Feedback';
import Mission from './app/components/sections/about/mission/Mission';
import Faq from './app/components/sections/about/faq/Faq';
import UserSightings from './app/components/sections/profile/user-sightings/UserSightings';
import SavedSightings from './app/components/sections/profile/saved-sightings/SavedSightings';

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
        {
          path: 'settings',
          element: <Settings />,
          children: [
            { path: 'notifications', element: <Notifications /> },
            { path: 'subscriptions', element: <Subscriptions /> },
            { path: 'visual', element: <VisualSettings /> },
          ],
        },
        {
          path: 'profile',
          element: <Profile />,
          // TODO: these are the same component, just a feed with different filters but
          // displayed in different 'views'. Show saved sightings on saved sightings view etc.
          children: [
            { path: 'my-sightings', element: <UserSightings /> },
            { path: 'saved-sightings', element: <SavedSightings /> },
          ],
        },
        {
          path: 'about',
          element: <About />,
          children: [
            { path: 'mission', element: <Mission /> },
            { path: 'faq', element: <Faq /> },
          ],
        },
        { path: 'hotlines', element: <Hotlines /> },
        {
          path: 'education',
          element: <Education />,
          children: [
            { path: 'data', element: <VisualisedData /> },
            { path: 'identification', element: <IdentificationGuides /> },
            { path: 'resources', element: <Resources /> },
          ],
        },
        {
          path: 'contact',
          element: <Contact />,
          children: [
            { path: 'report-issues', element: <ReportIssues /> },
            { path: 'feedback', element: <Feedback /> },
          ],
        },
        {
          path: 'contribute',
          element: <Contribute />,
          children: [
            { path: 'monetary', element: <MonetaryContributions /> },
            { path: 'other', element: <OtherContributions /> },
            { path: 'dev', element: <DevContributions /> },
          ],
        },
      ],
    },
  ]);

export default AppRoutes;
