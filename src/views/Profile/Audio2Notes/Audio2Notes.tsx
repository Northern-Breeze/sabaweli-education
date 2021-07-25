import * as React from "react";
import { UploadOutlined } from "@ant-design/icons";
import Notification from "antd/es/notification";
import { useHistory } from 'react-router-dom';

// components
import TemplateWrapper from "../../TemplateWrapper";
import Loading from "../../../components/Loading";
import Button from "../../../components/Button";

import server from "../../../service/server";

import "./Audio2Notes.scss";

export default function Audio2Notes(): JSX.Element {
  const [networkLoading, setNetworkLoading] = React.useState(false);
  const [file, setFile] = React.useState<File>();

  const history = useHistory();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;
    const mediaFile = fileList[0];
    setFile(mediaFile);
  };
  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", file.name);
        const response = await server.audioToText(formData);
        if (response.status === 200) {
          Notification.open({
            message: "Success",
            description: response.data.message,
            onClick: () => {
              console.log("Notification Clicked!");
            },
          });
          setNetworkLoading(false);
          history.push("/results?results=audio-to-text", {
            data: response.data.data,
          });
        } else {
          Notification.open({
            message: "Error",
            description: response.data.message,
            onClick: () => {
              console.log("Notification Clicked!");
            },
          });
          setNetworkLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      Notification.open({
        type: "error",
        message: "Something went wrong",
      });
    }
  };

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
        <form className='form' onSubmit={handleSubmit}>
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
              {file ? 'File Selected': 'Select File'}
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
