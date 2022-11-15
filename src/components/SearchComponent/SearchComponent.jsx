import {useCallback, useEffect, useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Autocomplete , TextField } from '@mui/material';

import { FormattedMessage } from 'react-intl';

import PropTypes from 'prop-types';

import {fetchSearchThunk} from '../../store/search/thunks';

import { selectSearchData, selectIsSearchDataLoading } from '../../store/search/selectors';

import { saveSelectedCity } from '../../store/search/actions';

import { useDebounce } from '../../hooks/hooks';

import { getCityNames } from '../../util/util';

import ProgressComponent from '../ProgressComponent/ProgressComponent';

import './SearchComponent.scss';

const SearchComponent = ({width}) => {
	const dispatch = useDispatch();
	const [enteredCity, setEnteredCity] = useState(null);
	const searchData = useSelector(selectSearchData);
	const searchValueDebaunce = useDebounce(enteredCity);

	useEffect(() => {
			if (enteredCity) {
				dispatch(fetchSearchThunk(searchValueDebaunce || 'Kharkiv'));
			}
	}, [searchValueDebaunce, dispatch, enteredCity]);

	const onInputSearchHandler = useCallback((event) => {
		setEnteredCity(event.target.value);
	}, []);

	const onChangeSearchHandler = useCallback((event) => {
		setEnteredCity(event.target.textContent);
		dispatch(saveSelectedCity(event.target.textContent));
	}, [dispatch]);

	const input = {
		width: width || '100%',
		fontFamily: 'Bodoni',
		borderRadius: '15px'
	};

	return (
		<div className="search">
			<Autocomplete
				sx={input}
				className="search__input"
				onInput={onInputSearchHandler}
				onChange={onChangeSearchHandler}
				disablePortal
				id="search-input"
				options={getCityNames(searchData)}
				renderInput={
				(params) => <TextField {...params}
									   label={<FormattedMessage id='search_placeholder'/>} />}
				autoHighlight
				autoSelect
				loading
				loadingText={selectIsSearchDataLoading && <ProgressComponent />}
			/>
		</div>
	);
};

SearchComponent.propTypes = {
	width: PropTypes.string
};

export default SearchComponent;
