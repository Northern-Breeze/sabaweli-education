import * as React from "react";
import { useLottie } from "lottie-react";
import './Loading.scss';

import animation from '../../assets/annimation/10965-camin.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LoadingAnimation = (): React.ReactElement => {
  const options = {
    animationData: animation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
  };

export default function Loading(): JSX.Element {
  return (
    <div className="networkloading">
      <div className="animation">
        <LoadingAnimation />
      </div>
    </div>
  );
}
