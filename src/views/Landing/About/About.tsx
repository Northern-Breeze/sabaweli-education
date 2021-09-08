import * as React from "react";
import { useHistory } from "react-router-dom";
import Template from "../../Template";
import Button from "../../../components/Button";

import "./About.scss";

export default function About(): JSX.Element {
  const history = useHistory();

  const goTo = (where: string) => {
    history.push(where);
  };

  return (
    <Template>
      <div className='about-container'>
        <div className='background'>
          <h1 className='header'>Sabaweli Education</h1>
          <p className='sub-text'>
            Is a platform for students to get the most out of their studies with
            tools for productivity.
            <br />
            With sabaweli education you can learn faster and become more
            productive with a rich feature set.
            <br />
            Sabaweli Education is not just a platform with learning tools,{" "}
            <br />
            we use data driven techniques to make sure you optimize your
            learning.
            <br />
            We believe learning should be fun and rewarding, acquiring knowledge
            should not be chore.
          </p>
          <div className='action-container'>
            <Button
              className='primary'
              onClick={() => {
                goTo("features");
              }}
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </Template>
  );
}
