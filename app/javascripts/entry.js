import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
  process.env.NODE_ENV !== 'production' ? applyMiddleware(logger) : null
);

render(
  <Provider store={store}>
    <h1>Hello World</h1>
  </Provider>,
  document.getElementById('root')
);
