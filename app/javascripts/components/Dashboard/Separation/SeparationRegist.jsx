import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchUnansweredLog
} from '../../../actions';
import request from '../../../request';

import Select from './Regist/Select';
import Table from '../Common/Table';

class SeparationRegist extends Component {
  constructor (props) {
    super(props);

    props.fetchUnansweredLog();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    e.preventDefault();

    const name = e.target[0].value;
    const furigana = e.target[1].value;
    const separationId = e.target[2].value;
    const noticeId = e.target[3].value;

    if (!name || !furigana) {
      return;
    }

    request.registTrush(
      name,
      furigana,
      separationId,
      noticeId,
      this.props.profile.email
    )
      .then((response) => {
        if (response.isSuccess) {
          this.name.value = '';
          this.notice.value = '';
        }
        this.name.focus();
      })
      .catch(err => console.log(err));
  }

  render () {
    const data = this.props.separationData;

    return (
      <div className="regist separation--grid">
        <div className="grid--table">
          <Table
            data={
              this.props.logs
                .splice(0, 30)
                .sort((a, b) => {
                  if (a.count < b.count) return 1;
                  if (a.count > b.count) return -1;
                  if (a.timestamp > b.timestamp) return 1;
                  if (a.timestamp < b.timestamp) return -1;
                  return 0;
                })
                .map((item) => {
                  return [item.trushName, item.count];
                })
            }
            header={[
              { title: 'ゴミの名前' },
              { title: '問い合わせ件数' },
            ]}
          />
        </div>
        <div className="regist--wrapper grid--form">
          <h3 style={{marginTop: -18}}>ごみの分別方法を登録</h3>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              className="regist--input"
              placeholder="ごみの名前"
              ref={input => this.name = input}
            />
            <input
              type="text"
              className="regist--input"
              placeholder="ごみの読み"
              ref={input => this.notice = input}
            />
            <Select
              data={
                data.abstract ?
                  data.abstract.separations
                    .sort((a, b) => {
                      if (a.name < b.name) return 1;
                      if (a.name > b.name) return -1;
                      return 0;
                    })
                    .map(item => ({
                      value: item.id,
                      label: item.name
                  }))
                : []
              }
            />
            <Select
              data={
                data.abstract ?
                  [{
                    value: -1,
                    label: '（注釈なし）'
                  }].concat(
                  data.abstract.notices
                    .sort((a, b) => {
                      if (a.message > b.message) return 1;
                      if (a.message < b.message) return -1;
                      return 0;
                    })
                    .map(item => ({
                      value: item.id,
                      label: item.message
                    }))
                  )
                : []
              }
            />
            <div className="regist--footer">
              <button
                type="submit"
                className="regist--submit"
              >
                <span>
                  登　録
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SeparationRegist.propTypes = {
  separationData: PropTypes.object,
  logs: PropTypes.array,
  profile: PropTypes.object,
  fetchUnansweredLog: PropTypes.func
};

function mapStateToProps (state) {
  return {
    profile: state.auth.profile,
    separationData: state.dashboard.separationData,
    logs: state.dashboard.unansweredLogs.filter(item => item.type === 0)
  };
}

export default connect(mapStateToProps, {
  fetchUnansweredLog
})(SeparationRegist);
