import { useCallback } from 'react';

import { Box, Grid } from '@mui/material';

import { FormattedMessage } from 'react-intl';

import PropTypes from 'prop-types';

import SportItem from '../SportItem/SportItem';

import { useTheme } from '../../hooks/hooks';

import {
	TITLE_COLOR_LIGHT,
	TITLE_COLOR_DARK,
	SUB_TITLE_COLOR_LIGHT,
	SUB_TITLE_COLOR_DARK
} from '../../constants/constantsTheme';

import './SportList.scss';

const SportList = ({ sportDataFootball, sportDataCricket, sportDataGolf }) => {
	const hasData = useCallback((data) => {
		if (data?.length !== 0) {
			return true;
		}
		return false;
	}, []);

	const titleClasses = useTheme(TITLE_COLOR_LIGHT, TITLE_COLOR_DARK, 'sport-list__title title-fonts');

	const subTitleClasses = useTheme(SUB_TITLE_COLOR_LIGHT,
		SUB_TITLE_COLOR_DARK, 'sport-list__title sub-title-fonts');

	return (
		<Box className="sport-list">
			<div className={titleClasses}><FormattedMessage id='sport_title'/></div>
				<Grid columnSpacing={2} container justifyContent="center">
					<Grid item>
						{hasData(sportDataFootball) && <div>
							<div className={subTitleClasses}><FormattedMessage id='football_sub_title'/></div>
							<Box className="sport-list__item-container">
								{sportDataFootball && sportDataFootball.map(item => {
									const id = item.match + item.start;
									item.id = id;
									return <SportItem sportData={item} key={item.id} />;
								})}
							</Box>

						</div>}
					</Grid>
					<Grid item>
						{hasData(sportDataCricket) && <div>
							<div className={subTitleClasses}><FormattedMessage id='cricket_sub_title'/></div>
							<Box className="sport-list__item-container">
								{sportDataCricket && sportDataCricket.map(item => {
									const id = item.match + item.start;
									item.id = id;
									return <SportItem sportData={item} key={item.id} />;
								})}
							</Box>
						</div>}
					</Grid>
					<Grid item>
						{hasData(sportDataGolf) && <div>
							<div className={subTitleClasses}><FormattedMessage id='golf_sub_title'/></div>
							<Box className="sport-list__item-container">
								{sportDataGolf && sportDataGolf.map(item => {
									const id = item.match + item.start;
									item.id = id;
									return <SportItem sportData={item} key={item.id} />;
								})}
							</Box>
						</div>}
					</Grid>
				</Grid>
		</Box>
	);
};

SportList.propTypes = {
	sportDataFootball: PropTypes.arrayOf(PropTypes.shape({
		country: PropTypes.string,
		id: PropTypes.string,
		match: PropTypes.string,
		region: PropTypes.string,
		stadium: PropTypes.string,
		start: PropTypes.string,
		tournament: PropTypes.string,
	})),
	sportDataCricket: PropTypes.arrayOf(PropTypes.shape({
		country: PropTypes.string,
		id: PropTypes.string,
		match: PropTypes.string,
		region: PropTypes.string,
		stadium: PropTypes.string,
		start: PropTypes.string,
		tournament: PropTypes.string,
	})),
	sportDataGolf: PropTypes.arrayOf(PropTypes.shape({
		country: PropTypes.string,
		id: PropTypes.string,
		match: PropTypes.string,
		region: PropTypes.string,
		stadium: PropTypes.string,
		start: PropTypes.string,
		tournament: PropTypes.string,
	}))
};

export default SportList;
