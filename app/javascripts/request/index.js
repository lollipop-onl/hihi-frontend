import request from 'superagent';

const isDev = process.env.NODE_ENV !== 'production';

class Request {
  url (path) {
    return `${isDev ? 'http://localhost:43000' : 'https://hihi.work'}${path}`
  }

  /**
   * ユーザートークンを確認
   * @param  {string} token ユーザートークン
   */
  checkUserToken (token) {
    return new Promise((resolve, reject) => {
      request
        .post(this.url('/api/check/token'))
        .send({
          token
        })
        .end((err, res) => {
          if (err) {
            return reject(err);
          }

          resolve(res.body);
        });
    });
  }

  /**
   * 校区のリストを取得
   */
  fetchSchoolList () {
    return new Promise((resolve, reject) => {
      if (this._schoolList) {
        return resolve(this._schoolList);
      }
      request
        .get(this.url('/api/school-list'))
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          this._schoolList = res.body;
          resolve(res.body);
        });
    });
  }

  /**
   * スケジュールファイルをアップロード
   * @param {array} file スケジュールファイル
   */
  uploadSchedule (file) {
    return new Promise((resolve, reject) => {
      request
        .post(this.url('/api/update/schedule'))
        .send({
          file
        })
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res.body.success);
        });
    });
  }

  /**
   * スケジュールファイルをダウンロード
   */
  fetchSchedules () {
    return new Promise((resolve, reject) => {
      request
        .get(this.url('/api/schedules'))
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res.body.data);
        });
    });
  }

  /**
   * 回答済みのログを取得
   */
  fetchAnsweredLog () {
    return new Promise((resolve, reject) => {
      request
        .get(this.url('/api/logs/answered'))
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res.body.data);
        });
    });
  }

  /**
   * 回答済みのログを取得
   */
  fetchUnansweredLog () {
    return new Promise((resolve, reject) => {
      request
        .get(this.url('/api/logs/unanswered'))
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res.body.data);
        });
    });
  }

  /**
   * 過去３０日分のタイムラインを取得
   */
  fetchMonthlyTimeline () {
    return new Promise((resolve, reject) => {
      request
        .get(this.url('/api/logs/monthly'))
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res.body.data);
        })
    });
  }

  /**
   * 分別方法のデータを全て取得
   */
  fetchSeparationData () {
    return new Promise((resolve, reject) => {
      request
        .get(this.url('/api/separation/data'))
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res.body.data);
        });
    });
  }

  /**
   * メッセージを送信する
   */
  searchSeparation (text, datetime) {
    return new Promise((resolve, reject) => {
      request
        .get(this.url('/api/separation/search'))
        .query({
          text,
          datetime
        })
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res.body);
        });
    });
  }

  /**
   * 分別方法を登録する
   */
  registTrush (name, furigana, separationId, noticeId, register) {
    return new Promise((resolve, reject) => {
      request
        .post(this.url('/api/separation/regist'))
        .send({
          name,
          furigana,
          separationId,
          noticeId,
          register
        })
        .end((err, res) => {
          if (err) {
            return reject(err);
          }
          resolve(res.body);
        });
    });
  }
}

export default new Request();
