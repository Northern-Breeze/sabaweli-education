import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";

import Loading from "../components/Loading";
import Settings from "../views/Profile/Settings";

import  SignIn from "../views/Auth/SignIn";
import  NotFound from "../views/NotFound";
import  SignUp from "../views/Auth/SignUp";
import  Profile from "../views/Profile";
import  Landing from "../views/Landing/Landing";
import  Pricing from "../views/Landing/Pricing";
import  Features from "../views/Landing/Features/Features";
import  Checkout from "../views/Checkout";
import  Results from "../views/Profile/Results";
import  Audio2Notes from "../views/Profile/Audio2Notes";
import  ForgotPasswordRequest from "../views/Auth/FogotPasswordRequest";
import  ChangePassword from "../views/Auth/ChangePassword";
import  QuestionSimulator from "../views/Profile/QuestionSimulator";
import  StudyCoach from "../views/Profile/StudyCoach";
import  About from "../views/Landing/About";
import  Contact from "../views/Landing/Contact";

export default function AppRoutes(): JSX.Element {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path='/profile'
            element={<PrivateRoute component={Profile} />}
          />
          <Route
            path='/profile/audio-2-notes'
            element={<PrivateRoute component={Audio2Notes} />}
          />
          <Route
            path='/profile/questions-simulator'
            element={<PrivateRoute component={QuestionSimulator} />}
          />
          <Route
            path='/profile/study-coach'
            element={<PrivateRoute component={StudyCoach} />}
          />
          <Route
            path='/profile/settings'
            element={<PrivateRoute component={Settings} />}
          />
          <Route
            path='/results'
            element={<PrivateRoute component={Results} />}
          />
          <Route
            path='/checkout'
            element={<PrivateRoute component={Checkout} />}
          />
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
