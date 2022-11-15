import { fetchSignUpThunk } from '../../store/auth/thunks';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import AuthForm from '../AuthForm/AuthForm';

const SignInComponent = () => {
	const dispatch = useDispatch();
	const signInHandler = (email, password) => {
		dispatch(fetchSignUpThunk(email, password));
	};
	return(
		<div>
			<AuthForm title="Sign Up" textBtn="Sign Up" submit={signInHandler}/>
			<Link to='/login'>If you have sign in, go to Login</Link>
		</div>
	);
};

export default SignInComponent;
