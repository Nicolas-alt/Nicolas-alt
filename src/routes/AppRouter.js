import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import WrapperNav from '../components/WrapperNav';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={WrapperNav} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
