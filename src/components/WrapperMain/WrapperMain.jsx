import { useMemo } from 'react';

import PropTypes from 'prop-types';

import './WrapperMain.scss';

const WrapperMain = ({classes, children}) => {

	const wrapperClasses = useMemo(() => {
		return `wrapper-main ${classes}`;
	}, [classes]);

	return (
		<div className={wrapperClasses}>
			{children}
		</div>
	);
};

WrapperMain.propTypes = {
	classes: PropTypes.string,
	children: PropTypes.array
};

export default WrapperMain;
