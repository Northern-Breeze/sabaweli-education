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

import checkUser from "./helper/checkUser";
import Results from "../views/Profile/Results";
import Loading from "../components/Loading";

export default function Routes(): JSX.Element {
  const [status, setStatus] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const token = localStorage.getItem("token") || "";
    (async () => {
      try {
        const status = await checkUser(token);
        setStatus(status);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Switch>
        <PrivateRoute
          exact
          path="/profile"
          isAuthenticated={status}
          component={Profile}
        />
        <PrivateRoute
          exact
          path="/results"
          isAuthenticated={status}
          component={Results}
        />
        <PrivateRoute
          exact
          path="/checkout"
          isAuthenticated={status}
          component={Checkout}
        />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
