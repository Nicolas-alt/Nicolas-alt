import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../templates/Home';
import About from '../templates/About';
import Experience from '../templates/Experience';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/experience" component={Experience} />
    </Switch>
  );
};

export default Routes;
