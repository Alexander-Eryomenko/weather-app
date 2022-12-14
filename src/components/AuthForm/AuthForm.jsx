import { useState, useRef } from 'react';

import { TextField, Button } from '@mui/material';

import PropTypes from 'prop-types';

import { useTheme } from '../../hooks/hooks';
import {
	TITLE_COLOR_LIGHT,
	TITLE_COLOR_DARK
} from '../../constants/constantsTheme';

import { selectAuthError } from '../../store/auth/selectors';

import './AuthForm.scss';
import {useSelector} from 'react-redux';

const AuthForm = ({title, textBtn, submit}) => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const inputError = useSelector(selectAuthError);


	const emailHandler = (event) => {
		setEmail(event.target.value);
		event.target.value = '';
	};
	const passwordHandler = (event) => {
		setPassword(event.target.value);
		event.target.value = '';
	};

	const submitHandler = (event) => {
		if(!email) {
			emailRef.current.focus();
		}
		if(!password) {
			passwordRef.current.focus();
		}
		event.preventDefault();
		if(email && password) {
			submit(email, password);
		}
	};

	const titleClasses = useTheme(TITLE_COLOR_LIGHT, TITLE_COLOR_DARK);

	return (
		<div className="auth">
			<div className={`${titleClasses} title-fonts`}>{title}</div>
			<form className="auth__form" onSubmit={submitHandler}>
				<TextField
					id='email'
					label='Email'
					inputRef={emailRef}
					type="email"
					value={email}
					onChange={emailHandler}
					error={false}
					required
					className="auth__input"
					helperText={inputError}
				/>
				<TextField
					id='password'
					label='Password'
					inputRef={passwordRef}
					type="password"
					value={password}
					onChange={passwordHandler}
					error={false}
					required
					className="auth__input"
				/>
				<Button
					type="submit"
					variant="contained"
				>
					{textBtn}
				</Button>
			</form>
		</div>
	);
};

AuthForm.propTypes = {
	title: PropTypes.object.isRequired,
	textBtn: PropTypes.object.isRequired,
	submit: PropTypes.func.isRequired
};

export default AuthForm;
