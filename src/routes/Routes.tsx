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
          <Route path='/pricing' element={Pricing} />
          <Route path='/' element={Landing} />
          <Route path="/about" element={About} />
          <Route path="/contact" element={Contact} />
          <Route path='/features' element={Features} />
          <Route path='/login' element={SignIn} />
          <Route path='/register' element={SignUp} />
          <Route
            path='/forgotpassword-request'
            element={ForgotPasswordRequest}
          />
          <Route path='/forgot-password' element={ChangePassword} />
          <Route element={NotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}
