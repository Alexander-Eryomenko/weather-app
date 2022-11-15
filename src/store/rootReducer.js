import { combineReducers } from 'redux';
import { weatherReducer } from './forecastWeather/weatherReducer';
import { searchReducer } from './search/searchReducer';
import { sportReducer } from './sportNews/sportReducer';
import { wishListReducer } from './wishList/wishListReducer';
import { appReducer } from './app/appReducer';
import { weatherHistoryReducer } from './wetherHistory/weatherHistoryReducer';
import { authReducer } from './auth/authReducer';

const rootReducer = combineReducers({
  app: appReducer,
  search: searchReducer,
  weather: weatherReducer,
  weatherHistory: weatherHistoryReducer,
  sport: sportReducer,
  wishList: wishListReducer,
  auth: authReducer
});

export default rootReducer;
