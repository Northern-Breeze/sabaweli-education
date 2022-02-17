import * as React from "react";
import Notification from "antd/es/notification";
import { useNavigate } from "react-router-dom";

import "./ForgotPasswordRequest.scss";

import server from "../../../service/server";

export default function ForgotPasswordRequest(): JSX.Element {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
    try {
      event.preventDefault();
      setLoading(true);
      const response = await server.requestChangePassword({ email: email });
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
  return (
    <div className='request-change-password'>
      <div className='display-container'>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <div className='field'>
              Please provide us with you email address. to change your password.
            </div>
            <div className='field'>
              <input
                name='email'
                type='email'
                className='input'
                placeholder='Enter email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
