import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../../../components/Button";
import Template from "../../Template";

import "./Features.scss";

import Summary from "./Summarize/Summarize";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Features(): JSX.Element {
  const history = useHistory();
  const query = useQuery();
  const readMore = (value: string) => {
    switch (value) {
      case "notes-summarizer": {
        const toValue = value;
        history.push(`/features?name=${toValue}`);
        break;
      }
      case "audio-to-text": {
        const toValue = value;
        history.push(`/features?name=${toValue}`);
        break;
      }
      case "question-generator": {
        const toValue = value;
        history.push(`/features?name=${toValue}`);
        break;
      }
      case "long-video-breaker": {
        const toValue = value;
        history.push(`/features?name=${toValue}`);
        break;
      }
      default:
        break;
    }
  };

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
      <div className="website-features">
        <div className="features">
          <div className="columns">
            <div className="column feature">
              <header className="header">Summarize Notes</header>
              <p className="description">
                Using Sabaweli Education Notes Summarizer, you can copy and
                paste or upload lecture notes or news article for easier
                learning and reading.
              </p>
              <Button
                className="primary"
                onClick={() => {
                  readMore("audio-to-tex");
                }}
              >
                Start Now
              </Button>
            </div>
            <div className="column feature">
              <header className="header">Audio to Text</header>
              <p className="description">
                You can upload an audio upload an audio file of you notes and
                the system will generate note from the audio, you can share or
                download the text file
              </p>
              <Button
                className="primary"
                onClick={() => {
                  readMore("audio-to-tex");
                }}
              >
                Sart Now
              </Button>
            </div>
            <div className="column feature">
              <header className="header">Question generator</header>
              <p className="description">
                You can upload notes to the system, ask it questions and it will
                generate questions for you as a reverse question answer study
                method.
              </p>
              <Button
                className="primary"
                onClick={() => {
                  readMore("audio-to-tex");
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
