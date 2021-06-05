import React from 'react'
import { useLottie } from "lottie-react";
import {  notification } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

import Animation from "../../assets/annimation/10965-camin.json";

// Components
import Template from '../TemplateWrapper';
import Summarizer from '../../components/Modals/Summarizer';
// stylesheets
import './Profile.scss';


// Networking
import Server from '../../service/server';
import AudioToNotes from '../../components/Modals/AudioToNotes';


const LoadingAnimation = () => {
    const options = {
      animationData: Animation,
      loop: true,
      autoplay: true,
    };
    const { View } = useLottie(options);
    return View;
  };

type User = {
    name: string,
    email: string,
    avatar: string
}

export default function Profile(): JSX.Element  {
    const [user, setUser] = React.useState<User>();
    const [networkLoading, setNetworkLoading] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [openAudioModal, setAudioConvModal] = React.useState(false);
    // Fetch users
    const fetchUser = async () => {
        const response = await Server.getUser();
        if(response.status === 200){
            setUser({ 
                    name: response.data.data.fullName, 
                    email:  response.data.data.email, 
                    avatar: response.data.data.avatar
                })
        }else {
            notification.open({
                message: 'Error',
                description: response.data.message,
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });
        }
        setNetworkLoading(false);
    }
    React.useEffect(() => {
        fetchUser();
    },[]);

    const openSummarizeModal = (condition: boolean) => {
        setOpen(condition);
    }
    const openToNotesModal = (condition: boolean) => {
        setAudioConvModal(condition);
    }
    const setModalOpen = (condition: boolean, type: "summarize" | "convert-2-audio" | "split-video" | "questions") => {
        switch (type) {
            case 'summarize':
                openSummarizeModal(condition)
                break;
            case 'convert-2-audio':
                openToNotesModal(condition);
                break;
            case 'questions':
                openSummarizeModal(condition);
                break;
            default:
                break;
        }
    }
    const actionActOn = (action: string) => {
        switch (action) {
            case 'summarize':
                setModalOpen(true, 'summarize');
                break;
            case 'convert':
                setModalOpen(true, 'convert-2-audio')
                break;
            case 'questions':
                setModalOpen(true, 'questions');
                break;
            case 'split-video':
                setModalOpen(true, 'split-video');
                break;
            default:
                break;
        }
    }


    // Handle video upload
    if (networkLoading) {
        return (
            <div className="networkloading">
                <div className="animation">
                    <LoadingAnimation />
                </div>
            </div>
        )
    }

    return (
        <Template>
            <div className="profile-container">
                <div className="profile-avatar">
                    <div className="profile-card">
                        <img src={user?.avatar} alt={user?.name} className="avatar" />
                        <div className="details">
                            <div className="user-details">
                                <span className="icon">
                                    <UserOutlined size={20} />
                                </span>
                                <span>{user?.name}</span>
                            </div>
                            <div className="user-details">
                                <span className="icon">
                                    <MailOutlined size={20}/>
                                </span>
                                <span>{user?.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}
