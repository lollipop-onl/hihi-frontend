import { combineReducers } from 'redux';

import auth from './auth';
import dashboard from './dashboard';

const reducer = combineReducers({
  auth,
  dashboard
});

export default reducer;
