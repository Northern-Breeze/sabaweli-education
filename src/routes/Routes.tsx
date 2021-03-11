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
import Verify from "../views/Auth/Verify";
import Profile from "../views/Profile";
import Landing from "../views/Landing/Landing";
import Pricing from "../views/Landing/Pricing";
import Features from "../views/Landing/Features/Features";
import Checkout from "../views/Checkout";

import checkUser from './helper/checkUser'

export default function Routes() {
    const [status, setStatus] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const token = localStorage.getItem('token') || "";
      (async () => {
        const status = await checkUser(token);
        setStatus(status)
        setLoading(false);
      })()
    }, []);

    if (loading) {
      return (<div className="loading">
              <div className="container">
              loading
              </div>
        </div>)
    }
    return (
        <Router>
          <Switch>
            <PrivateRoute exact path="/" isAuthenticated={status} component={Landing} />
            <PrivateRoute exact path="/profile" isAuthenticated={status} component={Profile} />
            <PrivateRoute exact path="/pricing" isAuthenticated={status} component={Pricing} />
            <PrivateRoute exact path="/features" isAuthenticated={status} component={Features} />
            <PrivateRoute exact path="/checkout" isAuthenticated={status} component={Checkout} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/verify" component={Verify} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    )
}
