import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import ErrorBoundary from './containers/ErrorBoundary';
import Main from './containers/Main';

import store, {persistor} from './state/store';

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);

export default App;
