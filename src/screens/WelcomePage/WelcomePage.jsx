import {useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

import { Box } from '@mui/material';

import { FormattedMessage } from 'react-intl';

import { fetchWeatherThunk } from '../../store/forecastWeather/thunks';

import { selectForecastWeatherData } from '../../store/forecastWeather/selectors';

import { useTheme } from '../../hooks/hooks';

import WrapperMain from '../../components/WrapperMain/WrapperMain';

import {
	TEXT_COLOR_LIGHT,
	TEXT_COLOR_DARK
} from '../../constants/constantsTheme';

import { getRoundedNumber } from '../../util/util';

import './WelcomePage.scss';

const WelcomePage = () => {
	const { current, location } = useSelector(selectForecastWeatherData);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWeatherThunk());
	}, [dispatch]);

	const onClickWeatherForecastHandler = useCallback(() => {
			navigate('/weather-forecast');
	}, [navigate]);

	const onClickWeatherForecastHistoryHandler = useCallback(() => {
		navigate('/history-weather');
	}, [navigate]);

	const textColorTheme = useTheme(TEXT_COLOR_LIGHT, TEXT_COLOR_DARK);
	return (
		<WrapperMain classes="welcome-page">
			<Box className="welcome-page__current-weather-box">
				<div
					className={`welcome-page__current-weather-box__current-temp ${textColorTheme}`}
					>
					{getRoundedNumber(current?.temp_c)}
				</div>
				<Box className="welcome-page__current-weather-box__current-temp2">
					<div
						color="black"
						className={`welcome-page__current-weather-box__current-temp2 ${textColorTheme}`}
					>
						{location?.name}
					</div>
					<Box>
						<img src={current?.condition.icon} alt=""/>
					</Box>
				</Box>
			</Box>
			<Box className="welcome-page__links">
				<Box className='welcome-page__links_weather' onClick={onClickWeatherForecastHandler}>
					<div
						className="welcome-page__links_title"
					>
						<FormattedMessage id='weather_button'/>
					</div>
				</Box>
				<Box
					className='welcome-page__links_history'
					onClick={onClickWeatherForecastHistoryHandler}>
					<div
						className="welcome-page__links_title"
					>
						<FormattedMessage id='weather_history_btn'/>
					</div>
				</Box>
			</Box>
		</WrapperMain>
	);
};

export default WelcomePage;
