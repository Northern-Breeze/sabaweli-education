import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";

const SignIn = React.lazy(() => import("../views/Auth/SignIn"));
const NotFound = React.lazy(() => import("../views/NotFound"));
const SignUp = React.lazy(() => import("../views/Auth/SignUp"));
const Profile = React.lazy(() => import("../views/Profile"));
const Landing = React.lazy(() => import("../views/Landing/Landing"));
const Pricing = React.lazy(() => import("../views/Landing/Pricing"));
const Features = React.lazy(() => import("../views/Landing/Features/Features"));
const Checkout = React.lazy(() => import("../views/Checkout"));
const Results = React.lazy(() => import("../views/Profile/Results"));
const Audio2Notes = React.lazy(() => import("../views/Profile/Audio2Notes"));
const ForgotPasswordRequest = React.lazy(() => import("../views/Auth/FogotPasswordRequest"));
const ChangePassword = React.lazy(() => import("../views/Auth/ChangePassword"));
const QuestionSimulator = React.lazy(() => import("../views/Profile/QuestionSimulator"));
const StudyCoach = React.lazy(() => import("../views/Profile/StudyCoach"));
const About = React.lazy(() => import("../views/Landing/About"));
const Contact = React.lazy(() => import("../views/Landing/Contact"));

export default function Routes(): JSX.Element {
  return (
    <Router>
      <React.Suspense fallback="loading">
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
          <PrivateRoute
            exact
            path='/profile/study-coach'
            component={StudyCoach}
          />
          <PrivateRoute exact path='/results' component={Results} />
          <PrivateRoute exact path='/checkout' component={Checkout} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/' component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
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
      </React.Suspense>
    </Router>
  );
}
