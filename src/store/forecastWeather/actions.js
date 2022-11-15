export const GET_WEATHER_LIST_REQUEST = 'GET_WEATHER_LIST_REQUEST';
export const GET_WEATHER_LIST_SUCCESS = 'GET_WEATHER_LIST_SUCCESS';
export const GET_WEATHER_LIST_FAILED = 'GET_WEATHER_LIST_FAILED';
export const REMOVE_DATA_WEATHER = 'REMOVE_DATA_WEATHER';

export const getWeatherListRequest = () => {
  return {
    type: GET_WEATHER_LIST_REQUEST
  };
};

export const getWeatherListSuccess = (item) => {
  return {
    type: GET_WEATHER_LIST_SUCCESS,
    item
  };
};

export const getWeatherListFailed = (error) => {
  return {
    type: GET_WEATHER_LIST_FAILED,
    error
  };
};

export const removeDataWeather = () => {
  return {
    type: REMOVE_DATA_WEATHER
  };
};
