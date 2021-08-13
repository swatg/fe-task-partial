import React from 'react';
// Router
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../routes';

function AppLayout() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default AppLayout;
