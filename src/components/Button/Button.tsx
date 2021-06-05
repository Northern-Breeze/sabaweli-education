import * as React from "react";
import { motion } from "framer-motion";

import "./Button.scss";

type Animation = {
  scaleUp?: boolean;
  hoverBorder?: boolean;
};

type Props = {
  onClick(): void;
  children: React.ReactChild;
  className: "primary" | "secondary" | "default";
  animation: Animation;
  disabled: boolean;
  type: 'submit' | 'reset' | 'button'
};

export default function Button(props: Props): JSX.Element {
  const { children, onClick, className, animation, disabled, type } = props;
  const [scale, setScale] = React.useState(1.0);

  const isRendered = React.useRef(false);

  React.useEffect(() => {
    isRendered.current = true;
    if (isRendered) {
      setTimeout(() => {
        setScale((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      isRendered.current = false;
    };
  }, []);

  return (
    <motion.button
      onClick={onClick}
      className={`button ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      disabled={disabled}
      type={type}
      animate={{
        scale: animation.scaleUp ? scale : 1,
      }}
    >
      {children}
    </motion.button>
  );
}

Button.defaultProps = {
  type: "button",
  className: "",
  disabled: false,
  onClick: () => {
    return;
  },
  animation: { scalerUp: false },
};
