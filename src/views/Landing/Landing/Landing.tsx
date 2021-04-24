import * as React from "react";
import Template from "../../Template";
import Button from '../../../components/Button';

import "./Landing.scss";

export default function Landing(): JSX.Element {

  return (
    <Template>
      <main className="main-content">
        <div className="hero-image">
          <div className="call-to-action">
            <p className="header-description">
              <span className="title">SleepyBears</span> is a platform for students to get the most out of
              their studies with tools for productivity
            </p>
                <Button className="primary">
                    Explore
                </Button>
          </div>
        </div>
      </main>
    </Template>
  );
}
