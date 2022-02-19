import * as React from "react";
import ReactGA from "react-ga";

const usePageTracking = (): void => {

  React.useEffect(() => {
    ReactGA.initialize("G-RKDEQ0N0F5");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);
};

export default usePageTracking;