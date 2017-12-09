import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

import LP from '../containers/LP';

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
        <Route path="/" component={LP} />
      </Router>
    );
  }
}

AppRouter.propTypes = {
  store: PropTypes.any.isRequired
};

export default AppRouter;
