import * as React from 'react'
import {useNavigate} from 'react-router-dom';
import Notification from 'antd/es/notification';

import server from '../../../service/server';

export default function ChangePassword(): JSX.Element {
    const [loading, setLoading] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [token, setToken] = React.useState("");
    
    const navigate = useNavigate();
    const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
      try {
        event.preventDefault();
        setLoading(true);
        const response = await server.changePassword({token: token,  password: password });
        if (response.status === 200) {
          if (response.data.success) {
            Notification.open({
              message: response.data.message,
              type: "success",
            });
            navigate("/login");
          } else {
            setLoading(false);
            Notification.open({
              message: response.data.message,
              type: "error",
            });
          }
        } else {
          setLoading(false);
          Notification.open({
            message: "Error sending password reset email",
            type: "error",
          });
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        Notification.open({
          message: "Something went wrong please try again later",
          type: "error",
        });
      }
    };
    React.useEffect(() => {
        const location = window.location.href.split("?");
        if (location) {
          const value = location[1];
          if (value) {
            const token = value.split("=")[1];
            if (token) {
                setToken(token);
            }
          }
        }
      }, []);
    return (
      <div className='request-change-password'>
        <div className='display-container'>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <div className='field'>
                Please enter a new password.
              </div>
              <div className='field'>
                <input
                  name='password'
                  type='password'
                  className='input'
                  placeholder='Enter New Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='field'>
                <button className='button' disabled={loading} type='submit'>
                  {loading ? "Submitting" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
