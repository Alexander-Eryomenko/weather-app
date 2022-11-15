export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';
export const LOG_OUT = 'LOG_OUT';


export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    error
  };
};

export const signUpRequest = () => {
  return {
    type: SIGN_UP_REQUEST
  };
};

export const signUpSuccess = (user) => {
  return {
    type: SIGN_UP_SUCCESS,
    user
  };
};

export const signUpFailed = (error) => {
  return {
    type: SIGN_UP_FAILED,
    error
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT
  };
};
