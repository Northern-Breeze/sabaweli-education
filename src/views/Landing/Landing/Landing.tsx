import * as React from "react";
import Template from "../../Template";
import Button from "../../../components/Button";
import Notification from "antd/es/notification";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Feature from "../../../components/Feature";
import Footer from "../../../components/Footer";
import HomeAnimation from "../../../components/HomeAnimation";
import LearnMore from "../../../components/LearnMore";

import "./Landing.scss";
import Server from "../../../service/server";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function Landing(): JSX.Element {
  const { handleSubmit, register, errors } = useForm<ContactForm>();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const goTo = (where: string) => {
    navigate(where);
  };

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
      <main className='main-content'>
        <div className='hero-image'>
          <div className='call-to-action'>
            <p className='header-description'>
              <span className='title'>Sabaweli Education</span> is a platform
              for students to get the most out of their studies with tools for
              productivity
            </p>
            <Button
              className='primary'
              onClick={() => {
                goTo("features");
              }}
            >
              Explore
            </Button>
          </div>
        </div>
        <div className='features'>
          <div className='header-container'>
            <header className='header'>Features</header>
          </div>
          <div className='features-container columns'>
            <Feature
              header='Audio to Notes'
              image='https://picsum.photos/id/1/200/300'
              content='Convert lecture audio to notes with a click of a button, you can also upload videos in mp4 format and the platform will convert to audio then to notes'
            />
            <Feature
              header='Study Coach'
              image='https://picsum.photos/id/1048/200/300'
              content='Study Coach is feature that allows you to track and keep a consistence study pattern of your schedule and alerts you if you are behind'
            />
            <Feature
              header='Question and Answer helper'
              image='https://picsum.photos/id/1014/200/300'
              content='Generate answers to questions by entering a passage/text from the notes.The generated answer will range from with different confidence'
            />
          </div>
        </div>
        <div className='name-component'>
          <div className='explore-text'>Explore Now!</div>
        </div>
        <div className='section-last'>
          <div className='show-image'>
            <LearnMore />
          </div>
          <div className='show-text'>
            <div className='sub-hero-text'>
              Find out how you can maximize your studies and gain more time
              doing what you like
            </div>
            <Button
              className='secondary'
              onClick={() => {
                goTo("features");
              }}
            >
              Explore Now!
            </Button>
          </div>
        </div>
        <div className='contact'>
          <div className='get-in-contact'>
            <div className='get-in-contact-text'>Get In Contact</div>
          </div>
          <div className='details'>
            <div className='contact-us'>
              <HomeAnimation />
            </div>
            <div className='form-container'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='field'>
                  <label>Name</label>
                  <input
                    className='input'
                    name='name'
                    ref={register({ required: true, maxLength: 20 })}
                  />
                  {errors.name ? (
                    <span>{errors.name.message}</span>
                  ) : (
                    <span></span>
                  )}
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
                  <Button
                    className='secondary'
                    type='submit'
                    disabled={loading}
                  >
                    {loading ? "Submitting ..." : "Submit"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </Template>
  );
}
