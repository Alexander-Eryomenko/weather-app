import {useCallback, useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import { FormattedMessage } from 'react-intl';

import { fetchWeatherHistoryThunk } from '../../store/wetherHistory/thunks';

import { selectSelectedCity } from '../../store/search/selectors';
import {
	selectForecastWeatherHistoryDate,
	selectForecastWeatherHistoryData,
	selectForecastWeatherHistoryIsDataLoading,
	selectForecastWeatherHistoryError
} from '../../store/wetherHistory/selectors';

import { useTheme } from '../../hooks/hooks';

import { getRoundedNumber } from '../../util/util';

import {
	TITLE_COLOR_LIGHT,
	TITLE_COLOR_DARK,
	TEXT_COLOR_LIGHT,
	TEXT_COLOR_DARK,
	SUB_TITLE_COLOR_LIGHT,
	SUB_TITLE_COLOR_DARK

} from '../../constants/constantsTheme';

import DatePicker from '../DatePicker/DatePicker';
import SearchComponent from '../SearchComponent/SearchComponent';
import WeatherByHour from '../WeatherByHour/WeatherByHour';
import ProgressComponent from '../ProgressComponent/ProgressComponent';
import Error from '../Error/Error';

import './ForecastWeatherHistoryList.scss';

const ForecastWeatherHistoryList = () => {
	const dispath = useDispatch();
	const weatherHistoryData = useSelector(selectForecastWeatherHistoryData);
	const selectedCity = useSelector(selectSelectedCity);
	const selectedHistoryDate = useSelector(selectForecastWeatherHistoryDate);
	const isDataHistoryLoading = useSelector(selectForecastWeatherHistoryIsDataLoading);
	const weatherHistoryError = useSelector(selectForecastWeatherHistoryError);
	const [showInput, setShowInput] = useState(false);

	const titleClasses = useTheme(TITLE_COLOR_LIGHT, TITLE_COLOR_DARK, 'weather-history__title');
	const subTitleClasses = useTheme(SUB_TITLE_COLOR_LIGHT, SUB_TITLE_COLOR_DARK, 'weather-history__sub-title');
	const textClasses = useTheme(TEXT_COLOR_LIGHT, TEXT_COLOR_DARK, 'weather-history__day');

	const day = weatherHistoryData?.forecast?.forecastday[0].day;
	const hours = weatherHistoryData?.forecast?.forecastday[0].hour;

	useEffect(() => {
		if (selectedCity && selectedHistoryDate) {
			setShowInput(prev => !prev);
			dispath(fetchWeatherHistoryThunk(selectedCity, selectedHistoryDate));
		}
	}, [selectedHistoryDate, dispath, selectedCity]);

	const showInputsHandler = useCallback(() => {
		setShowInput(prev => !prev);
	}, []);

	if (weatherHistoryError) {
		return <Error error={selectForecastWeatherHistoryError} titleError="weather history API" />;
	}

	if (isDataHistoryLoading) {
		return <ProgressComponent />;
	}

	return (
		<div className="weather-history">
			<div
				className={`${titleClasses} title-fonts`}
			>
				<FormattedMessage id='weather_history_title'/>
			</div>
			<div
				className={`${subTitleClasses} sub-title-fonts`}
				onClick={showInputsHandler}
				title="Click to show inputs"
			>
				<FormattedMessage id='weather_history_show_input'/>
			</div>
			{showInput && <div className="weather-history__input-box">
				<SearchComponent width={'350px'} />
				<DatePicker width={'150px'} />
			</div>}
			{selectedCity &&
				<div
					className={`${subTitleClasses} sub-title-fonts`}
				>
					<FormattedMessage id='weather_history_location_title'/> {selectedCity} {selectedHistoryDate}
				</div>}
			<div className="weather-history__day-box">
				{hours && hours.map(hour => {
					const id = (`${hour?.temp_c}${hour?.time}${hour?.wind_kph}`).split(' ').join('');
					return (
						<WeatherByHour
							img={hour?.condition?.icon}
							temp={hour?.temp_c}
							wind={hour?.wind_kph}
							rain={hour?.chance_of_rain}
							date={hour?.time}
							key={id}
						/>
					);
				})}
			</div>
			{day && <div className={textClasses}>
				<img src={day?.condition?.icon} alt="icon"/>
				<div><FormattedMessage id='max_temp'/> {getRoundedNumber(day?.maxtemp_c)}</div>
				<div><FormattedMessage id='min_temp'/> {getRoundedNumber(day?.mintemp_c)}</div>
				<div><FormattedMessage id='avg_humidity'/> {getRoundedNumber(day?.avghumidity)}</div>
				<div><FormattedMessage id='avg_temp'/> {getRoundedNumber(day?.avgtemp_c)}</div>
				<div><FormattedMessage id='max_wind_speed'/> {getRoundedNumber(day?.maxwind_kph)}</div>
			</div>}
		</div>
	);
};

export default ForecastWeatherHistoryList;
