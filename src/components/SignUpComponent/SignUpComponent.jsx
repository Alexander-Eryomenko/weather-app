import { fetchSignUpThunk } from '../../store/auth/thunks';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import AuthForm from '../AuthForm/AuthForm';

const SignInComponent = () => {
	const dispatch = useDispatch();
	const signInHandler = (email, password) => {
		dispatch(fetchSignUpThunk(email, password));
	};
	return(
		<div>
			<AuthForm
				title={<FormattedMessage id='signUp_title'/>}
				textBtn={<FormattedMessage id='signUp_btn'/>}
				submit={signInHandler}/>
			<Link to='/login'><FormattedMessage id='have_account_warning'/></Link>
		</div>
	);
};

export default SignInComponent;
