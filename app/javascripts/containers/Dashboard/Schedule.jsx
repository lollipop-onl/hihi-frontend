import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';

import PageHeader from '../../components/Dashboard/Common/PageHeader';
import PageHeaderTab from '../../components/Dashboard/Common/PageHeaderTab';
import PageHeaderTabItem from '../../components/Dashboard/Common/PageHeaderTabItem';

class Schedule extends Component {
  render () {
    const {
      location,
      children
    } = this.props;

    return (
      <div className="schedule">
        <PageHeader
          title="Schedule"
          description="ごみ回収のスケジュールを登録・確認します"
        >
          <PageHeaderTab>
            <PageHeaderTabItem
              title="スケジュールを確認"
              to="/dashboard/schedule/list"
              active={location.pathname === '/dashboard/schedule/list'}
            />
            <PageHeaderTabItem
              title="スケジュールを登録"
              to="/dashboard/schedule/regist"
              active={location.pathname === '/dashboard/schedule/regist'}
            />
          </PageHeaderTab>
        </PageHeader>
        {children}
      </div>
    );
  }
}

Schedule.propTypes = {
  location: ReactRouterPropTypes.location,
  children: PropTypes.node
};

export default Schedule;
