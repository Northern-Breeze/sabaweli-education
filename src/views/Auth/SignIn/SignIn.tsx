import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {  notification } from 'antd';

import './SignIn.scss';

// Services
import Server from '../../../service/server';

interface Account {
    email: string,
    password: string,
    success: boolean
    data: any
}

export default function SignIn() {
    const { handleSubmit, register, errors } = useForm<Account>()
    const [loading ,setLoading] = React.useState(false);

    const history = useHistory();
    React.useEffect(() => {
        const location = window.location.href.split('?');
        if(location){
            const value = location[1]
            if (value) {
                const token = value.split('=')[1]
                if(token){
                    Server.validateToken({
                        token
                    }).then(response => {
                        if(response.status === 200){
                            notification.open({
                                message: 'Success',
                                description: response.data.message,
                                onClick: () => {
                                  console.log('Notification Clicked!');
                                },
                              });
                        } else {
                            notification.open({
                                message: 'Error',
                                description: response.data.message,
                                onClick: () => {
                                  console.log('Notification Clicked!');
                                },
                              });
                        }
                    }).catch(error => {
                        console.log(error);
                        notification.open({
                            message: 'Crash',
                            description: 'Something went wrong please try again later',
                            onClick: () => {
                              console.log('Notification Clicked!');
                            },
                          });
                    })
                }
            }
        }
    }, [])
    const onSubmit = async (value: Account) => {
        try {
            setLoading(true);
            const { email, password } = value;

            const response = await Server.loginUser({
                email: email,
                password: password,
            });
            const data = await response.data;
            if(response.status === 200){
                if(data.success){
                    notification.open({
                        message: 'Success',
                        description: data.message,
                        onClick: () => {
                          console.log('Notification Clicked!');
                        },
                      });
                    const token = data.token;
                    localStorage.setItem('token', token);
                    setLoading(false);
                    history.push('/profile');
                }else{
                    setLoading(false);
                    notification.open({
                        message: 'Something happened',
                        description: data.message,
                        onClick: () => {
                          console.log('Notification Clicked!');
                        },
                      });
                }
            }else if (response.status === 400) {
                setLoading(false);
                notification.open({
                    message: 'Something is wrong',
                    description: data.message,
                    onClick: () => {
                      console.log('Notification Clicked!');
                    },
                  });
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
            notification.open({
                message: 'Error occurred',
                description: 'Please try again',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });
        }
    };
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="field">
                            <label className="label">Email</label>
                            <input 
                                className="input" 
                                type="text" 
                                name="email"
                                placeholder="Enter Email" 
                                ref={register({ required: true })}
                                />
                            {
                               errors.email ? (
                                   <span>
                                       {errors.email.message}
                                   </span>
                               ) : (<span></span>)
                            }
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <input 
                                className="input" 
                                type="password" 
                                name="password"
                                placeholder="Enter Password" 
                                ref={register({  required: true})}
                                />
                            {
                                errors.password ? (
                                    <span>
                                        {errors.password.message}
                                    </span>
                                ) : (<span></span>)
                            }
                        </div>
                        <div className="field">
                            <button 
                                className="button"
                                disabled={loading}
                                type="submit"
                                >
                                {loading ? 'Submiting': 'Sign In'}
                            </button>
                        </div>
                        <div className="footer-items">
                            <span>Not yet have an account? <span><Link to="/register" className="link">Register</Link></span></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
