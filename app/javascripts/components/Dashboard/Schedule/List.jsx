import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchSchoolList,
  fetchSchedules
} from '../../../actions';
import C from '../../../constants';

import Table from '../Common/Table';

class ScheduleList extends Component {
  constructor (props) {
    super(props);

    // スケジュールをダウンロード
    props.fetchSchedules();
    // 地区の一覧をダウンロード
    props.fetchSchoolList();
  }

  render () {
    return (
      this.props.schoolList.length > 0 ? (
        <div>
          <div className="wrapper--margin">
            <Table
              data={this.props.schedules.filter((item) => {
                return item.type === 2;
              }).sort((a, b) => {
                if (a.district > b.district) return 1;
                if (a.district < b.district) return -1;
                if (a.date > b.date) return 1;
                if (a.date < b.date) return -1;
                return 0;
              }).map((item) => {
                // 地区IDを地区名に変換
                item.district = this.props.schoolList.find(school => school.id === item.district).name;
                // 曜日IDを曜日に変換
                item.date = C.DAY_OF_WEEK_JA[item.date];
                // ごみIDをごみの名前に変換
                item.garbage = C.GARBAGE_LIST[item.garbage - 1];

                // 日付タイプを削除
                delete item.type;

                return Object.values(item);
              })}
              header={[
                { title: '地区' },
                { title: '曜日' },
                { title: '分別' }
              ]}
            />
          </div>
          <div className="wrapper--margin">
            <Table
              data={this.props.schedules.filter((item) => {
                return item.type === 1;
              }).sort((a, b) => {
                if (a.district > b.district) return 1;
                if (a.district < b.district) return -1;
                if (a.date < b.date) return 1;
                if (a.date > b.date) return -1;
                return 0;
              }).map((item) => {
                delete item.type;

                // 地区IDを地区名に変換
                item.district = this.props.schoolList.find(school => school.id === item.district).name;
                // ごみIDをごみの名前に変換
                item.garbage = C.GARBAGE_LIST[item.garbage - 1];
                // 日付をフォーマット
                item.date = item.date.replace(/-/g, ' / ');

                return Object.values(item);
              })}
              header={[
                { title: '地区' },
                { title: '日付' },
                { title: '分別' }
              ]}
            />
          </div>
        </div>
      ) : null
    );
  }
}

ScheduleList.propTypes = {
  schoolList: PropTypes.array,
  schedules: PropTypes.array,
  fetchSchoolList: PropTypes.func,
  fetchGarbageList: PropTypes.func,
  fetchSchedules: PropTypes.func
};

function mapStateToProps (state) {
  return {
    schoolList: state.dashboard.schoolList,
    schedules: state.dashboard.schedules
  };
}

export default connect(mapStateToProps, {
  fetchSchoolList,
  fetchSchedules
})(ScheduleList);
