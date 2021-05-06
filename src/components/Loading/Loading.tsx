import * as React from "react";
import { useLottie } from "lottie-react";
import './Loading.scss';

const LoadingAnimation = () => {
    const options = {
      animationData: Animation,
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
