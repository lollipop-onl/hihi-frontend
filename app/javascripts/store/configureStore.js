import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers/index';

export default function configureStore () {
  let store = null;
  if (process.env.NODE_ENV === 'production') {
    // 本番
    store = createStore(
      rootReducer,
      compose(
        applyMiddleware(thunkMiddleware)
      )
    );
  } else {
    // 開発
    store = createStore(
      rootReducer,
      compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware)
      )
    );
  }

  return store;
}
