import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from '../components/Home';
import About from '../components/About';
import Experience from '../components/Experience';

export const Routes = _ => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/experience" component={ Experience } />
      </Switch>
    </Router>
  )
}

export default Routes;
