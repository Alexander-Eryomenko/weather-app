import { useState, useEffect, useMemo, useContext } from 'react';

import {ThemeContext} from '../App';

export const useDebounce = value => {
	const [debouncedValue, setDebouncedValue] = useState('');

	useEffect(() => {
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, 700);
			return () => {
				clearTimeout(handler);
			};
		},
		[value]
	);

	return debouncedValue;
};

export const useTheme = (light, dark, otherClasses) => {
	const currentTheme = useContext(ThemeContext);

	const additionalClasses = useMemo(() => {
		return !!otherClasses ? otherClasses : '';
	}, [otherClasses]);

	const classes = useMemo(() => {
		return `${additionalClasses} ${currentTheme === 'light' ?
			light : dark}`;
	}, [currentTheme, additionalClasses, light, dark]);

	return classes;
};
