import * as React from "react";
import AppRoutes from "./routes/Routes";
import { createStore, StoreProvider as Provider } from "easy-peasy";
import Store from "./store/index";
import { Helmet } from "react-helmet";
import "antd/dist/antd.css";
import usePageTracking from "./hooks/usePageTracking";

const store = createStore(Store);

function App(): JSX.Element {
  usePageTracking();
  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Sabaweli Education - Learning Encapsulated</title>
        <link rel='canonical' href='http://sabaweli.xyz' />
      </Helmet>
      <AppRoutes />
    </Provider>
  );
}

export default App;
