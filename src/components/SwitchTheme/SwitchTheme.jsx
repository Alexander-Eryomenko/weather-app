import {useCallback, useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Box, MenuItem, TextField } from '@mui/material';

import { FormattedMessage } from 'react-intl';

import { changeTheme } from '../../store/app/actions';

import { selectTheme } from '../../store/app/selectors';

import './SwitchTheme.scss';

const SwitchTheme = () => {
	const enteredTheme = useSelector(selectTheme);

	const [theme, setTheme] = useState(enteredTheme);

	const dispatch = useDispatch();

	const changeThemeHandler = useCallback((event) => {
		setTheme(event.target.value);
		dispatch(changeTheme(event.target.value));
	}, [dispatch]);

	return (
			<Box className="switch-theme">
				<TextField
					value={theme}
					select
					onChange={changeThemeHandler}
					fullWidth
					label={<FormattedMessage id="choose_theme"/>}
				>
					<MenuItem value='light'><FormattedMessage id="theme_light"/></MenuItem>
					<MenuItem value='dark'><FormattedMessage id="theme_dark"/></MenuItem>
				</TextField>
			</Box>
	);
};

export default SwitchTheme;
