import {
  GET_WEATHER_HISTORY_LIST_REQUEST,
  GET_WEATHER_HISTORY_LIST_SUCCESS,
  GET_WEATHER_HISTORY_LIST_FAILED,
  SAVE_SELECTED_DATE,
  REMOVE_WEATHER_HISTORY_DATA
} from './actions';

const initialData = {
  dataWeatherHistory: {},
  dateWeatherHistory: '',
  isDataLoading: false,
  error: null
};

export const weatherHistoryReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_WEATHER_HISTORY_LIST_REQUEST:
      return {
        ...state,
        isDataLoading: true,
        error: null
      };
  case GET_WEATHER_HISTORY_LIST_SUCCESS:
    return {
      ...state,
      isDataLoading: false,
      dataWeatherHistory: {...action.item}
    };
  case GET_WEATHER_HISTORY_LIST_FAILED:
    return {
      ...state,
      isDataLoading: false,
      error: action.error
    };
  case SAVE_SELECTED_DATE:
    return {
      ...state,
      dateWeatherHistory: action.date
    };
  case REMOVE_WEATHER_HISTORY_DATA:
    return {
      ...state,
      dataWeatherHistory: {},
      dateWeatherHistory: ''
    };
  default:
    return state;
  }
};
