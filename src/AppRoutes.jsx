import React from 'react';
import { Route, Switch } from 'react-router';

import HomePage from './pages/home';
import BlogPage from './pages/blog/index';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/blog' component={BlogPage} />
    </Switch>
  );
};

export default AppRoutes;
