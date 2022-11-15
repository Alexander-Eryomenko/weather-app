import {requestForecastWeather} from '../../services/weatherServices';
import {getWeatherListRequest, getWeatherListSuccess, getWeatherListFailed} from './actions';

export const fetchWeatherThunk = (city, days) => {
	return async (dispatch) => {
		dispatch(getWeatherListRequest());
		const response = await requestForecastWeather(city, days);
		if(response.success) {
			dispatch(getWeatherListSuccess(response.data));
		} else {
			dispatch(getWeatherListFailed(response.error));
		}

	};
};
