import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import {types} from '../containers/Main/constants';

//#region REDUCERS
import main from '../containers/Main/reducer';
import session from '../containers/Main/sessionReducer';
//#endregion

const containersReducer = {
  session,
  containers: combineReducers({
    main,
  }),
};

const appReducer = combineReducers({
  ...containersReducer,
});

const createGlobalReducer = () => {
  return (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === types.USER_LOGGED_OUT) {
      state = undefined;

      AsyncStorage.removeItem('persist:appstate')
        .then((res) => {
          console.log('Persisted Store CLEARED!');
        })
        .catch((e) => {
          console.error(
            `Error ocurrs when trying to clear persisted Store. details: ${e}`
          );
        });
    }

    return appReducer(state, action);
  };
};

export default createGlobalReducer;
