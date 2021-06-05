import { useLottie } from "lottie-react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
