import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { Routes, Route, useNavigate } from 'react-router-dom';

import { IntlProvider } from 'react-intl';

import { selectTheme, selectLanguage } from './store/app/selectors';
import { selectIsAuth } from './store/auth/selectors';

import Login from './screens/Login/Login';
import Register from './screens/SignUp/Register';
import ForecastWeatherHistory from './screens/ForecastWeatherHistory/ForecastWeatherHistory';
import Header from './components/Header/Header';
import WishList from './components/WishList/WishList';
import ForecastWeather from './screens/ForecastWeather/ForecastWeather';

import WelcomePage from './screens/WelcomePage/WelcomePage';

import { BG_MAIN_LIGHT, BG_MAIN_DARK } from './constants/constantsTheme';

import './App.scss';

import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';

export const ThemeContext = React.createContext('theme');

function App() {
    const themeValue = useSelector(selectTheme);
    const currentLanguage = useSelector(selectLanguage);
    const isAuth = useSelector(selectIsAuth);
    const [locale, setLocale] = useState(currentLanguage);
    const navigate = useNavigate();
    const body = document.body;

    useEffect(() => {
       if (themeValue === 'light') {
           body.className = '';
           body.classList.add(BG_MAIN_LIGHT);
       }
        if (themeValue === 'dark') {
            body.className = '';
            body.classList.add(BG_MAIN_DARK);
        }
    }, [themeValue, body]);

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);

    useEffect(() => {
        setLocale(currentLanguage);
    }, [currentLanguage]);

  return (
    <ThemeContext.Provider value={themeValue}>
        <IntlProvider
            messages={messages[locale]}
            locale={locale}
            defaultLocale={LOCALES.ENGLISH}
        >
            <Header />
                <main className='main'>
                    <Routes>
                        {isAuth && <Route exact path="/" element={<WelcomePage />}/>}
                        {!isAuth && <Route exact path="/" element={<div>please log in or sign in</div>}/>}
                        <Route path="/login" element={<Login />} />
                        <Route path="/sign-up" element={<Register />} />
                        <Route path="/weather-forecast" element={<ForecastWeather />} />
                        <Route path="/history-weather" element={<ForecastWeatherHistory />}/>
                        <Route path="/wish-list" element={<WishList />}/>
                        <Route path="*" element={<div>Page not found</div>}/>
                    </Routes>
                </main>
        </IntlProvider>
    </ThemeContext.Provider>
  );
}

export default App;
