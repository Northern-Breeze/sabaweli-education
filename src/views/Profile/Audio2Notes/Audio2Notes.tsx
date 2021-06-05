import React from "react";
import TemplateWrapper from "../../TemplateWrapper";
import AudioToNotes from "../../../components/Modals/AudioToNotes";
import Loading from "../../../components/Loading";
import Button from '../../../components/Button';

import './Audio2Notes.scss';

export default function Audio2Notes(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [networkLoading, setNetworkLoading] = React.useState(false);
  const setToggleModal = () => {
    setOpen(!open);
  };
  const setLoadingStatus = (value: boolean) => {
    setNetworkLoading(value);
  };
  if (networkLoading) {
    <TemplateWrapper>
      <div className="converter-container">
        <Loading />
      </div>
    </TemplateWrapper>;
  }
  return (
    <TemplateWrapper>
      <div className="converter-container">
        <Button onClick={setToggleModal} className="primary">Convert Audio 2 Notes</Button>
        <AudioToNotes
          openAudioModal={open}
          setAudioConvModal={setToggleModal}
          setNetworkLoading={setLoadingStatus}
        />
      </div>
    </TemplateWrapper>
  );
}
