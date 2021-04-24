import * as React from 'react'
import { Modal, notification } from 'antd';
import { useHistory } from 'react-router-dom';

type Props = {
    openAudioModal: boolean,
    setNetworkLoading(param: boolean): void,
    setAudioConvModal(openAudioModal: boolean): void,
}


import Server from '../../../service/server';

export default function AudioToNotes(props: Props): JSX.Element {
    const { openAudioModal, setAudioConvModal, setNetworkLoading } = props;
    const [file, setFile] = React.useState<File>()

    const history = useHistory();

    const handleCancel = () => {
        setAudioConvModal(false);
    }
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if(!fileList) return;
        setFile(fileList[0])
    }
    const handleSubmit = async (event: React.FormEvent) => {
        try {
            event.preventDefault();
            if(file){           
                const formData = new FormData();
                formData.append(
                    'file',
                    file,
                    file.name
                )
                const response = await Server.audioToText({
                    formData
                });
                if (response.status === 200) {
                    notification.open({
                        message: 'Success',
                        description: response.data.message,
                        onClick: () => {
                            console.log('Notification Clicked!');
                        },
                        });
                        setAudioConvModal(false);
                        setNetworkLoading(false);
                        history.push('/results?results=audio-to-text', { data: response.data.data });
                } else {
                    notification.open({
                        message: 'Error',
                        description: response.data.message,
                        onClick: () => {
                            console.log('Notification Clicked!');
                        },
                        });
                    setNetworkLoading(false);
                }
            }
        } catch (error) {
            console.log(error);
            notification.open({
                type: 'error',
                message: 'Something went wrong'
            })
        }
    }
  return (
      <Modal 
          visible={openAudioModal}
          onCancel={handleCancel}
          wrapClassName="bears-modal"
          footer={null}
      >
      <div className="modal-content">
          <form 
              className="form"
              onSubmit={handleSubmit}
              >
              <div className="field">
                  <input 
                      type="file" 
                      name="audio-file" 
                      className="upload" 
                      onChange={handleFileChange}
                      />
              </div>
              <div className="field">
                  <button className="button" type="submit">Make Notes</button>
              </div>
          </form>
      </div>
  </Modal>
  )
}
