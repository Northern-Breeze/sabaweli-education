import * as React from "react";
import ReactGA from "react-ga";

const usePageTracking = (): void => {

  React.useEffect(() => {
    ReactGA.initialize("UA-000000000-0");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);
};

export default usePageTracking;