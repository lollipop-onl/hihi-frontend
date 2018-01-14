import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import Request from '../../request';

import PageHeader from './Common/PageHeader';

class Regist extends Component {
  constructor (props) {
    super(props);

    this.state = {
      keyword: null,
      count: -1,
      datetime: null,
      isSending: false,
      input: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount () {
    this.input.focus();
  }

  onChange (e) {
    this.setState({
      input: e.target.value
    });
  }

  onSubmit (e) {
    e.preventDefault();

    const text = e.target[0].value;
    const days = _.random(0, 31);
    const time = _.random(0, 60 * 60 * 16) + 60 * 60 * 6; // 6:00 〜 22:00
    const datetime = moment('2018-01-14 00:00:00')
                      .subtract(days, 'days')
                      .add(time, 'seconds')
                      .format('YYYY-MM-DD HH:mm:ss');

    this.setState({
      isSending: true
    });

    Request.searchSeparation(text, datetime)
      .then((result) => {
        // 入力エリアをクリア
        this.setState({
          keyword: text,
          count: result.count,
          isSending: false,
          input: '',
          datetime
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  render () {
    const {
      input,
      keyword,
      count,
      datetime,
      isSending
    } = this.state;

    return(
      <div className="regist">
        <PageHeader
          title="Regist"
          description="ごみの分別種別を問い合わせます"
        />
        <div className="regist--wrapper">
          <h3 style={{marginTop: -12}}>分別方法問い合わせ</h3>
          <form onSubmit={this.onSubmit}>
            <input type="text" ref={input => this.input = input} className="regist--input" value={input} placeholder="検索キーワード" onChange={this.onChange} />
            <div className="regist--footer">
              <div className="regist--info">
                {count >= 0 ? (
                  <div className="regist--info-item">
                    &quot;{keyword}&quot; {count}件ヒット
                  </div>
                ) : null}
                {datetime ? (
                  <div className="regist--info-item">
                    at {moment(datetime).format('YYYY/MM/DD HH:mm:ss ddd')}
                  </div>
                ) : null}
              </div>
              <button type="submit" className="regist--submit" disabled={input.length === 0 || input.match(/^[ 　]+$/)}>
                {isSending ? (
                  <span>送信中...</span>
                ) : (
                  <span>
                    <span className="regist--submit-icon ion-paper-airplane" /> 送信
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Regist;
