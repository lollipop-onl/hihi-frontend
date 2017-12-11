import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import LP from '../containers/LP';
import Auth from './Admin/Auth';
import Login from './Admin/Login';

/**
 * ルーティングを定義するクラス
 */
class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LP} />
          <Route path="/dashboard/login" component={Login} />
          <Auth>
            <Switch>
              <Route path="/dashboard/home">
                <h1>Home!</h1>
              </Route>
            </Switch>
          </Auth>
        </Switch>
      </BrowserRouter>
    );
  }
}

AppRouter.propTypes = {
  store: PropTypes.any.isRequired
};

export default AppRouter;
