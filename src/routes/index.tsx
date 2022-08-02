import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Order from '../pages/Order';
import ConfirmedOrder from '../pages/ConfirmedOrder';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/order" exact component={Order} />
      <Route path="/confirmed-order" exact component={ConfirmedOrder} />
    </Switch>
  );
};

export default AppRoutes;
