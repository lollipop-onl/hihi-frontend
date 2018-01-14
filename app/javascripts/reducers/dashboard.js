import C from '../constants';

const initialState = {
  isLoading: false,
  isLoadingScheduleUpload: false,
  isValidToken: null,
  currentDistrict: null,
  schoolList: [],
  schedules: [],
  answeredLogs: [],
  unansweredLogs: [],
  timeline: [],
  separationData: {}
};

const line = (state = initialState, action) => {
  switch (action.type) {
    case C.BEGIN_LOADER:
      return Object.assign({}, state, {
        isLoading: true
      });
    case C.FINISH_LOADER:
      return Object.assign({}, state, {
        isLoading: false
      });
    case C.CHECK_USER_TOKEN:
      return Object.assign({}, state, {
        currentDistrict: action.district,
        isValidToken: action.isValidToken
      });
    case C.FETCH_SCHOOL_LIST:
      return Object.assign({}, state, {
        schoolList: action.schoolList
      });
    case C.BEGIN_UPLOAD_SCHEDULE:
      return Object.assign({}, state, {
        isLoadingScheduleUpload: true
      });
    case C.FINISH_UPLOAD_SCHEDULE:
      return Object.assign({}, state, {
        isLoadingScheduleUpload: false
      });
    case C.FETCH_SCHEDULES:
      return Object.assign({}, state, {
        schedules: action.schedules
      });
    case C.FETCH_ANSWERED_LOG:
      return Object.assign({}, state, {
        answeredLogs: action.logs
      });
    case C.FETCH_UNANSWERED_LOG:
      return Object.assign({}, state, {
        unansweredLogs: action.logs
      });
    case C.FETCH_MONTHLY_TIMELINE:
      return Object.assign({}, state, {
        timeline: action.timeline
      });
    case C.FETCH_SEPARATION_DATA:
      return Object.assign({}, state, {
        separationData: action.separationData
      });
    default:
      return state;
  }
};

export default line;
