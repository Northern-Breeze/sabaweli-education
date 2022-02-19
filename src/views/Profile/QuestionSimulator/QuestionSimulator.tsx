import * as React from "react";
import TemplateWrapper from "../../TemplateWrapper";
import * as qna from "@tensorflow-models/qna";

import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";

import Notification from "antd/es/notification";

// Styles
import "./QuestionSimulator.scss";

// Components
import FormatAnswers from "./AnswerFormatter/AnswerFormatter";

// Types
type Answer = {
    score: number;
    text: string;
}

export default function QuestionSimulator(): JSX.Element {
  // State
  const [answer, setAnswer] = React.useState<Answer[]>([]);
  const [model, setModel] = React.useState<qna.QuestionAndAnswer>();

  // Refs
  const passageRef = React.useRef<HTMLTextAreaElement>(null);
  const questionRef = React.useRef<HTMLInputElement>(null);

  const mounted = React.useRef(true);

  // load model
  const loadModel = async () => {
    const loadedModel = await qna.load();
    if (mounted.current) {
      setModel(loadedModel);
      Notification.open({
        message: "Model load, ready!",
        type: "info",
      });
    }
  };

  const answerQuestion = async () => {
    if (model !== null) {
      const passage = passageRef?.current?.value;
      const question = questionRef?.current?.value;
      if (model && question && passage) {
        const answers = await model.findAnswers(question, passage);
        setAnswer(answers);
        console.log(answer);
      }
    }
  };

  React.useEffect(() => {
    loadModel();
  }, []);

  React.useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <TemplateWrapper>
      <div className='qna-container'>
        <div className='model'>
          {model === null || model === undefined ? (
            <div className='loading'>Please be patient this will take time</div>
          ) : (
            <div className='info'>
              Enter Article or Passage
              <textarea ref={passageRef} className='textarea' rows={20} />
              Ask a Question
              <div className='field'>
                <input ref={questionRef} className='input' />
              </div>
              <div className='field'>
                <button className='button primary' onClick={answerQuestion}>
                  Get Answers
                </button>
              </div>
              <br />
              <FormatAnswers results={answer} />
            </div>
          )}
        </div>
      </div>
    </TemplateWrapper>
  );
}
