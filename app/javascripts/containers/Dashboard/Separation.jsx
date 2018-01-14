import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import {
  fetchSeparationData
} from '../../actions';

import PageHeader from '../../components/Dashboard/Common/PageHeader';
import PageHeaderTab from '../../components/Dashboard/Common/PageHeaderTab';
import PageHeaderTabItem from '../../components/Dashboard/Common/PageHeaderTabItem';

class Separation extends Component {
  componentDidMount () {
    this.props.fetchSeparationData();
  }

  render () {
    const {
      location,
      children
    } = this.props;

    return (
      <div className="separation">
        <PageHeader
          title="Separation"
          description="ごみと分別方法を登録・一覧表示"
        >
          <PageHeaderTab>
            <PageHeaderTabItem
              title="ごみデータ一覧"
              to="/dashboard/separation/list/trush"
              active={location.pathname === '/dashboard/separation/list/trush'}
            />
            <PageHeaderTabItem
              title="分別方法データ一覧"
              to="/dashboard/separation/list/separation"
              active={location.pathname === '/dashboard/separation/list/separation'}
            />
            <PageHeaderTabItem
              title="抽象データ一覧"
              to="/dashboard/separation/list/abstract"
              active={location.pathname === '/dashboard/separation/list/abstract'}
            />
            <PageHeaderTabItem
              title="データを登録"
              to="/dashboard/separation/regist"
              active={location.pathname === '/dashboard/separation/regist'}
            />
          </PageHeaderTab>
        </PageHeader>
        {children}
      </div>
    );
  }
}

Separation.propTypes = {
  fetchSeparationData: PropTypes.func,
  location: ReactRouterPropTypes.location,
  children: PropTypes.node
};

function mapStateToProps (state) { // eslint-disable-line
  return {
  };
}

export default connect(mapStateToProps, {
  fetchSeparationData
})(Separation);
