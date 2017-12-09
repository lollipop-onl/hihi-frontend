import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';
import Root from './containers/Root';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
  process.env.NODE_ENV !== 'production' ? applyMiddleware(logger) : null
);

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
