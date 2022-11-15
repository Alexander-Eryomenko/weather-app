import { Typography, Box } from '@mui/material';

import { FormattedMessage } from 'react-intl';

import PropTypes from 'prop-types';

import './Error.scss';

const Error = ({error, titleError}) => {

	return (
		<Box className="error">
			<Typography
				className='error__text title-fonts'
				variant="h2"
			>
				<FormattedMessage id='error'/> {titleError}
			</Typography>
			<Typography
				className='error__text sub-title-fonts'
				variant="h3"
			>
				Error: {error}
			</Typography>
		</Box>
	);
};

Error.propTypes = {
	error: PropTypes.string,
	titleError: PropTypes.string
};

export default Error;
