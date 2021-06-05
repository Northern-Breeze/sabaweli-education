import React from 'react'
import { useLottie } from "lottie-react";
import {  notification } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

import Animation from "../../assets/annimation/10965-camin.json";

// Components
import Template from '../TemplateWrapper';
// stylesheets
import './Profile.scss';


// Networking
import Server from '../../service/server';


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
