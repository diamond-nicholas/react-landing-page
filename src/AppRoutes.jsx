import React from 'react';
import { Route, Switch } from 'react-router';

import HomePage from './pages/index';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
    </Switch>
  );
};

export default AppRoutes;
