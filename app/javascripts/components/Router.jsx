import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

/**
 * ルーティングを定義するクラス
 */
class AppRouter extends Component {
  constructor(props) {
    super(props);
    
    this.history = syncHistoryWithStore(createBrowserHistory(), props.store);
  }

  render () {
    return (
      <Router history={this.history}>
        <h1>hello!</h1>
      </Router>
    );
  }
}

AppRouter.propTypes = {
  store: PropTypes.any.isRequired
};

export default AppRouter;
