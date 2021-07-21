import * as React from "react";
import { UploadOutlined } from "@ant-design/icons";
import WaveSurfer from "wavesurfer.js";

// components
import TemplateWrapper from "../../TemplateWrapper";
import Loading from "../../../components/Loading";
import Button from "../../../components/Button";

import "./Audio2Notes.scss";

export default function Audio2Notes(): JSX.Element {
  const [networkLoading, setNetworkLoading] = React.useState(false);
  const [file, setFile] = React.useState<File>();

  const wavesurfer = React.useRef<WaveSurfer>();

  function readFile(event: any) {      
      const results = event.target.result;
      const audio = new Audio();
      audio.src = URL.createObjectURL(results);
      if(wavesurfer.current){
        // wavesurfer.current.load(audio);
        wavesurfer.current.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
      }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;
    const mediaFile = fileList[0]
    setFile(mediaFile); 
    const reader = new FileReader();
    reader.addEventListener('load', readFile);
  };

  React.useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: "#waveform",
      waveColor: "#f9627dff",
      progressColor: "purple",
      barWidth: 2,
    })    
  },[])

  if (networkLoading) {
    <TemplateWrapper>
      <div className='converter-container'>
        <Loading />
      </div>
    </TemplateWrapper>;
  }

  return (
    <TemplateWrapper>
      <div className='wave-canvas'>
        <div id='waveform'></div>
      </div>
      <div className='converter-container'>
        <form className='form'>
          <div className='field'>
            <label className='custom-file-upload'>
              <input
                type='file'
                accept='.mp4,.mp4,.wav,.flac'
                name='file'
                className='file-input'
                onChange={handleFileChange}
              />
              <div className='icon-container'>
                <UploadOutlined />
              </div>
              Select File
            </label>
          </div>
          <div className='field'>
            <Button className='primary' type='button'>
              Upload Media
            </Button>
          </div>
        </form>
      </div>
    </TemplateWrapper>
  );
}
