import * as React from "react";
import Routes from "./routes/Routes";
import { createStore, StoreProvider as Provider } from "easy-peasy";
import Store from "./store/index";
import {Helmet} from "react-helmet";
import "antd/dist/antd.css";

const store = createStore(Store);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sabaweli Education - Learning Encapsulated</title>
        <link rel="canonical" href="http://sabaweli.netlify.app" />
      </Helmet>
      <Routes />
    </Provider>
  );
}

export default App;
