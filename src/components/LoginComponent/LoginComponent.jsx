import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchLoginThunk } from '../../store/auth/thunks';


import AuthForm from '../AuthForm/AuthForm';

const LoginComponent = () => {
	const dispatch = useDispatch();
	const loginHandler = (email, password) => {
		dispatch(fetchLoginThunk(email, password));
	};
	return(
		<div>
			<AuthForm title="Login" textBtn="Login" submit={loginHandler}/>
			<Link to='/sign-up'>If you have no account, please create it now</Link>
		</div>
	);
};

export default LoginComponent;
