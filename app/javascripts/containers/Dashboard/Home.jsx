import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchMonthlyTimeline
} from '../../actions';

import PageHeader from '../../components/Dashboard/Common/PageHeader';
import Timeline from '../../components/Dashboard/Home/Timeline';

class Home extends Component {
  componentDidMount () {
    setTimeout(() => {
      this.props.fetchMonthlyTimeline();
    }, 1000);
  }

  render () {
    return(
      <div className="home">
        <PageHeader
          title="Dashboard"
          description="ゴミ分別ボットのダッシュボード"
        />
        <Timeline
          data={this.props.timeline}
        />
      </div>
    );
  }
}

Home.propTypes = {
  fetchMonthlyTimeline: PropTypes.func,
  timeline: PropTypes.array
};

function mapStateToProps (state) {
  return {
    timeline: state.dashboard.timeline
  };
}

export default connect(mapStateToProps, {
  fetchMonthlyTimeline
})(Home);
