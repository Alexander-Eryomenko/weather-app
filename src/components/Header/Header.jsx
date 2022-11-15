import {useCallback, useMemo } from 'react';

import { useNavigate } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';

import { changeLanguage } from '../../store/app/actions';
import { logOut } from '../../store/auth/actions';

import { useTheme } from '../../hooks/hooks';

import {  Box } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';

import { FormattedMessage } from 'react-intl';

import { LOCALES } from '../../i18n/locales';

import { selectWishListData } from '../../store/wishList/selectors';
import { selectIsAuth, selectAuthEmail } from '../../store/auth/selectors';

import SwitchTheme from '../SwitchTheme/SwitchTheme';

import { BG_HEADER_LIGHT, BG_HEADER_DARK } from '../../constants/constantsTheme';

import AuthBtn from '../AuthBtn/AuthBtn';

import '/node_modules/flag-icons/css/flag-icons.min.css';

import './header.scss';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const dataWishList = useSelector(selectWishListData);
	const authEmail = useSelector(selectAuthEmail);
	const isAuth = useSelector(selectIsAuth);

	const isAddedDataToWishList = useMemo(() =>{
		return dataWishList.length > 0;
	}, [dataWishList.length]);

	const onClickGoToMainPageHandler = useCallback(() => {
		navigate('/');
	}, [navigate]);

	const onClickGoToWishListHandler = useCallback(() => {
			navigate('/wish-list');
	}, [navigate]);

	const onClickChangeLanguageToEnglish = () => {
			dispatch(changeLanguage(LOCALES.ENGLISH));
	};
	const onClickChangeLanguageToUkraine = () => {
		dispatch(changeLanguage(LOCALES.UKRAINE));
	};

	const onLogIn = () => {
		navigate('/login');
	};

	const onLogOut = () => {
		dispatch(logOut());
		navigate('/login');
	};

	const style = {
		wishListIcon: {
			color: isAddedDataToWishList ? '#FFD700' : '#0C1F51',
			transition: 'color 0.3s linear'
		}
	};
	const headerClasses = useTheme(BG_HEADER_LIGHT, BG_HEADER_DARK, 'header');

  return (
    <Box component="header" className={headerClasses}>
		<div
			className='header__title'
			onClick={onClickGoToMainPageHandler}
		>
			<FormattedMessage id='header_logo'/>
		</div>
		<Box className='header__content'>
			<div className="header__languages">
				<span
					onClick={onClickChangeLanguageToEnglish}
					title="English"
					className="fi fi-gb">
				</span>
				<span
					onClick={onClickChangeLanguageToUkraine}
					title="Ukrainian"
					className="fi fi-ua"
				>
				</span>
			</div>
			<SwitchTheme />
			{isAuth && <Box
				className="header__wish-list"
				onClick={onClickGoToWishListHandler}>
				{!!dataWishList.length
					&& <div className='header__wish-list__count'>{dataWishList.length}</div>}
				<FavoriteIcon sx={style.wishListIcon} fontSize="large"/>
				<div
					className="header__wish-list__text text-fonts"
				>
					<FormattedMessage id='wish_list'/>
				</div>
			</Box>}
			<div className="header__auth">
				{isAuth && <div className="header__auth__email">{authEmail}</div>}
				<AuthBtn
					textBtn={isAuth ? 'Log Out' : 'Log In'}
					authHandler={isAuth ? onLogOut : onLogIn }
				/>
			</div>
		</Box>
    </Box>
  );
};

export default Header;
