import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchUnansweredLog
} from '../../../actions';

import Table from '../Common/Table';

class LogUnanswered extends Component {
  componentDidMount () {
    this.props.fetchUnansweredLog();
  }

  render () {
    return (
      <div className="wrapper--margin">
        <Table
          data={
            this.props.logs
              .sort((a, b) => {
                if (a.count < b.count) return 1;
                if (a.count > b.count) return -1;
                return 0;
              })
              .map((item) => {
                item.type = item.type === 2 ? 'Too many' : 'Not found';

                return Object.values(item)
              })
          }
          header={[
            { title: '種別' },
            { title: 'ゴミの名前' },
            { title: '問い合わせ件数' },
            { title: '最終問い合わせ日時' }
          ]}
        />
      </div>
    );
  }
}

LogUnanswered.propTypes = {
  logs: PropTypes.array,
  fetchUnansweredLog: PropTypes.func
};

function mapStateToProps (state) {
  return {
    logs: state.dashboard.unansweredLogs
  };
}

export default connect(mapStateToProps, {
  fetchUnansweredLog
})(LogUnanswered);
