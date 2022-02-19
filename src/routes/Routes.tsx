import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PrivateRoute = React.lazy(() => import("./PrivateRoutes"));

import Loading from '../components/Loading';
import Settings from "../views/Profile/Settings";

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
const ForgotPasswordRequest = React.lazy(
  () => import("../views/Auth/FogotPasswordRequest")
);
const ChangePassword = React.lazy(() => import("../views/Auth/ChangePassword"));
const QuestionSimulator = React.lazy(
  () => import("../views/Profile/QuestionSimulator")
);
const StudyCoach = React.lazy(() => import("../views/Profile/StudyCoach"));
const About = React.lazy(() => import("../views/Landing/About"));
const Contact = React.lazy(() => import("../views/Landing/Contact"));

export default function AppRoutes(): JSX.Element {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/profile' element={<PrivateRoute component={Profile} />} />
          <Route
            path='/profile/audio-2-notes'
            element={<PrivateRoute component={Audio2Notes} />}
          />
          <Route
            path='/profile/questions-simulator'
            element={<PrivateRoute component={QuestionSimulator} />}
          />
          <Route path='/profile/study-coach' element={<PrivateRoute component={StudyCoach} />} />
          <Route path='/profile/settings' element={<PrivateRoute component={Settings} />} />
          <Route path='/results' element={<PrivateRoute component={Results} />} />
          <Route path='/checkout' element={<PrivateRoute component={Checkout} />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/features' element={<Features />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route
            path='/forgotpassword-request'
            element={<ForgotPasswordRequest />}
          />
          <Route path='/forgot-password' element={<ChangePassword />} />
          <Route element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}
