import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from './PrivateRoutes';

import Home from '../views/Home'
import SignIn from "../views/SignIn";
import NotFound from "../views/NotFound";
import SignUp from "../views/SignUp";
import Verify from "../views/Verify";
import Profile from "../views/Profile";

export default function Routes() {
    return (
        <Router>
          <Switch>
            <PrivateRoute exact path="/" isAuthenticated={true} component={Home} />
            <PrivateRoute exact path="/profile" isAuthenticated={true} component={Profile} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/verify" component={Verify} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    )
}
