import PropTypes from 'prop-types';

import { useTheme } from '../../hooks/hooks';

import { getRoundedNumber } from '../../util/util';

import { FormattedMessage } from 'react-intl';

import {
	TEXT_COLOR_LIGHT,
	TEXT_COLOR_DARK,
	BORDER_COLOR_LIGHT,
	BORDER_COLOR_DARK
} from '../../constants/constantsTheme';

import './WeatherByHour.scss';

const WeatherByHour =({date, img, temp, wind, rain}) => {
	const [ , time] = date.split(' ');
	const borderClasses = useTheme(BORDER_COLOR_LIGHT, BORDER_COLOR_DARK, 'weather-hour');
	const textClasses = useTheme(TEXT_COLOR_LIGHT, TEXT_COLOR_DARK, 'weather-hour__box');
	return (
		<div className={borderClasses}>
			<div className={textClasses}>
				<div>{time}</div>
				<img src={img} alt="img"/>
				<div><FormattedMessage id='temp'/> {getRoundedNumber(temp)}</div>
				<div><FormattedMessage id='speed_wind'/> {getRoundedNumber(wind)}</div>
				<div><FormattedMessage id='chance_of_rain'/> {getRoundedNumber(rain)}</div>
			</div>
		</div>
	);
};

WeatherByHour.propTypes = {
	date: PropTypes.string,
	img: PropTypes.string,
	temp: PropTypes.number,
	wind: PropTypes.number,
	rain: PropTypes.number
};

export default WeatherByHour;
