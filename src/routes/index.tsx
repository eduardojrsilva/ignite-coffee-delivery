import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Order from '../pages/Order';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/order" exact component={Order} />
    </Switch>
  );
};

export default AppRoutes;
