import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../templates/Home';
import About from '../templates/About';
import Experience from '../templates/Experience';
import DetailsProject from '../templates/DetailsProject';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/project/:name" component={DetailsProject} />
    </Switch>
  );
};

export default Routes;
