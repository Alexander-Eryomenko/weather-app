import {useCallback, useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { TextField } from '@mui/material';

import { saveSelectedDate } from '../../store/wetherHistory/actions';

import { selectSelectedCity } from '../../store/search/selectors';

import './DatePicker.scss';

const DatePicker = ({width}) => {
	const dispatch = useDispatch();
	const selectedCity = useSelector(selectSelectedCity);
	const [dataDatePicker, setDataDatePicker] = useState('');

	const onChangeDatePickerHandler = useCallback((event) => {
		setDataDatePicker(event.target.value);
		dispatch(saveSelectedDate(event.target.value));
	}, [dispatch]);

	const inputDate = {
		width: width || '100%',
		borderRadius: '15px'
	};

	return (
		<div className="date-picker">
			<TextField
				sx={inputDate}
				value={dataDatePicker}
				onChange={onChangeDatePickerHandler}
				type="date"
				className="date-picker__date"
				disabled={selectedCity.length === 0}
			/>
		</div>
	);
};

DatePicker.propTypes = {
	width: PropTypes.string
};

export default DatePicker;
