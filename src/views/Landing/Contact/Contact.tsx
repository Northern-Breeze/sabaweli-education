import * as React from "react";
import { useForm } from "react-hook-form";
import Notification from "antd/es/notification";

import Button from "../../../components/Button";
import Template from "../../Template";

import "./Contact.scss";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

import Server from "../../../service/server";

export default function Contact(): JSX.Element {
  const { handleSubmit, register, errors } = useForm<ContactForm>();
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (value: ContactForm) => {
    try {
      setLoading(true);
      const response = await Server.contactForm(value);
      if (response.status === 200) {
        setLoading(false);
        Notification.open({
          type: "success",
          message: response.data.message,
        });
      } else {
        setLoading(false);
        Notification.open({
          type: "error",
          message: response.data.message,
        });
      }
    } catch (error) {
      setLoading(false);
      Notification.open({
        type: "error",
        message: "Something went wrong please try again later",
      });
      console.log(error);
    }
  };
  return (
    <Template>
      <div className='contact-us-container'>
        <div className="content">
        <div className='background'></div>
        <div className='form-container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='field'>
              <label>Name</label>
              <input
                className='input'
                name='name'
                ref={register({ required: true, maxLength: 20 })}
              />
              {errors.name ? <span>{errors.name.message}</span> : <span></span>}
            </div>
            <div className='field'>
              <label>Email</label>
              <input
                className='input'
                type='email'
                name='email'
                ref={register({
                  required: true,
                  // eslint-disable-next no-useless-escape
                  pattern: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              {errors.email ? (
                <span>{errors.email.message}</span>
              ) : (
                <span></span>
              )}
            </div>
            <div className='field'>
              <label>Message</label>
              <textarea
                className='textarea'
                name='message'
                ref={register({ required: true })}
              ></textarea>
              {errors.email ? (
                <span>{errors.email.message}</span>
              ) : (
                <span></span>
              )}
            </div>
            <div className='field'>
              <Button className='secondary' type='submit' disabled={loading}>
                {loading ? "Submitting ..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
        </div>
    </Template>
  );
}
