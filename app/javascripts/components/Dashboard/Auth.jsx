import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Auth extends Component {
  render() {
    const {
      authenticated
    } = this.props;

    return (
      authenticated ? (
        <div>
          {this.props.children}
        </div>
      ) : (
        <Redirect to="/dashboard/login" />
      )
    );
  }
}

Auth.propTypes = {
  children: PropTypes.node,
  authenticated: PropTypes.bool
};

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, {
})(Auth);
