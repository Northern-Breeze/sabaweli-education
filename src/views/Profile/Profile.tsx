import React from "react";
import { useHistory } from "react-router-dom";
import { useLottie } from "lottie-react";
import { notification } from "antd";
import {
  UserOutlined,
  MailOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import Skeleton from "antd/es/skeleton";

// Components
import Template from "../TemplateWrapper";
import Animation from "../../assets/annimation/10965-camin.json";
import Bargraph from "./StudyCoach/Bargraph";
import Linegraph from "./StudyCoach/Linegraph";
import PieChart from "./StudyCoach/PieChart/PieChart";

// stylesheets
import "./Profile.scss";

// Networking
import Server from "../../service/server";

const LoadingAnimation = () => {
  const options = {
    animationData: Animation,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

type Data = { id: number; duration: number; name: string; sessionId: number };


type User = {
  name: string;
  email: string;
  avatar: string;
  userPlan: number;
  data: Data[];
};

export default function Profile(): JSX.Element {
  const [user, setUser] = React.useState<User>();
  const [networkLoading, setNetworkLoading] = React.useState(false);
  const history = useHistory();

  // Fetch users
  const fetchUser = async () => {
    const response = await Server.getUser();
    if (response.status === 200) {
      setUser({
        name: response.data.data.fullName,
        email: response.data.data.email,
        avatar: response.data.data.avatar,
        userPlan: response.data.data.dataPlan,
        data: response.data.data.data,
      });
    } else {
      notification.open({
        message: "Error",
        description: response.data.message,
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    }
    setNetworkLoading(false);
  };
  React.useEffect(() => {
    fetchUser();
  }, []);

  const planFormatter = (plan: number) => {
    return (
      <button
        className='button primary'
        onClick={() => {
          history.push("/pricing");
        }}
      >
        Buy conversion {plan}
      </button>
    );
  };

  // Handle video upload
  if (networkLoading) {
    return (
      <div className='networkloading'>
        <div className='animation'>
          <LoadingAnimation />
        </div>
      </div>
    );
  }

  return (
    <Template>
      <div className='profile-container'>
        <div>
          <div className='profile-avatar'>
            <div className='profile-card'>
              <img src={user?.avatar} alt={user?.name} className='avatar' />
              <div className='details'>
                <div className='user-details'>
                  <span className='icon'>
                    <UserOutlined size={20} />
                  </span>
                  <span>{user?.name}</span>
                </div>
                <div className='user-details'>
                  <span className='icon'>
                    <MailOutlined size={20} />
                  </span>
                  <span>{user?.email}</span>
                </div>
                <div className='user-details'>
                  <span className='icon'>
                    <DatabaseOutlined size={20} />
                  </span>
                  <span>
                    {typeof user?.userPlan !== "undefined" &&
                    user?.userPlan <= 6
                      ? planFormatter(user.userPlan)
                      : `${user?.userPlan} mins`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='charts'>
          <div className='columns'>
            <div className='column'>
              {networkLoading && (
                <Skeleton.Avatar
                  className='loading-skeleton'
                  style={{ width: "25rem", height: "15rem" }}
                  shape='square'
                />
              )}
              {!networkLoading && <Bargraph loading={networkLoading} />}
            </div>
            <div className='column'>
              {networkLoading && (
                <Skeleton.Avatar
                  className='loading-skeleton'
                  style={{ width: "25rem", height: "15rem" }}
                  shape='square'
                />
              )}
              {!networkLoading && <Linegraph />}
            </div>
            <div className='column'>
              {networkLoading && (
                <Skeleton.Avatar
                  className='loading-skeleton'
                  style={{ width: "25rem", height: "15rem" }}
                  shape='square'
                />
              )}
              {!networkLoading && <PieChart data={user?.data} />}
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
