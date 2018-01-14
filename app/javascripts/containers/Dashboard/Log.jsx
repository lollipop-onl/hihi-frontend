import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import PageHeader from '../../components/Dashboard/Common/PageHeader';
import PageHeaderTab from '../../components/Dashboard/Common/PageHeaderTab';
import PageHeaderTabItem from '../../components/Dashboard/Common/PageHeaderTabItem';

class Log extends Component {
  render () {
    const {
      location,
      children
    } = this.props;

    return (
      <div className="log">
        <PageHeader
          title="Log"
          description="ごみの分別方法の問い合わせ履歴を確認できます"
        >
          <PageHeaderTab>
            <PageHeaderTabItem
              title="回答済み"
              to="/dashboard/log/answered"
              active={location.pathname === '/dashboard/log/answered'}
            />
            <PageHeaderTabItem
              title="未回答"
              to="/dashboard/log/unanswered"
              active={location.pathname === '/dashboard/log/unanswered'}
            />
          </PageHeaderTab>
        </PageHeader>
        {children}
      </div>
    );
  }
}

Log.propTypes = {
  location: ReactRouterPropTypes.location,
  children: PropTypes.node
};

export default Log;
