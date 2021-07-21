import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";

import SignIn from "../views/Auth/SignIn";
import NotFound from "../views/NotFound";
import SignUp from "../views/Auth/SignUp";
import Profile from "../views/Profile";
import Landing from "../views/Landing/Landing";
import Pricing from "../views/Landing/Pricing";
import Features from "../views/Landing/Features/Features";
import Checkout from "../views/Checkout";
import Results from "../views/Profile/Results";
import Audio2Notes from "../views/Profile/Audio2Notes";
import ForgotPasswordRequest from "../views/Auth/FogotPasswordRequest";
import ChangePassword from "../views/Auth/ChangePassword";
import QuestionSimulator from "../views/Profile/QuestionSimulator";

export default function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute
          exact
          path='/profile/audio-2-notes'
          component={Audio2Notes}
        />
        <PrivateRoute
          exact
          path='/profile/questions-simulator'
          component={QuestionSimulator}
        />
        <PrivateRoute exact path='/results' component={Results} />
        <PrivateRoute exact path='/checkout' component={Checkout} />
        <Route exact path='/pricing' component={Pricing} />
        <Route exact path='/' component={Landing} />
        <Route exact path='/features' component={Features} />
        <Route exact path='/login' component={SignIn} />
        <Route exact path='/register' component={SignUp} />
        <Route
          exact
          path='/forgotpassword-request'
          component={ForgotPasswordRequest}
        />
        <Route exact path='/forgot-password' component={ChangePassword} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
