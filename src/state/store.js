import {createStore, applyMiddleware, compose} from 'redux';
import {createMigrate, persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import createGlobalReducer from './global-reducer';

// Enable Redux devtools extensions in development environment:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());

  const rnAsyncStorageFlipper = require('rn-async-storage-flipper').default;
  rnAsyncStorageFlipper(AsyncStorage);
}

const migrations = {
  0: (previousVersionState) => {
    // migration clear out device state
    return {
      ...previousVersionState,
      device: undefined,
    };
  },
  1: (previousVersionState) => {
    // migration to keep only device state
    return {
      device: previousVersionState.device,
    };
  },
};

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'appstate',
  migrate: createMigrate(migrations, {debug: false}),
  // Storage Method (React Native)
  storage: AsyncStorage,
  version: 1,
  // Whitelist (Save Specific Reducers)
  whitelist: ['session'],
};
const rootReducer = createGlobalReducer();

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

// Middleware: Redux Persist Persister
export const persistor = persistStore(store);
export default store;
