import C from '../constants';

const initialState = {
  authenticated: null
};

const sign = (state = initialState, action) => {
  switch (action.type) {
    case C.UPDATE_AUTH_STATUS:
      return Object.assign({}, state, {
        authenticated: action.authenticated
      });
    case C.UPDATE_USER_PROFILE:
      return Object.assign({}, state, {
        profile: action.profile
      });
    default:
      return state;
  }
};

export default sign;
