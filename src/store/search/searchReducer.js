import {
    GET_SEARCH_REQUEST,
    GET_SEARCH_SUCCESS,
    GET_SEARCH_FAILED,
    SAVE_SELECTED_CITY,
    REMOVE_SEARCH_DATA
} from './actions';

const initialData = {
  searchData: [],
  selectedCity: '',
  isSearchDataLoading: false,
  error: null
};

export const searchReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_SEARCH_REQUEST:
      return {
        ...state,
        isSearchDataLoading: true,
        error: null
      };
  case GET_SEARCH_SUCCESS:
    return {
      ...state,
      isSearchDataLoading: false,
      searchData: action.item
    };
  case GET_SEARCH_FAILED:
    return {
      ...state,
      isSearchDataLoading: false,
      error: action.error
    };
  case SAVE_SELECTED_CITY:
    return {
      ...state,
      selectedCity: action.city
    };
  case REMOVE_SEARCH_DATA:
    return {
      ...state,
      searchData: [],
      selectedCity: ''
    };
  default:
    return state;
  }
};
