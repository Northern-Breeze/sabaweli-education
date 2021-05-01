import { useLottie } from "lottie-react";
import animation from "../../assets/annimation/home-animation.json";

const HomeAnimation = (): JSX.Element => {
  const options = {
    animationData: animation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default HomeAnimation;
