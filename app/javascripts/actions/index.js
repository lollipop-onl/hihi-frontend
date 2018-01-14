import request from '../request';
import C from '../constants';

/**
 * ログイン状態を更新する
 * @param {boolean} status ログインしているか
 * @return {Object} Action Object
 */
export function updateAuthStatus(status) {
  return {
    type: C.UPDATE_AUTH_STATUS,
    authenticated: status
  }
}

/**
 * ユーザープロフィールを更新する
 * @param {object} profile ユーザーのプロフィール
 * @return {object} Action Object
 */
export function updateUserProfile (profile) {
  return {
    type: C.UPDATE_USER_PROFILE,
    profile
  }
}

/**
 * 校区リストを取得する
 * @return {obejct} Action Object
 */
export function fetchSchoolList () {
  return (dispatch) => {
    request
      .fetchSchoolList()
      .then((schoolList) => {
        dispatch({
          type: C.FETCH_SCHOOL_LIST,
          schoolList
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
}

/**
 * スケジュールのアップロードを開始する
 */
function beginUploadSchedule () {
  return {
    type: C.BEGIN_UPLOAD_SCHEDULE
  };
}

/**
 * スケジュールのアップロードを終了する
 */
function finishUploadSchedule () {
  return {
    type: C.FINISH_UPLOAD_SCHEDULE
  };
}

/**
 * スケジュールをアップロードする
 * @param {object} file スケジュールファイル
 */
export function uploadScheduleFile (file) {
  return (dispatch) => {
    dispatch(beginUploadSchedule());
    request
      .uploadSchedule(file)
      .then(() => {
        dispatch(finishUploadSchedule());
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
}

/**
 * スケジュールをダウンロードする
 */
export function fetchSchedules () {
  return (dispatch) => {
    request
      .fetchSchedules()
      .then((schedules) => {
        dispatch({
          type: C.FETCH_SCHEDULES,
          schedules
        });
      })
      .catch((err) => {
        throw new Error(err);
      })
  }
}

/**
 * 回答済みのログを取得
 */
export function fetchAnsweredLog () {
  return (dispatch) => {
    request
      .fetchAnsweredLog()
      .then((logs) => {
        dispatch({
          type: C.FETCH_ANSWERED_LOG,
          logs
        });
      });
  };
}

/**
 * 未回答のログを取得
 */
export function fetchUnansweredLog () {
  return (dispatch) => {
    request
      .fetchUnansweredLog()
      .then((logs) => {
        dispatch({
          type: C.FETCH_UNANSWERED_LOG,
          logs
        });
      });
  };
}

/**
 * 直近１ヶ月のタイムラインを取得
 */
export function fetchMonthlyTimeline () {
  return (dispatch) => {
    request
      .fetchMonthlyTimeline()
      .then((timeline) => {
        dispatch({
          type: C.FETCH_MONTHLY_TIMELINE,
          timeline
        });
      });
  }
}

/**
 * 分別方法に関するデータを取得する
 */
export function fetchSeparationData () {
  return (dispatch) => {
    request
      .fetchSeparationData()
      .then((separationData) => {
        dispatch({
          type: C.FETCH_SEPARATION_DATA,
          separationData
        })
      });
  }
}
