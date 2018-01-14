import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchAnsweredLog
} from '../../../actions';

import Table from '../Common/Table';

class LogAnswered extends Component {
  componentDidMount () {
    this.props.fetchAnsweredLog();
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
                delete item.type;
                return Object.values(item);
              })
          }
          header={[
            { title: 'ゴミの名前' },
            { title: '問い合わせ件数' },
            { title: '最終問い合わせ日時' }
          ]}
        />
      </div>
    );
  }
}

LogAnswered.propTypes = {
  logs: PropTypes.array,
  fetchAnsweredLog: PropTypes.func
};

function mapStateToProps (state) {
  return {
    logs: state.dashboard.answeredLogs
  };
}

export default connect(mapStateToProps, {
  fetchAnsweredLog
})(LogAnswered);
