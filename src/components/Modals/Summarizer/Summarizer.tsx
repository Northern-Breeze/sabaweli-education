import * as React from 'react'
import {  notification, Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import Server from '../../../service/server';
import { useForm } from "react-hook-form";

import './Summarizer.scss';

type Props = {
    open: boolean;
    setOpen(open: boolean): void;
    setNetworkLoading(networkloading: boolean): void;
}

type Inputs = {
    title: string,
    fullText: string,
  };

export default function Summarizer(props: Props): JSX.Element  {
    /**
     *  Props
     */
    const { open, setOpen, setNetworkLoading } = props;

    // Hooks init
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const handleCancel = () => {
        setOpen(false);
    }
    // Handle submit
    const onSubmit = async(data: Inputs) => {
        try {
            const { title, fullText } = data;
            setNetworkLoading(true)
            const response = await Server.summarizeNote({
                title,
                fullText
            });
            if(response.status === 200){
                notification.open({
                    message: 'Success',
                    description: response.data.message,
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                    });
                    setOpen(false);
                    setNetworkLoading(false);
                    history.push('/results?results=text-summary', { data: response.data.data });
            }else{
                notification.open({
                    message: 'Error',
                    description: response.data.message,
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                    });
                setNetworkLoading(false);
            }
        } catch (error) {
            console.log(error);
            notification.open({
                message: 'Crash',
                description: 'something happened, please try agin later',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                });
                setNetworkLoading(false);
        }
    }
    return (
        <Modal 
            visible={open}
            onCancel={handleCancel}
            footer={null}
            wrapClassName="bears-modal"
        >
            <div className="modal-content">
                    <form 
                        className="form" 
                        onSubmit={handleSubmit(onSubmit)}
                        >
                        <div className="field">
                            <input 
                                placeholder="Title"
                                name="title"
                                className="input"
                                ref={register({ required: true })}
                            />
                            {errors.title && <span className="form-helper">This field is required</span>}
                        </div>
                        <div className="field">
                            <textarea 
                                placeholder="Enter Text"
                                name="fullText"
                                className="textarea"
                                ref={register({ required: true })}

                            />
                            {errors.fullText && <span className="form-helper">This field is required</span>}
                        </div>
                        <div className="field">
                            <button className="button">Summarize</button>
                        </div>
                    </form>
                </div>
        </Modal>
    )
}
