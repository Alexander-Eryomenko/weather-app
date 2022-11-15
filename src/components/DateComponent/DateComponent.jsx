import { Box } from '@mui/material';

import PropTypes from 'prop-types';

import { useTheme } from '../../hooks/hooks';
import {
	BORDER_COLOR_LIGHT,
	BORDER_COLOR_DARK,
	SUB_TITLE_COLOR_LIGHT,
	SUB_TITLE_COLOR_DARK}
	from '../../constants/constantsTheme';
import './DateComponent.scss';

const DateComponent = ({date}) => {
	const currentDate = new Date(date);
	const day = currentDate.getDate();
	const month = currentDate.getMonth() + 1;
	const year = currentDate.getFullYear();


	const forecastWeatherDateClasses = useTheme(BORDER_COLOR_LIGHT,
		BORDER_COLOR_DARK, 'forecast-weather-date');

	const forecastWeatherDateNumbersClasses = useTheme(SUB_TITLE_COLOR_LIGHT,
		SUB_TITLE_COLOR_DARK, 'forecast-weather-date__numbers sub-title-fonts');

	return (
		<Box className={forecastWeatherDateClasses}>
			<div className={forecastWeatherDateNumbersClasses}>
				{day}
			</div>
			<div className={forecastWeatherDateNumbersClasses}>
				{month}
			</div>
			<div className={forecastWeatherDateNumbersClasses}>
				{year}
			</div>
		</Box>
	);
};

DateComponent.propTypes = {
	date: PropTypes.string
};

export default DateComponent;
