import {requestHistoryWeather} from '../../services/weatherServices';
import {getWeatherHistoryRequest, getWeatherHistorySuccess, getWeatherHistoryFailed} from './actions';

export const fetchWeatherHistoryThunk = (city, date) => {
	return async (dispatch) => {
		dispatch(getWeatherHistoryRequest());
		const response = await requestHistoryWeather(city, date);
		if(response.success) {
			dispatch(getWeatherHistorySuccess(response.data));
		} else {
			dispatch(getWeatherHistoryFailed(response.error));
		}

	};
};
