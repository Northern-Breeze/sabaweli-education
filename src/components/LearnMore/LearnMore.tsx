import { useLottie } from "lottie-react";
import animation from "../../assets/annimation/learn-more.json";
 
const LearnMore = (): JSX.Element => {
  const options = {
    animationData: animation,
    loop: true,
    autoplay: true,
  };
 
  const { View } = useLottie(options);
 
  return View;
};
 
export default LearnMore;