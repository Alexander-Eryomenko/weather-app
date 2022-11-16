import { useTheme } from '../../hooks/hooks';

import { FormattedMessage } from 'react-intl';

import { TITLE_COLOR_LIGHT, TITLE_COLOR_DARK } from '../../constants/constantsTheme';

import './NotLogin.scss';

const NotLogin = () => {
	const notLoginClasses = useTheme(TITLE_COLOR_LIGHT, TITLE_COLOR_DARK, 'not-login');
	return (
		<div
			className={`${notLoginClasses} title-fonts`}
		>
			<FormattedMessage id='not_login'/>
		</div>
	);
};

export default NotLogin;
