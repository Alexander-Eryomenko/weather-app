export const GET_SPORT_LIST_REQUEST = 'GET_SPORT_LIST_REQUEST';
export const GET_SPORT_LIST_SUCCESS = 'GET_SPORT_LIST_SUCCESS';
export const GET_SPORT_LIST_FAILED = 'GET_SPORT_LIST_FAILED';
export const REMOVE_SPORT_DATA = 'REMOVE_SPORT_DATA';

export const getSportListRequest = () => {
  return {
    type: GET_SPORT_LIST_REQUEST
  };
};

export const getSportListSuccess = (item) => {
  return {
    type: GET_SPORT_LIST_SUCCESS,
    item
  };
};

export const getSportListFailed = (error) => {
  return {
    type: GET_SPORT_LIST_FAILED,
    error
  };
};

export const removeSportData = () => {
  return {
    type: REMOVE_SPORT_DATA
  };
};
