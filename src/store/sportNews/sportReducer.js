import {
  GET_SPORT_LIST_REQUEST,
  GET_SPORT_LIST_SUCCESS,
  GET_SPORT_LIST_FAILED,
  REMOVE_SPORT_DATA
} from './actions';

const initialData = {
  dataSports: {},
  isDataLoading: false,
  error: null
};

export const sportReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_SPORT_LIST_REQUEST:
      return {
        ...state,
        isDataLoading: true,
        error: null
      };
  case GET_SPORT_LIST_SUCCESS:
    return {
      ...state,
      isDataLoading: false,
      dataSports: {...action.item}
    };
  case GET_SPORT_LIST_FAILED:
    return {
      ...state,
      isDataLoading: false,
      error: action.error
    };
  case REMOVE_SPORT_DATA:
    return {
      ...state,
      dataSports: {}
    };
  default:
    return state;
  }
};
