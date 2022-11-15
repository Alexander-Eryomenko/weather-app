import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import { Box } from '@mui/material';

import {fetchSportThunk} from '../../store/sportNews/thunks';

import {selectSportData, selectSportIsDataLoading, selectSportError} from '../../store/sportNews/selectors';
import {selectSearchData} from '../../store/search/selectors';

import SportList from '../../components/SportList/SportList';
import ProgressComponent from '../../components/ProgressComponent/ProgressComponent';
import Error from '../../components/Error/Error';

const SportNews = () => {
	const dispatch = useDispatch();
	const sportData = useSelector(selectSportData);
	const isDataLoading = useSelector(selectSportIsDataLoading);
	const error = useSelector(selectSportError);

	useEffect(() => {
		dispatch(fetchSportThunk(selectSearchData));
	}, [dispatch]);

	if (error) {
		return <Error error={error} titleError="sport API"/>;
	}
	if (isDataLoading) {
		return <ProgressComponent />;
	}

	return (
		<Box>
			<SportList
				sportDataFootball={sportData.football}
				sportDataCricket={sportData.cricket}
				sportDataGolf={sportData.golf}
			/>
		</Box>
	);
};

export default SportNews;
