import React from 'react'
import { useLottie } from "lottie-react";
import {  notification, Modal } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from 'react-router-dom';

// FFMPEG

import Animation from "../../assets/annimation/10965-camin.json";

// Components
import TextSummary from './TextSummary';
import Template from '../Template';

// stylesheets
import './Profile.scss';


// Networking
import Server from '../../service/server';
import VideoSplit from './VideoSplit';


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

type VideoFile = {
    name: string,
    size: number
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function Profile() {
    const [user, setUser] = React.useState<User>();
    const [textSummary, setTextSummary] = React.useState('')
    const [networkLoading, setNetworkLoading] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [openVideoModal, setOpenVideoModal] = React.useState(false)
    const [text, setText] = React.useState('');
    const [video, setVideo] = React.useState<File>();
    const [videoSRC, setVideoSRC] = React.useState('');
    const history = useHistory();
    const query = useQuery();

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
    const openVideoSplitModal = (condition: boolean) => {
        setOpenVideoModal(condition);
    }
    const setModalOpen = (condition: boolean, type: "summarize" | "convert-2-audio" | "split-video" | "questions") => {
        switch (type) {
            case 'summarize':
                openSummarizeModal(condition)
                break;
            case 'convert-2-audio':
                openSummarizeModal(condition);
                break;
            case 'split-video':
                openVideoSplitModal(condition);
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
    // Modal stuff
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };
    const handleFileChange = (event: any) => {
        setVideo(event.target.files[0]);
    }

    // Handle submit
    const handleSubmit = async(e: any) => {
        e.preventDefault();
        try {
            setNetworkLoading(true)
            const response = await Server.summarizeNote({
                text
            });
            if(response.status === 200){
                setTextSummary(response.data.data)
                notification.open({
                    message: 'Success',
                    description: response.data.message,
                    onClick: () => {
                      console.log('Notification Clicked!');
                    },
                  });
                    setOpen(false);
                    setNetworkLoading(false);
                    history.push('/profile?results=text-summary');
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
    // Handle video upload
    const handleSplitVideo = async (e: any) => {
        e.preventDefault();
        if(video){
            history.push('/profile?results=long-video-breaker')
        }
    }
    if (networkLoading) {
        return (
            <div className="networkloading">
                <div className="animation">
                    <LoadingAnimation />
                </div>
            </div>
        )
    }
    if (query.get('results') === 'text-summary') {
        return (
            <TextSummary textSummary={textSummary} />
        )
    }
    if (query.get('results') === 'audio-to-text') {
        return (
            <Template>
                {textSummary}
            </Template>
        )
    }
    if (query.get('results') === 'question-generator') {
        return (
            <Template>
                
            </Template>
        )
    }
    if (query.get('results') === 'long-video-breaker') {
        return (
            <VideoSplit file={video} />
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
                        <div className="actions-container">
                            <div className="actions">
                                <div className="action">
                                    <button className="button">
                                        Audio to Notes
                                    </button>
                                </div>
                                <div className="action">
                                    <button className="button">
                                        Generate Question
                                    </button>
                                </div>
                            </div>
                            <div className="actions">
                            <div className="action">
                                <button 
                                    className="button"
                                    onClick={() => {
                                        actionActOn('split-video')
                                    }}
                                >
                                    Video slice
                                </button>
                            </div>
                            <div className="action">
                                <button
                                    onClick={() => {
                                        actionActOn('summarize')
                                    }}
                                    className="button"
                                    >
                                    Notes Summarizer
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal 
                title="Notes Summarizer" 
                visible={open}
                onCancel={handleCancel}
                footer={null}
                >
                <div className="modal-content">
                    <form 
                        className="form" 
                        onSubmit={handleSubmit}
                        >
                        <div className="field">
                            <textarea 
                                placeholder="Enter Text" 
                                className="textarea"
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <button className="button">Summarize</button>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal 
                title="Split Large lecture videos" 
                visible={openVideoModal}
                onCancel={handleCancel}
                footer={null}
                >
                <div className="modal-content">
                    <form 
                        className="form" 
                        onSubmit={handleSplitVideo}
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
        </Template>
    )
}
