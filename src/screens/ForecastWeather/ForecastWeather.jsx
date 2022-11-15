import {useEffect} from 'react';

import { useDispatch } from 'react-redux';

import { Container, Grid } from '@mui/material';

import { removeSearchData } from '../../store/search/actions';
import { removeDataWeather } from '../../store/forecastWeather/actions';
import { removeSportData } from '../../store/sportNews/actions';

import ForecastWeatherList from '../../components/ForecatsWeatherList/ForecastWeatherList';

import SportNews from '../SportNews/SportNews';
import './ForecastWeather.scss';


const ForecastWeather = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(removeSearchData());
			dispatch(removeDataWeather());
			dispatch(removeSportData());
		};
	}, [dispatch]);

	return (
		<Container className="weather-forecast-container" maxWidth='1200px'>
			<Grid container>
				<Grid item sm={12} md={7} lg={6} xl={6}>
					<ForecastWeatherList />
				</Grid>
				<Grid item sm={12} md={5} lg={6} xl={6}>
					<SportNews />
				</Grid>
			</Grid>
		</Container>
	);
};

export default ForecastWeather;
