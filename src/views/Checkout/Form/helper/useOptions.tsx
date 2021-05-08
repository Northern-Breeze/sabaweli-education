import { useMemo } from 'react';
import useResponsiveFontSize from './useResponsiveFonts';

const useOptions = (): any => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
      () => ({
        style: {
          base: {
            fontSize,
            color: "#424770",
            letterSpacing: "0.025em",
            fontFamily: "Source Code Pro, monospace",
            padding: '10px',
            "::placeholder": {
              color: "#000"
            }
          },
          invalid: {
            color: "#9e2146"
          }
        }
      }),
      [fontSize]
    );
  
    return options;
  };

  export default useOptions;