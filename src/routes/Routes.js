import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Experience from '../pages/Experience';


export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/experience" component={Experience} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
