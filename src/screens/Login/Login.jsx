import { useSelector } from 'react-redux';

import { selectAuthIsLoading } from '../../store/auth/selectors';

import LoginComponent from '../../components/LoginComponent/LoginComponent';
import ProgressComponent from '../../components/ProgressComponent/ProgressComponent';

import './Login.scss';

const Login = () => {
	const isLoading = useSelector(selectAuthIsLoading);
	return (
		<div className="login">
			{isLoading && <ProgressComponent />}
			<LoginComponent />
		</div>
	);
};

export default Login;
