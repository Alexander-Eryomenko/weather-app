import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    LOG_OUT
} from './actions';

const initialData = {
  email: null,
  token: null,
  id: null,
  isAuth: false,
  error: null,
  isLoading: false
};

export const authReducer = (state = initialData, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
  case LOGIN_SUCCESS:
    return {
      ...state,
      email: action.user.email,
      token: action.user.accessToken,
      id: action.user.uid,
      isAuth: !!action.user.uid,
      isLoading: false
    };
  case LOGIN_FAILED:
    return {
      ...state,
      isLoading: false,
      error: action.error,
      isAuth: false
    };
  case SIGN_UP_REQUEST:
    return {
      ...state,
      isLoading: true,
      error: null
    };
  case SIGN_UP_SUCCESS:
    return {
      ...state,
      email: action.user.email,
      token: action.user.accessToken,
      id: action.user.uid,
      isAuth: !!action.user.uid,
      isLoading: false
    };
  case SIGN_UP_FAILED:
    return {
      ...state,
      isLoading: false,
      error: action.error,
      isAuth: false
    };
  case LOG_OUT:
    return {
      ...state,
      email: null,
      token: null,
      id: null,
      isAuth: false,
      error: null,
      isLoading: false
    };
  default:
    return state;
  }
};
