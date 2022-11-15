export const GET_WEATHER_HISTORY_LIST_REQUEST = 'GET_WEATHER_HISTORY_LIST_REQUEST';
export const GET_WEATHER_HISTORY_LIST_SUCCESS = 'GET_WEATHER_HISTORY_LIST_SUCCESS';
export const GET_WEATHER_HISTORY_LIST_FAILED = 'GET_WEATHER_HISTORY_LIST_FAILED';
export const SAVE_SELECTED_DATE = 'SAVE_SELECTED_DATE';
export const REMOVE_WEATHER_HISTORY_DATA = 'REMOVE_WEATHER_HISTORY_DATA';

export const getWeatherHistoryRequest = () => {
  return {
    type: GET_WEATHER_HISTORY_LIST_REQUEST
  };
};

export const getWeatherHistorySuccess = (item) => {
  return {
    type: GET_WEATHER_HISTORY_LIST_SUCCESS,
    item
  };
};

export const getWeatherHistoryFailed = (error) => {
  return {
    type: GET_WEATHER_HISTORY_LIST_FAILED,
    error
  };
};

export const saveSelectedDate = (date) => {
  return {
    type: SAVE_SELECTED_DATE,
    date
  };
};

export const removeWeatherHistoryData = () => {
  return {
    type: REMOVE_WEATHER_HISTORY_DATA,
  };
};
