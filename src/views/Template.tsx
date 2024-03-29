// eslint-disable jsx-a11y/anchor-is-valid
import React from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

import "./Template.scss";

type Props = {
  children: React.ReactNode;
};

export default function Template(props: Props): JSX.Element {
  const { children } = props;
  const [isActive, setActive] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <nav
        className="navbar sleepy-warpper"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <a href="/">
              <img src={Logo} className="logo" alt="Sabaweli Education Logo" width="200px" height="200px" />
            </a>
          </div>

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              e.preventDefault();
              setActive(!isActive);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link to="/features" className="navbar-item">
              Features
            </Link>

            <Link to="/pricing" className="navbar-item">
              Pricing
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="/about" >About</a>
                <a className="navbar-item" href="/contact">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/contact?ref=issue">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons-container">
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign In
                </Button>
                <Button
                  className="secondary"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
