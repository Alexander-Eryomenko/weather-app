import { Button } from '@mui/material';
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

export default AuthBtn;
