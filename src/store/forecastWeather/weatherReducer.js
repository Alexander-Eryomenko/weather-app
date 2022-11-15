import {
  GET_WEATHER_LIST_REQUEST,
  GET_WEATHER_LIST_SUCCESS,
  GET_WEATHER_LIST_FAILED,
  REMOVE_DATA_WEATHER
} from './actions';

const initialData = {
  dataWeather: {},
  isDataLoading: false,
  error: null
};

export const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_WEATHER_LIST_REQUEST:
      return {
        ...state,
        isDataLoading: true,
        error: null
      };
  case GET_WEATHER_LIST_SUCCESS:
    return {
      ...state,
      isDataLoading: false,
      dataWeather: {...action.item}
    };
  case GET_WEATHER_LIST_FAILED:
    return {
      ...state,
      isDataLoading: false,
      error: action.error
    };
  case REMOVE_DATA_WEATHER:
    return {
      ...state,
      dataWeather: {}
    };
  default:
    return state;
  }
};
