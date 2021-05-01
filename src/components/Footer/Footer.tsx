import * as React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer(): JSX.Element {
  return (
    <div className="footer">
      <div className="header">
        <span>Sleepy Bears Socials</span>
      </div>
      <div className="box-container">
        <div className="box">
          <Link className="social" to="https://www.instagram.com/" >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link className="social" to="https://facebook.com">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link className="social" to="https://youtube.com">
            <i className="fab fa-youtube"></i>
          </Link>
          <Link className="social" to="https://linkedin.com">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link className="social" to="https://instagram.com">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
