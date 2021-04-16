import * as React from 'react';
import { notification, Modal } from 'antd';

import './VideoSlice.scss';

type Props = {
    openVideoModal: boolean;
    setOpenVideoModal(openVideoModal: boolean): void;
}

export default function VideoSlier(props: Props): JSX.Element {
    /**
     * Props
     */
    const { openVideoModal, setOpenVideoModal } = props;

    const handleCancel = () => {
        setOpenVideoModal(false);
    }
    const handleFileChange = (event: React.FormEvent) => {
        event.preventDefault();
    }
    return (
        <Modal 
            visible={openVideoModal}
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
                    <button className="button">Split Video</button>
                </div>
            </form>
        </div>
    </Modal>
    )
}
