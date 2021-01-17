import React from 'react'
import { Switch, Route } from "react-router-dom";


import Home from '../components/Home';
import About from '../components/About';
import Experience from '../components/Experience';

export const Routes = _ => {
  return (
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/experience" component={ Experience } />
          </Switch>
  )
}

export default Routes;
