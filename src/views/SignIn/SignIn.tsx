import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './SignIn.scss';

// Services
import Server from '../../service/server';
import Alert from '../../components/Alert';

interface Account {
    email: string,
    password: string,
    success: boolean
    data: any
}

interface ErrorState {
    error: boolean,
    message: string
}

export default function SignIn() {
    const { handleSubmit, register, errors } = useForm<Account>()
    const [loading ,setLoading] = React.useState(false);
    const [erroState, setErrorState]  = React.useState<ErrorState>();

    const history = useHistory();

    const onSubmit = async (value: Account) => {
        try {
            setLoading(true);
            const { email, password } = value;
            const response = await axios.post('http://localhost:5000/v1/login',{
                email: email,
                password: password,
            });
            const data = await response.data;
            if(response.status === 200 || response.status === 201){
                if(data.success){
                    setErrorState({ error: false, message: data.message});
                    const token = data.token;
                    localStorage.setItem('token', token);
                    setLoading(false);
                    history.push('/');
                }else{
                    setLoading(false);
                    setErrorState({ error: true, message: data.message});
                }
            }else if (response.status === 200) {
                setLoading(false);
                setErrorState({ error: true, message: data.message});
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
            setErrorState({ error: true, message: 'something went wrong please try again'});
        }
    };
    return (
        <div className="login-page">
            <Alert erroState={erroState} />
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
