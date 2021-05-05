import * as React from "react";
import "./Footer.scss";

export default function Footer(): JSX.Element {
  return (
    <div className="footer">
      <div className="header">
        <span>Sabaweli Education Socials</span>
      </div>
      <div className="box-container">
        <div className="box">
          <a className="social" href="https://www.instagram.com/" >
            <i className="fab fa-twitter"></i>
          </a>
          <a className="social" href="https://facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a className="social" href="https://youtube.com">
            <i className="fab fa-youtube"></i>
          </a>
          <a className="social" href="https://linkedin.com">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="social" href="https://instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
