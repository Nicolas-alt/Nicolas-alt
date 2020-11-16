import React from 'react'
import {   BrowserRouter as Router,  Switch,   Route   } from "react-router-dom";
import Home from '../components/Home';
  
export const Routes = () => {
    return (
              <Router>
                  <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/about" />
                    <Route exact path="/users" />
                  </Switch>
              </Router>
    )
}

export default Routes;