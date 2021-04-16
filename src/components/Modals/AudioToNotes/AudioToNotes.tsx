import * as React from 'react'
import { notification, Modal } from 'antd';

type Props = {
    openAudioModal: boolean,
    setAudioConvModal(openAudioModal: boolean): void,
}

export default function AudioToNotes(props: Props): JSX.Element {
 /**
     * Props
     */
  const { openAudioModal, setAudioConvModal } = props;

  const handleCancel = () => {
    setAudioConvModal(false);
  }
  const handleFileChange = (event: React.FormEvent) => {
      event.preventDefault();
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
              >
              <div className="field">
                  <input 
                      type="file" 
                      name="video" 
                      className="upload" 
                      onChange={handleFileChange}
                      />
              </div>
              <div className="field">
                  <button className="button">Make Notes</button>
              </div>
          </form>
      </div>
  </Modal>
  )
}
