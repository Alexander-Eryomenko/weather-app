import {useCallback} from 'react';

import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import PropTypes from 'prop-types';

import { useTheme } from '../../hooks/hooks';

import {
	TEXT_COLOR_LIGHT,
	TEXT_COLOR_DARK,
	BORDER_COLOR_LIGHT,
	BORDER_COLOR_DARK
} from '../../constants/constantsTheme';

import './WishListItem.scss';

const WishListItem = ({wishData, onOpenModal}) => {
	const removeItemHandler = useCallback(() => {
		onOpenModal(wishData.id);
	}, [onOpenModal, wishData.id]);

	const fontsColor = useTheme(TEXT_COLOR_LIGHT, TEXT_COLOR_DARK, 'wish-list-item__text text-fonts');

	const wishListItemClasses = useTheme(BORDER_COLOR_LIGHT, BORDER_COLOR_DARK, 'wish-list-item');

	return (
			<Box className={wishListItemClasses}>
				<div className={fontsColor}>{wishData.country}</div>
				<div className={fontsColor}>{wishData.match}</div>
				<div className={fontsColor}>{wishData.stadium}</div>
				<div className={fontsColor}>{wishData.start}</div>
				<div className={fontsColor}>{wishData.tournament}</div>
				<DeleteIcon className="wish-list-item__remove-icon" onClick={removeItemHandler}/>
			</Box>
	);
};

WishListItem.propTypes = {
	wishData: PropTypes.shape({
		country: PropTypes.string,
		id: PropTypes.string,
		match: PropTypes.string,
		region: PropTypes.string,
		stadium: PropTypes.string,
		start: PropTypes.string,
		tournament: PropTypes.string,
	}),
	onOpenModal: PropTypes.func.isRequired
};

export default WishListItem;
