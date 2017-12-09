import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import main from './main';

const reducer = combineReducers({
  main,
  routing
});

export default reducer;
