import * as React from "react";
import Notification from "antd/es/notification";
import Select from "antd/es/select";
import Modal from "antd/es/modal";

// functions
import Server from "../../../service/server";

// components
import TemplateWrapper from "../../TemplateWrapper";
import Button from "../../../components/Button";
const { Option } = Select;

// Stylesheets
import "./StudyCoach.scss";

type Session = {
  id: number;
  title: string;
};

type NotFoundProps = {
  createCallback(): void;
};

const NotFound = (props: NotFoundProps): JSX.Element => {
  const { createCallback } = props;
  return (
    <div className='create-session'>
      <Button className='primary' onClick={createCallback}>
        Create Session
      </Button>
    </div>
  );
};

export default function StudyCoach(): JSX.Element {
  const [timer, setTimer] = React.useState(0);
  const [sessions, setSessions] = React.useState<Session[]>([]);
  const [selected, setSelected] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [sessionName, setSessionName] = React.useState("");

  // refs
  const mounted = React.useRef(true);
  const counterRef = React.useRef<any>();

  const handleStart = () => {
    if (counterRef !== null) {
      counterRef.current = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
    }
  };
  const handleCreateSession = () => {
    setVisible(true);
  };
  const handleCancelModal = () => {
    setVisible(false);
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    try {
      event.preventDefault();
      const response = await Server.createSession({
        title: title,
      });
      if (response.status === 201) {
        if (response.data.success) {
          const session = response.data.data;
          setSessions(session);
          setVisible(false);
        } else {
          Notification.open({
            message: response.data.message,
            type: "error",
          });
        }
      } else {
        Notification.open({
          message: response.data.message,
          type: "error",
        });
      }
    } catch (error) {
      console.log(error);
      Notification.open({
        message: "Something went wrong trying to fetch sessions",
        type: "error",
      });
    }
  };
  const fetchSessions = async () => {
    try {
      const response = await Server.getSessions();
      if (response.status === 200) {
        if (response.data.success) {
          const session = response.data.data;
          setSessions(session);
        } else {
          Notification.open({
            message: response.data.message,
            type: "error",
          });
        }
      } else {
        Notification.open({
          message: response.data.message,
          type: "error",
        });
      }
    } catch (error) {
      console.log(error);
      Notification.open({
        message: "Something went wrong trying to fetch sessions",
        type: "error",
      });
    }
  };
  const handleSelectValue = (value: string) => {
    setSelected(true);
    setSessionName(value);
  };

  const handleStop = () => {
    clearInterval(counterRef.current);
    setTimer(0);
  };

  const toggleControl = () => {
    if (timer > 0) {
      handleStop();
    } else {
      handleStart();
    }
  };

  const formatTimer = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = Math.floor(timer / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return (
      <div className='counter-container'>
        {getHours}
        <span className='colons'>:</span>
        {getMinutes}
        <span className='colons'>:</span>
        {getSeconds}
      </div>
    );
  };

  React.useEffect(() => {
    fetchSessions();
  }, []);

  React.useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <TemplateWrapper>
      <div className='main-counter'>
        <div className='header'>
          <h1>Study Coach</h1>
          <p className='study-coach-text'>
            Study Coach is a feature of Sabaweli Education to help you study and
            maintain a consistent approach to studying. select a session or
            create a new session to track your study habits
          </p>
        </div>
        <div className='select-session'>
          <h3>Please select a session</h3>
          <div className='field'>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder='Search to Select'
              optionFilterProp='children'
              onChange={handleSelectValue}
              notFoundContent={
                <NotFound createCallback={handleCreateSession} />
              }
              filterOption={(input, option) =>
                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              {sessions.map((item, index) => {
                return (
                  <React.Fragment key={index.toString()}>
                    <Option value={item.id}>{item.title}</Option>
                  </React.Fragment>
                );
              })}
            </Select>
          </div>
        </div>
        {selected && (
          <div className='timer-container'>
            <div className='timer'>{formatTimer()}</div>
            <div className='timer-controls'>
              <Button
                type='button'
                onClick={toggleControl}
                className='secondary'
              >
                {timer > 0 ? "Stop" : "Start"}
              </Button>
            </div>
          </div>
        )}
      </div>
      <Modal visible={visible} footer={null} onCancel={handleCancelModal}>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label>Session name</label>
            <input
              name='name'
              className='input'
              placeholder='E.g Math'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='filed'>
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </Modal>
    </TemplateWrapper>
  );
}
