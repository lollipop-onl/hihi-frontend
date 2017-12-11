import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

class Auth extends Component {
  render() {
    const {
      isLogin
    } = this.props;

    return (
      isLogin ? (
        <Route component={this.props.children} />
      ) : (
        <Redirect to="/dashboard/login" />
      )
    );
  }
}

Auth.propTypes = {
  children: PropTypes.node,
  isLogin: PropTypes.bool
};

export default Auth;
