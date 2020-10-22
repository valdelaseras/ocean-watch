import React from 'react';
import ReactDOM from 'react-dom';
import './styles/scss/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
