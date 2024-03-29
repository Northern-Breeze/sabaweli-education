import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../../components/Button";
import Template from "../../Template";

import "./Features.scss";

import Summary from "./Summarize/Summarize";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Features(): JSX.Element {
  const navigate = useNavigate();
  const query = useQuery();
  if (query.get("name") === "notes-summarizer") {
    return (
      <Template>
        <Summary />
      </Template>
    );
  }
  if (query.get("name") === "audio-to-text") {
    return (
      <Template>
        <Summary />
      </Template>
    );
  }
  if (query.get("name") === "question-generator") {
    return (
      <Template>
        <Summary />
      </Template>
    );
  }
  if (query.get("name") === "long-video-breaker") {
    return (
      <Template>
        <Summary />
      </Template>
    );
  }
  return (
    <Template>
      <div className='website-features'>
        <div className='features'>
          <div className='columns'>
            <div className='column feature'>
              <header className='header'>Study Coach</header>
              <p className='description'>
                Study Coach is a feature od Sabaweli Education where you can
                track and keep a constance pattern of your studies. There is
                also analytics to show progress
              </p>
              <Button
                className='primary'
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Start Now
              </Button>
            </div>
            <div className='column feature'>
              <header className='header'>Video/Audio to Text</header>
              <p className='description'>
                You can upload an audio upload an audio file of you notes and
                the system will generate note from the audio, you can share or
                download the text file
              </p>
              <Button
                className='primary'
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Sart Now
              </Button>
            </div>
            <div className='column feature'>
              <header className='header'>Question generator</header>
              <p className='description'>
                You can upload notes to the system, ask it questions and it will
                generate questions for you as a reverse question answer study
                method.
              </p>
              <Button
                className='primary'
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Start Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
