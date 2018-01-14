import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleAPI, googleGetBasicProfil } from 'react-google-oauth';
import Loader from 'react-loaders';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import {
  updateAuthStatus,
  updateUserProfile
} from '../actions';
import C from '../constants';

import Sidebar from '../components/Dashboard/Sidebar';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.onUpdateAuthStatus = this.onUpdateAuthStatus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // 認証状態が前回と異なる場合はプロフィールを更新
    if (this.props.authenticated !== nextProps.authenticated) {
      const profile = googleGetBasicProfil();
      this.props.updateUserProfile(profile);
    }
  }

  /**
   * ログイン情報が更新されたら実行される関数
   * @param {boolean} status ログインしているか
   */
  onUpdateAuthStatus(status) {
    this.props.updateAuthStatus(status);
  }

  render() {
    const {
      authenticated,
      location
    } = this.props;

    return (
      <GoogleAPI
        clientId={C.OAUTH_CLIENT_ID}
        onUpdateSigninStatus={this.onUpdateAuthStatus}
      >
        <div className="dashboard">
          <Sidebar
            pathname={location.pathname}
          />
          <div className="dashboard--content">
            { authenticated !== null ? (
              <div>
                {this.props.children}
              </div>
            ) : (
              <div className="dashboard--loader">
                <Loader type="ball-scale-ripple-multiple" />
              </div>
            )}
          </div>
        </div>
      </GoogleAPI>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node,
  updateAuthStatus: PropTypes.func,
  authenticated: PropTypes.bool,
  updateUserProfile: PropTypes.func,
  location: ReactRouterPropTypes.location
};

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, {
  updateAuthStatus,
  updateUserProfile
})(Dashboard);
