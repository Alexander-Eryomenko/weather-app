import {requestSportsNews} from '../../services/weatherServices';
import {getSportListRequest, getSportListSuccess, getSportListFailed} from './actions';

export const fetchSportThunk = (city) => {
	return async (dispatch) => {
		dispatch(getSportListRequest());
		const response = await requestSportsNews(city);
		if(response.success) {
			dispatch(getSportListSuccess(response.data));
		} else {
			dispatch(getSportListFailed(response.error));
		}

	};
};
