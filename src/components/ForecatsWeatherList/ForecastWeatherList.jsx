import {useEffect, useMemo} from 'react';

import { Box } from '@mui/material';

import { FormattedMessage } from 'react-intl';

import {useDispatch, useSelector} from 'react-redux';

import {fetchWeatherThunk} from '../../store/forecastWeather/thunks';
import {
	selectForecastWeatherData,
	selectForecastWeatherError,
	selectForecastWeatherIsDataLoading,
} from '../../store/forecastWeather/selectors';

import { selectSelectedCity, selectSearchData } from '../../store/search/selectors';

import { useTheme } from '../../hooks/hooks';

import {
	TITLE_COLOR_LIGHT,
	TITLE_COLOR_DARK,
	SUB_TITLE_COLOR_LIGHT,
	SUB_TITLE_COLOR_DARK
} from '../../constants/constantsTheme';

import ForecastWeatherItem from '../ForecatsWeatherItem/ForecatsWeatherItem';
import SearchComponent from '../SearchComponent/SearchComponent';
import ProgressComponent from '../ProgressComponent/ProgressComponent';
import Error from '../Error/Error';

import './ForecastWeatherList.scss';

const ForecastWeatherList = () => {
	const {forecast, location} = useSelector(selectForecastWeatherData);
	const errorForecast = useSelector(selectForecastWeatherError);
	const isDataLoadingForecast = useSelector(selectForecastWeatherIsDataLoading);
	const enteredCity = useSelector(selectSelectedCity);
	const searchCityData = useSelector(selectSearchData);
	const dispatch = useDispatch();

	const currentCity = useMemo(() => {
		if (enteredCity) {
			return enteredCity;
		}
		return 'Kharkiv';
	}, [enteredCity]);

	useEffect(() => {
		dispatch(fetchWeatherThunk(currentCity, '3'));
	}, [currentCity, dispatch]);

	const titleClass = useTheme(TITLE_COLOR_LIGHT,
		TITLE_COLOR_DARK,
		'forecast-weather__title title-fonts');
	const subTitleClass = useTheme(SUB_TITLE_COLOR_LIGHT,
		SUB_TITLE_COLOR_DARK,
		'forecast-weather__sub-title sub-title-fonts'
	);

	if (errorForecast) {
		return (
			<Error error={errorForecast} titleError="weather forecast API"/>
		);
	}

	if (isDataLoadingForecast) {
		return (
			<ProgressComponent />
		);
	}
	return (
		<Box className="forecast-weather">
			<div
				className={titleClass}
			>
				<FormattedMessage id='forecast_title'/>
			</div>
			{errorForecast && <Error error={errorForecast}/>}
			{location?.name && <div className={subTitleClass}>{location.name}</div>}
			{location?.country && <div className={subTitleClass}>{location.country}</div>}
			<Box className="forecast-weather__content">
				{!searchCityData.length &&
					<div
						className={subTitleClass}
					>
						<FormattedMessage id='enter_city'/>
					</div>}
				<SearchComponent />

				{forecast?.forecastday.map(item => {
					return <ForecastWeatherItem
						key={item.date_epoch}
						weatherDay={item}
					/>;
				})}
			</Box>
		</Box>
	);
};

export default ForecastWeatherList;
