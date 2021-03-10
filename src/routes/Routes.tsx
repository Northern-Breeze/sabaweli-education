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
import Landing from "../views/Landing/Landing";
import Pricing from "../views/Landing/Pricing";
import Features from "../views/Landing/Features/Features";
import Checkout from "../views/Checkout";

export default function Routes() {
    return (
        <Router>
          <Switch>
            <PrivateRoute exact path="/profile" isAuthenticated={true} component={Home} />
            <PrivateRoute exact path="/" isAuthenticated={true} component={Landing} />
            <PrivateRoute exact path="/pricing" isAuthenticated={true} component={Pricing} />
            <PrivateRoute exact path="/profile" isAuthenticated={true} component={Profile} />
            <PrivateRoute exact path="/features" isAuthenticated={true} component={Features} />
            <PrivateRoute exact path="/checkout" isAuthenticated={true} component={Checkout} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/verify" component={Verify} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    )
}
