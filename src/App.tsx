import React from 'react';
import Routes from './routes/Routes';
import { createStore, StoreProvider as Provider } from 'easy-peasy';
import Store from './store/index';

const store = createStore(Store);

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
