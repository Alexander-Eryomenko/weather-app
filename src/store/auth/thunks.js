import {loginService, signUpService} from '../../services/authServices';
import {
	loginRequest,
	loginSuccess,
	loginFailed,
	signUpRequest,
	signUpSuccess,
	signUpFailed
} from './actions';

export const fetchLoginThunk = (email, password) => {
	return async (dispatch) => {
		dispatch(loginRequest());
		const response = await loginService(email, password);
		console.log('response in thunk', response);
		if(response.success) {
			dispatch(loginSuccess(response.user));
		} else {
			dispatch(loginFailed(response.error));
		}

	};
};

export const fetchSignUpThunk = (email, password) => {
	return async (dispatch) => {
		dispatch(signUpRequest());
		const response = await signUpService(email, password);
		if(response.success) {
			dispatch(signUpSuccess(response.user));
		} else {
			dispatch(signUpFailed(response.error));
		}

	};
};
