import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { CustomGoogleLogin } from 'react-google-oauth';
import Loader from 'react-loaders';
import PropTypes from 'prop-types';
import {
  updateAuthStatus
} from '../../actions';

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isRequest: false
    }

    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.onRequest = this.onRequest.bind(this);
  }

  /**
   * 認証に成功したら認証ステータスを更新
   */
  onSuccess () {
    this.props.updateAuthStatus(true);
  }

  /**
   * 認証が失敗/キャンセルされたら実行する関数
   */
  onFailure () {
    this.setState({
      isRequest: false
    });
  }

  /**
   * 認証を開始したら実行する関数
   */
  onRequest () {
    this.setState({
      isRequest: true
    });
  }

  render() {
    const {
      authenticated,
    } = this.props;

    return !authenticated ? (
      <div className="login">
        <h1>ログイン</h1>
        <p>管理画面へアクセスするためには<br/>Googleアカウントでログインする必要があります</p>
        {this.state.isRequest ? (
          <div className="login--button login--button__active">
            <div className="login--loader">
              <Loader
              type="line-scale"
              />
            </div>
          </div>
        ) : (
          <CustomGoogleLogin
            tag="div"
            onLoginSuccess={this.onSuccess}
            onLoginFailure={this.onFailure}
            onRequest={this.onRequest}
          >
            <div className="login--button">
              <span className="login--icon ion-social-googleplus" />
              ログイン
            </div>
          </CustomGoogleLogin>
        )}
      </div>
    ) : (
      <Redirect to="/dashboard/home" />
    );
  }
}

Login.propTypes = {
  authenticated: PropTypes.bool,
  updateAuthStatus: PropTypes.func
};

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, {
  updateAuthStatus
})(Login);
