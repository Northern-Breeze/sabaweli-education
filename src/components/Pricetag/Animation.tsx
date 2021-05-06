import * as React from 'react'
import { useLottie } from "lottie-react";

import animation from '../../assets/annimation/price-tag.json';

const Animation = (): JSX.Element => {
    const options = {
      animationData: animation,
      loop: true,
      autoplay: true,
    };
    const { View } = useLottie(options);
    return View;
  };

  export default Animation;
