import { useCallback } from 'react';

import {useDispatch, useSelector} from 'react-redux';

import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import PropTypes from 'prop-types';

import { selectIsAdded } from '../../store/wishList/selectors';

import { addItemToWishList, removeItemFromWishList } from '../../store/wishList/actions';

import { useTheme } from '../../hooks/hooks';

import {
	TEXT_COLOR_LIGHT,
	TEXT_COLOR_DARK,
	BORDER_COLOR_LIGHT,
	BORDER_COLOR_DARK
} from '../../constants/constantsTheme';

import './SportItem.scss';

const SportItem = ({sportData}) => {
	const dispatch = useDispatch();
	const isEventAddedToWishList = useSelector(selectIsAdded)[sportData.id];

	const addSportEventToWishList = useCallback(() => {
		dispatch(addItemToWishList(sportData));
	}, [dispatch, sportData]);

	const removeSportEventToWishList = useCallback(() => {
		dispatch(removeItemFromWishList(sportData.id));
	}, [dispatch, sportData]);

	const style = {
		addToFavoriteBtn: {
			color: isEventAddedToWishList ? '#FFD700' : '#2a3f7a'
		}
	};

	const fontsColor = useTheme(TEXT_COLOR_LIGHT, TEXT_COLOR_DARK, 'sport-item__text-content__info text-fonts');

	const sportItemClasses = useTheme(BORDER_COLOR_LIGHT, BORDER_COLOR_DARK, 'sport-item');

	return (
		<Box className={sportItemClasses}>
			<Box className="sport-item__text-content">
				<Typography
					className={fontsColor}
				>
					{sportData.country}
				</Typography>
				<Typography
					className={fontsColor}
				>
					{sportData.match}
				</Typography>
				<Typography
					className={fontsColor}
				>
					{sportData.stadium}
				</Typography>
				<Typography
					className={fontsColor}
				>
					{sportData.start}
				</Typography>
				<Typography
					className={fontsColor}
				>
					{sportData.tournament}
				</Typography>
			</Box>
			<Box>
				<FavoriteIcon
					onClick={!isEventAddedToWishList ?
						addSportEventToWishList : removeSportEventToWishList} sx={style.addToFavoriteBtn}
				/>
			</Box>
		</Box>

	);
};

SportItem.propTypes = {
	sportData: PropTypes.shape({
		country: PropTypes.string,
		id: PropTypes.string,
		match: PropTypes.string,
		region: PropTypes.string,
		stadium: PropTypes.string,
		start: PropTypes.string,
		tournament: PropTypes.string,
	})
};

export default SportItem;
