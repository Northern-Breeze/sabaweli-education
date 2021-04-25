import * as React from "react";
import { useHistory } from "react-router-dom";
import Template from "../../Template";
import Button from "../../../components/Button";

import Feature from "../../../components/Feature";

import "./Landing.scss";

export default function Landing(): JSX.Element {
  const history = useHistory();
  return (
    <Template>
      <main className="main-content">
        <div className="hero-image">
          <div className="call-to-action">
            <p className="header-description">
              <span className="title">SleepyBears</span> is a platform for
              students to get the most out of their studies with tools for
              productivity
            </p>
            <Button className="primary">Explore</Button>
          </div>
        </div>
        <div className="features">
            <div className="header-container">
              <header className="header">Features</header>
            </div>
            <div className="features-container columns">
              <Feature
                header="Audio to Notes"
                image="https://picsum.photos/id/1/200/300"
                content="Convert lecture audio to notes with a click of a button, you can also upload videos in mp4 format and the platform will convert to audio then to notes"
              />
              <Feature
                header="Summarize Lecture Notes"
                image="https://picsum.photos/id/1048/200/300"
                content="Summarize lecture notes to small and easy to read format to optimize your studies. you can also create word cloud for repeated phrases"
              />
              <Feature
                header="Question and Answer helper"
                image="https://picsum.photos/id/1014/200/300"
                content="Generate answers to questions by entering a passage/text from the notes.The generated answer will range from with different confidence"
              />
            </div>
        </div>
        <div className="name-component">
          <div className="explore-text">
            Explore Now!
          </div>
        </div>
        <div className="section-last">
          <div className="show-image">
          </div>
          <div className="show-text">
            <div className="sub-hero-text">
              Find out how you can maximize your studies and gain more time doing what you like
            </div>
            <Button className="secondary">
              Explore Now!
            </Button>
          </div>
        </div>
        <div className="contact">
            <div className="get-in-contact">
              <div className="get-in-contact-text">
                Get In Contact
              </div>
            </div>
            <div className="details">
              <div className="contact-us">
                Contact Us
              </div>
              <div className="form-container">
                  <form>
                    <div className="field">
                      <label>Name</label>
                      <input className="input" name="name" />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input className="input" type="email" name="email" />
                    </div>
                    <div className="field">
                      <label>Message</label>
                      <textarea className="textarea"></textarea>
                    </div>
                    <div className="field">
                      <Button className="secondary">
                        Submit
                      </Button>
                    </div>
                  </form>
              </div>
            </div>
        </div>
      </main>
    </Template>
  );
}
