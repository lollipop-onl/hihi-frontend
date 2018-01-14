import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CustomGoogleLogout } from 'react-google-oauth';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  render () {
    const {
      authenticated,
      profile,
      pathname
    } = this.props;

    const menu = [
      {
        to: '/dashboard/home',
        title: 'Dashboard',
        icon: 'ion-android-home',
        isActive: /^\/dashboard\/home/.test(pathname)
      },
      {
        to: '/dashboard/separation',
        title: 'Separation',
        icon: 'ion-trash-b',
        isActive: /^\/dashboard\/separation/.test(pathname)
      },
      {
        to: '/dashboard/log',
        title: 'Log',
        icon: 'ion-stats-bars',
        isActive: /^\/dashboard\/log/.test(pathname)
      },
      {
        to: '/dashboard/schedule',
        title: 'Schedule',
        icon: 'ion-ios-calendar-outline',
        isActive: /^\/dashboard\/schedule/.test(pathname)
      },
      {
        to: '/dashboard/regist',
        title: 'Regist',
        icon: 'ion-edit',
        isActive: /^\/dashboard\/regist/.test(pathname)
      },
      {
        to: '/dashboard/help',
        title: 'Help',
        icon: 'ion-ios-book-outline',
        isActive: /^\/dashboard\/help/.test(pathname)
      }
    ];

    return (
      <aside className="dashboard--sidebar sidebar">
        {authenticated ? (
          <div>
            <div className="sidebar--profile">
              <div className="profile--avatar">
                {profile ? <img src={profile.imageUrl} alt="プロフィール画像"/> : null}
              </div>
              <div className="profile--name">
                {profile ? profile.name : 'loading'}
              </div>
              <div className="profile--logout">
                {profile ? (
                  <CustomGoogleLogout
                  tag="div"
                  >
                    <div className="logout--button">ログアウト</div>
                  </CustomGoogleLogout>
                ) : null}
              </div>
            </div>
            <div className="sidebar--nav">
              {menu.map((item, i) => {
                return (
                  <Link
                    key={`nav${i}`}
                    to={item.to}
                    className={`nav--item ${item.isActive ? 'nav--item__active' : ''}`}
                  >
                    <span className={`nav--icon ${item.icon}`} />
                    <span className="nav--title">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="sidebar--login">
            <p>
              {authenticated !== null ? 'ログインしてください' : 'ログイン状態を確認しています'}
            </p>
          </div>
        )}
      </aside>
    );
  }
}

Sidebar.propTypes = {
  authenticated: PropTypes.bool,
  profile: PropTypes.object,
  pathname: PropTypes.string
};

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
    profile: state.auth.profile
  };
}

export default connect(mapStateToProps, {
})(Sidebar);
