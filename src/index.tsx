import React from 'react';
import ReactDOM from 'react-dom';
import './styles/scss/index.scss';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { initialiseFirebase } from './firebase-configuration';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

/**
 * Initialise Firebase app with the config specific to Ocean Watch
 * Additionally initialise services required for analytics and push notifications
 */
initialiseFirebase();
