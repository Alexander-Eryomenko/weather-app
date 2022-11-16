import {Link} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { FormattedMessage } from 'react-intl';

import { fetchLoginThunk } from '../../store/auth/thunks';


import AuthForm from '../AuthForm/AuthForm';

const LoginComponent = () => {
	const dispatch = useDispatch();
	const loginHandler = (email, password) => {
		dispatch(fetchLoginThunk(email, password));
	};
	return(
		<div>
			<AuthForm
				title={<FormattedMessage id='login_title'/>}
				textBtn={<FormattedMessage id='login_btn'/>}
				submit={loginHandler}/>
			<Link to='/sign-up'><FormattedMessage id='no_account_warning'/></Link>
		</div>
	);
};

export default LoginComponent;
