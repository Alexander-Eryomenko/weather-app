import {requestSearch} from '../../services/weatherServices';
import {getSearchRequest, getSearchSuccess, getSearchFailed} from './actions';

export const fetchSearchThunk = (city) => {
	return async (dispatch) => {
		dispatch(getSearchRequest());
		const response = await requestSearch(city);
		if(response.success) {
			dispatch(getSearchSuccess(response.data));
		} else {
			dispatch(getSearchFailed(response.error));
		}

	};
};
