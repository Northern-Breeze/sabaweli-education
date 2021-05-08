import { useLottie } from "lottie-react";

interface Props {
  fileObject: any;
}

const Animation = (props: Props): JSX.Element => {
  const { fileObject } = props;
  const options = {
    animationData: fileObject,
    loop: true, 
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Animation;
