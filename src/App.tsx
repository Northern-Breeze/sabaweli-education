import * as React from 'react';
import Routes from './routes/Routes';
import { createStore, StoreProvider as Provider } from 'easy-peasy';
import Store from './store/index';
import 'antd/dist/antd.css';

const store = createStore(Store);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
