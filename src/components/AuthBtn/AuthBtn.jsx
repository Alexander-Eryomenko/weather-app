import { Button } from '@mui/material';

import PropTypes from 'prop-types';

import './AuthBtn.scss';

const AuthBtn = ({textBtn, authHandler}) => {
	const authBtnHandler = () => {
		authHandler();
	};
	return (
		<div className="auth-btn-wrapper">
			<Button
				onClick={authBtnHandler}
				variant="contained"
			>
				{textBtn}
			</Button>
		</div>
	);
};

AuthBtn.propTypes = {
	textBtn: PropTypes.object.isRequired,
	authHandler: PropTypes.func.isRequired
};

export default AuthBtn;
