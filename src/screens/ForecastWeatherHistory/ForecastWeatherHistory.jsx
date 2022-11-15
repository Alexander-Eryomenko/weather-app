import {useEffect} from 'react';

import { useDispatch } from 'react-redux';
import { removeSearchData } from '../../store/search/actions';
import { removeWeatherHistoryData } from '../../store/wetherHistory/actions';

import ForecastWeatherHistoryList from '../../components/ForecastWeatherHistoryList/ForecastWeatherHistoryList';
import WrapperMain from '../../components/WrapperMain/WrapperMain';

import './ForecastWeatherHistory.scss';

const ForecastWeatherHistory = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(removeSearchData());
			dispatch(removeWeatherHistoryData());
		};
	}, [dispatch]);

	return (
		<WrapperMain>
			<ForecastWeatherHistoryList/>
		</WrapperMain>
	);
};

export default ForecastWeatherHistory;
