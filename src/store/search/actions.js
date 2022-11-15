export const GET_SEARCH_REQUEST = 'GET_SEARCH_REQUEST';
export const GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS';
export const GET_SEARCH_FAILED = 'GET_SEARCH_FAILED';
export const SAVE_SELECTED_CITY = 'SAVE_SELECTED_CITY';
export const REMOVE_SEARCH_DATA = 'REMOVE_SEARCH_DATA';

export const getSearchRequest = () => {
  return {
    type: GET_SEARCH_REQUEST
  };
};

export const getSearchSuccess = (item) => {
  return {
    type: GET_SEARCH_SUCCESS,
    item
  };
};

export const getSearchFailed = (error) => {
  return {
    type: GET_SEARCH_FAILED,
    error
  };
};

export const saveSelectedCity = (city) => {
  return {
    type: SAVE_SELECTED_CITY,
    city
  };
};

export const removeSearchData = () => {
  return {
    type: REMOVE_SEARCH_DATA
  };
};
