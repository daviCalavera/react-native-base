import {types} from './constants';

const INITIAL_STATE = {
  authenticated: false,
  authToken: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.APP_USER_AUTHN:
      return {
        ...state,
        authenticated: true,
        authToken: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
