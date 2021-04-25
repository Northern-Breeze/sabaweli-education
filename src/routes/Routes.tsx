import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from './PrivateRoutes';

import SignIn from "../views/Auth/SignIn";
import NotFound from "../views/NotFound";
import SignUp from "../views/Auth/SignUp";
import Profile from "../views/Profile";
import Landing from "../views/Landing/Landing";
import Pricing from "../views/Landing/Pricing";
import Features from "../views/Landing/Features/Features";
import Checkout from "../views/Checkout";

import checkUser from './helper/checkUser'
import Results from '../views/Profile/Results';

export default function Routes(): JSX.Element {
    const [status, setStatus] = React.useState(false);

    React.useEffect(() => {
      const token = localStorage.getItem('token') || "";
      (async () => {
        const status = await checkUser(token);
        setStatus(status)
      })()
    }, []);

    return (
        <Router>
          <Switch>
            <PrivateRoute exact path="/profile" isAuthenticated={status} component={Profile} />
            <PrivateRoute exact path="/results" isAuthenticated={status} component={Results} />
            <Route exact path="/pricing"  component={Pricing} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/features"  component={Features} />
            <Route exact path="/checkout"  component={Checkout} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    )
}
