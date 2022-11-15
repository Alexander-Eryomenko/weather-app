import { Box } from '@mui/material';

import { FormattedMessage } from 'react-intl';

import PropTypes from 'prop-types';

import { useTheme } from '../../hooks/hooks';

import DateComponent from '../DateComponent/DateComponent';

import {
	TEXT_COLOR_LIGHT,
	TEXT_COLOR_DARK,
	BORDER_COLOR_LIGHT,
	BORDER_COLOR_DARK
} from '../../constants/constantsTheme';

import { getRoundedNumber } from '../../util/util';

import './ForecatsWeatherItem.scss';

const ForecastWeatherItem = ({weatherDay}) => {
	const { day } = weatherDay;

	const forecastWeatherItemClasses = useTheme(BORDER_COLOR_LIGHT, BORDER_COLOR_DARK, 'forecast-weather-item');

	const fontsClasses = useTheme(TEXT_COLOR_LIGHT,
		TEXT_COLOR_DARK, 'forecast-weather-item__data__text text-fonts');

	return (
		<Box className={forecastWeatherItemClasses}>
			<DateComponent date={weatherDay.date}/>
			<Box className="forecast-weather-item__data">
				<img src={day.condition.icon} alt="weather-icon"/>
				<div>
					<div
						className={fontsClasses}
					>
						<FormattedMessage id='max_temp'/> {getRoundedNumber(day.maxtemp_c)}
					</div>
					<div
						className={fontsClasses}
					>
						<FormattedMessage id='min_temp'/> {getRoundedNumber(day.mintemp_c)}
					</div>
					<div
						className={fontsClasses}
					>
						<FormattedMessage id='max_wind_speed'/> {getRoundedNumber(day.maxwind_kph)}
					</div>
					<div
						className={fontsClasses}
					>
						<FormattedMessage id='chance_of_rain'/> {getRoundedNumber(day.daily_chance_of_rain)}
					</div>
				</div>
			</Box>
		</Box>
	);
};

ForecastWeatherItem.propTypes = {
	weatherDay: PropTypes.shape({
		day: PropTypes.shape({
			condition: PropTypes.shape({
				icon: PropTypes.string
			}),
			maxtemp_c: PropTypes.number,
			mintemp_c: PropTypes.number,
			maxwind_kph: PropTypes.number,
			daily_chance_of_rain: PropTypes.number

		})
	})
};

export default ForecastWeatherItem;
